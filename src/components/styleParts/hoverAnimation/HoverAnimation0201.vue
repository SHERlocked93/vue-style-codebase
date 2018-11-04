/**
* 创建于 2018/11/4
* 作者: QianYu
* 功能: HoverAnimation0201 文字Hover效果
* Codepen: https://codepen.io/SHERlocked93/pen/RqNwjw
*/


<template>
  <div class="ha-0201">Hover瞅瞅!</div>
</template>

<script type='text/javascript'>
  export default {
    name: 'HoverAnimation0201'
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $base-color: rgba(66, 185, 131, .8); // 修改主色
  
  .ha-0201 {
    display: inline-block;
    position: relative;
    color: $base-color;
    line-height: 25px;
    
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: $base-color;
      transform-origin: bottom right; // 修改以改变出现方向
      transition: transform 0.25s ease-out;
    }
    
    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;   // 修改以改变消失方向
    }
  }
</style>
