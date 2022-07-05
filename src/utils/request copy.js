// 根据环境不同引入不同api地址
import { baseApi } from '@/config'
import { getToken, setToken } from '@/utils/loading.js'
import { tokenNewload, okload } from '@/utils/wxLoad.js'
import axios from 'axios'
import { Toast } from 'vant'
import { removeToken } from '@/utils/loading.js'
// create an axios instance
const service = axios.create({
  baseURL: baseApi, // url = base api url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})
setToken(
  'ae9e3e00ce97b6b55f25b242c43ca7160547401ab0ec8bd8e1618f31030c8b7d1bccc90f2c855f261de44093df67a32d4123245357cf9caf47e078a21376fd29691d4bd82fe78a667b485ee95372b9de'
)
// request拦截器 request interceptor
service.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) {
      config.headers['access-user-token'] = token
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
    const res = response.data
    if (res.status === 202) {
      return Promise.reject(Toast.fail(res.message))
    } else if (res.status === 203) {
      tokenNewload()
    } else {
      return res.data
    }
  },
  error => {
    Toast.clear()
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
