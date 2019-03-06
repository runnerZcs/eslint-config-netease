# 网易 javaScript 和 React 规范

    基于eslint的JavaScript和React代码检查插件。

## 规范文档

- [React 规范](./doc/react.md)
- [React 可访问性规范](./doc/reactAccessbility.md)
- [模块化规范](./doc/imports.md)
- [最佳实践](./doc/best-practices.md)
- [错误语法](./doc/errors.md)
- [es6](./doc/es6.md)
- [node](./doc/node.md)
- [代码样式](./doc/style.md)
- [变量](./doc/variables.md)

## 如何使用

1.  安装  
    切换 npm 源请使用`nrm`

          外网npm
          npm install --save-dev eslint-config-netease@latest eslint@">=5.13.0" babel-eslint@">=10.0.1"

          杭研npm
          npm install --save-dev @mf2e/eslint-config-netease@latest eslint@">=5.13.0" babel-eslint@">=10.0.1"

2)  配置 package.json

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
