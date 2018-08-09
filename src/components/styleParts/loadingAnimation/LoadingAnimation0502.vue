/**
* 创建于 2018/8/1
* 作者: QianYu
* 功能: LoadingAnimation0502 其他 Loading效果
* Codepen: https://codepen.io/filipekiss/pen/yJxFo
*/

<template>
  <div class="loading-spokes">
    <div class="spoke-container">
      <div class="spoke"></div>
    </div>
    <div class="spoke-container">
      <div class="spoke"></div>
    </div>
    <div class="spoke-container">
      <div class="spoke"></div>
    </div>
    <div class="spoke-container">
      <div class="spoke"></div>
    </div>
    <div class="spoke-container">
      <div class="spoke"></div>
    </div>
    <div class="spoke-container">
      <div class="spoke"></div>
    </div>
    <div class="spoke-container">
      <div class="spoke"></div>
    </div>
    <div class="spoke-container">
      <div class="spoke"></div>
    </div>
  </div>
</template>

<script type='text/javascript'>
  export default {
    name: 'LoadingAnimation0502'
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $bubble-size: 10px;
  $spinnin-bubble-translate: 200%;
  $spinning-bubble-transform-origin: ($spinnin-bubble-translate - 50%) * -1;
  $spoke-translate: 100%;
  $spoke-transform-origin: ($spoke-translate) * -1;
  $base-color: rgba(66, 185, 131, .8); // 修改小球的颜色
  
  .loading-spokes {
    transform: scale(.4); // 修改大小
    position: relative;
    margin: auto;
    height: 45px;
    .spoke-container {
      position: absolute;
      top: 100%;
      left: calc(50% - #{$bubble-size} * 1.5);
      transform-origin: 50% $spoke-transform-origin;
      .spoke {
        background: $base-color;
        width: $bubble-size;
        height: $bubble-size * 2;
        animation: spoke 1s infinite;
        animation-delay: inherit;}
      &:nth-of-type(0n+1) {
        transform: translateX($spoke-translate) rotate(-90deg);
        animation-delay: -0.875s;}
      &:nth-of-type(0n+2) {
        transform: translateX($spoke-translate) rotate(-45deg);
        animation-delay: -0.750s;}
      &:nth-of-type(0n+3) {
        transform: translateX($spoke-translate);
        animation-delay: -0.625s;}
      &:nth-of-type(0n+4) {
        transform: translateX($spoke-translate) rotate(45deg);
        animation-delay: -0.5s;}
      &:nth-of-type(0n+5) {
        transform: translateX($spoke-translate) rotate(90deg);
        animation-delay: -0.375s;}
      &:nth-of-type(0n+6) {
        transform: translateX($spoke-translate) rotate(135deg);
        animation-delay: -0.25s;}
      &:nth-of-type(0n+7) {
        transform: translateX($spoke-translate) rotate(180deg);
        animation-delay: -0.125s;}
      &:nth-of-type(0n+8) {
        transform: translateX($spoke-translate) rotate(225deg);
        animation-delay: 0s;}
    }
  }
  
  @keyframes spoke {
    0% {
      opacity: 1}
    100% {
      opacity: 0.2}
  }
</style>
