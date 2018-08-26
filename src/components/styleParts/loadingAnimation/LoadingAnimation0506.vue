/**
* 创建于 2018/8/1
* 作者: QianYu
* 功能: LoadingAnimation0506 其他 Loading效果
* Codepen: https://codepen.io/TaniaLD/pen/oKxep
*/

<template>
  <div class="loading-animation0506">
    <div class="clock"></div>
  </div>
</template>

<script type='text/javascript'>
  export default {
    name: 'LoadingAnimation0506'
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $base-color: rgba(66, 185, 131, 1); // 修改部分环颜色1
  $animation-delay: 0.15;
  $hour-time: 2s;
  $minu-time: 12s;
  
  .loading-animation0506 {
    transform: scale(.8); // 修改大小
    
    .clock {
      border-radius: 50%;
      border: 3px solid $base-color;
      height: 80px;
      width: 80px;
      position: relative;
      top: 28%;
      top: -webkit-calc(50% - 43px);
      top: calc(50% - 43px);
      left: 35%;
      left: -webkit-calc(50% - 43px);
      left: calc(50% - 43px);
    }
    
    .clock:after,
    .clock:before {
      content: "";
      position: absolute;
      background-color: $base-color;
      left: 48%;
      border-radius: 5px;
      transform-origin: 50% 97%;
      width: 4px;
      top: 6px;
      height: 35px;
      animation: spin $minu-time linear infinite;
    }
    
    .clock:after {
      top: 2px;
      height: 38px;
      animation: spin $hour-time linear infinite;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  }

</style>
