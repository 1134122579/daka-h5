<template>
  <div class="label">
    <div class="header-top">
      <img src="../../assets/logoname.png" alt="" />
      <span>SKY ORANHE DESIGN</span>
    </div>
    <div class="header wow fadeInUp">
      <van-swipe class="header" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <div class="content">
            <p>设计领衔·跨界共赢</p>
            <!-- <p>设计年轻人喜爱的一切</p> -->
            <p>Leading Design and Crossover Cooperation</p>
            <!-- <p>SKY ORANGE,design everything young people love</p> -->
          </div></van-swipe-item
        >
        <van-swipe-item>
          <div class="content">
            <p>设计领衔·跨界共赢</p>
            <!-- <p>设计年轻人喜爱的一切</p> -->
            <p>Leading Design and Crossover Cooperation</p>
            <!-- <p>SKY ORANGE,design everything young people love</p> -->
          </div></van-swipe-item
        >
        <van-swipe-item>
          <div class="content">
            <p>设计领衔·跨界共赢</p>
            <!-- <p>设计年轻人喜爱的一切</p> -->
            <p>Leading Design and Crossover Cooperation</p>
            <!-- <p>SKY ORANGE,design everything young people love</p> -->
          </div></van-swipe-item
        >
      </van-swipe>
    </div>
    <div class="main">
      <div class="label-text wow fadeInUp">网址导航</div>
      <div class="label-list">
        <ul>
          <li v-for="(item, index) in list" :key="index" class="wow fadeInUp" @click="goPath(item.url)">
            <div class="text">
              {{ item.title }}
            </div>
            <div class="desc">
              <p>
                {{ item.desc }}
              </p>
            </div>
            <div class="bg">
              <img :src="item.cover" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="bottom wow fadeInUp">
      <img src="../../assets/bottom-logo-e.png" alt="" />
      <p>做年轻人喜爱的一切</p>
      <p>有趣的灵魂在这里遇见</p>
    </div>
    <!-- 联系我们 -->
    <div class="button" @click="onpoup">
      <van-icon name="phone-o" size="20" color="#fff" />
    </div>
    <!-- t弹窗 -->
    <van-popup v-model="isshow">
      <div class="popupSrtyle">
        <div
          class="close"
          @click="
            () => {
              isshow = false
            }
          "
        >
          <van-icon name="cross" size="14" />
        </div>
        <p>合作咨询？添加好友立即联系</p>
        <p class="mini">长按识别二维码</p>
        <div class="codestyle">
          <img src="../../assets/code.jpg" alt="" />
        </div>
        <p>盛视天橙DESIGN</p>
        <p><a href="tel:021-54561178">021-54561178</a></p>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { setShareInfo } from '@/utils/share'
import { getNav } from '@/api/user'

export default {
  data() {
    return {
      isshow: false,
      list: []
    }
  },
  created() {
    this.getList()
  },
  mounted() {
    const wxConfig = {
      title: '天空之橙·Design｜网站导航',
      url: location.href,
      desc: '',
      link: window.location.href,
      imgUrl: 'http://api.skyorange.cn/logo.jpg'
    }
    setShareInfo(wxConfig)
  },
  methods: {
    onpoup() {
      this.isshow = true
    },
    getList() {
      getNav().then(res => {
        console.log(res)
        this.list = res.data
        this.createdWOW()
      })
    },
    goPath(path) {
      window.open(path)
    },
    createdWOW() {
      this.$nextTick(() => {
        new this.$wow.WOW({ boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: true, live: true }).init()
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.label {
  padding: 8px;
  .header-top {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    // padding: 4px 0;
    padding: 5px 0;
    img {
      height: 18px;
      display: block;
    }
    span {
      color: #787878;
      font-size: 12px;
      transform: scale(0.7);
      line-height: 1.4;
    }
  }
  .header {
    width: 100%;
    position: relative;
    z-index: 1;
    height: 210px;
    color: #fff;
    font-size: 12px;
    .content {
      box-sizing: border-box;
      padding: 90px 20px 24px 18px;
      p {
        padding-top: 9px;
      }
      &::after {
        position: absolute;
        z-index: -1;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('../../assets/myproper.jpg') no-repeat;
        background-size: 100% 100%;
        border-radius: 8px;
      }
    }

    img {
      width: 100%;
      border-radius: 6px;
    }
  }
  .main {
    .label-text {
      font-size: 16px;
      padding: 10px;
    }
    .label-list {
      width: 100%;
      ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-content: flex-start;
        flex-wrap: wrap;
        li {
          margin-bottom: 10px;
          width: 49%;
          height: 110px;
          overflow: hidden;
          position: relative;
          z-index: 1;
          border-radius: 8px;
          .text {
            padding: 20px 20px 0;
            font-size: 14px;
            color: #fff;
          }
          .desc {
            padding: 10px 20px;
            font-size: 12px;
            color: #fff;
            p {
              @include textoverflow(2);
            }
          }
          .bg {
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;

            height: 120px;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
  .bottom {
    //   display: flex;
    padding: 20px 0;
    text-align: center;
    img {
      width: 35%;
      margin-bottom: 6px;
    }
    p {
      font-size: 12px;
      transform: scale(0.9);
      color: #787878;
      line-height: 1.8;
    }
  }
  .button {
    position: fixed;
    bottom: 60px;
    right: 23px;
    width: 50px;
    height: 50px;
    display: flex;
    z-index: 22;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #767676;
    box-shadow: 0 0 8px #767676;
  }
  .van-popup {
    border-radius: 8px;
    overflow: initial;
  }
  .popupSrtyle {
    width: 280px;
    min-height: 280px;
    box-sizing: border-box;
    padding: 10px;
    text-align: center;
    border-radius: 8px;
    font-size: 14px;
    p {
      a {
        color: #787878;
      }
    }
    .mini {
      color: #ccc;
      font-size: 12px;
    }
    .codestyle {
      background: #ccc;
      height: 130px;
      width: 130px;
      margin: 20px auto;
      //   border-bottom: 1px solid #ccc;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .close {
      position: absolute;
      top: -10px;
      right: -10px;
      width: 20px;
      height: 20px;
      background: #333;
      text-align: center;
      line-height: 20px;
      border-radius: 50%;
      color: #fff;
      padding: 4px;
    }
  }
}
</style>
