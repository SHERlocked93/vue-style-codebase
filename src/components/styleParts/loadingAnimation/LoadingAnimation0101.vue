/**
* 创建于 2018/7/31
* 作者: QianYu
* 功能: LoadingAnimation0101 音阶波浪 Loading效果
* Codepen: https://codepen.io/SHERlocked93/pen/YjQQoR
*/


<template>
  <div class="loading-animation">
    <span v-for='n in 15' :key='n'
          :style='{"animation-timing-function": timingFunction}'></span>
  </div>
</template>

<script type='text/javascript'>
  export default {
    name: 'LoadingAnimation0101',
    props: {
      timingFunction: {
        type: String,
        default: 'ease'
      }         // 动效
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $base-color: rgba(66, 185, 131, .8); // 修改主颜色
  $base-color2: rgba(66, 185, 131, .2); // 修改主颜色2
  
  .loading-animation {
    transform: scale(.3); // 修改大小
    $speed: 2.5s;
    $margin-top: 33%;
    position: relative;
    display: inline-block;
    margin: auto;
    width: 140px;
    height: 100px;
    span {
      display: block;
      width: 4px;
      height: 10%;
      border-radius: 10px;
      margin-right: 5px;
      margin-top: $margin-top;
      float: left;
      &:last-child {
        margin-right: 0;
      }
      @for $i from 1 through 15 {
        &:nth-child(#{$i}) {
          animation: load $speed abs(1.6s - 0.2s * $i) infinite;
        }
      }
    }
    
    @keyframes load {
      0% {
        background: $base-color2;
        margin-top: $margin-top;
        height: 10%;
      }
      50% {
        background: $base-color;
        height: 100%;
        margin-top: 0;
      }
      100% {
        background: $base-color2;
        height: 10%;
        margin-top: $margin-top;
      }
    }
  }

</style>
