/**
* 创建于 2018/8/1
* 作者: QianYu
* 功能: LoadingAnimation0503 其他 Loading效果
* Codepen: https://codepen.io/filipekiss/pen/yJxFo
*/

<template>
  <div class="loading-flip"></div>
</template>

<script type='text/javascript'>
  export default {
    name: 'LoadingAnimation0503'
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $bubble-size: 8px; // 修改大小
  $base-color: rgba(66, 185, 131, .8); // 修改小球的颜色
  
  .loading-flip {
    width: $bubble-size *2;
    height: $bubble-size *2;
    background: $base-color;
    margin: 0 auto;
    animation: flip 8s infinite;
  }
  
  @keyframes flip {
    0% {
      transform: rotateX(0) rotateY(0);}
    20%, 25% {
      transform: rotateX(0) rotateY(720deg);}
    45%, 50% {
      transform: rotateX(720deg) rotateY(720deg);}
    70%, 75% {
      transform: rotateX(720deg) rotateY(0);}
    95%, 100% {
      transform: rotateX(0) rotateY(0);}
  }
</style>
