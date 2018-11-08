import axios from 'axios'
import { MessageBox, Loading } from 'element-ui'
// import store from '@/store'
// import { getToken } from '@/utils/auth'

// Object.defineProperties(axios, {
//   $context: {
//     get() {
//       return process.env.API_ROOT
//     }
//   }
// })

// create an axios instance
const instance = axios.create({
  // baseURL: axios.$context
  baseURL: process.env.API_ROOT
  // timeout: 30000 // request timeout
})

// request interceptor
let loadingInstance
instance.interceptors.request.use(
  config => {
    /**
     * 1、请求开始loading
     * 1）结合 vuex 开启全屏 loading 动画
     * 2）在請求的配置中 設置{isShowLoading: true}，請求發出後，顯示loading，默認情況不顯示loading
     */
    let isShowLoading = config.isShowLoading
    if (isShowLoading !== 'undefined' && isShowLoading) {
      loadingInstance = Loading.service({fullscreen: true, target: '.container'})
    }
    /**
     *  2、带上 token , 可以结合 vuex 或者 localStorage
     */
    // if (store.getters.token) {
    //   config.headers['X-Token'] = getToken() // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    // } else {
    //   // 重定向到登录页面
    //   // router.push('/login')
    // }
    return config
  },
  error => {
    console.log(error) // for debug
    MessageBox({
      title: '提示',
      message: '加载超时',
      callback: action => {
        loadingInstance.close()
      }
    })
    return Promise.reject(error)
  })

// response interceptor
instance.interceptors.response.use(
  response => {
    /**
     * 关闭loading
     */
    let isShowLoading = response.config.isShowLoading
    if (isShowLoading !== 'undefined' && isShowLoading) {
      loadingInstance.close()
    }
    /**
     * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
     * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
     */
    //  const res = response.data;
    //     if (res.code !== 20000) {
    //       Message({
    //         message: res.message,
    //         type: 'error',
    //         duration: 5 * 1000
    //       });
    //       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
    //       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
    //           confirmButtonText: '重新登录',
    //           cancelButtonText: '取消',
    //           type: 'warning'
    //         }).then(() => {
    //           store.dispatch('FedLogOut').then(() => {
    //             location.reload();// 为了重新实例化vue-router对象 避免bug
    //           });
    //         })
    //       }
    //       return Promise.reject('error');
    //     } else {
    //       return response.data;
    //     }
    return response
  },
  error => {
    if (error.response) {
      /**
       * 关闭loading
       */
      let isShowLoading = error.response.config.isShowLoading
      if (isShowLoading !== 'undefined' && isShowLoading) {
        loadingInstance.close()
      }
      switch (error.response.status) {
        case 400:
        case 500:
          const data = error.response.data
          MessageBox.alert('错误码：' + data.resultCode + ', 错误信息：' + data.resultMsg, '错误', {
            confirmButtonText: '确定',
            type: 'error',
            showClose: false
          })
          break
        case 401:
          MessageBox.alert('会话已过期, 请重新登录!', '提示', {
            confirmButtonText: '确定',
            type: 'warning',
            showClose: false,
            callback: _ => {
              location.href = '/'
            }
          })
          break
        case 403:
          MessageBox.alert(error.response.data.resultMsg, '提示', {
            confirmButtonText: '确定',
            type: 'warning',
            showClose: false
          })
          break
      }
    }
    return Promise.reject(error)
  }
)

export default instance
