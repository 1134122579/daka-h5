<template>
  <div id="logoStyle">
    <van-image class="imageStyle" src="http://tccdn.greatorange.cn/SKY/20210722144751/24/hz.jpg" fit="fill"></van-image>
    <div class="logoStyle">
      <div class="left" v-if="titleShow" @click="goAbout">关于我们</div>
      <div v-if="!titleShow"></div>
      <!-- <div class="right" @click="isPopup">三</div> -->
    </div>
    <van-popup
      get-container="#logoStyle"
      v-model="show"
      class="StylePopup"
      :close-on-click-overlay="false"
      :transition-appear="true"
      overlay-class="overlayStyle"
      closeable
    >
      <div class="list">
        <h4 class="title" v-for="(item, index) in textList" :key="item.id" @click="goPage(item)">
          {{ item.title }}
        </h4>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  // props: ['titleShow', 'textList'],
  props: {
    titleShow: {
      type: Boolean,
      default: true
    },
    textList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      show: false,
      list: [
        {
          id: 1,
          title: ' 企业介绍'
        },
        {
          id: 2,
          title: '集团架构'
        },
        {
          id: 3,
          title: '团队介绍'
        },
        {
          id: 4,
          title: '获奖情况'
        }
      ]
    }
  },
  watch: {
    $route(to, from) {
      if (to.query.id != from.query.id) {
        this.id = to.query.id
        this.$router.go(0)
      }
    }
  },
  methods: {
    goAbout() {
      console.log(1)
      this.$router.push({
        path: '/about'
      })
    },
    isPopup() {
      this.show = !this.show
    },
    goPage(data) {
      const { id } = data
      this.$router.push({
        path: '/AboutContent',
        query: {
          id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#logoStyle {
  position: fixed;
  top: 0;
  z-index: 3;
  width: 100%;
  .imageStyle {
    width: 100%;
    height: 100%;
  }
}
.logoStyle {
  position: absolute;
  top: 0;
  // background: #fff;

  color: #262626;
  color: #fff;
  @include flexbox(space-between, center);
  box-sizing: border-box;
  .left {
    font-size: 18px;
    padding: 10px 0;
    font-weight: 600;
    padding-left: 30px;
    border-bottom: 4px solid #fe9526;
    // text-shadow: 1px 4px 2px #ccc;
  }
  .right {
    flex-shrink: 0;
    font-size: 18px;
    padding: 14px 0;
    font-weight: 600;
    width: 26%;
    text-align: center;
    background: #fe9526;
  }
}
.StylePopup {
  background: rgba(255, 255, 255, 0.3);
  width: 100%;
  height: 100%;
  .list {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
      text-align: center;
      margin-bottom: 40px;
      font-size: 28px;
      color: #fff;
    }
  }
}
</style>
