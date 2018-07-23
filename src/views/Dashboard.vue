<template>
  <div class='dash'>
    dashborad
    <div class='wrapper'>
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
  </div>
</template>

<script type='text/javascript'>
  export default {
    name: 'Dashboard',
    data() {
      return {}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~styles/mixin.scss";
  
  $particles: 62;
  $particleSize: 8px;
  $radius: 80;
  $lapDuration: 3s;
  
  .dash {
    background: rgba(0, 0, 0, 0.9);
    height: 100%;
    .wrapper {
      position: absolute;
      top: 50%;
      left: 50%;
      perspective: 500px;
      
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
  }
</style>
