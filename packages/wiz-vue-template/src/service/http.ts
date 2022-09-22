/*
 * @Copyright © 2022 WIZ Holdings PTE. LTD. All rights reserved: 
 */
//http.ts
import axios, { AxiosRequestConfig } from 'axios'

const request = axios.create({
  timeout: 1000
})
request.interceptors.request.use(
  (config): AxiosRequestConfig<any> => {
    const token = window.sessionStorage.getItem('token')
    if (token) {
      //@ts-ignore
      config.headers.token = token
    }
    return config
  },
  (error) => {
    return error
  }
)
// 响应拦截
request.interceptors.response.use((res) => {
  if (res.data.code === 111) {
    sessionStorage.setItem('token', '')
    // token过期操作
  }
  return res
})

export default request
