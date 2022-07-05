<template>
  <div class="tabbarFooter">
    <van-tabbar fixed route v-model="active" @change="handleChange">
      <van-tabbar-item
        v-for="(item, index) in data"
        :to="item.to"
        :active-color="activeColor"
        :inactive-color="activeColor"
        :icon="item.icon"
        :key="index"
      >
        {{ item.title }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: 'TabBar',
  props: {
    defaultActive: {
      type: Number,
      default: 0
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    activeColor: {
      type: String,
      default: '#ff000'
    }
  },
  watch: {
    defaultActive(newV, oldV) {
      this.active = newV
    }
  },
  data() {
    return {
      active: this.defaultActive
    }
  },
  methods: {
    handleChange(value) {
      localStorage.removeItem('ROUTERID')
      this.$emit('change', value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  /* color: #42b983; */
}
.tabbarFooter {
  overflow: hidden;
  width: 100%;
  /* background: chartreuse; */
}
.tabbarFooter .van-tabbar-item--active {
  color: '#ff000' !important;
}
</style>
