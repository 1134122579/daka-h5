<template>
  <div class="city">
    <HeaderTop :name="name" :image="image" />
    <div class="contentCity">
      <!-- 文字 -->
      <div class="contenttext">
        <div class="title">
          {{ getData.title }}
        </div>
        <p>{{ getData.text1 }}</p>
        <p>{{ getData.textson1 }}</p>
        <p>{{ getData.text2 }}</p>
        <span>◆</span>
        <p>{{ getData.text3 }}</p>
        <p>{{ getData.text4 }}</p>
      </div>
      <!-- 轮播 -->
      <span class="borderB"></span>
      <van-image class="imgaeStyle" :src="getData.image"></van-image>

      <!-- <div class="contentSwiper">
        <Swiper :list="list" :autoplay="autoplay" />
      </div> -->
      <!-- l列表 -->
      <div class="contentList">
        <div class="ListBox" v-for="(item, index) in contentList1" :key="index">
          <h4><span></span> {{ item.title }}</h4>
          <p>{{ item.text1 }}</p>
          <p>{{ item.text2 }}</p>
          <p>{{ item.text3 }}</p>
          <p>{{ item.text4 }}</p>
          <p>{{ item.text5 }}</p>
          <van-image class="imgaeStyle" :src="item.image"></van-image>
          <span class="borderB"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderTop from '../../components/HeaderTop'
import Swiper from '../../components/VanSwiper'

export default {
  components: {
    HeaderTop,
    Swiper
  },
  data() {
    return {
      autoplay: 3000,
      name: '',
      image: 'http://tccdn.greatorange.cn/SKY/20210816155614/761/城市名片.png',
      getData: {
        title: '城市更新+',
        text1: '面向城市文创产业的孵化发展',
        text2: '以设计升级城市面貌',
        text3: '建设有人气的青年向往之所',
        text4: '为城市新生注入创新活力',
        image: 'http://tccdn.greatorange.cn/SKY/20210816162348/858/首页.png'
      },

      //
      list: [
        {
          name: '网红菜场打造',
          image: 'http://tccdn.greatorange.cn/SKY/20210816160733/272/1.png'
        },
        {
          name: '城市书房建设',
          image: 'http://tccdn.greatorange.cn/SKY/20210816160802/42/2.png'
        },
        {
          name: '城市会客厅打造',
          image: 'http://tccdn.greatorange.cn/SKY/20210816162246/374/3.jpg'
        },
        {
          name: '老建筑改造',
          image: 'http://tccdn.greatorange.cn/SKY/20210816162318/141/4.png'
        }
      ],
      contentList1: [
        {
          title: '网红菜场打造',
          text1: '城市经济发展促使农贸市场转型和升级',
          text2: '围绕社区生活方式',
          text3: '以新的购物环境、新的销售模式及新的运营理念',
          text4: '达成菜场的版本迭代',
          image: 'http://tccdn.greatorange.cn/SKY/20210816160733/272/1.png'
        },
        {
          title: '城市书房建设',
          text1: '与书香、茶香、咖啡香为伴',
          text2: '让阅读浸润心田',
          text3: '任时光慢慢流淌',
          text4: '打造最IN的城市创新文化空间',
          image: 'http://tccdn.greatorange.cn/SKY/20210816160802/42/2.png'
        },
        {
          title: '城市会客厅打造',
          text1: '每座城市都该有一座属于自己的会客厅',
          text2: '创造空间重聚碰撞的机会',
          text3: '成就“商务社交空间”',
          text4: '聚焦青年时尚',
          text5: '打造城市文化地标',
          image: 'http://tccdn.greatorange.cn/SKY/20210816162246/374/3.jpg'
        },
        {
          title: '老建筑改造',
          text1: '在保留城市记忆和根脉基础上',
          text2: '坚持“修旧如旧”',
          text3: '融合现代科学技术与文化艺术',
          text4: '以设计赋能城市更新',
          text5: '助力城市参观经济、咖啡经济、茶经济、夜经济发展',
          image: 'http://tccdn.greatorange.cn/SKY/20210816162318/141/4.png'
        }
      ],
      contentList: [
        {
          title: '网红菜场打造',
          text: '营销赋能工作台，极大地为提案环节营销赋能，提升提案成交率以及成交价',
          image: 'http://tccdn.greatorange.cn/SKY/20210816160733/272/1.png'
        },
        {
          title: '城市书房建设',
          text: '为行业内的企业/自由人，提供交易撮合管理系统，规范制作与财务全流程，创业更简单，用工更容易',
          image: 'http://tccdn.greatorange.cn/SKY/20210816161734/122/交易赋能.png'
        },
        {
          title: '城市会客厅打造',
          text: '搭建行业内社群资源，为同行业输出强大制作能力，提供创意、制作、后期、转包等',
          image: 'http://tccdn.greatorange.cn/%E5%88%B6%E4%BD%9C%E8%B5%8B%E8%83%BD.png'
        },
        {
          title: '老建筑改造',
          text: '搭建行业内社群资源，为同行业输出强大制作能力，提供创意、制作、后期、转包等',
          image: 'http://tccdn.greatorange.cn/%E5%88%B6%E4%BD%9C%E8%B5%8B%E8%83%BD.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.city {
  background: #fff;
  .contentCity {
    // 文字
    .contenttext {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      padding: 0 40px;
      color: #6f6f6f;
      margin: 10px 0;

      .title {
        font-size: 18px;
        margin: 20px 0;
        padding: 0 10px;
        border-bottom: 3px solid #fe9526;
      }
      span {
        font-size: 28px;
        color: #fe9526;
        line-height: 30px;
      }
      p {
        font-size: 14px;
        text-align: center;
      }
    }
    // 轮播
    .contentSwiper {
      margin: 20px 10px;
      border-radius: 10px;
      overflow: hidden;
    }
    // 列表
    .contentList {
      color: #6f6f6f;
      .ListBox {
        h4 {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin: 10px;
          font-size: 20px;
          span {
            display: inline-block;
            width: 40px;
            border-bottom: 1px solid #fe9526;
            margin-right: 10px;
          }
        }
        p {
          line-height: 16px;
          font-size: 14px;
          margin: 10px 40px;
        }
        .imgaeStyle {
          margin: 0 10px;
          border-radius: 10px;
          overflow: hidden;
          height: 180px;
        }
      }
    }
  }
}
</style>
