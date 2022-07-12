<template>
  <div class="addpage">
    <div class="title">天空之橙·城市书房</div>
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
    <div class="userinfo">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        required
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="mobile"
        name="手机号"
        label="手机号"
        required
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <div class="buttonupload">
        <p class="tag">* 最多上传9张图片</p>
        <van-button
          type="primary"
          color="#333"
          :disabled="fileList.length <= 0 || disabled"
          round
          block
          size="small"
          @click="onsub"
          >立即提交</van-button
        >
      </div>
    </div>
    <!-- <div class="buttonupload">
      <p class="tag">* 最多上传9张图片</p>
      <van-button
        type="primary"
        color="#333"
        :disabled="fileList.length <= 0 || disabled"
        round
        block
        size="small"
        native-type="submit"
        @click="onsub"
        >立即提交</van-button
      >
    </div> -->
    <!-- <div class="button" @click="goimage">
      <van-icon name="photo-o" size="20" color="#fff" />
    </div> -->
  </div>
</template>
<script>
import { upImage, subImg, getuserinfo } from '@/api/user'
export default {
  data() {
    return {
      maxcount: 9,
      disabled: false,
      username: '',
      mobile: '',
      fileList: []
    }
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    getUserInfo() {
      getuserinfo().then(res => {
        console.log(res, '11111111111111111')
        let { mobile, name } = res.data
        this.mobile = mobile
        this.username = name
      })
    },
    onSubmit(values) {
      console.log('submit', values)
    },
    goimage() {
      this.$router.push('/imagelist')
    },
    onsub() {
      let imglist = this.fileList
      let iseveryImg = imglist.every(item => item.status == 'success')
      if (!iseveryImg) {
        this.$toast('请等待图片全部上传完成')
        return
      }
      let ypinglist = imglist.map(item => item.url)
      subImg({ imgs: ypinglist, name: this.username, mobile: this.mobile }).then(res => {
        this.$toast.success('打卡成功！')
        this.disabled = true
        setTimeout(() => {
          this.$router.replace('/imagelist')
        }, 1500)
      })
    },
    afterRead(file) {
      console.log(file)
      if (Array.isArray(file)) {
        file.forEach(item => {
          this.upFile(item)
        })
        return
        let promisearr = []
        file.forEach(item => {
          let fromddate = new FormData()
          fromddate.append('file', item.file)
          promisearr.push(this.upFile(fromddate))
        })
        console.log(promisearr)
        // new Promise.all(promisearr)
        //   .then(res => {
        //     console.log('allSettled', res)
        //   })
        //   .catch(err => {
        //     console.log('allSettled errerr', err)
        //   })
      } else {
        this.upFile(file)
      }
    },
    upFile(file) {
      file.status = 'uploading'
      file.message = '上传中...'
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
    }
  }
}
</script>

<style lang="scss" scoped>
.addpage {
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
    // filter: blur(0.8px);
    background: #d2c8c5 url('../../assets/add-bg.jpg') no-repeat;
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
    min-height: 40%;
  }
  .userinfo {
    box-sizing: border-box;
    margin: 20px 14px;
    background: #fff;
    border-radius: 10px;
    padding: 20px 20px 0;
  }
  .buttonupload {
    padding: 20px 40px;
    .tag {
      margin-bottom: 14px;
      text-align: center;
      color: #ff976a;
    }
  }
  .button {
    position: fixed;
    z-index: 2;
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
<style>
.van-uploader__upload {
  background: #fff;
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
