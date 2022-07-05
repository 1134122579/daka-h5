// 兼容 IE
// https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#babelpolyfill
import 'core-js/stable'
import 'regenerator-runtime/runtime'
// import './utils/setting' //限制字体随意改变

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import VideoPlayer from 'vue-video-player'
// import 'video.js/dist/video-js.css'

// Vue.use(VideoPlayer)
// 设置 js中可以访问 $cdn
import { $cdn } from '@/config'
Vue.prototype.$cdn = $cdn

// 全局引入按需引入UI库 vant
import '@/plugins/vant'
// 引入全局样式
import '@/assets/css/index.scss'
// 移动端适配
import 'lib-flexible/flexible.js'

// filters
import './filters'
import 'wowjs/css/libs/animate.css'
import wow from 'wowjs'
Vue.prototype.$wow = wow
// 关闭生产提示
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
