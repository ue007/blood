# 目录结构
``` javascript
.
├── dist/                          // 默认的 build 输出目录
├── mock/                          // mock 文件所在目录，基于 express
├── config/
    ├── config.js                  // umi 配置，同 .umirc.js，二选一
└── src/                           // 源码目录，可选
    ├── layouts/index.js           // 全局布局
    ├── pages/                     // 页面目录，里面的文件即路由
        ├── .umi/                  // dev 临时目录，需添加到 .gitignore
        ├── .umi-production/       // build 临时目录，会自动删除
        ├── document.ejs           // HTML 模板
        ├── 404.js                 // 404 页面
        ├── page1.js               // 页面 1，任意命名，导出 react 组件
        ├── page1.test.js          // 用例文件，umi test 会匹配所有 .test.js 和 .e2e.js 结尾的文件
        └── page2.js               // 页面 2，任意命名
    ├── global.css                 // 约定的全局样式文件，自动引入，也可以用 global.less
    ├── global.js                  // 可以在这里加入 polyfill
    ├── app.js                     // 运行时配置文件
├── .umirc.js                      // umi 配置，同 config/config.js，二选一
├── .env                           // 环境变量
└── package.json
```


```javascript
├── config/
    ├── config.js                  // umi 配置，同 .umirc.js，二选一
├── dist/                          // 默认的 build 输出目录
├── mock/                          // mock 文件所在目录，基于 express
├── public/                        // 全局相对路径文件
└── src/                           // 源码目录，可选
    ├── assets/                    // 静态文件
    ├── components/                // 全局共用组件
    ├── layouts/index.js           // 全局入口文件
    ├── models/                    // 全局models文件，存放全局共用数据store
    ├── pages/                     // 页面目录，业务组件
        ├── .umi/                  // dev 临时目录，需添加到 .gitignore
        ├── .umi-production/       // build 临时目录，会自动删除
        ├── index/                 // 首页模块
        ├── manager/               // 管理端模块
            ├── components/        // 管理端-局部公共组件
            ├── models/            // 管理端-局部models，存放manager的store
            ├── services/          // 管理端-局部services，存放manager的接口
            ├── index.js           // 业务组件index
            ├── page.js            // 业务组件page
            ├── _layout.js         // 局部入口文件
        ├── 404.js                 // 404 页面
    ├── services/                  // 全局services文件，存放全局公共接口
    ├── utils/                     // 全局工具类
    ├── global.css                 // 约定的全局样式文件，自动引入，也可以用 global.less
    ├── global.js                  // 约定的全局Js文件，自动引入，可以在这里加入 polyfill
    ├── app.js                     // 运行时配置文件
├── .umirc.js                      // umi 配置，同 config/config.js，二选一
├── .env                           // 环境变量
└── package.json
```