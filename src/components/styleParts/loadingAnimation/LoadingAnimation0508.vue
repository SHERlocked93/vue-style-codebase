/**
* 创建于 2018/8/1
* 作者: QianYu
* 功能: LoadingAnimation0508 其他 Loading效果
* Codepen: https://codepen.io/comehope/pen/KBxYZg
*/

<template>
  <div class="loading-animation0508">
    <div class="loader">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script type='text/javascript'>
  export default {
    name: 'LoadingAnimation0508'
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $base-color: rgba(66, 185, 131, .8); // 修改部分环颜色1
  $base-color1: rgba(66, 185, 131, .3); // 修改部分环颜色2
  
  .loading-animation0508 {
    transform: scale(.7); // 修改大小
    
    .loader {
      --diameter: 8em;
      --width: calc(var(--diameter) * 2);
      --stroke-width: calc(var(--diameter) / 40);
      --dot-diameter: calc(var(--diameter) / 10);
      width: var(--width);
      height: var(--diameter);
      position: relative;
      color: $base-color;
      overflow: hidden;
    }
    
    .loader::before,
    .loader::after {
      content: '';
      position: absolute;
      bottom: 0;
    }
    
    .loader::before {
      width: inherit;
      height: var(--stroke-width);
      background-color: currentColor;
    }
    
    .loader::after {
      box-sizing: border-box;
      width: var(--diameter);
      height: var(--diameter);
      border: var(--stroke-width) solid;
      border-radius: 50%;
      left: 25%;
    }
    
    .loader span {
      position: absolute;
      width: var(--dot-diameter);
      height: var(--dot-diameter);
      background-color: currentColor;
      border-radius: 50%;
      bottom: var(--stroke-width);
      left: calc(var(--dot-diameter) * -1);
      animation: run 2s linear infinite,
      rotating 2s linear infinite;
      --vertical-center: calc((var(--diameter) / 2 - var(--stroke-width) - var(--dot-diameter)) * -1);
      transform-origin: 50% var(--vertical-center);
    }
    
    .loader span:nth-child(2) {
      animation-delay: 0.075s;
    }
    
    .loader span:nth-child(3) {
      animation-delay: 0.15s;
    }
    
    @keyframes run {
      0% { left: calc(var(--dot-diameter) * -1); }
      
      10%, 60% { left: calc((var(--width) - var(--dot-diameter)) / 2); }
      
      70%, 100% { left: var(--width); }
    }
    
    @keyframes rotating {
      0%, 10% { transform: rotate(0deg); }
      
      60%, 100% { transform: rotate(-1turn); }
    }
    
  }

</style>
