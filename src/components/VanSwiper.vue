<template>
  <div class="swiperStyle">
    <van-swipe :id="Pid" class="my-swipe" :autoplay="autoplay" indicator-color="white">
      <van-swipe-item v-for="(item, index) in swiperList" :key="index">
        <div class="box">
          <van-image class="img" fit="cover" :src="item.image" alt="" />
          <div class="textBox">
            <div class="nameStyle">{{ item.name }}</div>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  props: {
    Pid: {
      type: Number,
      default: 2
    },
    autoplay: {
      type: Number,
      default: 3000
    },
    list: {
      type: Array,
      default: []
    }
  },
  watch: {
    list(newv, oldV) {
      this.swiperList = this.list
    },
    autoplay(newv, oldV) {
      this.timeautoplay = this.list
    }
  },
  data() {
    return {
      timeautoplay: this.autoplay,
      swiperList: this.list
    }
  }
}
</script>

<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  // line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  .box {
    width: 100%;
    height: 200px;
    position: relative;
    .img {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
    }
    .textBox {
      position: absolute;
      bottom: 0;
      width: 100%;
      max-height: 100px;
      background: rgba(0, 0, 0, 0.4);
      p {
        line-height: 20px;
        font-size: 14px;
        text-align: left;
        text-indent: 16px;
        padding: 8px 20px;
      }
      .nameStyle {
        line-height: 1;
        padding: 10px 20px;
        font-size: 18px;
        width: 100%;
        text-align: left;
        padding-left: 20px;
      }
    }
  }
}
</style>
