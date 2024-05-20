# node-practice
学习nodejs hello world 项目
参考: https://developer.mozilla.org/zh-CN/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain

## 构建运行
### 准备
安装nvm, 并通过nvm安装nodejs和npm(直接安装nodejs和npm可能出现诸多难以处理的错误)
```shell
# 安装 nvm, 参考:  https://github.com/nvm-sh/nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# 查看 nvm 使用帮助
nvm --help
# 安装最新版本的 node 和 npm
nvm install node 

# 安装指定版本 node 及对应的 npm
#  nvm install 8.0.0
```

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
这里打包编辑工具指的是将 JSX 解析为 es script, 并执行压缩等功能的工具 常用的有 webpack, 这里使用 Parcel
```shell
# 执行此命令会在当前目录下生成一个 node_modules 目录, 里面保存以来包内容
npm install --save-dev parcel-bundler
```

### 编译运行
指定编译内容的首页, 运行后会生成 dist 目录,该目录就是编译后可发布生产的文件,可以访问 http://localhost:1234
```shell
npx parcel src/index.html
```

### 在 nginx 中运行项目
```shell
# 使用 9080 端口暴露服务, 挂在当前目录下的 dist 到 nginx 的 html 目录
docker run -d --rm -p 9080:80 -v ./dist:/usr/share/nginx/html nginx
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
