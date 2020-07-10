# 身份证读卡器插件开发


## 插件初始流程

**初始化插件信息**

```
// D:\workspace\creator\cordova-extend\cordova-plugin-londen
cd plugins
plugman create --name cordova-plugin-londen --plugin_id cordova-plugin-londen --plugin_version 0.0.1
```

**进入插件目录**
```
D:\workspace\creator\cordova-extend\cordova-plugin-londen\plugins
λ cd cordova-plugin-londen
```

**添加插件平台支持**
```
D:\workspace\creator\cordova-extend\cordova-plugin-londen\plugins\cordova-plugin-londen
λ plugman platform add --platform_name android
```

**修改配置plugin.xml**
```
// plugins\cordova-plugin-londen\plugin.xml
<?xml version='1.0' encoding='utf-8'?>
<plugin id="cordova-plugin-londen" version="0.0.1" xmlns="http://apache.org/cordova/ns/plugins/1.0" xmlns:android="http://schemas.android.com/apk/res/android">
    <name>cordova-plugin-londen</name>
    <js-module name="cordova-plugin-londen" src="www/cordova-plugin-londen.js">
        <clobbers target="cordova.plugins.londen" />
    </js-module>
    <platform name="android">
        <config-file parent="/*" target="res/xml/config.xml">
            <feature name="LondenValidator">
                <param name="android-package" value="com.chinacreator.LondenValidator" />
            </feature>
        </config-file>
        <config-file parent="/*" target="AndroidManifest.xml"></config-file>
        <source-file src="src/android/LondenValidator.java" target-dir="src/com/chinacreator" />
    </platform>
</plugin>

```

**修改JAVA**

重命名为src/android/LondenValidator.java
```
package com.chinacreator;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class LondenValidator extends CordovaPlugin {
    ......
}
```

**添加package.json**
```
D:\workspace\creator\cordova-extend\cordova-plugin-londen\plugins\cordova-plugin-londen
λ plugman createpackagejson ./
```

**安装插件**

回到cordova项目，安装插件
```
// D:\workspace\creator\cordova-extend\cordova-plugin-londen
plugman install -d --platform android --project platforms/android --plugin plugins\cordova-plugin-londen
```

**删除插件**
```
plugman uninstall --platform android --project platforms/android --plugin plugins\cordova-plugin-londen
```

## 发布和测试

**生成秘钥**
```
keytool -genkey -v -keystore app.keystore -alias app -keyalg RSA -validity 20000
```

**配置build.json**

D:\workspace\creator\cordova-extend\cordova-plugin-londen\build.json
```
{
    "android": {
        "release": {
            "keystore": "app.keystore",
            "alias": "app",
            "storePassword": "12121212",
            "password": "21212121"
        }
    }
}
```

**发布**
```
cordova build --release
```