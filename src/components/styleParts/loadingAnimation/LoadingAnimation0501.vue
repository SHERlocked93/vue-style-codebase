/**
* 创建于 2018/8/1
* 作者: QianYu
* 功能: LoadingAnimation0501 其他 Loading效果
* Codepen: https://codepen.io/filipekiss/pen/yJxFo
*/

<template>
  <div class="loading-slide">
    <div class="slide"></div>
    <div class="slide"></div>
    <div class="slide"></div>
  </div>
</template>

<script type='text/javascript'>
  export default {
    name: 'LoadingAnimation0501'
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $bubble-size: 10px;
  $base-color: #2c3e50; // 修改小球的颜色
  
  .loading-slide {
    transform: scale(.8); // 修改大小
    position: relative;
    width: 25%;
    margin: 0 auto;
    .slide {
      position: absolute;
      width: 25%;
      height: 5px;
      background: $base-color;
      animation: slide 2s infinite;
      &:nth-of-type(0n+1) {
        opacity: 0.2;
        transform: scale(1.8, 1);
        animation-delay: 0.2s;}
      &:nth-of-type(0n+2) {
        opacity: 0.4;
        transform: scale(1.4, 1);
        animation-delay: 0.1s;}
      &:nth-of-type(0n+3) {
        opacity: 0.8;}
    }
  }
  
  @keyframes slide {
    0%, 100% {
      left: 0}
    50% {
      left: 100%}
  }
</style>
