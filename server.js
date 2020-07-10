const fs = require('fs-extra');
const path = require('path');
const md = require('markdown-it')();
const express = require('express');
const app = express();
const port = 8080;

const CONTEXT = '/markdown';

app.use(CONTEXT, express.static(path.join(__dirname, 'public')));

app.get(`${CONTEXT}/*`, (req, res) => {
    const address = req.path.replace(CONTEXT, '');
    const fileName = address === '/' ? 'index' : address;
    const uri = path.join(__dirname, '/docs/', fileName + '.md');
    const content = fs.readFileSync(uri, 'utf8');
    const result = md.render(content);
    const html = `
        <!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="shortcut icon" href="${CONTEXT}/favicon.ico">
            <link rel="stylesheet" href="${CONTEXT}/css/github-markdown.css">
            <link rel="stylesheet" href="${CONTEXT}/css/main.css">
            <style>
                .markdown-body {
                    box-sizing: border-box;
                    min-width: 200px;
                    max-width: 980px;
                    margin: 0 auto;
                    padding: 45px;
                }
                @media (max-width: 767px) {
                    .markdown-body {
                        padding: 15px;
                    }
                }
            </style>
        </head>
        <body class="markdown-body">
            ${result}
        </bod>
        </html>
    `;
    res.send(html);
});

app.listen(port, '127.0.0.1', () => {
    console.log('启动自动编译，端口:' + port);
});