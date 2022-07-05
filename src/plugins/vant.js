// 按需全局引入 vant组件
import Vue from 'vue'
import {
  Button,
  List,
  Cell,
  Tabbar,
  TabbarItem,
  ImagePreview,
  Image as VanImage,
  Tag,
  NavBar,
  Icon,
  Field,
  Sticky,
  Divider,
  Popup,
  Empty,
  Swipe,
  SwipeItem,
  Lazyload,
  Tab,
  Uploader,
  Tabs
} from 'vant'
Vue.use(Tab)
Vue.use(Uploader)
Vue.use(Tag)
Vue.use(Divider)
Vue.use(ImagePreview)
Vue.use(Tabs)
Vue.use(Field)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Popup)
Vue.use(Cell)
Vue.use(VanImage)
Vue.use(List)
Vue.use(Sticky)
Vue.use(Empty)
Vue.use(NavBar)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
