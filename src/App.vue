<template>
  <div id="app" :class='{"is-dashboard": isDashboard}'>
    <!-- 头部 -->
    <header-nav></header-nav>
    
    <div class='content-sidebar-wrapper'>
      <!-- 侧边栏 -->
      <side-bar class='sidebar-wrapper'></side-bar>
      
      <!-- 内容区 -->
      <main class='content-wrapper'>
        <el-scrollbar>
          <router-view class='content'></router-view>
        </el-scrollbar>
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
      
      /* 侧边栏 */
      .sidebar-wrapper {
        z-index: 100;
      }
      
      /* 内容区 */
      .content-wrapper {
        $padding: 40px;
        height: 100%;
        width: 100%;
        left: 0;
        padding-left: $sidebar-width;
        border-right: $padding lightblue;
        box-sizing: border-box;
        position: fixed;
        overflow-x: hidden;
        overflow-y: auto;
        
        .content {
          margin-top: $header-height;
          padding-top: 1px; // 解决BFC导致margin合并的情况
          padding-left: $padding;
          padding-right: $comm-distance;
        }
      }
      
    }
    
    /* 当前路由是Dashboard的情况 */
    &.is-dashboard {
      overflow: hidden;
      .header-nav {
        display: none;
      }
      
      .content-sidebar-wrapper {
        margin-top: 0;
        overflow: hidden;
        .sidebar-wrapper {
          display: none;
        }
        .content-wrapper {
          left: 0;
          padding: 0;
          overflow: hidden;
          .content {
            margin: 0;
            overflow: hidden;
          }
        }
      }
    }
  }
</style>
