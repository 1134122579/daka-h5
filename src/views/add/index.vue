<template>
  <div class="addpage">
    <div class="title">上传天空之橙图片</div>
    <!-- <div class="desc">
      <van-field v-model="message" rows="4" autosize type="textarea" placeholder="请输入" />
    </div> -->
    <div class="upload">
      <van-uploader
        v-model="fileList"
        multiple
        preview-size="110px"
        :max-count="maxcount"
        :after-read="afterRead"
        accept="image/*"
        name="file"
      />
    </div>
    <div class="button">
      <p class="tag">* 最多上传9张图片</p>
      <van-button
        type="primary"
        color="#856A63"
        :disabled="fileList.length <= 0 || disabled"
        round
        block
        size="small"
        @click="onsub"
        >立即打卡</van-button
      >
    </div>
  </div>
</template>
<script>
import { upImage, subImg } from '@/api/user'
export default {
  data() {
    return {
      maxcount: 9,
      disabled: false,
      fileList: []
    }
  },
  methods: {
    onsub() {
      let imglist = this.fileList
      let iseveryImg = imglist.every(item => item.status == 'success')
      if (!iseveryImg) {
        this.$toast('请等待图片全部上传完成')
        return
      }
      let ypinglist = imglist.map(item => item.url)
      subImg({ imgs: ypinglist }).then(res => {
        this.$toast.success('打卡成功')
        this.disabled = true
        setTimeout(() => {
          this.$router.push('/')
        }, 1500)
      })
    },
    afterRead(file) {
      file.status = 'uploading'
      file.message = '上传中...'
      console.log(file)
      let fromddate = new FormData()
      fromddate.append('file', file.file)
      upImage(fromddate)
        .then(res => {
          console.log(res)
          file.status = 'success'
          file.url = res.data.imgLink
          file.message = '上传成功'
        })
        .catch(err => {
          console.log(err)
          file.status = 'failed'
          file.message = '上传失败'
          console.log(this.fileList)
        })
      // setTimeout(() => {
      //   file.status = 'failed'
      //   file.message = '上传失败'
      // }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.addpage {
  background: #eeeeee;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  padding: 20px 0;
  z-index: 1;
  &::after {
    content: '城市书房';
    position: absolute;
    bottom: 20px;
    color: #787878;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(1.6px);
    background: #d2c8c5 url('../../assets/home-bg.jpg') no-repeat;
    background-size: 100%;
    z-index: -2;
  }
  .title {
    padding: 0 20px;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
  }
  .desc {
    padding: 16px 20px;
  }
  .upload {
    // padding: 0 10px;
    padding-left: 14px;
    margin-top: 20px;
    min-height: 20%;
  }
  .button {
    padding: 20px 90px;
    .tag {
      text-align: center;
      color: #ff976a;
    }
  }
}
</style>
<style>
.van-uploader__upload {
  background: #eee;
  border-radius: 8px;
}
.van-uploader__preview-image {
  /* border-radius: 8px;
  overflow: hidden; */
}
.van-uploader__upload-icon {
  color: #7d7e7e;
  font-size: 28px;
}
</style>
