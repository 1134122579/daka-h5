import { getUserInfo, wxlogin } from '@/api/user.js'
import { getToken, setToken, setUserAuth, getUserAuth } from '@/utils/loading.js'
import { Dialog, Toast } from 'vant'
import router from '../router'

// token过期 登陆
export function tokenNewload() {
  const code = getUrlKey('code')
  const id = getUrlKey('id')
  const page = getUrlKey('page')
  // setToken(
  //   '72f9a04a696d284d312d34128ea234deb9dd9a5d4b67bf16dacd61fc8b6c4a03422943c9bc47c7f86b2cf21ea1cfb5ff4123245357cf9caf47e078a21376fd29691d4bd82fe78a667b485ee95372b9de'
  // )
  // window.location.replace(window.location.origin + window.location.pathname + id ? '?id=' + id : '' + vip ? '&vip=' + vip : '')
  // return
  if (code) {
    console.log('获取code======', code)
    wxlogin({
      code
    }).then(res => {
      setToken(res.token)
      getUserInfo().then(res => {
        setUserAuth(JSON.stringify(res))
        // window.location.replace(window.location.origin + window.location.pathname)
        window.location.replace(
          window.location.origin + window.location.pathname + id ? '?id=' + id : '' + page ? '&page=' + page : ''
        )
      })
    })
  } else {
    UrlCode()
  }
}
// 正常登陆
// 判断是否有code
export function okload(to, next) {
  const code = getUrlKey('code')
  const id = getUrlKey('id')
  const page = getUrlKey('page')
  if (!getToken()) {
    if (code) {
      wxlogin({
        code
      }).then(res => {
        setToken(res.data.token)
        window.location.replace(
          window.location.origin + window.location.pathname + id ? '?id=' + id : '' + page ? '&page=' + page : ''
        )
      })
    } else {
      UrlCode()
    }
  }
}
// 转译url
export function UrlCode() {
  // 获取微信code
  const appId = 'wxe6bba032e8255a50'
  const Url = encodeURIComponent(location.href)
  console.log('转译', Url)
  // https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx82a86ba0635c4603&redirect_uri=http%3A%2F%2Fbid.greateorange.cn%2Ff&response_type=code&scope=snsapi_userinfo&state=CVCR#wechat_redirect
  window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${Url}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`
}

// 获取 code
export function getUrlKey(name) {
  return (
    decodeURIComponent(
      (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ''])[1].replace(/\+/g, '%20')
    ) || null
  )
}

// 判断用户是否有权限
export function isUserAuth(to, next) {
  const pageSure = to.meta.isPamiss || false
  getUserInfo().then(res => {
    setUserAuth(JSON.stringify(res))
    const userInfo = res
    const is_auth = userInfo.is_auth
    if (is_auth == 1 || !pageSure) {
      // 判断是否是vip 订阅页
      next()
      return
      if (to.path == '/share') {
        if (userInfo.is_vip != 1) {
          Dialog.confirm({
            title: 'vip专享',
            message: '是否购买vip'
          })
            .then(() => {
              next('/vip')
            })
            .catch(() => {
              // on cancel
            })
        } else {
          next()
        }
      } else {
        next()
      }
    } else if (is_auth == 3) {
      Toast('资料正在加急审核中...请耐心等待！')
      if (to.path == '/textDetali') {
        next('/home')
      }
    } else {
      Dialog.confirm({
        title: '用户认证',
        message: '用户信息暂未认证是否跳往认证页面?'
      })
        .then(() => {
          next('/userStting')
        })
        .catch(() => {
          // on cancel
        })
    }
  })
}
