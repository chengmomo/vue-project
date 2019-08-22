import axios from 'axios'
import { MessageBox } from 'element-ui'

const http = axios.create({
  baseURL: axios.$context,
  responseType: 'blob' // 表明返回服务器返回的数据类型
})

http.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
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

export default http
