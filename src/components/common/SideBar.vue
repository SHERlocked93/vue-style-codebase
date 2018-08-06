/**
* 创建于 2018/7/24
* 作者: SHERlocked93
* 功能: 侧边菜单栏
*/

<template>
  <div class='sidebar'>
    <el-scrollbar>
      <div class='sidebar-item' v-for='route in routesArrayFilted' :key='route.name'>
        <router-link :to='route.path'>{{route.name}}</router-link>
        <div :id='"catalog-content-"+ route.component.name'></div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script type='text/javascript'>
  import { routes as RoutesArray } from 'router'
  
  export default {
    name: "SideBar",
    computed: {
      /**
       * 非Dashboard的路由
       * @returns {*[]}
       */
      routesArrayFilted() {
        return RoutesArray.filter(T => T.name.toLowerCase() !== 'dashboard')
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~styles/mixin.scss";
  
  .sidebar {
    position: fixed;
    top: $header-height;
    height: 100%;
    width: $sidebar-width;
    padding-bottom: $comm-distance;
    box-sizing: border-box;
    border-right: $border-grey solid 1px;
    overflow-x: hidden;
    overflow-y: auto;
    
    .el-scrollbar {
      /* 单个链接 */
      .sidebar-item {
        $this-height: 30px;
        min-height: $this-height;
        line-height: $this-height;
        padding: 0 40px 0 30px;
        transition: background-color .5s;
        
        /*&:hover {
          background-color: $hover-bg-grey;
        }*/
        
        &:hover, & .router-link-active {
          color: $green;
        }
        
        &:first-of-type {
          margin-top: 20px;
        }
      }
    }
  }
</style>
