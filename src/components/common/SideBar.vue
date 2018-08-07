/**
* 创建于 2018/7/24
* 作者: SHERlocked93
* 功能: 侧边菜单栏
*/

<template>
  <div class='sidebar'>
    <el-scrollbar>
      <div class='sidebar-item' v-for='route in routesArrayFilted' :key='route.name'>
        <router-link :to='route.path' class='router-link'>{{route.name}}</router-link>
        <div :id='"catalog-content-"+ route.component.name'
             v-show='$route.path.slice(1).toLowerCase() === route.component.name.toLowerCase()'></div>
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
        color: $medium;
        font-size: 15px;
        margin: 3px 0;
        
        .router-link {
          &:hover {
          }
        }
        
        & .router-link-active {
          color: $green;
        }
        
        &:first-of-type {
          margin-top: 20px;
        }
        
        /deep/ {
          .cl-wrapper {
            position: relative;
            
            ul, li {
              $padding-start: 12px;
              margin: 0;
              -moz-padding-start: $padding-start;
              -webkit-padding-start: $padding-start;
              list-style: none;
            }
            
            li.visible > .cl-link {
              color: #111;
              transform: translate(5px);
            }
            
            .cl-link {
              cursor: pointer;
              color: rgba(52, 73, 94, .6);
              font-size: 13px;
              transition: all 0.3s cubic-bezier(0.230, 1.000, 0.320, 1.000);
            }
            
            .cl-link-active {
              color: $green;
            }
            
            .cl-marker {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: -1;
              
              path {
                transition: all 0.3s ease;
              }
            }
          }
        }
      }
    }
  }
</style>
