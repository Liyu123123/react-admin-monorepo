// 运行时配置
import { RunTimeLayoutConfig } from '@umijs/max';
import Wizlogo from '@/assets/logo.png'
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout: RunTimeLayoutConfig = () => {
  return {
    layout: "mix",
    title: '',
    logo: Wizlogo,
    menu: {
      locale: false,
    },
    siderWidth: 200,
  }
}
