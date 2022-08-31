这是pnpm monorepo搭建的多包管理项目

# 什么是 Monorepo ?

Monorepo是管理项目代码的方式之一，指在一个大的项目仓库（repo）中 管理多个模块/包（package），这种类型的项目大都在项目根目录下有一个packages文件夹，分多个项目管理。大概结构如下：  

`
├── packages
|   ├── pkg1
|   |   ├── package.json
|   ├── pkg2
|   |   ├── package.json
├── package.json
`

# Monorepo 的好处在哪里嘞？

统一管理。比如微前端项目，多个子应用可以放在同一个monorepo中方便管理；后端用node.js的项目放在monorepo中也可以使用同一套技术栈管理。在CI/CD等流水线过程中，方便统一迭代或升级版本，也方便做通用化的配置，适用到多个子项目当中。
依赖提升。如果多个项目都依赖了诸如react、vue或TypeScript等常用库，那可以通过lerna或者yarn workspace将依赖提升到最外层，多个子模块/包复用同一个依赖，减小项目体积。

# pnpm安装依赖

`
 pnpm m i 
`
