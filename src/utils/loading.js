const admin_token = 'token'
const userauth = 'userIfo'
const admin_video = 'VIDEOLIST'
// 设置token
export function setToken(token) {
  localStorage.setItem(admin_token, token)
}
// 获取token
export function getToken() {
  return localStorage.getItem(admin_token)
}
// 删除token
export function removeToken() {
  localStorage.removeItem(admin_token)
}
// 设置 video
export function setvideo(video) {
  video = JSON.stringify(video)
  localStorage.setItem(admin_video, video)
}
// 获取 video
export function getvideo() {
  return JSON.parse(localStorage.getItem(admin_video))
}
// 删除 video
export function removevideo() {
  localStorage.removeItem(admin_video)
}
// 设置用户权限
export function setUserAuth(data) {
  sessionStorage.setItem(userauth, data)
}
// 获取用户信息
export function getUserAuth() {
  return sessionStorage.getItem(userauth)
}
