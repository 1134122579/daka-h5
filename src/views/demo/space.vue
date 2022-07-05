<template>
  <data class="space">
    <HeaderTop :name="name" :image="image" />
    <div class="spacecontent">
      <div class="box">
        <h3 class="title">{{ spaceData.title }}</h3>
        <p class="typeText">{{ spaceData.typeText }}</p>
        <p class="text">{{ spaceData.text }}</p>
        <van-image class="imageStyle" fit="fit" :src="spaceData.imgUrl"></van-image>
      </div>
      <!-- .  -->
      <div class="box">
        <h3 class="title">{{ spaceData1.title }}</h3>
        <p class="text">{{ spaceData1.text }}</p>
        <div class="imgBox">
          <van-image
            :class="'image' + index"
            v-for="(item, index) in spaceData1.imgList"
            :key="index"
            :src="item"
            fit="fit"
          ></van-image>
        </div>
      </div>
      <!--  -->
      <div class="box">
        <h3 class="title">{{ spaceData3.title }}</h3>
        <p class="typeText">{{ spaceData3.typeText }}</p>
        <p class="text">{{ spaceData3.text }}</p>
        <van-image class="imageStyle" fit="fit" :src="spaceData3.imgUrl"></van-image>
      </div>
      <!--  -->
      <div class="box">
        <h3 class="title">{{ spaceData4.title }}</h3>
        <p class="text">{{ spaceData4.text }}</p>
        <div class="imgBox">
          <van-image
            :class="'image' + index"
            v-for="(item, index) in spaceData4.imgList"
            :key="index"
            :src="item"
            fit="fit"
          ></van-image>
        </div>
      </div>
      <!--  -->
      <!-- <div class="box">
        <h3 class="title">{{ spaceData4.title }}</h3>
        <p class="text">{{ spaceData4.text }}</p>
        <div class="imgBox">
          <van-image
            :class="'image' + index"
            v-for="(item, index) in spaceData4.imgList"
            :key="index"
            :src="item"
            fit="fit"
          ></van-image>
        </div>
      </div> -->
    </div>
  </data>
</template>
<script>
import HeaderTop from '../../components/HeaderTop'

export default {
  components: {
    HeaderTop
  },
  data() {
    return {
      name: '',
      image: 'http://tccdn.greatorange.cn/guangw_24.png',
      spaceData: {
        title: '双创空间',
        typeText: '开放 丨 共享 丨 融合',
        text: '为文创企业及创业者提供低成本、便利化、云服务的社交办公空间',
        imgUrl: 'http://tccdn.greatorange.cn/guanw13.png'
      },
      spaceData1: {
        title: '共享办公',
        // typeText: '开放 丨 共享 丨 融合',
        text: '开阔的共享空间，舒适的轻松环境和友领团队一起互动交流，分享知识',
        imgUrl: 'http://tccdn.greatorange.cn/guanw13.png',
        imgList: [
          'http://mfyfile.greatorange.cn/MFY20210130738/bangong1.png',
          'http://mfyfile.greatorange.cn/MFY20210130149/bangong2.png'
        ]
      },
      spaceData3: {
        title: '创客咖啡',
        typeText: '喝的不仅仅是coffee',
        text: '开阔的共享空间，舒适的轻松环境和友领团队一起互动交流，分享知识',
        imgUrl: 'http://tccdn.greatorange.cn/guanw17.png'
      },
      spaceData4: {
        title: 'VIP会客厅',
        // typeText: '内容+体验+服务,打造高端会晤场所',
        text: '内容+体验+服务,打造高端会晤场所',
        imgList: ['http://tccdn.greatorange.cn/guangw_24.png', 'http://tccdn.greatorange.cn/guangw_25.png']
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.space {
  .spacecontent {
    padding: 0 20px;
    .box {
      text-align: center;
      .title {
        width: 30%;
        border-bottom: 3px solid #fe9526;
        font-size: 20px;
        text-align: center;
        margin: 20px auto;
      }
      .typeText {
        margin: 20px auto;
      }
      .text {
        margin: 20px auto;
      }
      .imageStyle {
        border-radius: 10px;
        height: 160px;
        overflow: hidden;
      }
      .imgBox {
        position: relative;
        height: 280px;
        .image0 {
          position: absolute;
          top: 0;
          left: 0;
          width: 80%;
          z-index: 1;
          border-radius: 10px;
          height: 160px;
          overflow: hidden;
        }
        .image1 {
          position: absolute;
          width: 80%;
          bottom: 0;
          right: 0;
          margin-top: -20px;
          border-radius: 10px;
          height: 160px;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
