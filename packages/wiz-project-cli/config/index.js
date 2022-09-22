/*
  @dest: 使用配置文件
  @Author: tree
 */
module.exports = {
  npmUrl: "https://registry.npmjs.org/shc-cli/latest",
  promptTypeList: [
    {
      type: "list",
      message: "请选择拉取的模版类型:",
      name: "type",
      choices: [
        {
          name: "vue3+vite+typescript+ant-design-vue",
          value: {
            url: "https://github.com/Liyu123123/wiz-fe-monorepo/packages/wiz-vue-template",
            gitName: "wiz-vue-template",
            val: "vue3模板",
          },
        },
        {
          name: "react(base umi.4x)+ant-design",
          value: {
            url: "https://github.com/Liyu123123/wiz-fe-monorepo/packages/wiz-react-template",
            gitName: "wiz-react-template",
            val: "react模版",
          },
        },
      ],
    },
  ],
}
