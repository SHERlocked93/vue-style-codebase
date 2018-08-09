/**
* 创建于 2018/7/31
* 作者: QianYu
* 功能: LoadingAnimation2  小球球 Loading效果
* Codepen: https://codepen.io/stryju/pen/zrijB
*/


<template>
  <div class='loading-animation2'>
    <i></i>
  </div>
</template>

<script type='text/javascript'>
  export default {
    name: 'LoadingAnimation2'
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .loading-animation2 {
    $base-color: rgba(66, 185, 131, .8); // 修改小球的颜色
    $anim-duration: .6s;
    $dot-size: 30px;
    transform: scale(.6); // 修改大小
    
    %anim {
      animation-duration: $anim-duration;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
    }
    
    i {
      @extend %anim;
      width: 140px;
      height: 140px;
      margin: auto;
      display: block;
      background: radial-gradient(closest-side, $base-color 90%, transparent) no-repeat 0 50%,
      radial-gradient(closest-side, $base-color 90%, transparent) no-repeat 0 50%;
      background-size: $dot-size $dot-size;
      position: relative;
      transform: translateZ(0) scale(0.25);
      animation-name: slide;
      
      &::before,
      &::after {
        @extend %anim;
        content: '';
        width: $dot-size;
        height: $dot-size;
        background: radial-gradient(closest-side, $base-color 90%, transparent);
        position: absolute;
        top: 50%;
        margin-top: - $dot-size * 0.5;
        animation-name: reveal;
      }
      
      &::before {
        left: 1%;
        animation-delay: 40ms;
      }
      
      &::after {
        right: 1%;
        animation-direction: reverse;
      }
    }
    
    @keyframes slide {
      from {
        background-position: 0, 50%;
      }
      to {
        background-position: 50%, 100%;
      }
    }
    
    @keyframes reveal {
      from {
        transform: scale(0.001);
      }
      to {
        transform: scale(1);
      }
    }
  }
</style>
