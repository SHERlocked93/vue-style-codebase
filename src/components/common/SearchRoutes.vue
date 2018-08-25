/**
* 创建于 2018/7/24
* 作者: SHERlocked93
* 功能: 导航栏的搜索框
*/


<template>
  <div class="search-container">
    <input type="text" class="search" title='搜索' maxlength='25'
           v-model="keywords"
           @focus="inputing = true"
           @blur="blur"
           :class="{ inputing }"/>
    <i class='iconfont el-icon-my-search'></i>
    <ul class="result-list" v-show="searchResult.length > 0 && inputing">
      <li class="result-item"
          v-for="result in searchResult"
          @click='$router.push(result.path)'
          :key='result.name'>
        {{result.name}} > {{result.path}}
      </li>
    </ul>
  </div>
</template>

<script type='text/javascript'>
  import _ from 'lodash'
  import { routes as RoutesArray } from 'router'
  
  export default {
    name: 'SearchRoutes',
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
        this.searchResult = this.searchInRoutes(this.keywords, RoutesArray)
      }, 200),
      
      /**
       * 在路由中搜索
       * @param tar 搜索目标
       * @param routesArr 路由配置
       * @returns {*} 符合条件的路由配置
       */
      searchInRoutes(tar, routesArr) {
        tar = tar.trim().toLowerCase().replace(/\s+/g, '-')
        return tar && routesArr.filter(T => T.name.toLowerCase().includes(tar) || T.path.toLowerCase().includes(tar))
      }
    },
    watch: {
      keywords() {
        this.search()
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~styles/mixin.scss";
  
  .search-container {
    position: relative;
    /* input标签 */
    .search {
      height: 30px;
      line-height: 30px;
      box-sizing: border-box;
      padding: 0 15px 0 30px;
      border: 1px solid $border-grey;
      color: $dark;
      border-radius: 15px;
      transition: border $comm-transition ease;
      margin-right: 20px;
      outline: none;
      &.inputing {
        border-color: $green;
      }
    }
    
    .iconfont {
      position: absolute;
      left: 11px;
      top: 12px;
      color: $border-grey;
    }
    
    /* 搜索内容 */
    .result-list {
      position: absolute;
      top: 30px;
      left: -10px;
      min-width: 260px;
      overflow-x: hidden;
      list-style: none;
      border: 1px solid $border-grey;
      border-radius: $radius-big;
      background-color: white;
      margin: 10px 0 0;
      text-align: left;
      padding: 8px;
      .result-item {
        color: $medium;
        cursor: pointer;
        padding: 0 5px;
        @include overflowEllipsis;
        &:hover {
          color: $green;
          background-color: inherit;
        }
      }
    }
  }
</style>
