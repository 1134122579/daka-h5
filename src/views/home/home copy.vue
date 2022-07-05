<template>
  <div class="homepage">
    <!-- 头部 -->
    <div class="header" id="tabTop">
      <!-- 头像 -->
      <div class="header-image">
        <!-- <img
          src="https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eobpsN46APV89W3j2eaOJU6QCdfOernzbdChtPJDPBTll8Gl1xWaRKczWUicaQxCSEGOQe1C5rvKHQ/0"
          alt=""
        /> -->
        <img src="@/assets/logo.png" alt="" />
      </div>
      <!-- 个人信息 -->
      <div class="user-info">
        <!-- <div class="user-name">陈嵩 | 盛视天橙™天空之橙</div> -->
        <div class="user-name">盛视天橙 DESIGN</div>
        <div class="user-desc">建筑丨空间丨景观丨设计丨运营</div>
      </div>
    </div>
    <!-- 内容 -->
    <div class="main">
      <div class="main-header">
        <ul class="flexbetween">
          <li @click="onDk" :style="is_dk && 'color:#3fe4c6'">
            <i class="iconfont icon-sign icon-size"></i>
            <p>{{ is_dk ? '已打卡' : '打卡' }}</p>
          </li>
          <li @click="goImagepage">
            <i class="iconfont icon-tuku icon-size"></i>
            <p>图库</p>
          </li>
          <li @click="goAbout">
            <i class="iconfont icon-hezuo icon-size"></i>
            <p>合作</p>
          </li>
          <li @click="onshare">
            <i class="iconfont icon-fenxiang icon-size"></i>
            <p>分享</p>
          </li>
        </ul>
      </div>
      <div class="main-content">
        <van-sticky>
          <div class="main-content-tab">
            <van-tabs
              v-model="listQuery.label"
              :title-inactive-color="titleinactivecolor"
              :title-active-color="titleactivecolor"
              :color="titleactivecolor"
              :line-width="linewidth"
              @change="tabchange"
              title-class="tabStyle"
            >
              <van-tab v-for="(item, index) in typelist" :name="item.id" :title="item.name"> </van-tab>
            </van-tabs>
          </div>
        </van-sticky>
        <!-- 列表 -->
        <div class="man-list">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="getList"
            :immediate-check="false"
          >
            <div class="block-style" @click="goDetail(item)" v-for="(item, index) in list">
              <div class="user-headerimage">
                <i class="iconfont icon-huangguan huangguanstyle"></i>
                <img :src="item.headimgurl" alt="" />
              </div>
              <div class="block-content">
                <div class="block-user-info">
                  <div class="block-name">{{ item.nickname }}</div>
                  <div class="block-time">{{ item.create_time }}</div>
                </div>
                <!-- 文本内容 -->
                <div class="block-text">
                  {{ item.title }}
                </div>
                <!-- 图片 -->
                <div class="block-list">
                  <div class="imgonesrtle" v-for="(imgItem, index) in item.imgs">
                    <img :src="imgItem + '?imageView2/3/w/300'" />
                  </div>
                </div>
                <!-- 操作 -->
                <div class="block-button" @click.stop="stopClick">
                  <i
                    :class="zanlist.includes(item.id) ? 'iconfont icon-dianzan_s colorRed ' : 'iconfont icon-zan'"
                    @click="zanClick(item.id)"
                  ></i>
                  <i class="iconfont icon-duihuaqipao"></i>
                </div>
              </div>
            </div>
          </van-list>
        </div>
      </div>
    </div>
    <div class="bottom wow fadeInUp">
      <img src="../../assets/bottom-logo.png" alt="" />
      <p>做年轻人喜爱的一切</p>
      <p>有趣的灵魂在这里遇见</p>
    </div>
    <div class="button" @click="goAdd">
      <van-icon name="plus" size="20" color="#fff" />
    </div>
    <!-- 分享提示 -->
    <van-popup
      v-model="isshareShow"
      :close-on-popstate="true"
      position="top"
      :style="{ maxHeight: '100%', background: 'rgba(0,0,0,0)' }"
    >
      <img
        style="width: 100%; box-sizing: border-box; padding: 20px 20px 56px 144px"
        src="@/assets/fx.png"
        alt=""
        @click="
          () => {
            isshareShow = false
          }
        "
      />
    </van-popup>
  </div>
</template>

<script>
import { getPyq } from '@/api/user'
import { formatTime } from '@/utils'
import { setShareInfo } from '@/utils/share'

