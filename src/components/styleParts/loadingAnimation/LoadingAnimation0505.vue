/**
* 创建于 2018/8/1
* 作者: QianYu
* 功能: LoadingAnimation0505 其他 Loading效果
* Codepen: https://codepen.io/akshaycodes/pen/OoMxYG
*/

<template>
  <div class="loading-animation0505">
    <div class='helix'>
      <div v-for='i in 15' :key='i'></div>
    </div>
  </div>
</template>

<script type='text/javascript'>
  export default {
    name: 'LoadingAnimation0505'
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $base-color: rgba(66, 185, 131, .8); // 修改部分环颜色1
  $base-color1: rgba(255, 102, 102, .8); // 修改部分环颜色2
  $particles: 15; // 个数
  $particleSize: 10px; // 小球大小
  $height: 30px;
  $width: 100px;
  $animation-delay: 0.15;
  $animation: 2s;
  
  .loading-animation0505 {
    transform: scale(.3); // 修改大小
    .helix > div {
      width: $width;
      height: $height;
      margin: auto;
      position: relative;
      animation: revolve $animation reverse linear infinite;
      transform-style: preserve-3d;
      transform-origin: center center 0;
      
      &:after, &:before {
        content: '';
        height: $particleSize;
        width: $particleSize;
        border-radius: 100%;
        background: red;
        position: absolute;
        animation: revolve $animation linear infinite;
      }
      
      &:before {
        left: 0;
        background: $base-color;
      }
      
      &:after {
        right: 0;
        background: $base-color1;
      }
      
      @for $i from 1 through $particles {
        &:nth-child(#{$i}) {
          animation-delay: #{$i * $animation-delay}s;
          &:before, &:after {
            animation-delay: #{$i * $animation-delay}s;
          }
        }
      }
    }
    
    @keyframes revolve {
      from { transform: rotateY(360deg)}
      to { transform: rotateY(0)}
    }
  }

</style>
