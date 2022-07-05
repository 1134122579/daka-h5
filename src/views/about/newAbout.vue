<template>
  <div class="newabout">
    <!-- 视频 -->
    <div class="videoTop">
      <video
        class="video"
        autoplay
        loop
        preload
        muted
        preload="auto"
        :x-webkit-airplay="true"
        airplay="allow"
        :webkit-playsinline="true"
        :playsinline="true"
        src="http://tccdn.greatorange.cn/great.mp4"
      ></video>
      <!-- <ChimeeMobile /> -->
      <div class="contentText">
        <div class="lookText">
          连接
          <div class="swipetextStyle">
            <van-swipe class="text-swipe" :autoplay="3000" :show-indicators="false" height="40px" vertical>
              <van-swipe-item>城市</van-swipe-item>
              <van-swipe-item>企业</van-swipe-item>
              <van-swipe-item>个人</van-swipe-item>
            </van-swipe>
          </div>
        </div>
        <p>共生未来</p>
      </div>
      <div class="bottomTest">
        <i class="bottomBorder"></i>
        <p>滑动</p>
      </div>
    </div>
    <!-- 简介 -->
    <div class="descStyle">
      <div class="top">
        <p>文化创意产业协同Saas赋能平台</p>
        <p>链接全国企业·人才·技术三大资源</p>
        <span>◆</span>
        <p>为传统生产制造企业智造新品赋能</p>
        <p>文创协同赋能工业互联网</p>
      </div>
      <!-- swiper -->
      <div class="swiperStyle">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#1989fa">
          <van-swipe-item v-for="item in swiperList" :key="item.id" @click="go(item.to)">
            <div class="imageBox">
              <img class="imageStyle" :src="item.image" />
              <div class="name">
                {{ item.name }}
                <p class="goStyle">learn more</p>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>

      <!-- 分类 -->
      <div class="list">
        <div class="onebox" v-for="item in list" :key="item.id">
          <div class="texttop">
            <h4>{{ item.title }}</h4>
            <h4>{{ item.title1 }}</h4>
            <p>{{ item.desc }}</p>
          </div>
          <div class="imageStyle" @click="go(item.to)">
            <span class="button">{{ item.button }}</span>
            <img :src="item.image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ChimeeMobile from '@/components/ChimeeMobile.vue'
import Swiper from '@/components/Swiper.vue'

export default {
  components: {
    // ChimeeMobile,
    Swiper
  },
  data() {
    return {
      swiperList: [
        {
          id: 1,
          to: '/newculture',
          name: '企业简介',
          image: 'http://tccdn.greatorange.cn/guangw_26.png'
        },
        {
          id: 2,
          to: '/introduce',
          name: '企业文化',
          image: 'http://tccdn.greatorange.cn/%E4%BC%81%E4%B8%9A%E6%96%87%E5%8C%96.png'
        },
        {
          id: 3,
          to: '/estate',
          name: '办公环境',
          image: 'http://tccdn.greatorange.cn/%E5%8A%9E%E5%85%AC%E7%8E%AF%E5%A2%83.jpg'
        }
      ],
      list: [
        {
          id: 1,
          title: '连接',
          title1: '责任与信任',
          to: '/environment',
          desc: '聚合微小善行，以科技让世界更美好',
          button: 'learm more',
          image: 'http://tccdn.greatorange.cn/%E5%9B%BE%E7%89%872.png'
        },
        {
          id: 2,
          title: '连接',
          title1: '人才与发展',
          to: '/grow',
          desc: '激发活力，助力成长',
          button: 'learm more',
          image: 'http://tccdn.greatorange.cn/1777.png'
        }
      ]
    }
  },
  methods: {
    go(to) {
      this.$router.push({ path: to })
    }
  }
}
</script>

<style lang="scss" scoped>
.newabout {
  position: relative;
  .videoTop {
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 640px;
    .video {
      position: absolute;
      overflow: hidden;
      top: 0;
      left: 0;
      width: 2560px;
      height: 640px;
      margin-left: -29.13333rem;
      z-index: 1;
    }
    .contentText {
      position: absolute;
      z-index: 5;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      text-align: center;
      font-size: 26px;
      color: #fff;
      letter-spacing: 8px;
      .lookText {
        display: flex;
        justify-content: center;
        .text-swipe {
          height: 40px;
          .van-swipe-item {
            height: 40px;
            line-height: 40px;
          }
        }
      }
    }
    .bottomTest {
      position: absolute;
      z-index: 5;
      left: 0;
      right: 0;
      bottom: 10px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      text-align: center;
      font-size: 14px;
      color: #fff;
      letter-spacing: 8px;
      .bottomBorder {
        animation: a_banner_s_line 3s 0.3s linear both infinite;
      }
    }
  }
  // 简介
  .descStyle {
    .top {
      margin: 40px 0;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      font-size: 16px;
      // font-weight: 600;
      width: 100%;
      text-align: center;
      p {
        width: 80%;
      }
      span {
        font-size: 30px;
        color: orange;
      }
    }
    // 轮播
    .swiperStyle {
      height: 200px;
      .my-swipe {
        height: 200px;
        overflow: hidden;
        // background: rgba(255, 255, 255, 0.4);
        background: rgba(0, 0, 0, 0.4);
      }
      .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        text-align: center;
        // background-color: #39a9ed;
        .imageBox {
          height: 200px;
          // width: 300px;
          // margin: 0 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          letter-spacing: 8px;
          font-weight: 600;
          position: relative;
          .imageStyle {
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            width: 100%;
            height: 100%;
          }
          .name {
            width: 70%;
            height: 60%;
            box-sizing: border-box;
            padding: 20px;
            background: rgba(0, 0, 0, 0.4);
            .goStyle {
              color: #f09639;
              border: 1px solid #f09639;
              width: 60%;
              height: 14px;
              font-weight: normal;
              font-size: 16px;
              letter-spacing: 0;
              padding: 8px 20px;
              line-height: 14px;
              border-radius: 20px;
              margin: 20px auto 0;
            }
          }
        }
      }
    }
    // 列表
    .list {
      .onebox {
        margin-top: 40px;
        .texttop {
          margin-left: 40px;
          h4 {
            font-size: 24px;
            line-height: 30px;
            font-weight: 600;
          }
          p {
            margin-top: 10px;
            font-size: 16px;
          }
        }
        .imageStyle {
          padding: 20px;
          .button {
            font-size: 16px;
            color: #f09639;
            padding: 0 20px;
            border-radius: 20px;
            border: 1px solid #f09639;
            margin-bottom: 20px;
            display: inline-block;
          }
          img {
            width: 100%;
            min-height: 180px;
          }
        }
      }
    }
  }
}
</style>
