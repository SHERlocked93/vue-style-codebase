<template>
  <div id="app">
    <header-nav v-show='!isDashboard'></header-nav>
    <main class='main-container'
          :style='{marginTop: isDashboard ? 0 : ""}'>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import HeaderNav from 'components/common/HeaderNav'
  
  export default {
    name: 'App',
    components: { HeaderNav },
    computed: {
      isDashboard() {
        return this.$route.name === "Dashboard"
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "~styles/mixin.scss";
  
  #app {
    margin-top: $header-height;
    .main-container {
      height: 100vh;
      margin-top: $header-height;
    }
  }
</style>
