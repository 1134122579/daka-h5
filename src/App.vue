<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
/* Defaults */
:root {
  --color-scheme-background: #fff;
  --color-li-background: #f6f6f6;
  --color-scheme-text-color: #7a7a7a;
  --color-scheme-title-color: #7a7a7a;
  --gzh-color: #576b95;
}

/* Light mode */
@media (prefers-color-scheme: light) {
  :root {
    --color-scheme-background: #fff;
    --color-li-background: #f6f6f6;
    --color-scheme-text-color: #7e7e7e;
    --color-scheme-title-color: #101010;
    --gzh-color: #576b95;
  }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --color-scheme-background: #101010;
    --color-li-background: #222020;
    --color-scheme-text-color: #7e7e7e;
    --color-scheme-title-color: rgba(203, 203, 203, 0.968);
    --gzh-color: #808fa6;
  }
}
#app {
  height: 100vh;
  box-sizing: border-box;
  background: var(--color-li-background);
  // background: chartreuse;
}
.flexstart {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.flexbetween {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.flexcolumn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@keyframes fadenum12 {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.3);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.3);
  }
}
@keyframes showDivAni {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
