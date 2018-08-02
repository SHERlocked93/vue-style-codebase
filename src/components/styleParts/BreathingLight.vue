/**
* 创建于 2018/8/2
* 作者: QianYu
* 功能: 呼吸灯
* Codepen: https://codepen.io/SHERlocked93/pen/ajYxOM
*/


<template>
  <div class="bln">
    <div class='bln-inner'></div>
    <div class='bln-outer'></div>
    <div class='bln-content'>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BreathingLight'
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .bln {
    $width: 40px; // 调整大小，需要跟内圈大小同为奇数或同为偶数，否则会错位
    $bgc: #7f8c8d; // 基础色
    $breathHz: 3000ms; // 呼吸频率
    $inner-width: $width * .8; // 调整内圈大小
    $box-shadow: lighten($bgc, .5); // 阴影色
    
    position: relative;
    width: $width;
    height: $width;
    line-height: $width;
    text-align: center;
    cursor: pointer;
    
    /* 内容 */
    .bln-content {
      position: absolute;
      left: 0;
      top: 0;
      width: $width;
      height: $width;
      line-height: $width;
    }
    
    /* 内圈 */
    .bln-inner {
      width: $inner-width;
      height: $inner-width;
      top: ($width - $inner-width)/2;
      left: ($width - $inner-width)/2;
      background-color: $bgc;
      box-shadow: 0 0 2px rgba(0, 0, 0, .1);
      animation: ease-in-out zommLess $breathHz infinite alternate;
    }
    
    /* 外圈 */
    .bln-outer {
      width: $width;
      height: $width;
      top: 0;
      left: 0;
      background-color: lighten($bgc, 10%);
      animation: ease-in-out breath $breathHz infinite alternate;
    }
    
    .bln-inner, .bln-outer {
      border-radius: 50%;
      display: block;
      position: absolute;
      overflow: visible;
    }
    
    @keyframes breath {
      0% {
        opacity: .2;
        box-shadow: 0 0 2px rgba(0, 0, 0, .1); }
      100% {
        opacity: .6;
        box-shadow: 0 0 30px 2px $box-shadow; }
    }
    
    @keyframes zommLess {
      0% {
        transform: scale(1); }
      100% {
        transform: scale(.95); }
    }
  }
</style>
