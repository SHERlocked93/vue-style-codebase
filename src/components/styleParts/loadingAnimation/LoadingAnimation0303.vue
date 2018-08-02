/**
* 创建于 2018/8/1
* 作者: QianYu
* 功能: LoadingAnimation0301 环形 Loading效果
* Codepen: https://codepen.io/Erik/pen/cslHn
*/

<template>
  <div class="loading-circle"></div>
</template>

<script type='text/javascript'>
  export default {
    name: 'LoadingAnimation0301'
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $base-color: #34495e; // 修改部分环颜色1
  
  @keyframes loading {
    0% {
      transform-origin: 100% 100%;
      transform: rotate(0deg);
    }
    100% {
      transform-origin: 100% 100%;
      transform: rotate(360deg);
    }
  }
  
  .loading-circle {
    transform: scale(.5); // 修改大小
    position: relative;
    display: block;
    z-index: 13;
    margin: 15px auto;
    width: 100px;
    height: 100px;
    border: 5px solid transparent;
    border-radius: 50%;
    background-color: transparent;
    
    &:hover {
      border-color: rgba(210, 210, 210, .5);
    }
    
    &:hover:before {
      background-color: rgba(210, 210, 210, .4);
    }
    
    &:before {
      position: absolute;
      display: block;
      content: '';
      z-index: 12;
      top: 4px;
      left: 4px;
      width: 82px;
      height: 82px;
      border-radius: 50%;
      background-color: white;
    }
    
    &:after {
      position: absolute;
      display: block;
      top: 0;
      content: '';
      z-index: 11;
      left: 0;
      width: 45px;
      height: 45px;
      border-radius: 200px 0 0 0;
      background: linear-gradient(45deg, transparent 0%, $base-color 50%, $base-color 100%);
      animation: loading .9s linear infinite;
    }
  }

</style>
