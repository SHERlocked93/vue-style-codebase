/**
* 创建于 2018/8/1
* 作者: QianYu
* 功能: LoadingAnimation0304 环形 Loading效果
* Codepen: https://codepen.io/martinvd/pen/wBQveM
*/

<template>
  <div class="loading-animation0304">
    <div class="inner one"></div>
    <div class="inner two"></div>
  </div>
</template>

<script type='text/javascript'>
  export default {
    name: 'LoadingAnimation0304'
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $base-color: rgba(66, 185, 131, .8); // 修改部分环颜色1
  $base-color1: rgba(66, 185, 131, .3); // 修改部分环颜色2
  
  .loading-animation0304 {
    transform: scale(.6); // 修改大小
    position: absolute;
    top: calc(50% - 32px);
    left: calc(50% - 32px);
    width: 64px;
    height: 64px;
    
    .inner {
      position: absolute;
      border-radius: 50%;
      border: 8px solid transparent;
      box-sizing: border-box;
      opacity: 0.5;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    
    .inner.one {
      border-left: 8px solid $base-color;
      border-right: 8px solid $base-color;
      animation: rotate-left 2s linear infinite;
    }
    
    .inner.two {
      border-top: 8px solid $base-color1;
      border-bottom: 8px solid $base-color1;
      animation: rotate-left 3s linear infinite;
    }
    
    @keyframes rotate-left {
      0% {
        transform: rotate(360deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
  

</style>
