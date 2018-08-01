/**
* 创建于 2018/7/31
* 作者: QianYu
* 功能: LoadingAnimation0202  小球球 Loading效果
* Codepen: https://codepen.io/janrubio/pen/DusIE
*/

<template>
  <div class='loader'>
    <div class='circle'></div>
    <div class='circle'></div>
    <div class='circle'></div>
    <div class='circle'></div>
    <div class='circle'></div>
  </div>
</template>

<script type='text/javascript'>
  export default {
    name: 'LoadingAnimation0202'
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $base-color: #2c3e50; // 修改小球的颜色

  .loader {
    transform: scale(.6); // 修改大小
    $circle-width: 40px; // circle的长宽
    width: 1px;
    height: 1px;
    margin: auto;
    
    .circle {
      position: absolute;
      width: $circle-width;
      height: $circle-width;
      opacity: 0;
      transform: rotate(225deg);
      animation-iteration-count: infinite;
      animation-name: orbit;
      animation-duration: 5.5s;
      margin-left: -$circle-width / 2;
      margin-top: -$circle-width / 2;
      
      &:after {
        content: '';
        position: absolute;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: $base-color;
      }
      
      &:nth-child(2) { animation-delay: 240ms; }
      &:nth-child(3) { animation-delay: 480ms; }
      &:nth-child(4) { animation-delay: 720ms; }
      &:nth-child(5) { animation-delay: 960ms; }
    }
  }
  
  @keyframes orbit {
    0% { transform: rotate(225deg); opacity: 1;
      animation-timing-function: ease-out; }
    
    7% { transform: rotate(345deg);
      animation-timing-function: linear; }
    
    30% { transform: rotate(455deg);
      animation-timing-function: ease-in-out; }
    
    39% { transform: rotate(690deg);
      animation-timing-function: linear; }
    
    70% { transform: rotate(815deg); opacity: 1;
      animation-timing-function: ease-out; }
    
    75% { transform: rotate(945deg);
      animation-timing-function: ease-out; }
    
    76% { transform: rotate(945deg); opacity: 0; }
    100% { transform: rotate(945deg); opacity: 0; }
  }
</style>
