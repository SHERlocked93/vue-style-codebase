/**
* 创建于 2018/7/24
* 作者: QianYu
* 功能: 侧边菜单栏
*/

<template>
  <div class='sidebar'>
    <div class='sidebar-item' v-for='route in RoutesArrayFilted' :key='route.name'>
      <router-link :to='route.path'>{{route.name}}</router-link>
    </div>
  </div>
</template>

<script type='text/javascript'>
  import { routes as RoutesArray } from 'router'
  
  export default {
    name: "SideBar",
    computed: {
      RoutesArrayFilted() {
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
    padding: 30px 0;
    box-sizing: border-box;
    border-right: $board-grey solid 1px;
    overflow-x: hidden;
    overflow-y: auto;
    
    .sidebar-item {
      $this-height: 30px;
      height: $this-height;
      line-height: $this-height;
      padding: 0 40px 0 30px;
      transition: background-color .5s;
      
      &:hover, &.router-link-active {
        color: $green;
        background-color: $bg-grey;
      }
    }
  }
</style>
