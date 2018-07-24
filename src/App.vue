<template>
  <div id="app" :class='{"is-dashboard": isDashboard}'>
    <!-- 头部 -->
    <header-nav></header-nav>
    
    <div class='content-sidebar-wrapper'>
      <!-- 侧边栏 -->
      <side-bar class='sidebar-wrapper'></side-bar>
      
      <!-- 内容区 -->
      <main class='content-wrapper'>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
  import HeaderNav from 'components/common/HeaderNav'
  import SideBar from 'components/common/SideBar'
  
  export default {
    name: 'App',
    components: { HeaderNav, SideBar },
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
    
    .content-sidebar-wrapper {
      display: flex;
      margin-top: $header-height;
      
      /* 侧边栏 */
      .sidebar-wrapper {
      }
      
      /* 内容区 */
      .content-wrapper {
        height: 100%;
        width: 100%;
        left: $sidebar-width + 20px;
        position: fixed;
        background-color: wheat;
      }
      
    }
    
    /* 当前路由是Dashboard的情况 */
    &.is-dashboard {
      .header-nav {
        display: none;
      }
      
      .content-sidebar-wrapper {
        margin-top: 0;
        .sidebar-wrapper {
          display: none;
        }
        .content-wrapper {
          left: 0;
        }
      }
    }
  }
</style>
