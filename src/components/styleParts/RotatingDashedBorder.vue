/**
* 创建于 2018/7/31
* 作者: QianYu
* 功能: border虚线移动特效
* Codepen: https://codepen.io/techniq/pen/gzyHI
*/


<template>
  <div class='rotate-dashed' title='回顶部' @click='scrollToTop'>
    <span class="dashing"><i></i></span>
    <span class="dashing"><i></i></span>
    <span class="dashing"><i></i></span>
    <span class="dashing"><i></i></span>
    <i class='el-icon-d-arrow-left'></i>
  </div>
</template>

<script type='text/javascript'>
  import EventBus from 'utils/eventBus'
  
  export default {
    name: 'RotatingDashedBorder',
    methods: {
      /**
       * 移动到顶部
       */
      scrollToTop() {
        EventBus.$emit('App.contentScrollbar.backToTop')
      }
    },
    mounted() {
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import '~styles/mixin.scss';
  
  .rotate-dashed {
    $width: 35px;
    position: relative;
    width: $width;
    height: $width;
    overflow: hidden;
    color: $medium;
    
    &:hover {
      cursor: pointer;
      transition: all 0.5s;
    }
    
    [class^='el-icon'] {
      font-size: 24px;
      font-weight: 600;
      transform: rotate(90deg);
      line-height: $width;
      text-align: center;
      display: block;
      margin: 0 auto;
    }
    
    .dashing {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      
      &:nth-of-type(1) { transform: rotate(0deg); }
      &:nth-of-type(2) { transform: rotate(90deg); }
      &:nth-of-type(3) { transform: rotate(180deg); }
      &:nth-of-type(4) { transform: rotate(270deg); }
      
      i {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 300%;
        border-bottom: 1.5px dashed;
        animation: slideDash 8s infinite linear;
      }
    }
    
    @keyframes slideDash {
      from { transform: translate(-50%); }
      to { transform: translate(0%); }
    }
  }
</style>
