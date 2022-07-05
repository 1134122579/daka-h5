import { getShare } from '../api/user.js'
import wx from 'weixin-js-sdk'
/**
 *
 * @param {*} title   微信分享标题
 * @param {*} desc    微信分享简介
 *  * @param {*} url
 * @param {*} link  微信分享地址
 * @param {*} imgUrl  分享图片地址
 *
 */
async function getShareInfo(wxConfig, callback) {
  // 如果分享的内容会根据情况变化，那么这里可以传入分享标题及url

  console.log('微信分享内容配置', wxConfig)
  // wxConfig['imgUrl'] = encodeURIComponent(wxConfig['imgUrl'])
  const data = await getShare({
    url: encodeURIComponent(wxConfig.url)
  }) // 这里我写了一个公用的接口请求js，这里正常axios请求就可以，只要拿到数据都可以
  callback()
  const res = data.data
  console.log(res)
  // 拿到后端给的这些数据
  // console.log('微信配置返回', res)
  const appId = res.appId
  const timestamp = res.timestamp
  const nonceStr = res.nonceStr
  const signature = res.signature
  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: appId, // 必填，公众号的唯一标识，填自己的！
    timestamp: timestamp, // 必填，生成签名的时间戳，刚才接口拿到的数据
    nonceStr: nonceStr, // 必填，生成签名的随机串
    signature: signature, // 必填，签名，见附录1
    jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData', 'hideMenuItems', 'hideAllNonBaseMenuItem'], // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    openTagList: ['wx-open-subscribe']
  })
  wx.ready(function() {
    wx.updateAppMessageShareData(wxConfig)
    wx.updateTimelineShareData(wxConfig)
    wx.hideMenuItems({
      menuList: [
        'menuItem:copyUrl',
        'menuItem:originPage',
        'menuItem:share:email',
        'menuItem:openWithSafari',
        'menuItem:openWithQQBrowser',
        'menuItem:editTag',
        'menuItem:share:brand',
        'menuItem:exposeArticle',
        'menuItem:dayMode',
        'menuItem:refresh',
        'menuItem:setFont'
      ] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
    })
    // wx.hideAllNonBaseMenuItem()
  })
}
function setShareInfo(wxConfig) {
  // 如果分享的内容会根据情况变化，那么这里可以传入分享标题及url
  console.log('微信分享内容配置', wxConfig)
  wx.ready(function() {
    wx.updateAppMessageShareData(wxConfig)
    wx.updateTimelineShareData(wxConfig)
  })
}
export { getShareInfo, setShareInfo }
