<template>
  <div>
    <div id="wrapper"></div>
  </div>
</template>
<script>
import ChimeeMobilePlayer from 'chimee-player'
export default {
  data() {
    return {
      ChimeeMobile: null
    }
  },
  mounted() {
    this.videoInit()
  },
  methods: {
    videoInit() {
      console.log(10)
      this.ChimeeMobile = new ChimeeMobilePlayer({
        wrapper: '#wrapper', // video dom容器
        src: 'http://tccdn.greatorange.cn/great.mp4',
        autoplay: true,
        controls: true,
        playsInline: true,
        preload: 'auto',
        x5VideoPlayerFullscreen: true,
        x5VideoOrientation: 'landscape|portrait',
        xWebkitAirplay: true,
        muted: true
      })
    }
  }
}
</script>
