/**
* 创建于 2018/8/25
* 作者: QianYu
* 功能: LoadingAnimation0305 环形 Loading效果
* Codepen: https://codepen.io/francoislesenne/pen/aIuko
*/

<template>
  <div class="loading-animation0305">
    <span class="loader-double"></span>
  </div>
</template>

<script type='text/javascript'>
  export default {
    name: 'LoadingAnimation0305'
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $base-color: rgba(66, 185, 131, .8); // 修改部分环颜色1
  $base-color1: rgba(66, 185, 131, .3); // 修改部分环颜色2
  
  .loading-animation0305 {
    transform: scale(.8); // 修改大小
    @mixin absPosition($top: auto, $right: auto, $bottom: auto, $left: auto) {
      position: absolute;
      top: $top;
      right: $right;
      bottom: $bottom;
      left: $left;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    @keyframes spinreverse {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(-360deg); }
    }
    
    .loader-double {
      $size: 50px;
      border-radius: $size;
      width: $size;
      height: $size;
      display: inline-block;
      position: relative;
      vertical-align: middle;
      border: 6px solid transparent;
      border-top-color: $base-color;
      border-bottom-color: $base-color;
      animation: spin 1.5s linear infinite;
      &:before,
      &:after {
        content: "";
        @include absPosition(5px, 5px, 5px, 5px);
        border-radius: 50px;
        border: 6px solid transparent;
        border-top-color: $base-color;
        border-bottom-color: $base-color;
        opacity: .6;
        animation: spinreverse 2s linear infinite;
      }
      &:before {
        top: 13px;
        left: 13px;
        bottom: 13px;
        right: 13px;
        animation: spinreverse 3s linear infinite;
      }
    }
  }
</style>
