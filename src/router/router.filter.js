import { getShareInfo } from '@/utils/share.js'
import { getUrlKey, okload } from '@/utils/wxLoad.js'
import { getToken, setToken, removeToken } from '@/utils/loading.js'
export default function (router) {
  router.beforeEach((to, from, next) => {
    next()
    return
    // const id = getUrlKey('id')
    // const url = '' + window.location.origin + window.location.pathname + id && '?id=' + id
    // setToken(
    //   '8f74a71ee4da81d8c3cc590b36feca46ac7734ac7d62854daf3a196d22583c6c03775b4f71d279fc2665344b6860ae005e872b9b4c2f995ace6e2a974eec55a55726b9ee532fdb4a01e6449788adc7ce'
    // )
    console.log(location, to, from)
    let wxConfig = {
      title: '天空之橙·Design｜建筑·空间·景观·运营',
      url: location.href,
      desc: '',
      link: window.location.origin + to.fullPath,
      //   link: window.location.origin + window.location.pathname,
      imgUrl: 'http://api.skyorange.cn/logo.jpg'
    }
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
