<template>
  <div class="About">
    <!-- logo -->
    <!-- <div class="logoStyle">
      <div class="left">
        <van-image width="50" height="50" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <div class="right">
        {{ phone }}
      </div>
    </div> -->

    <!-- <SwiperList class="AboutSwiper" :swiperList="swiperList" /> -->
    <!-- 目录 -->
    <div class="topImage">
      <van-image :src="topImageUrl"></van-image>
    </div>
    <div class="demeList">
      <h3 class="title">天空之橙</h3>
      <div
        class="listStyle"
        v-for="(item, index) in list"
        :key="index"
        :style="item.cover | bgbFilter"
        @click="go(item.to)"
        :id="item.M"
      >
        <div class="text">
          <h3>{{ item.name }}</h3>
          <!-- <p>+</p> -->
          <p>
            <img style="width: 100%; height: 100%" src="../../assets/jiahao.png" alt="" />
          </p>
          <!-- <p>
            {{ item.desc }}
          </p> -->
        </div>
        <span class="borderB"></span>
      </div>
    </div>
    <div class="demeList">
      <h3 class="title">案例展示</h3>
      <div
        class="listStyle"
        v-for="(item, index) in AboutList"
        :key="index"
        :style="item.cover | bgbFilter"
        @click="goPage(item)"
        :id="item.id"
      >
        <div class="text">
          <h3>{{ item.name }}</h3>
          <p>
            <img style="width: 100%; height: 100%" src="../../assets/jiahao.png" alt="" />
          </p>
          <!-- <p>
            {{ item.desc }}
          </p> -->
        </div>
        <span class="borderB"></span>
      </div>
    </div>
  </div>
</template>
<script>
import SwiperList from '@/components/Swiper.vue'
import { getFlimClass } from '@/api/user'
export default {
  components: {
    // SwiperList
  },
  filters: {
    bgbFilter(data) {
      console.log(data)
      return data ? ' background-image:url("' + data + '")' : 'background:#ccc'
      // background:#ccc
    }
  },
  data() {
    return {
      // topImageUrl: require('@/assets/lookDemo.jpg'),
      topImageUrl: 'http://tccdn.greatorange.cn/SKY/20210813150411/387/lookDemo.jpg',
      phone: 1843854147,
      swiperList: [1, 2, 3, 4],
      AboutList: [],
      list: [
        {
          to: '/city',
          M: 'city',
          cover: 'http://tccdn.greatorange.cn/SKY/20210816155614/761/城市名片.png',
          name: '城市更新+'
        },
        {
          to: '/space',
          M: 'space',
          cover: 'http://tccdn.greatorange.cn/guangw_24.png',
          name: '双创空间'
        }
      ]
    }
  },
  created() {
    this.getFlimClass()
  },
  mounted() {
    this.goPostion()
  },

  methods: {
    // 创建带锚点的链接
    goPostion() {
      const to = localStorage.getItem('ROUTERID')
      const ROUTERID = JSON.parse(to)
      console.log('锚点====', ROUTERID)
      const value = '#' + ROUTERID
      this.goAnchor(value)
      // console.log('锚点====', to.split('/')[1])
    },
    goAnchor(selector) {
      console.log('锚点====', selector)
      document.querySelector(selector).scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })
    },
    go(to) {
      this.$router.push({
        path: to
      })
      localStorage.setItem('ROUTERID', JSON.stringify(to.M))
    },
    goPage(data) {
      const { id } = data
      this.$router.push({
        path: '/DemoContent',
        query: {
          id
        }
      })
      localStorage.setItem('ROUTERID', JSON.stringify(id))
    },
    // 获取数据
    getFlimClass() {
      console.log(1)
      getFlimClass().then(res => {
        console.log(res)
        this.AboutList = res.data
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/mixin.scss';
.About {
  height: 100%;
  position: relative;
  padding-bottom: 0.033rem;
  // background: olivedrab;
  .AboutSwiper {
    height: 100%;
  }
  // logo
  .logoStyle {
    position: fixed;
    top: 0%;
    width: 100%;
    // background: red;
    color: #fff;
    @include flexbox(space-between, center);
    padding: 10px;
    box-sizing: border-box;
    .right {
      font-size: 20px;
    }
  }
  .demeList {
    .title {
      width: 34%;
      text-align: center;
      margin: 20px auto;
      font-size: 20px;
      color: #666666;
      border-bottom: 3px solid #f29e45;
    }

    .listStyle {
      // width: 100%;
      height: 200px;
      margin: 40px 20px;
      border-radius: 20px;
      background-size: 100% 100%;
      margin-top: 10px;
      background-repeat: no-repeat;
      // @include flexbox(center, center, column);

      position: relative;
      .text {
        border-radius: 0 0 20px 20px;
        position: absolute;
        overflow: hidden;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
        color: #fff;
        @include flexbox(space-between, center);
        padding: 10px 20px;
        box-sizing: border-box;
        h3 {
          font-size: 18px;
        }
        p {
          // border: 3px solid #fff;
          // border-radius: 50%;
          width: 34px;
          height: 34px;
          background: #fff;
          padding: 3px;
          box-sizing: border-box;
          border-radius: 50%;
          // text-align: center;
          // line-height: 34px;
          // // background: #fe9526;
          // font-size: 40px;
        }
      }
    }
  }
  // 目录
}
.borderB {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: block;
  width: 30%;
  border-bottom: 3px solid #f29e45;
  margin: auto;
  margin-bottom: -20px;
}
</style>
