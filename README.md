# angular-seed
A angular seed project. 

[TOC]

## Fast start

##### Install

```
git clone https://github.com/qianhaikeji/angular-seed.git
npm install
bower install
```

##### start project

```
gulp serve
```

## Introduction

项目基于gulp进行构建。

### Directory

```
.
├── README.md
├── bower.json       # 项目插件依赖
├── bower_components # 项目依赖包
├── e2e              
├── gulp             # gulp脚本
├── gulpfile.js      # gulp之行文件
├── karma.conf.js   
├── node_modules     # 环境以来包
├── package.json     # 环境依赖
├── protractor.conf.js
└── src              # 源码
```

src文件夹

```
src
├── app
│   ├── components              # 项目公共功能模块
│   │   ├── authencate          # 认证鉴权服务
│   │   ├── dataservice         # restful接口
│   │   ├── filters             # 自定义过滤器
│   │   └── logger              # 日志服务
│   ├── images                  # 图片
│   ├── index.config.js         # 项目配置
│   ├── index.constants.dev.js  # 开发环境变量定义
│   ├── index.constants.prod.js # 生产环境变量定义
│   ├── index.module.js         # 外部组件依赖
│   ├── index.route.js          # 路由定义，基于ui-router
│   ├── index.run.js            # 初始化
│   ├── layout                  # 布局controller
│   │   ├── footer.controller.js
│   │   ├── footer.html
│   │   ├── shell.controller.js
│   │   ├── shell.html
│   │   ├── topnav.controller.js
│   │   └── topnav.html
│   ├── main                    # 入口controller
│   │   ├── main.controller.js
│   │   └── main.html
│   ├── styles                 # css
│   │   ├── index.css         
│   │   ├── public.css         # 公共css
│   │   └── widget.css         # 自定义插件css
│   ├── template
│   │   └── example.tmpl       # 公共html模版
│   └── widgets
│       └── example.js         # 自定义插件
├── favicon.ico
└── index.html
```

## Deployment

```
gulp build
```

包括js，css压缩等，生成的项目在dist目录下。

## Develop rule

### Controller

在src文件夹下，为每个顶级路由的controller建立一个文件夹。该文件夹下只允许编写controller的html和js文件。

```
main
├── main.controller.js   # 所有的controller定义在一个js文件中
└── main.html            # controller html模板
```

命名规则：

js文件：[controller_name].controller.js

html文件：[controller_name]*.html



## Reference

[ui-router](https://github.com/angular-ui/ui-router.git)



[其它项目资源](https://github.com/qianhaikeji/develop-guide.git)