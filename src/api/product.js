import http from './http'

const base = '/dm/product/v1/'

export default {
  getProductInfoList(params) {
    return http.post(base + `getProductInfo`, params)
  },
  getInfoByProductId(productId) {
    return http.get(base + `getInfoByProductId?productId=${productId}&${new Date().getTime()}`)
  }
  //  为适配IE浏览器ajax二次请求路径相同,而拒绝请求使用缓存问题
  //  在此添加随机数参数,结果失败,会影响portal第一次读取productID
  //  目前决定弃用,暂时备注保留接口
  // getInfoByProductId(productId, randomNum) {
  //   return http.get(base + `getInfoByProductId?productId=${productId}` + '&randomNum=' + randomNum)
  // }
}
