/**
* 创建于 2018/8/1
* 作者: QianYu
* 功能: LoadingAnimation0203 小球球 Loading效果
* Codepen: https://codepen.io/filipekiss/pen/yJxFo
*/

<template>
  <div class="loading-bubbles">
    <div class="bubble-container">
      <div class="bubble"></div>
    </div>
    <div class="bubble-container">
      <div class="bubble"></div>
    </div>
    <div class="bubble-container">
      <div class="bubble"></div>
    </div>
  </div>
</template>

<script type='text/javascript'>
  export default {
    name: 'LoadingAnimation0203'
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $bubble-size: 10px;
  $spinnin-bubble-translate: 200%;
  $spinning-bubble-transform-origin: ($spinnin-bubble-translate - 50%) * -1;
  $spoke-translate: 100%;
  $spoke-transform-origin: ($spoke-translate) * -1;
  $base-color: #2c3e50; // 修改小球的颜色
  
  .loading-bubbles {
    transform: scale(.6); // 修改大小
    margin: auto;
    .bubble-container {
      display: inline-block;
      width: $bubble-size;
      height: $bubble-size;
      margin: 0 5px;
      .bubble {
        border-radius: 50%;
        background-color: $base-color;
        width: 100%;
        height: 100%;
        transform-origin: 50% 50%;
        animation: bubble 1.2s -0.6s infinite ease-out;}
      &:nth-of-type(2n) {
        .bubble {
          animation-delay: -0.3s;}
      }
      &:nth-of-type(3n) {
        .bubble {
          animation-delay: 0s;}
      }
    }
  }
  
  @keyframes bubble {
    0%, 100% {
      transform: scale(0);}
    50% {
      transform: scale(1);}
  }
</style>
