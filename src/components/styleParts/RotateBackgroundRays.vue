/**
* 创建于 2018/7/31
* 作者: QianYu
* 功能: 旋转的背景光晕
* Codepen: https://codepen.io/SHERlocked93/pen/zLPWyx
*/


<!--suppress HtmlUnknownTarget -->
<template>
  <div class="rays-wrapper">
    <img class='rays' src="~assets/rays-main.png">
    <img class="inner" src='../../assets/logo green.png'>
  </div>
</template>

<script type='text/javascript'>
  export default {
    name: 'RotateBackgroundRays'
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .rays-wrapper {
    $width: 65px;
    position: relative;
    width: $width;
    height: $width;
    
    .inner {
      $width: 40px;
      position: absolute;
      top: 50%;
      left: 50%;
      width: $width;
      height: $width;
      margin-top: -$width/2;
      margin-left: -$width/2;
      border-radius: 2px;
      background-size: contain;
    }
    
    .rays {
      width: 100%;
      height: 100%;
      animation: myRotate linear infinite 20s;
    }
    
    @keyframes myRotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }

</style>
