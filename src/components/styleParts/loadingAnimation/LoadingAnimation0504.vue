/**
* 创建于 2018/8/1
* 作者: QianYu
* 功能: LoadingAnimation0504 其他 Loading效果
* Codepen: https://codepen.io/hakimel/pen/CxliK
*/

<template>
  <div class="loading-animation0504">
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
    <i>
      <b></b>
    </i>
  </div>
</template>

<script type='text/javascript'>
  export default {
    name: 'LoadingAnimation0504'
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $base-color: rgba(66, 185, 131, .8); // 修改小球的颜色
  $particles: 100; // 个数
  $particleSize: 6px; // 大小
  $radius: 100;
  $lapDuration: 3s;
  
  .loading-animation0504 {
    transform: scale(.4); // 修改大小
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    perspective: 200px;
    
    i {
      display: block;
      position: absolute;
      opacity: 1;
      
      b {
        display: block;
        width: $particleSize;
        height: $particleSize;
        border-radius: $particleSize;
        background: $base-color;
        box-shadow: 0 0 14px $base-color;
        animation-name: spin;
        animation-duration: $lapDuration;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
      }
    }
    
    @for $i from 1 through $particles {
      i:nth-child(#{$i}) {
        $angle: ( $i / $particles ) * 360;
        transform: rotate(#{$angle}deg) translate3d(#{$radius}px, 0, 0);
        
        b {
          animation-delay: $i * ($lapDuration / ( $particles - 2 ));
        }
      }
    }
    
    @keyframes spin {
      0% {
        transform: scale(1);
      }
      15% {
        transform: translate(-$particleSize/2, -$particleSize/2) scale(3);
      }
      50% {
        transform: scale(1);
      }
    }
  }

</style>
