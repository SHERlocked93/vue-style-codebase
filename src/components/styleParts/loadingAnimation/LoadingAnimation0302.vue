/**
* 创建于 2018/8/1
* 作者: QianYu
* 功能: LoadingAnimation0302 环形 Loading效果
* Codepen: https://codepen.io/filipekiss/pen/yJxFo
*/

<template>
  <div class="loading-circle"></div>
</template>

<script type='text/javascript'>
  export default {
    name: 'LoadingAnimation0302'
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $base-color1: rgba(66, 185, 131, .8); // 修改部分环颜色1
  $base-color2: transparent; // 修改全环颜色2
  $width: 35px; // 修改大小
  
  .loading-circle {
    margin: 0 auto;
    width: $width;
    height: $width;
    border-radius: 50%;
    position: relative;
    animation: spin 1s infinite linear;
    border: 4px solid $base-color2;
    border-left-color: $base-color1;
  }
  
  @keyframes spin {
    100% { transform: rotate(360deg); }
  }

</style>
