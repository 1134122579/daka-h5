<template>
  <div class="imagelist">
    <div style="height: 40px" id="tabTop"></div>
    <van-sticky @change="onstickyChange">
      <div class="main-content-tab">
        <van-tabs
          v-model="listQuery.label"
          :title-inactive-color="titleinactivecolor"
          :title-active-color="titleactivecolor"
          :color="titleactivecolor"
          :line-width="linewidth"
          ref="reftabs"
          @change="tabchange"
          title-class="tabStyle"
        >
          <van-tab v-for="(item, index) in typelist" :name="item.id" :title="item.name"> </van-tab>
        </van-tabs>
      </div>
    </van-sticky>
    <div class="content-img">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="getList"
        :immediate-check="false"
      >
        <div class="block-list">
          <div class="imgonesrtle" v-for="(imgItem, index) in list">
            <img :src="imgItem.url + '?imageView2/3/w/300'" @click="ImagePreviewClick(index)" />
          </div>
        </div>
      </van-list>
    </div>
    <div class="bottom wow fadeInUp">
      <img src="../../assets/bottom-logo.png" alt="" />
      <p>做年轻人喜爱的一切</p>
      <p>有趣的灵魂在这里遇见</p>
    </div>
    <div class="meun">
      <!-- <quick-menu :menu-count="count" :icon-class="icons" :menu-url-list="list"> </quick-menu> -->
    </div>
    <!-- 返回 -->
    <div class="button" @click="goHome">
      <van-icon name="wap-home-o" size="20" color="#fff" />
    </div>
  </div>
</template>

<script>
import { ImagePreview } from 'vant'
import { setShareInfo } from '@/utils/share'

import { getImage } from '@/api/user'
// import quickMenu from 'vue-quick-menu'
// import 'font-awesome/css/font-awesome.min.css'
export default {
  //   components: {
  //     quickMenu
  //   },
  data() {
    return {
      //   count: 4,
      //   icons: ['fa fa-github', 'fa fa-comment', 'fa fa-code', 'fa fa-envelope'],
      //   list: ['http://jd.com', 'http://jd.com', 'http://jd.com', 'http://jd.com'],
      //   backgroundColor: '#42A5F5',
      //   color: '#eee',
      //   position: 'bottom-right',
      //   isOpenNewTab: false,
      is_dk: false,
      titleinactivecolor: '#ccc',
      titleactivecolor: '#333',
      linewidth: '20px',
      list: [],
      typelist: [
        {
          id: '',
          name: '全部'
        },
        {
          id: 1,
          name: '精华'
        },
        {
          id: 2,
          name: '建筑'
        },
        {
          id: 3,
          name: '景观'
        },
        {
          id: 4,
          name: '空间'
        }
      ],
      finished: false,
      loading: false,
      listQuery: {
        page: 1,
        label: ''
      }
    }
  },
  created() {
    this.getList()
    const wxConfig = {
      title: '天空之橙·Design｜建筑·空间·景观·运营·图库',
      url: location.href,
      desc: '',
      link: window.location.origin + window.location.pathname,
      imgUrl: 'http://api.skyorange.cn/logo.jpg'
    }
    setShareInfo(wxConfig)
  },
  methods: {
    onstickyChange(isFixed) {
      this.$refs['reftabs'].resize()
    },
    ImagePreviewClick(index) {
      console.log(index)
      const imglist = this.list.map(item => item.url)
      ImagePreview({
        images: imglist,
        startPosition: index
      })
    },
    tabchange(name, title) {
      this.listQuery.page = 1
      this.finished = false
      this.scrollIntoView('#tabTop')
      this.getList()
    },
    scrollIntoView(id) {
      this.$el.querySelector(id).scrollIntoView({
        behavior: 'smooth', // 平滑过渡
        block: 'start' // 上边框与视窗顶部平齐。默认值
      })
    },
    getList() {
      this.loading = true
      getImage(this.listQuery).then(res => {
        if (this.listQuery.page == 1) {
          this.list = res.data
        } else {
          this.list = this.list.concat(res.data)
        }
        // 加载完成
        this.listQuery.page++
        this.loading = false
        // 全部加载完毕
        if (res.data.length <= 0) {
          this.finished = true
        }
      })
    },
    goHome() {
      this.$router.replace({ path: '/' })
    }
  }
}
</script>

<style lang="scss">
.imagelist {
  overflow: hidden;
  position: relative;
  z-index: 1;
  background: Rgba(0, 0, 0, 0);
  min-height: 100vh;
  box-sizing: border-box;
  padding: 0 18px 40px;
  &::before {
    content: '';
    border-radius: 50%;
    width: 120px;
    height: 120px;
    overflow: hidden;
    position: fixed;
    top: -60px;
    z-index: -1;
    right: -60px;
    background: radial-gradient(circle, #1ec7a8, #3fe4c6, #9cebdf);
  }
  .block-list {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    padding-left: 8px;
    .imgonesrtle {
      width: 102px;
      height: 100px;
      flex-shrink: 0;
      margin-right: 8px;
      margin-bottom: 8px;
      border-radius: 6px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    }
  }
  .content-img {
    margin-top: 18px;
  }
  .bottom {
    //   display: flex;
    padding: 20px 0;
    text-align: center;
    img {
      width: 40%;
      margin-bottom: 6px;
    }
    p {
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
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #767676;
    box-shadow: 0 0 8px #767676;
  }
}
</style>