export default {
  data() {
    return {
      is_dk: false,
      titleinactivecolor: '#ccc',
      titleactivecolor: '#333',
      linewidth: '20px',
      list: [],
      iszan: false,
      isshareShow: false,
      loading: false,
      finished: false,
      listQuery: {
        label: '',
        page: 1
      },
      zanlist: [],
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
        // {
        //   id: 6,
        //   name: ''
        // }
      ]
    }
  },
  created() {
    const wxConfig = {
      title: '天空之橙·Design｜建筑·空间·景观·运营',
      url: location.href,
      desc: '',
      //   link: location.href,
      link: window.location.href,

      imgUrl: 'http://api.skyorange.cn/logo.jpg'
    }
    setShareInfo(wxConfig)
    this.getList()
  },
  methods: {
    goAdd() {
      this.$router.push('/add')
    },
    golabel() {
      this.$router.replace('/label')
    },
    goAbout() {
      this.$router.push({ path: '/about' })
    },
    goImagepage() {
      this.$router.push({ path: '/imagelist' })
    },
    scrollIntoView(id) {
      console.log(this.$el.querySelector(id))
      this.$el.querySelector(id).scrollIntoView({
        behavior: 'smooth', // 平滑过渡
        block: 'start' // 上边框与视窗顶部平齐。默认值
      })
    },
    stopClick(e) {
      console.log(e)
    },
    zanClick(id) {
      if (this.zanlist.includes(id)) {
        this.zanlist = this.zanlist.filter(item => item != id)
      } else {
        this.zanlist.push(id)
      }
    },
    tabchange(name, title) {
      this.listQuery.page = 1
      this.finished = false
      this.scrollIntoView('#tabTop')
      this.getList()
    },
    onDk() {
      if (!this.is_dk) {
        this.is_dk = true
        this.$toast.success('打卡成功')
      }
    },
    onshare() {
      this.isshareShow = true
    },
    getList() {
      this.loading = true
      getPyq(this.listQuery).then(res => {
        res.data = res.data.map(item => {
          item['create_time'] = formatTime(+new Date(item['create_time'].replaceAll('-', '/')))
          return item
        })

        if (this.listQuery.page == 1) {
          this.list = res.data
        } else {
          this.list = this.list.concat(res.data)
        }
        // 加载状态结束
        this.loading = false
        this.listQuery.page++
        // 数据全部加载完成
        if (res.data.length <= 0) {
          this.finished = true
        }
      })
    },
    goDetail(data) {
      this.$router.push({
        path: '/detail',
        query: {
          id: data.id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.colorRed {
  color: #fc5531;
  font-size: 24px;
}
.homepage {
  position: relative;
  background: rgba(0, 0, 0, 0);
  overflow: hidden;
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 320px;
    background: #ccc url('../../assets/bg.jpg') no-repeat;
    background-size: 100% cover;
    z-index: -1;
    // animation: fadenum12 30s ;
    animation-name: fadenum12;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 50s;
  }
  //   background-size: cover;
  .header {
    background: rgba(0, 0, 0, 0);
    height: 210px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    padding-right: 10px;

    .header-image {
      width: 60px;
      height: 60px;
      //   border-radius: 50%;
      overflow: hidden;
      margin-left: 25px;
      flex-shrink: 0;
      img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
      }
    }
    .user-info {
      margin-left: 15px;
      color: #fff;
      .user-name {
        font-size: 18px;
      }
      .user-desc {
        font-size: 12px;
        @include textoverflow(2);
      }
    }
  }

  .main {
    .main-header {
      padding: 10px 0;
      background: rgba(0, 0, 0, 0.4);
      color: #fff;
      border-radius: 10px 10px 0 0;
      ul {
        justify-content: space-around;
        font-size: 12px;
        li {
          width: 40px;
          text-align: center;
          .icon-size {
            font-size: 22px;
          }
          p {
            text-align: center;
          }
        }
      }
    }
    .main-content {
      background: #fff;
      .main-content-tab {
        .van-tabs {
          .van-tabs__line {
            bottom: 0.5rem;
          }
          .van-tab {
            font-weight: 700;
          }
        }
      }
      .man-list {
        padding: 10px 20px;
        .block-style {
          padding: 14px 0;
          width: 100%;
          display: flex;
          .user-headerimage {
            width: 40px;
            height: 40px;
            flex-shrink: 0;
            border-radius: 50%;
            position: relative;
            margin-right: 10px;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              display: block;
              border-radius: 50%;
            }
            .huangguanstyle {
              font-size: 20px;
              flex: 1;
              color: burlywood;
              position: absolute;
              top: -20px;
              left: 0;
              right: 0;
              margin: 0 auto;
              text-align: center;
            }
          }
          .block-content {
            flex: 1;
            .block-user-info {
              color: #555454;
              font-size: 16px;
            }
            .block-time {
              font-size: 12px;
              color: #d2d2d2;
            }
            .block-text {
              font-size: 16px;
              margin-top: 6px;
              color: #555454;
              @include textoverflow(5);
            }
            .block-list {
              display: flex;
              justify-content: flex-start;
              align-items: flex-start;
              flex-wrap: wrap;
              .imgonesrtle {
                margin-top: 4px;
                margin-right: 4px;
                flex-shrink: 0;
                width: 90px;
                height: 90px;
                img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  display: block;
                }
              }
            }
            .block-button {
              margin-top: 10px;
              i {
                font-size: 20px;
                margin-right: 34px;
              }
            }
          }
        }
      }
    }
  }
  .bottom {
    //   display: flex;
    background: #fff;

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
    z-index: 22;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #767676;
    box-shadow: 0 0 8px #767676;
  }
}
</style>
