/**
* 创建于 2018/8/1
* 作者: QianYu
* 功能: LoadingAnimation0204 小球球 Loading效果
* Codepen: https://codepen.io/filipekiss/pen/yJxFo
*/

<template>
  <div class="loading-spinning-bubbles">
    <div class="bubble-container">
      <div class="bubble"></div>
    </div>
    <div class="bubble-container">
      <div class="bubble"></div>
    </div>
    <div class="bubble-container">
      <div class="bubble"></div>
    </div>
    <div class="bubble-container">
      <div class="bubble"></div>
    </div>
    <div class="bubble-container">
      <div class="bubble"></div>
    </div>
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
    name: 'LoadingAnimation0204'
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $bubble-size: 10px;
  $spinnin-bubble-translate: 200%;
  $spinning-bubble-transform-origin: ($spinnin-bubble-translate - 50%) * -1;
  $spoke-translate: 100%;
  $spoke-transform-origin: ($spoke-translate) * -1;
  $base-color: rgba(66, 185, 131, .8); // 修改小球的颜色
  
  .loading-spinning-bubbles {
    transform: scale(.7); // 修改大小
    position: relative;
    margin: auto;
    .bubble-container {
      position: absolute;
      top: calc(50% - #{$bubble-size} / 2);
      left: calc(50% - #{$bubble-size} / 2);
      transform-origin: $spinning-bubble-transform-origin 50%;
      .bubble {
        background: $base-color;
        width: $bubble-size;
        height: $bubble-size;
        border-radius: 50%;
        animation: bubble 1s infinite;
        animation-delay: inherit;}
      &:nth-of-type(0n+1) {
        transform: translateX($spinnin-bubble-translate) rotate(-90deg);
        animation-delay: -1.5s;}
      &:nth-of-type(0n+2) {
        transform: translateX($spinnin-bubble-translate) rotate(-45deg);
        animation-delay: -1.375s;}
      &:nth-of-type(0n+3) {
        transform: translateX($spinnin-bubble-translate);
        animation-delay: -1.25s;}
      &:nth-of-type(0n+4) {
        transform: translateX($spinnin-bubble-translate) rotate(45deg);
        animation-delay: -1.125s;}
      &:nth-of-type(0n+5) {
        transform: translateX($spinnin-bubble-translate) rotate(90deg);
        animation-delay: -1s;}
      &:nth-of-type(0n+6) {
        transform: translateX($spinnin-bubble-translate) rotate(135deg);
        animation-delay: -0.875s;}
      &:nth-of-type(0n+7) {
        transform: translateX($spinnin-bubble-translate) rotate(180deg);
        animation-delay: -0.750s;}
      &:nth-of-type(0n+8) {
        transform: translateX($spinnin-bubble-translate) rotate(225deg);
        animation-delay: -0.625s;}
    }
  }
  
  @keyframes bubble {
    0%, 100% {
      transform: scale(0);}
    50% {
      transform: scale(1);}
  }
</style>
