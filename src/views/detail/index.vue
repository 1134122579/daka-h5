<template>
  <div class="detailpage">
    <div class="htmlcanvse" ref="htmlcanvse">
      <div class="title">来自天空之橙·Design | 空间设计</div>
      <div class="label">
        <p>建筑·空间·设计 的主题</p>
        <p class="time">{{ detail.create_time }}</p>
      </div>
      <van-divider :style="{ color: '#d2d2d2', borderColor: '#d2d2d2', margin: '0 8px' }" />
      <div class="content-text">
        {{ detail.title }}
      </div>
      <div class="content-imglist">
        <div class="imgstyle" v-for="(item, index) in detail.imgs">
          <img @click="ImagePreviewClick(index)" :src="item + '?imageView2/3/w/300'" alt="" />
        </div>
      </div>
      <van-divider :style="{ color: '#d2d2d2', borderColor: '#d2d2d2', padding: '16px 0', margin: '0 8px' }" />
      <!-- 横 -->
      <div class="h-imglist">
        <div class="h-img" v-for="(item, index) in detail.imgs">
          <img :src="item" @click="ImagePreviewClick(index)" alt="" />
        </div>
      </div>
      <!-- 二维码 -->
      <div class="codevue">
        <div class="desc">
          <p>天空之橙·DESIGN</p>
          <p class="desc-tip">跨界设计艺术与审美</p>
          <p class="desc-tip">建筑丨空间丨景观丨设计丨运营</p>
        </div>
        <div class="qrcode" ref="qrCodeUrl"></div>
      </div>
    </div>
    <!-- 广告位 -->
    <div class="h-advertInfo">
      <div class="h-img" v-for="(item, index) in detail.advertInfo" @click="goPath(item.skip_url)">
        <img :src="item.cover" alt="" />
      </div>
    </div>
    <!-- 返回 -->
    <div class="button share" style="bottom: 140px" @click="imageDown">
      <van-icon name="photo" size="20" color="#fff" />
    </div>
    <!-- 案件 -->
    <div class="button" @click="goHome">
      <van-icon name="wap-home-o" size="20" color="#fff" />
    </div>
    <van-popup v-model="show" style="border-radius: 10px">
      <div class="shareImage">
        <div class="lookImg">
          <!-- <img :src="imageUrl" alt="" srcset="" /> -->
          <van-image width="100%" class="vanimage" lazy-load :src="imageUrl" />
        </div>
        <div class="tip">长按图片保存至相册</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2'
