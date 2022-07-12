import { getShareInfo } from '@/utils/share.js'
import { getUrlKey, okload } from '@/utils/wxLoad.js'
import { getToken, setToken, removeToken } from '@/utils/loading.js'
export default function (router) {
  router.beforeEach((to, from, next) => {
    setToken(
      '0fa14b5ddbc4f5e8489c4e57f68269b74d9449a6f0598af6aa651db535ded4cf93ae8422e208b82fcdb138294bfe3e832798abc93679266065af565159bcca81ae6c96b81b5f330cdf2ce727fecaaaed'
    )
    console.log('asdas', getToken())
    if (!getToken()) {
      okload()
      return
    }
    let wxConfig = {
      title: '天空之橙城市书房打卡',
      url: location.href,
      desc: '',
      link: window.location.origin + to.fullPath,
      //   link: window.location.origin + window.location.pathname,
      imgUrl: 'http://api.skyorange.cn/logo.jpg'
    }
    getShareInfo(wxConfig, () => {
      next()
    })
    return
    // const id = getUrlKey('id')
    // const url = '' + window.location.origin + window.location.pathname + id && '?id=' + id
    // setToken(
    //   '8f74a71ee4da81d8c3cc590b36feca46ac7734ac7d62854daf3a196d22583c6c03775b4f71d279fc2665344b6860ae005e872b9b4c2f995ace6e2a974eec55a55726b9ee532fdb4a01e6449788adc7ce'
    // )
    console.log(location, to, from)
    // let wxConfig = {
    //   title: '天空之橙·Design｜建筑·空间·景观·运营',
    //   url: location.href,
    //   desc: '',
    //   link: window.location.origin + to.fullPath,
    //   //   link: window.location.origin + window.location.pathname,
    //   imgUrl: 'http://api.skyorange.cn/logo.jpg'
    // }
    if (to.path == '/about') {
      wxConfig = {
        title: '天空之橙·Design 关于我们',
        url: location.href,
        desc: '',
        // link: window.location.origin + to.fullPath,
        link: window.location.origin + window.location.pathname,
        imgUrl: 'http://api.skyorange.cn/logo.jpg'
      }
    }
    getShareInfo(wxConfig, () => {
      next()
    })
  })
  router.afterEach((to, from) => {
    // let wxConfig = {
    //   title: '天空之橙·Design｜建筑·空间·景观·运营',
    //   url: location.href,
    //   desc: '',
    //   link: window.location.href,
    //   //   link: window.location.origin + window.location.pathname,
    //   imgUrl: 'http://api.skyorange.cn/logo.jpg'
    // }
    // getShareInfo(wxConfig, () => {})
  })
}
