/*
 * @Copyright © 2022 WIZ Holdings PTE. LTD. All rights reserved: 
 */
import request from '../http'
export const getList = (params: { page?: number; limit?: number }) => {
  return request.get('https://61273138c2e8920017bc0b3c.mockapi.io/api/users', {
    params
  })
}