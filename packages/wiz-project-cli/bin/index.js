#!/usr/bin/env node
const fs = require("fs")
const path = require("path")
const degit = require("degit")
const chalk = require("chalk")
const commander = require("commander")
const inquirer = require("inquirer")
const checkDire = require("../utils")
const { exec } = require("child_process")
const { version } = require("../package.json")
const { promptTypeList } = require("../config")
const ora = require("ora")
//version 版本号
commander
  .version(version, "-v, --version")
  .command("init <projectName>")
  .alias("i")
  .description("输入项目名称，初始化项目模版")
  .action(async (projectName, cmd) => {
    await checkDire(path.join(process.cwd(), projectName), projectName) // 检测创建项目文件夹是否存在
    inquirer.prompt(promptTypeList).then(result => {
      const { url, val } = result.type
      const spinner = ora(`Loading ${chalk.yellow(val)} \n`).start()
      if (!url) {
        console.log(chalk.red(`${val} 该类型暂不支持...`))
        process.exit(1)
      }
      const emitter = degit(url, {
        force: true,
        verbose: true,
      })
      emitter.on("info", info => {
        // console.log(info.message)
      })
      emitter.clone(projectName).then(() => {
        spinner.stop()
        console.log(chalk.blue(`${val} finished`))
      })
    })
  })
commander.parse(process.argv)
