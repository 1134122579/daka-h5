import axios from 'axios'
import store from '@/store'
import { getToken, setToken, removeToken } from '@/utils/loading.js'
import { okload } from '@/utils/wxLoad.js'
import { Toast } from 'vant'
// 根据环境不同引入不同api地址
import { baseApi } from '@/config'
// create an axios instance
const service = axios.create({
  baseURL: baseApi // url = base api url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  // timeout: 0 // request timeout
})

// request拦截器 request interceptor
service.interceptors.request.use(
  config => {
    // console.log(config)
    // 不传递默认开启loading
    if (!config.hideloading) {
      // loading
      Toast.loading({
        forbidClick: true
      })
    }

    if (getToken()) {
      config.headers['access-user-token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)
// respone拦截器
service.interceptors.response.use(
  response => {
    Toast.clear()
    const res = response.data
    if (res.status && res.status !== 200) {
      // 登录超时,重新登录
      if (res.status === 203) {
        removeToken()
        okload()
      }
      if (res.status === 202) {
        return Promise.reject(Toast.fail(res.message))
      }
      return Promise.reject(res || 'error')
    } else {
      return Promise.resolve(res)
    }
  },
  error => {
    Toast.clear()
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
