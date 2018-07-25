/**
* 创建于 2018/7/23
* 作者: SHERlocked93
* 功能: 头部导航
*/

<!--suppress HtmlUnknownTarget, CssUnknownTarget -->
<template>
  <div class="header-nav">
    <!-- LOGO -->
    <router-link class="nav-brand" to="/">
      <img class="nav-brand-logo" src="~assets/logo.png" alt="nav-brand-logo">
      <span class="nav-brand-desc">Style Codebase</span>
    </router-link>
    
    <!-- 链接 -->
    <div class="nav-link-container">
      <!-- 搜索框 -->
      <search-routes></search-routes>
      
      <div class="nav-link-item">
        <router-link class="nav-link" to="/loadingAnimation">API</router-link>
      </div>
      
      <div class="nav-link-item">
        <a class="nav-link"
           target="_blank"
           href="https://github.com/SHERlocked93/vue-style-codebase">
          <i class='iconfont el-icon-my-github'></i> Github</a>
      </div>
    </div>
  </div>
</template>

<script>
  import SearchRoutes from 'common/SearchRoutes'
  
  export default {
    name: 'HeaderNav',
    components: { SearchRoutes }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import '~styles/mixin.scss';
  
  .header-nav {
    position: fixed;
    height: $header-height;
    padding: $header-padding;
    box-sizing: border-box;
    width: 100vw;
    top: 0;
    color: $medium;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 40px;
    background-color: rgba(255, 255, 255, .9);
    z-index: 100;
    
    /* LOGO */
    .nav-brand {
      .nav-brand-logo {
        width: 40px;
        height: 40px;
        vertical-align: top;
        margin-right: 10px;
      }
      .nav-brand-desc {
        color: $dark;
        font-size: 1.5rem;
        font-weight: 500;
        font-family: $logo-font;
      }
    }
    
    /* 导航链接 */
    .nav-link-container {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      align-items: center;
      
      /* 搜索框 */
      
      .nav-link-item {
        margin: 0 15px;
        border-bottom: 3px solid transparent;
        .iconfont {
          margin: 0 4px;
          font-size: 20px;
        }
        
        &:hover {
          border-bottom: 3px solid $green;
        }
      }
    }
  }
</style>
