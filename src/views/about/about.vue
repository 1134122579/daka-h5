<template>
  <div class="About">
    <!-- logo -->
    <AboutHeader :textList="AboutList" />
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
    <div class="ArrList">
      <div
        class="listStyle"
        v-for="(item, index) in AboutList"
        :key="index"
        :style="item.cover | bgbFilter"
        @click="goPage(item)"
      >
        <div class="text">
          <h3>{{ item.title }}</h3>
          <p class="descStyle">
            {{ item.desc }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SwiperList from '@/components/Swiper.vue'
import AboutHeader from '@/components/AboutHeader'

import { getAbout } from '@/api/user'
export default {
  components: {
    // SwiperList
    AboutHeader
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
      phone: 1843854147,
      swiperList: [1, 2, 3, 4],
      AboutList: []
    }
  },
  created() {
    this.getFlimClass()
  },

  methods: {
    goPage(data) {
      const { id } = data
      this.$router.push({
        path: '/AboutContent',
        query: {
          id
        }
      })
    },
    // 获取数据
    getFlimClass() {
      console.log(1)
      getAbout().then(res => {
        console.log(res)
        this.AboutList = res.data
        localStorage.setItem('ABOUTLIST', JSON.stringify(res.data))
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
  // 目录
  .ArrList {
    margin-top: 14%;
  }
  .listStyle {
    height: 200px;
    background-size: 100% 100%;
    box-sizing: border-box;
    margin: 0 20px;
    margin-top: 20px;
    background-repeat: no-repeat;
    @include flexbox(center, center, column);
    .text {
      margin: 100px 0;
      background: rgba(0, 0, 0, 0.4);
      color: #fff;
      padding: 10px 20px;
      box-sizing: border-box;
      width: 80%;
      border-radius: 5px;
      h3 {
        font-size: 18px;
      }
      p {
        line-height: 22px;
        text-indent: 30px;
      }
      .descStyle {
        @include textoverflow(4);
      }
    }
  }
}
</style>
