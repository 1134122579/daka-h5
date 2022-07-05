import api from './apiUrl'
// axios
import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: api.Login,
    method: 'post',
    data
  })
}
// wx 登录
export function wxlogin(data) {
  return request({
    url: api.wxlogin,
    method: 'post',
    data
  })
}

// 用户信息 post 方法
export function getUserInfo(data) {
  return request({
    url: api.UserInfo,
    method: 'post',
    data,
    hideloading: true
  })
}

// 用户名称 get 方法
export function getUserName(params) {
  return request({
    url: api.UserName,
    method: 'get',
    params,
    hideloading: true
  })
}
export function getNav(params) {
  return request({
    url: api.getNav,
    method: 'get',
    params,
    hideloading: true
  })
}
export function getImage(data) {
  return request({
    url: api.getImage,
    method: 'post',
    data,
    hideloading: true
  })
}
export function getInfo(params) {
  return request({
    url: api.getInfo,
    method: 'get',
    params,
    hideloading: true
  })
}
// 用户名称 get 方法
export function getAbout(params) {
  return request({
    url: api.getAuout,
    method: 'get',
    params,
    hideloading: true
  })
}
export function setVideoPv(params) {
  return request({
    url: api.setVideoPv,
    method: 'get',
    params,
    hideloading: true
  })
}
// 联系我们
export function aboutUs(params) {
  return request({
    url: api.aboutUs,
    method: 'get',
    params,
    hideloading: true
  })
}
// 案例展示
export function getVideoList(data) {
  return request({
    url: api.getVideoList,
    method: 'post',
    data,
    hideloading: true
  })
}
export function subImg(data) {
  return request({
    url: api.subImg,
    method: 'post',
    data,
    hideloading: true
  })
}
export function upImage(data) {
  return request({
    url: api.upImage,
    method: 'post',
    data,
    hideloading: true
  })
}
// 案例分类

export function getFlimClass(params) {
  return request({
    url: api.getFlimClass,
    method: 'get',
    params,
    hideloading: true
  })
}

export function getShare(data) {
  return request({
    url: api.getShare,
    method: 'post',
    data
  })
}
export function getVideoDetails(data) {
  return request({
    url: api.getVideoDetails,
    method: 'post',
    data
  })
}
export function zanVideo(data) {
  return request({
    url: api.zanVideo,
    method: 'post',
    data
  })
}
export function comment_video(data) {
  return request({
    url: api.comment_video,
    method: 'post',
    data
  })
}
export function collect_video(data) {
  return request({
    url: api.collect_video,
    method: 'post',
    data
  })
}
export function getVideoComment(data) {
  return request({
    url: api.getVideoComment,
    method: 'post',
    data
  })
}
export function getPyq(data) {
  return request({
    url: api.getPyq,
    method: 'post',
    data
  })
}
export function getShareArticleDetails(params) {
  return request({
    url: api.getShareArticleDetails,
    method: 'get',
    params
  })
}
