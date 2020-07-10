# 湘潭应急厅OA--门户数据爬虫

## 配置说明

```
/xtyjoa-spider/ecosystem.config.js
// PM2配置文件
const path = require('path');

module.exports = {
    apps: [
        {
            name: 'XTYJOA-spider',
            script: './src/index.js',
            instances: 1,
            autorestart: true,
            max_restarts: 3,
            watch: false,
            max_memory_restart: '1G',
            log_date_format: 'YYYY-MM-DD HH:mm:ss',
            error_file: path.join(__dirname, '/logs/err.log'),
            out_file: path.join(__dirname, '/logs/output.log'),
            env: {
                DEBUG: 'app:error:*,app:info:*,app:debug:*',
                NODE_ENV: 'development',
            },
            env_production: {
                DEBUG: 'app:error:*,app:info:*',
                NODE_ENV: 'production',
            }
        }
    ]
};

```

```
/xtyjoa-spider/src/configs.js

const md5 = require('md5');
const get = require('lodash/get');

const env = get(process.env, 'NODE_ENV', 'development');

const development = {
    ...
    ...
};

const production = {
    // CMS 存储的表
    cmsTable: 'td_cms_article',
    // 数据库链接方式
    database: {
        client: 'mysql',
        connection: {
            host: '172.16.89.163',
            database: 'xtyjoa',
            user: 'xtyjoa',
            password: 'xtyjoa',
        },
        debug: true,
    },
    // 调用接口时，默认登录的用户和密码
    apiRoot: 'http://172.16.89.132/xtyjoa-ide',
    sessionUser: 'admin',
    sessionPassword: md5('123456'),
};

module.exports = env === 'production' ? production : development;

```

## 任务和脚本执行

**开启定时爬取任务**

```
yarn job // 或者 npm run job
```

**立刻执行一次爬取**

```
yarn execute // 或者 npm run execute
```

**代码检测**

```
yern eslint // 或者 npm run eslint
```

**执行单元测试**
```
yarn test // 或者 npm run test
```

## 开发环境初始化

**初始化PM2环境配置**

```
// windows
.\node_modules\.bin\pm2 ecosystem
// Linux
./node_modules/.bin/pm2 ecosystem
```

**安装PM2日志插件**

```
// windows
.\node_modules\.bin\pm2 install pm2-logrotate
```

**初始化单元测试配置**

```
// windows
.\node_modules\.bin\jest --init
```

**初始化代码检测环境**

```
// windows
.\node_modules\.bin\eslint --init
```