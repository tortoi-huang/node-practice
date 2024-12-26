# node-practice
学习 nodejs hello world 项目
参考: https://developer.mozilla.org/zh-CN/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain

## 构建运行
### 准备
安装 nvm, 并通过 nvm 安装 nodejs 和 npm (直接安装 nodejs 和 npm 可能出现诸多难以处理的错误)
```shell
# 安装 nvm, 参考:  https://github.com/nvm-sh/nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# 查看 nvm 使用帮助
nvm --help
# 安装最新版本的 node 和 npm
nvm install node

# 安装指定版本 node 及对应的 npm
#  nvm install 8.0.0

# 查看安装好的版本
nvm list
# 查看可以安装的所有版本
# nvm list available
# 使用指定版本, 已知windows下nvm install 并不会自动激活, 需要使用 use命令激活
# nvm use 23.5.0
```
如果操作系统设置了代理上网，则可能nvm安装失败, 需要单独设置nvm的代理
```bash
nvm proxy 10.168.60.42:8080
# 清除代理
# nvm proxy none
```


## 问题 express 后端没有 react 视图引擎, 他们没法一起配合工作, 只能是 react 通过 http 请求访问 express 的 api
