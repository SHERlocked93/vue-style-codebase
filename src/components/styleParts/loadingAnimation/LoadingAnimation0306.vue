/**
* 创建于 2018/8/25
* 作者: QianYu
* 功能: LoadingAnimation0306 环形 Loading效果
* Codepen: https://codepen.io/francoislesenne/pen/aIuko
*/

<template>
  <div class="loading-animation0306">
    <span class="loader-double"></span>
  </div>
</template>

<script type='text/javascript'>
  export default {
    name: 'LoadingAnimation0306'
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $base-color: rgba(66, 185, 131, .8); // 修改部分环颜色1
  $base-color1: rgba(66, 185, 131, .3); // 修改部分环颜色2
  
  .loading-animation0306 {
    transform: scale(.8); // 修改大小
    
    @mixin absPosition($top: auto, $right: auto, $bottom: auto, $left: auto) {
      position: absolute;
      top: $top;
      right: $right;
      bottom: $bottom;
      left: $left;
    }
    
    @keyframes spinreverse {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(-360deg); }
    }
    
    .loader-double {
      $size: 50px;
      $border-size: 3px;
      border-radius: $size;
      width: $size;
      height: $size;
      display: inline-block;
      position: relative;
      vertical-align: middle;
      border: $border-size solid transparent;
      border-top-color: $base-color;
      animation: spin 1.5s linear infinite;
      &:before,
      &:after {
        content: "";
        @include absPosition(5px, 5px, 5px, 5px);
        border-radius: 50px;
        border: $border-size solid transparent;
        border-top-color: $base-color;
        opacity: .8;
        animation: spinreverse 5s linear infinite;
      }
      &:before {
        top: 12px;
        left: 12px;
        bottom: 12px;
        right: 12px;
        animation: spinreverse 10s linear infinite;
      }
    }
  }
</style>
