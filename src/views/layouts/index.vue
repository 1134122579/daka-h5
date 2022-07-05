<template>
  <div class="app-container">
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </div>
    <div class="layout-footer">
      <TabBar :data="tabbars" @change="handleChange" />
    </div>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar'
export default {
  name: 'AppLayout',
  data() {
    return {
      tabbars: [
        {
          title: '首页',
          to: {
            name: 'About'
          },
          icon: require('../../assets//fooltet/shouye.png')
        },
        {
          title: '业务范围',
          to: {
            name: 'Culture'
          },
          // icon: 'newspaper-o'
          icon: require('../../assets//fooltet/yewuzu.png')
        },
        {
          title: '案例展示',
          to: {
            name: 'Demo'
          },
          // icon: 'description'
          icon: require('../../assets//fooltet/anli.png')
        },
        {
          title: '联系我们',
          to: {
            name: 'Contact'
          },
          // icon: 'user-o'
          icon: require('../../assets//fooltet/contact-person.png')
        }
      ]
    }
  },
  components: {
    TabBar
  },
  methods: {
    handleChange(v) {
      console.log('tab value:', v)
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/variables.scss';
// 设置样式
.app-container {
  width: 100%;
  height: 100%;
  .layout-content {
    height: 100%;
    background: $pageBackground;
  }
  .layout-footer {
    overflow: hidden;
  }
}
</style>
