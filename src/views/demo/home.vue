<template>
  <div class="homeDemo">
    <p>我们做</p>
    <h1>年轻人喜爱的空间</h1>
    <div class="boeder" @click="go">开启空间旅行</div>
  </div>
</template>
<script>
export default {
  methods: {
    go() {
      this.$router.push({
        name: 'Demo'
      })
    }
  }
}
</script>
<style lang="scss">
.homeDemo {
  height: 100vh;
  background: #fe9526;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  p {
    color: #262626;
    font-size: 26px;
    text-align: left;
    width: 100%;
  }
  h1 {
    font-size: 38px;
    width: 100%;
    text-align: center;
    border-top: 4px solid #fff;
    color: #fff;
    border-bottom: 4px solid #fff;
    margin: 30px 0;
  }
  .boeder {
    font-size: 18px;
    line-height: 1;
    text-align: center;
    color: #fff;
    height: 40px;
    width: 60%;
    background: url('../../assets/jt.png') no-repeat;
    background-size: 100%;
    background-position: center center;
  }
}
</style>
