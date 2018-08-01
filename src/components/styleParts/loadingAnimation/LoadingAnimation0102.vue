/**
* 创建于 2018/8/1
* 作者: QianYu
* 功能: LoadingAnimation0102 小球球 Loading效果
* Codepen: https://codepen.io/filipekiss/pen/yJxFo
*/

<template>
  <div class="loading-bars">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
</template>

<script type='text/javascript'>
  export default {
    name: 'LoadingAnimation0102'
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $bubble-size: 8px;
  $base-color: #2c3e50; // 修改小球的颜色
  
  .loading-bars {
    transform: scale(.4); // 修改大小
    text-align: center;
    .bar {
      height: $bubble-size * 2;
      width: $bubble-size;
      background: $base-color;
      display: inline-block;
      animation: pulse 1.2s infinite ease-out;
      &:nth-of-type(0n+1) {
        animation-delay: 0s;}
      &:nth-of-type(0n+2) {
        animation-delay: 0.2s;}
      &:nth-of-type(0n+3) {
        animation-delay: 0.4s;}
      &:nth-of-type(0n+4) {
        animation-delay: 0.6s;}
      &:nth-of-type(0n+5) {
        animation-delay: 0.8s;}
    }
  }
  
  @keyframes pulse {
    0%, 75% {
      transform: scale(1, 1);}
    25% {
      transform: scale(1, 3);}
  }
</style>
