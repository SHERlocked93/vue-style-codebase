/**
* 创建于 2018/7/24
* 作者: SHERlocked93
* 功能: Cloudy Spiral 螺旋云
* Codepen: https://codepen.io/hakimel/pen/aIhkf
*/


<template>
  <div class='cloudy-spiral'>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
  </div>
</template>

<script type='text/javascript'>
  export default {
    name: 'CloudySpiral',
    mounted() {
      document.querySelector('.hello-wrap-hook').onmousemove = e => {
        const x = e.pageX - e.target.offsetLeft + e.target.clientWidth / 2
        const y = e.pageY - e.target.offsetTop + e.target.clientHeight / 2
        e.target.style.setProperty('--x', `${ x }px`)
        e.target.style.setProperty('--y', `${ y }px`)
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $particles: 62;
  $particleSize: 8px;
  $radius: 80;
  $lapDuration: 3s;
  
  .cloudy-spiral {
    position: absolute;
    top: 50%;
    left: 50%;
    perspective: 500px;
    filter: brightness(70%) blur(8px);
    
    i {
      display: block;
      position: absolute;
      width: $particleSize;
      height: $particleSize;
      border-radius: $particleSize;
      opacity: 0;
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0 0 10px rgba(255, 255, 255, 1);
      animation: spin 3s infinite ease-in-out;
    }
    
    @for $i from 1 through $particles {
      i:nth-child(#{$i}) {
        $angle: ( $i / $particles ) * 720;
        transform: rotate(#{$angle}deg) translate3d(#{$radius}px, 0, 0);
        animation-delay: $i * ($lapDuration / $particles);
      }
    }
    
    @keyframes spin {
      from {
        opacity: 0.0;
      }
      to {
        opacity: 0.6;
        transform: translate3d(-$particleSize/2, -$particleSize/2, 570px);
      }
    }
  }
</style>
