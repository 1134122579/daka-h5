<template>
  <div class="swiperTempate">
    <swiper
      class="SwiperStyle"
      :options="swiperOption"
      :id="pid"
      :slides-per-view="3"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(item, index) in swiperList" :key="item.id" class="swiperStyleSon">
        <div class="content">
          <van-image class="imageStyle" :src="item.image"></van-image>

          <div class="buttonStyle" v-if="swiperList.length == index + 1" @click="goLook">
            <div>开启旅行</div>
          </div>

          <!-- <van-image src=""></van-image> -->
          <!-- <div class="text">Slide {{ index }} {{ item }}</div> -->
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper.scss'
export default {
  props: {
    pid: {
      type: Number,
      default: new Date().getTime()
    },
    swiperList: {
      type: Array,
      default: []
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      newTime: new Date(),
      swiperOption: {
        loop: false,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: true,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  methods: {
    goLook() {
      this.$router.push({
        path: '/about'
      })
    },
    onSwiper(swiper) {
      console.log(swiper)
    },
    onSlideChange() {
      console.log('slide change')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixin.scss';
.swiperTempate {
  height: 100%;
  .SwiperStyle {
    height: 100%;
    .swiperStyleSon {
      width: 100%;
      height: 100%;
      .content {
        position: relative;
        height: 100%;
        @include flexbox(space-between, center, column);
        .imageStyle {
          width: 100%;
          height: 100%;
        }
        .buttonStyle {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          background: #fe9526;
          color: #fff;
          box-sizing: border-box;
          border-radius: 40px;
          text-align: center;
          font-size: 20px;
          letter-spacing: 4px;
          margin: 0 20px;
          margin-bottom: 20px;
          padding: 10px;
          box-sizing: border-box;
        }
      }
      // background: red;
    }
  }
}
</style>