import html2canvas from 'html2canvas'
import { getShareArticleDetails } from '@/api/user'
import { parseTime } from '@/utils'
import { ImagePreview } from 'vant'
import { setShareInfo } from '@/utils/share'
import { getUrlKey } from '@/utils/wxLoad'
export default {
  data() {
    return {
      show: false,
      detail: '',
      link: '',
      imageUrl: ''
    }
  },
  created() {
    this.getList()
  },
  mounted() {},
  methods: {
    creatQrCode() {
      var qrcode = new QRCode(this.$refs.qrCodeUrl, {
        text: 'http://api.skyorange.cn/designh5/', // 需要转换为二维码的内容
        width: 100,
        height: 100,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
      })
    },
    goPath(path) {
      window.open(path)
    },
    imageDown() {
      this.show = true
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 2500, // 持续展示 toast
        className: 'loadingstyle'
      })
      //   setTimeout(() => {
      //     this.$toast.clear()
      //   }, 1000)
      return
    },
    createdCanvse() {
      let htmlcanvse = this.$refs['htmlcanvse']
      this.$nextTick(() => {
        let config = {
          //   allowTaint: true,
          useCORS: true,
          scale: 1.2,
          onclone: ele => {
            console.log(ele, 'onclone')
            ele.querySelector('.codevue').style.display = 'flex'
          }
        }
        html2canvas(htmlcanvse, config).then(canvas => {
          let imageUrl = canvas.toDataURL('image/png') // 将canvas转成base64图片格式
          this.imageUrl = imageUrl
        })
      })
    },
    goHome() {
      this.$router.replace({ path: '/' })
    },
    ImagePreviewClick(index) {
      console.log(index)
      let that = this
      let ImagePreview = ImagePreview({
        images: this.detail.imgs,
        startPosition: index
        // closeable: true,
        // closeIconPosition: 'top-right',
        // asyncClose: true,
        // close: () => {
        //   console.log(123, ImagePreview)
        //   ImagePreview.close()
        // }
        // onClose: function (index, url) {
        //   //回调参数,官方文档解释的不是很清楚。。。
        //   //回调参数类型 url:{ index:Number(当前图片的索引值), url:当前图片的URL }
        //   var num = url.index,
        //     url_link = url.url
        //   console.log(index, url)
        // }
      })
      //   let after = getComputedStyle(document.querySelector('.van-image-preview__overlay'), ':after')
      //   console.log(
      //     after.getPropertyValue('content'),
      //     "  getComputedStyle(document.querySelector('.van-image-preview__overlay'), ':after')"
      //   )
      //   setTimeout(() => {
      //     ImagePreview.close()
      //   }, 2000)
    },

    onClose(ImagePreview) {
      console.log(111, ImagePreview)
      ImagePreview.close()
    },
    getList() {
      const article_id = this.$route.query.id
      if (!article_id) {
        this.$router.replace({ path: '/' })
      }
      this.isloading = true
      getShareArticleDetails({ article_id }).then(res => {
        const data = res.data
        data['create_time'] = parseTime(data['create_time'].replaceAll('-', '/'), '{y}/{m}/{d} {h}:{i}')
        this.detail = data
        this.isloading = false
        this.link = window.location.origin + window.location.pathname + '?id=' + data.id
        const wxConfig = {
          title: data.share_title || data.title,
          url: location.href,
          desc: data.desc || '',
          link: window.location.origin + window.location.pathname + '?id=' + data.id,
          imgUrl: data.imgs.length > 0 ? data.imgs[0] : 'http://api.skyorange.cn/logo.jpg'
        }
        this.creatQrCode()
        this.createdCanvse()
        setShareInfo(wxConfig)
      })
    }
  }
}
</script>
<style lang="scss">
.detailpage {
  //   圆
  .htmlcanvse {
    position: relative;
    padding: 30px 18px 0px;
    overflow-x: hidden;
    background: rgba(0, 0, 0, 0);
    box-sizing: border-box;
    z-index: 1;
    &::before {
      content: '';
      border-radius: 50%;
      width: 120px;
      height: 120px;
      overflow: hidden;
      position: absolute;
      top: -60px;
      z-index: -1;
      right: -60px;
      background: radial-gradient(circle, #1ec7a8, #3fe4c6, #9cebdf);
    }

    .title {
      font-size: 18px;
      font-weight: 600;
      color: #555454e0;
      padding: 0 8px;
      box-sizing: border-box;
    }
    .label {
      display: flex;
      justify-content: space-between;
      // border-bottom: 1px solid #d2d2d2;
      align-items: flex-end;
      margin-top: 10px;
      padding: 20px 0;
      margin: 0 8px;
      box-sizing: border-box;
      p {
        font-size: 14px;
        color: #93d7c6;
      }
      .time {
        font-size: 12px;
        color: #d2d2d2;
      }
    }
    .content-text {
      line-height: 2;
      font-size: 16px;
      padding: 20px 0;
      margin: 0 8px;
      color: #949292;
    }
    .content-imglist {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      padding-left: 8px;

      .imgstyle {
        flex-shrink: 0;
        //   background: #;
        height: 102px;
        width: 102px;
        margin-right: 6px;
        margin-bottom: 6px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .h-imglist {
      padding: 8px;
      overflow: hidden;
      .h-img {
        width: 100%;
        box-sizing: border-box;
        margin-bottom: 8px;
        img {
          width: 100%;
          object-fit: contain;
        }
      }
    }
  }
  .h-advertInfo {
    margin: 0 26px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    &::after {
      content: '广告';
      position: absolute;
      top: 4px;
      font-size: 12px;
      right: 4px;
      background: rgba(0, 0, 0, 0.4);
      color: #fff;
      padding: 2px 8px;
      border-radius: 4px;
    }
    .h-img {
      width: 100%;
      box-sizing: border-box;
      margin-bottom: 18px;
      img {
        width: 100%;
        object-fit: contain;
      }
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
  .share {
    background: #1ec7a8;
    box-shadow: 0 0 8px #1ec7a8;
  }
}
// .van-image-preview__overlay {
//   &::after {
//     content: '查看原图';
//     color: #fff;
//     background: rgba(255, 255, 255, 0.5);
//     padding: 4px 10px;
//     position: absolute;
//     bottom: 50px;
//     right: 30px;
//     border-radius: 5px;
//     z-index: 9999999;
//   }
// }
.codevue {
  display: none;
  justify-content: center;
  align-items: center;
  margin-bottom: 18px;
  .desc {
    padding-right: 30px;
    text-align: center;
    p {
      font-size: 14px;
      line-height: 2.2;
    }
    .desc-tip {
      font-size: 12px;
      color: #787787;
    }
  }
  .qrcode {
    flex-shrink: 0;
  }
}
.shareImage {
  width: 80vw;
  padding: 10px;
  will-change: transform;
  box-sizing: border-box;
  overflow: hidden;
  .lookImg {
    overflow-y: auto;
    // overflow: hidden;
    height: 60vh;
    .vanimage {
      min-height: 100%;
    }
  }
  .tip {
    text-align: center;
    color: #767676;
    padding-top: 10px;
  }
  img {
    width: 100%;
  }
}
</style>
<style>
.loadingstyle {
  z-index: 3000 !important;
}
</style>
