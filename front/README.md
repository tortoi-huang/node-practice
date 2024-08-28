# node-practice
学习 nodejs hello world 项目
参考: https://developer.mozilla.org/zh-CN/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain

## 构建运行

### 安装格式化代码工具
prettier 通过配置文件 .prettierrc.json 格式化代码
```shell
# 检查是否安装了
prettier -v
npm install prettier -g
```

### 安装静态代码检查工具
配置 eslint 通过 .eslintrc.json 文件配置需要检查的项目
```shell
# 安装eslint工具
npm install --save-dev eslint-plugin-react
```

### 安装打包编译工具
这里打包编辑工具指的是将 JSX 解析为 ECMAscript, 并执行压缩等功能的工具 常用的有 webpack, 这里使用 Parcel
```shell
# 执行此命令会在当前目录下生成一个 node_modules 目录, 里面保存以来包内容
npm install --save-dev parcel-bundler
```


### 编译运行
指定编译内容的首页, 运行后会生成 dist 目录,该目录就是编译后可发布生产的文件,可以访问 http://localhost:1234
```shell
# 本地测试运行, 会在默认端口1234 上运行
npx parcel src/index.html
# 只运行， 不编译, dev命令定义在 package.json/scripts 中
# npm run dev

# 在nginx docker 中运行: 挂载当前目录下的 dist 到 nginx 的 html 目录
sudo docker run -d --rm -p 80:80 -v ./dist:/usr/share/nginx/html nginx:1.27.0
```

### 其他

下载 package.json 中定义的依赖, 这个步骤在前面 npm install --save-dev eslint-plugin-react 已经处理
```shell
# 下载当前目录下 package.json 定义的包, 如果命令后面可以添加一个包名， 则会分析该包的依赖并添加到 package.json中 然后再执行 npm install 
npm install 
```
构建项目，输出 dist 目录的内容, 这里的 build 任务是定义在  package.json>scripts 中的任务，类似的还有test
```shell
npm run build
# 上述任务实际运行了下面命令
# parcel build src/index.html
```

## 代码分析
项目根目录下包括以下几个重要的目录及文件: 
+ dist: 编辑后的文件
+ node_modules: 依赖的插件缓存
+ package.json: npm 配置文件
+ src 源文件, 这里的文件除了标准的js, html, image, css外还有各种插件支持的文件, 如nodejs 的ES标准模块文件 mjs, 非标准模块文件 cjs, 以及其他 less 文件等
+ tests: 测试代码

根据 package.json 的配置， 访问系统首先进入 index.html, 该文件加载 index.js 文件, index.js 在html 的 main 元素内渲染一个 <APP> 组件, <APP> 则定义在 ./components/App.js 并被 index.js 导入.   

其中 ./components/App.js 有个default 函数返回了一个html格式内容， 这个不是 js 语法的, 不可直接执行, 在编译期间由 JSX 插件扫描并编译为标准的JavaScript.   
