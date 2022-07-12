<template>
  <div class="homepage">
    <div class="text">
      <p>一个「高颜值、高智商」的书香暖地</p>
      <p>一个「自然、放松」的天然氧吧将为你守候~</p>
    </div>
    <div class="button" @click="goadd">立即打卡</div>
  </div>
</template>
<script>
export default {
  methods: {
    goadd() {
      this.$router.push('/add')
    }
  }
}
</script>

<style lang="scss" scoped>
.homepage {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // filter: blur(1px);
    background: #d2c8c5 url('../../assets/home-bg.jpg') no-repeat;
    background-size: 100%;
    z-index: -2;
  }
  // &::before {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background: rgba(0, 0, 0, 0.3);
  //   z-index: -1;
  // }
  .text {
    width: 45%;
    margin: 0 auto;
    margin-top: 10vh;
    line-height: 1.8;
    font-size: 16px;
  }
  .button {
    width: 150px;
    margin: 0 auto;
    text-align: center;
    padding: 6px 0;
    margin-top: 36vh;
    font-size: 14px;
    color: #fff;
    background: #333;
    border: 1px solid #333;
    border-radius: 4px;
    box-shadow: 0 0 28px #787878;
  }
}
</style>
