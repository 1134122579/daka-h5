<template>
  <div class="contact">
    <Swiper :swiperList="swiperList" />
  </div>
</template>
<script>
import Swiper from '../../components/Swiper.vue'
export default {
  components: {
    Swiper
  },
  data() {
    return {
      swiperList: [
        {
          id: 1,
          image: 'http://tccdn.greatorange.cn/guangw_26.png'
        },
        {
          id: 2,
          image: 'http://tccdn.greatorange.cn/%E4%BC%81%E4%B8%9A%E6%96%87%E5%8C%96.png'
        }
      ],
      getData: {
        phone: ''
      }
    }
  },
  created() {},
  methods: {
    goLook() {
      this.$router.push({
        path: '/about'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/index';
.contact {
  width: 100%;
  height: 100vh;
  // background: url('../../assets/goStatus.png') no-repeat;
  background-size: 100% 100%;
}
</style>
