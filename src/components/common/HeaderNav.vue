/**
* 创建于 2018/7/23
* 作者: QianYu
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
      <div class="search-container">
        <input type="text" class="search" title='搜索' maxlength='25'
               v-model="keywords"
               @focus="inputing = true"
               @blur="blur"
               :class="{ inputing }"/>
        <ul class="result-list" v-show="searchResult.length > 0 && inputing">
          <li class="result-item"
              v-for="result in searchResult"
              @click='$router.push(result.path)'
              :key='result.name'>
            {{result.name}} > {{result.path}}
          </li>
        </ul>
      </div>
      
      <div class="nav-link-item">
        <router-link class="nav-link" to="/">API</router-link>
      </div>
      
      <div class="nav-link-item">
        <a class="nav-link"
           target="_blank"
           href="#">
          <img src="~assets/github.jpeg" class="github-logo">Github</a>
      </div>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
  import EventBus from 'utils/eventBus'
  import { routes as RoutesArray } from 'router'
  
  export default {
    data() {
      return {
        inputing: false,
        searchResult: [],
        keywords: ''
      }
    },
    methods: {
      /**
       * input框失焦
       */
      blur() {
        setTimeout(() => {
          this.inputing = false
        }, 200)
      },
      
      
      /**
       * 搜索
       */
      search: _.throttle(function() {
        this.searchResult = searchInRoutes(this.keywords, RoutesArray)
      }, 200)
    },
    watch: {
      'keywords': function() {
        this.search()
      }
    }
  }
  
  /**
   * 在路由中搜索
   * @param tar 搜索目标
   * @param routesArr 路由配置
   * @returns {*} 符合条件的路由配置
   */
  function searchInRoutes(tar, routesArr) {
    tar = tar.trim().toLowerCase().replace(/\s+/g, '-')
    return tar && routesArr.filter(T => T.name.toLowerCase().includes(tar) || T.path.toLowerCase().includes(tar))
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
      .search-container {
        position: relative;
        /* input */
        .search {
          height: 30px;
          line-height: 30px;
          box-sizing: border-box;
          padding: 0 15px 0 30px;
          border: 1px solid $board-grey;
          color: $dark;
          border-radius: 15px;
          transition: border .2s ease;
          background: url("~assets/search.png") 8px 5px no-repeat;
          background-size: 20px;
          margin-right: 20px;
          outline: none;
          &.inputing {
            border-color: $green;
          }
        }
        
        /* 搜索内容 */
        .result-list {
          position: absolute;
          top: 30px;
          left: -10px;
          min-width: 210px;
          overflow-x: hidden;
          list-style: none;
          border: 1px solid $board-grey;
          border-radius: $radius-big;
          background-color: white;
          margin: 10px 0 0;
          text-align: left;
          padding: 8px;
          .result-item {
            color: $medium;
            cursor: pointer;
            padding: 0 5px;
            &:hover {
              color: $green;
              background-color: $grey;
            }
          }
        }
      }
      
      .nav-link-item {
        margin: 0 15px;
        border-bottom: 3px solid transparent;
        .github-logo {
          width: 30px;
          height: 20.45px;
          margin-bottom: -3px;
        }
        
        &:hover {
          border-bottom: 3px solid $green;
        }
      }
    }
  }
</style>
