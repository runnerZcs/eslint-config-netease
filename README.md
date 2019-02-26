# 网易 javaScript 和 React 规范

    基于eslint的JavaScript和React代码检查插件。

## 如何使用

1.  安装

        npm install --save-dev eslint-config-netease@latest eslint@">=5.13.0" babel-eslint@">=10.0.1"

2.  配置 package.json

    - 配置 eslint

      添加如下字段,**替换 react 的 version 成自己版本**：

              "eslintConfig": {
                  "extends": "netease",
                  "settings": {
                      "react": {
                          "createClass": "createReactClass",
                          "pragma": "React",
                          "version": "16.5.0"
                      }
                  }
              }
