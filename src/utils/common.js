// 获取当天最后一秒时间戳
// export const GET_END_DATE = new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1)
// 兼容ie
var todayTime = (new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate(), 24, 0, 0)).getTime()
export const GET_END_DATE = new Date(todayTime - 1)

export const pickerOptions = [
  {
    text: '今天',
    onClick (picker) {
      const end = new Date()
      const start = new Date(new Date().toDateString())
      end.setTime(start.getTime())
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近一周',
    onClick (picker) {
      const end = new Date(new Date().toDateString())
      const start = new Date()
      start.setTime(end.getTime() - 3600 * 1000 * 24 * 7)
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近一个月',
    onClick (picker) {
      const end = new Date(new Date().toDateString())
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近三个月',
    onClick (picker) {
      const end = new Date(new Date().toDateString())
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      picker.$emit('pick', [start, end])
    }
  }]

export let Base64 = {
  encode (str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      function toSolidBytes (match, p1) {
        return String.fromCharCode('0x' + p1)
      }))
  },
  decode (str) {
    return decodeURIComponent(atob(str).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
  }
}

// base64 -> utf8
export function b64DecodeUnicode (str) {
  return decodeURIComponent(atob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
  }).join(''))
}

// utf8 -> base64
export function b64EncodeUnicode (str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1)
  }))
}

// base64 -> utf8: 中文乱码，必须与window.btoa(window.encodeURIComponent(str))配套
export function b64ToUtf8 (b64) {
  return window.decodeURIComponent(window.atob(b64))
}

// 计算utf-8编码情况下的字符串字节长度
export function getBytesCount (str) {
  let totalLength = 0
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i)
    if (charCode <= parseInt('0x7F')) {
      totalLength += 1
    } else if (charCode <= parseInt('0x7FF')) {
      totalLength += 2
    } else if (charCode <= parseInt('0xFFFF')) {
      totalLength += 3
    } else if (charCode <= parseInt('0x1FFFFF')) {
      totalLength += 4
    } else if (charCode <= parseInt('0x3FFFFFF')) {
      totalLength += 5
    } else {
      totalLength += 6
    }
  }
  return totalLength
}

// import * as common from '@/utils/common'
// common.pickerOptions
// common.b64EncodeUnicode('测试')
// let encoded = common.Base64.encode('哈ha') // "5ZOIaGE="
// let decoded = common.Base64.decode(encoded) // "哈ha"
