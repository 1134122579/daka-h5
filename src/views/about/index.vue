<template>
  <div class="aboutpage">
    <!-- 头部 -->
    <div class="header" id="tabTop">
      <!-- 个人信息 -->
      <div class="user-info">
        <div class="user-name">盛视天橙 DESIGN</div>
        <div class="user-desc">建筑丨空间丨景观丨设计丨运营</div>
      </div>
    </div>
    <!-- 内容 -->
    <div class="main">
      <van-sticky @change="stickychange">
        <div class="main-header" :style="isFixed && 'align-items: center;box-shadow: 0 1px 20px #ccc'">
          <!-- 头像 -->
          <div class="header-image">
            <img src="../../assets/logo.png" alt="" />
          </div>
          <!-- 个人信息 -->
          <div class="user-info">
            <div class="user-name">
              <div class="user-l">
                <div :style="!isFixed && 'padding-top:5px'">
                  <p>盛视天橙</p>
                  <p class="English">DESIGN</p>
                </div>
                <!-- <van-tag type="warning" color="#FFA34B">星主</van-tag> -->
              </div>
              <div class="user-r" @click="goGZH">关注我们</div>
            </div>
            <div class="user-desc" v-show="!isFixed">
              <p>年轻 · 时尚 · 新锐 · 跨界</p>
              <p>做年轻人喜爱的一切</p>
            </div>
          </div>
        </div>
      </van-sticky>

      <div class="main-content">
        <div class="block">
          <div class="block-header">
            <p>关于我们</p>
            <a href="tel:021-54561178">
              <span><i class="iconfont icon-qizhi-"></i> 投诉</span></a
            >
          </div>
          <div class="block-content">
            <h6>盛视天橙 DESIGN</h6>
            <p style="margin: 10px 0">「有趣的灵魂在这里遇见」</p>
            <p>
              上海盛视天橙传媒股份有限公司（盛视天橙：837461.OC）成立于2009年，隶属于天空之橙控股集团。是一家集规划策划、建筑规划、空间设计、文创文旅、运营管理、视频制作、技术开发等领域为一体的科技文创企业，国家认证高新技术企业、上海文化创意产业标杆企业。
            </p>
            <h6>服务内容</h6>
            <p>建筑设计丨空间设计丨景观设计</p>
            <p>文创文旅丨城市更新丨智慧城市</p>
            <p>运营管理丨视频制作丨数字开发</p>
            <!-- 图片 -->
            <div class="imagestyle">
              <img src="@/assets//about.jpg" alt="" />
            </div>
            <h6>设计宗旨</h6>
            <p>未来城市：与年轻人同行</p>
            <p>用设计留住年轻人，赋予城市新生命</p>
          </div>
          <van-divider :style="{ color: '#d2d2d2', borderColor: '#d2d2d2', padding: '16px 0', margin: '0 8px' }" />
          <div class="block-bottom">
            <ul class="">
              <li>
                <p style="color: #0ab18f">2009年</p>
                <p class="tag">成立</p>
              </li>
              <li>
                <p>500+</p>
                <p class="tag">设计师资源</p>
              </li>
              <li>
                <p>1000+</p>
                <p class="tag">客户数</p>
              </li>
            </ul>
          </div>
          <van-divider :style="{ color: '#d2d2d2', borderColor: '#d2d2d2', padding: '16px 0', margin: '0 8px' }" />
          <div class="bottomtext">
            <p class="tel">
              <span class="iconfont icon-dianhua" style="margin-right: 5px"></span
              ><a href="tel:021-54561178">021-54561178</a>
            </p>
            <p>上海丨深圳丨济南丨武汉丨成都丨西安丨太原丨合肥丨长沙</p>
            <p>贵阳丨苏州丨嘉兴丨莆田丨扬州丨滨州丨淄博丨芜湖</p>
            <p>周口丨阜阳</p>
          </div>
        </div>
      </div>
      <!-- 图片
      <div class="imagestyle">
        <img src="@/assets//about.jpg" alt="" />
      </div> -->

      <!-- 按钮 -->
      <div class="button-bottom">
        <van-button color="#FE7A53" block @click="onclick" style="border-radius: 5px"> 在线联系 </van-button>
        <van-button color="#767676" style="width: 80px; border-radius: 5px; margin-left: 3px" @click="goHome"
          >首页
        </van-button>
      </div>
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
        <p>建筑丨空间丨景观丨设计</p>
      </div>
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
      isFixed: false,
      isshow: false,
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
    this.getList()
  },
  methods: {
    goHome() {
      this.$router.replace({ path: '/' })
    },
    onclick() {
      this.isshow = true
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
      this.$router.replace({
        path: '/detail',
        query: {
          id: data.id
        }
      })
    },
    stickychange(isFixed) {
      this.isFixed = isFixed
    },
    goGZH() {
      window.open(
        'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA4NTA2OTAyNA==&scene=110#wechat_redirect'
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.colorRed {
  color: #fc5531;
  font-size: 24px;
}
.aboutpage {
  position: relative;
  background: rgba(0, 0, 0, 0);
  overflow: hidden;
  z-index: 1;
  padding-bottom: 100px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 320px;
    background: #ccc url('../../assets/bg.jpg') no-repeat;
    background-size: 100% cover;
    z-index: -1;
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
    align-items: flex-end;
    box-sizing: border-box;
    padding-right: 10px;
    .user-info {
      margin-left: 20px;
      color: #fff;
      padding: 20px 0;
      .user-name {
        // text-indent: 8px;
        letter-spacing: 4px;
        font-size: 22px;
        line-height: 2;
        font-weight: 600;
      }
      .user-desc {
        font-size: 12px;
        // @include textoverflow(2);
      }
    }
  }

  .main {
    background: #eee;
    .main-header {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      box-sizing: border-box;
      padding: 14px 0;
      background: #fff;
      //   min-height: 80px;
      .header-image {
        width: 38px;
        height: 38px;
        // border-radius: 50%;
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
        margin: 0 15px;
        flex: 1;
        background: #fff;
        .user-name {
          width: 100%;
          box-sizing: border-box;
          font-size: 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .user-l {
            color: #171717;
            font-weight: 600;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            line-height: 1.2;
            div {
              letter-spacing: 4px;
              p {
              }
              .English {
                font-weight: 100;
                font-size: 12px;
                color: #3f3f3f;
              }
            }
            .van-tag {
              font-size: 12px;
              margin-left: 4px;
            }
          }
          .user-r {
            font-size: 12px;
            color: #fff;
            background: #0ab18f;
            padding: 2px 9px;
            text-indent: 2px;
            letter-spacing: 2px;
            border-radius: 30px;
          }
        }
        .user-desc {
          margin-top: 6px;
          font-size: 12px;
          color: #6e6969;
          //   @include textoverflow(2);
        }
      }
    }
    .main-content {
      background: #fff;
      .block {
        margin-top: 10px;
        box-sizing: border-box;
        padding: 14px 20px;
        .block-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          a {
            &:hover {
              text-decoration: initial;
            }
          }
          p {
            font-size: 16px;
            font-weight: 600;
          }
          span {
            color: #cecece;
          }
        }
        .block-content {
          padding: 10px 0;
          font-size: 14px;
          color: #3f3f3f;
          h6 {
            font-weight: normal;
            border-left: 6px solid #3f3f3f;
            line-height: 1;
            padding-left: 16px;
            margin: 14px 0;
          }
          p {
            line-height: 1.8;
          }
        }
        .block-bottom {
          ul {
            display: flex;
            justify-content: space-around;
            align-items: center;
            li {
              width: 30%;
              text-align: center;
              p {
                font-size: 16px;
              }
              .tag {
                font-size: 12px;
                color: #9f9c9c;
              }
            }
          }
        }
      }
    }
    .button-bottom {
      position: fixed;
      background: #fff;
      bottom: 0;
      width: 100%;
      padding: 18px;
      box-sizing: border-box;
      display: flex;
    }
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
  .imagestyle {
    background: #fff;
    height: auto;
    display: block;
    box-sizing: border-box;
    // padding: 16px 0;
    overflow: hidden;
    img {
      transform: scale(1.1);
      width: 100%;
    }
  }
  .bottomtext {
    font-size: 12px;
    color: #8e8a8a;
    text-align: center;
    line-height: 2;
    .tel {
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 1;
      padding: 6px 0;
      a {
        font-size: 14px;
        color: #8e8a8a;
      }
    }
  }
}
</style>
