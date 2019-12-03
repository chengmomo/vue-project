// product.module.js
import * as types from '@/store/mutation-types'

const state = {
  roles: [],
  productInfo: {}
}
const getters = {
  roles: state => state.roles,
  productInfo: state => state.productInfo
}
const actions = {
  setRoles ({commit}, data) {
    commit(types.ROLES_SET, data)
  },
  updateProductInfo (context, data) {
    if (data) {
      console.log(data, 'updateProductInfo')
      // http.getInfoByProductId(data).then(r => {
      //   if (r.data) {
      //     if (r.data.code === 0) {
      //       let productInfo = r.data.result
      //       // 去除产品描述换行符
      //       productInfo.productDescShow = productInfo.productDesc ? productInfo.productDesc.replace(/[\r\n]/g, ' ') : ''
      //       // 设备接入IP端口处理
      //       productInfo.devicdeIpPortArr = productInfo.devicdeIpPort ? productInfo.devicdeIpPort.trim().split('&') : ''
      //       context.commit(types.UPDATE_INFO, productInfo)
      //     } else {
      //       this.$message({
      //         message: r.data.msg,
      //         type: 'error'
      //       })
      //       context.commit(types.UPDATE_INFO, {})
      //     }
      //   }
      // })
    }
  }
}
const mutations = {
  [types.ROLES_SET] (state, data) {
    state.roles = data
  },
  [types.UPDATE_INFO] (state, data) {
    state.productInfo = data
  }
}

export const product = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}

// 当 namespaced 为true时
// this.$store.state.product
// this.$store.getters['product/productInfo']
// this.$store.commit('product/updateProductInfo', this.productInfo)
// this.$store.dispatch('product/updateProductInfo', this.productId).then(res => {
//   console.log(this.productInfo, 'res')
// })
