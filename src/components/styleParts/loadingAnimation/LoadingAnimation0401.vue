/**
* 创建于 2018/8/1
* 作者: QianYu
* 功能: LoadingAnimation0301 环形 Loading效果
* Codepen: https://codepen.io/psyonline/pen/yayYWg
*/

<template>
  <div class="ribbon-ani">
    <div class="inner one"></div>
    <div class="inner two"></div>
    <div class="inner three"></div>
  </div>
</template>

<script type='text/javascript'>
  export default {
    name: 'LoadingAnimation0301',
    mounted() {
    
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $base-color: rgba(66, 185, 131, .8); // 修改部分环颜色
  
  .ribbon-ani {
    transform: scale(.7); // 修改大小
    position: absolute;
    top: calc(50% - 32px);
    left: calc(50% - 32px);
    width: 64px;
    height: 64px;
    border-radius: 50%;
    perspective: 800px;
    
    .inner {
      position: absolute;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      
      &.one {
        left: 0;
        top: 0;
        animation: rotate-one 1s linear infinite;
        border-bottom: 3px solid $base-color;
      }
      
      &.two {
        right: 0;
        top: 0;
        animation: rotate-two 1s linear infinite;
        border-right: 3px solid $base-color;
      }
      
      &.three {
        right: 0;
        bottom: 0;
        animation: rotate-three 1s linear infinite;
        border-top: 3px solid $base-color;
      }
    }
    
    @keyframes rotate-one {
      0% {
        transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
      }
      100% {
        transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
      }
    }
    
    @keyframes rotate-two {
      0% {
        transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
      }
      100% {
        transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
      }
    }
    
    @keyframes rotate-three {
      0% {
        transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
      }
      100% {
        transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
      }
    }
  }
</style>
