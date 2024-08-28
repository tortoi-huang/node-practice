# node-practice
学习 nodejs hello world 项目
参考: [mdnwebdoc](https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Express_Nodejs/development_environment)

## 构建运行
### 安装
安装 express
```shell
# express
# npm install express
# 生成项目脚手架
# npx express-generator backend
# cd backend
npm install

# 启动 
bin/wwww

# 访问首页
curl -i http://localhost:3000/

# 安装eslint
# npm install eslint --save-dev
npm init @eslint/config@latest
# 检查代码
# npm run-script lint

```

## 添加一个api

1. 添加并编写文件: backend/routes/api.js
2. 修改文件: backend/app.js 添加路由