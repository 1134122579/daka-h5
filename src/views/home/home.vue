<template>
  <div class="homepage">
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
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: -1;
  }
  .button {
    width: 120px;
    margin: 0 auto;
    text-align: center;
    padding: 6px 0;
    margin-top: 50%;
    font-size: 14px;
    color: #fff;
    background: #c4bab8;
    border: 1px solid #c4bab8;
    border-radius: 4px;
  }
}
</style>
