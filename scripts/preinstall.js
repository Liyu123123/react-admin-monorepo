if (!/pnpm/.test(process.env.npm_execpath || "")) {
  console.log(
    "需要在软件包中禁用 npm 和 yarn。这一步的目的是允许项目使用 pnpm 进行模块管理。不然的话会出现不兼容问题。"
  )
  console.warn(
    `\u001b[33mThis repository requires using pnpm as the package manager ` +
      ` for scripts to work properly.\u001b[39m\n`
  )
  process.exit(1)
}
