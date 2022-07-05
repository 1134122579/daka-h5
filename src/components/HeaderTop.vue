<template>
  <div class="headerTopp" :style="bimg | backgroundFilter">
    <div class="back">
      <div class="left" @click="goOut(gooutValue)"><van-icon name="arrow-left" />返回</div>
      <van-image class="logo" fit="contain" :src="logo" />
    </div>
    <div class="box">
      <h4 class="name">{{ title }}</h4>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderTop',
  props: {
    gooutValue: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: 'http://tccdn.greatorange.cn/%E7%AE%80%E4%BB%8B-%E5%A4%A9%E7%A9%BA%E4%B9%8B%E6%A9%99banner.png'
    },
    logo: {
      type: String,
      default: require('../assets/logo.png')
    }
  },
  filters: {
    backgroundFilter(item) {
      const background = 'background-image:url(' + item + ')'
      return background
    }
  },

  data() {
    return {
      title: this.name,
      bimg: this.image
    }
  },
  methods: {
    goOut(value) {
      this.$router.go(-1)
    }
  },
  watch: {
    gooutValue(newV, old) {
      localStorage.setItem('ROUTERID', newV)
    },
    name(newV, old) {
      this.title = newV
    },
    image(newV, old) {
      this.bimg = newV
    }
  }
}
</script>
<style lang="scss" scoped>
.headerTopp {
  width: 100%;
  height: 120px;
  background: #ccc no-repeat;
  background-size: 100% 100%;
  position: relative;
  .back {
    position: absolute;
    top: 10px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    // padding: 10px;
    box-sizing: border-box;
    color: #fff;
    font-size: 16px;
    z-index: 3;
    padding: 0 10px;
    .left {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }
  .logo {
    // position: absolute;
    // top: 0;
    width: 100px;
    height: 40px;
  }
  .box {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: #fff;
    letter-spacing: 8px;
    font-size: 28px;
    .name {
      font-weight: normal;
    }
  }
}
</style>
