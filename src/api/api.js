import http from './http'

let base = ''

export const getProductInfoList = (params) => {
  return http.post(base + `getProductInfo`, params)
}

export const getInfoByProductId = productId => {
  return http.get(base + `getInfoByProductId?productId=${productId}&${new Date().getTime()}`)
}

export const requestLogin = params => {
  return http.post(`${base}/login`, params).then(res => res.data)
}

export const getUserList = params => {
  return http.get(`${base}/user/list`, {params: params})
}

export const removeUser = params => {
  return http.get(`${base}/user/remove`, {params: params})
}

export const editUser = params => {
  return http.get(`${base}/user/edit`, {params: params})
}

export const addUser = params => {
  return http.get(`${base}/user/add`, {params: params})
}

export default {}

// 局部引用
// import * as api from '@/api/api';
// api.addUser

// 全局引用
// 1、index.js：将$api挂载到vue原型
// 2、main.js：引入index.js
// import api from '@/api/index'
// Vue.use(api)
// 3、****.vue：页面调用api
// this.$api.login(params).then(res => {
//   // 请求成功后的操作
// }).catch(err => {
//   // 请求失败后的操作
// })
