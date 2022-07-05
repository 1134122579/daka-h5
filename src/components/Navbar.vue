<template>
  <div>
    <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft" />
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, default: '' }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>
