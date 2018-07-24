/**
* 创建于 2018/7/24
* 作者: QianYu
* 功能: Dashboard
* From: https://juejin.im/post/5a924fcaf265da4e7d6061a6
*/


<template>
  <div class='dash'>
    <div class='hello-wrap hello-wrap-hook' @click='goContent'>Welcome To Style Codebase</div>
    <cloudy-spiral></cloudy-spiral>
  </div>
</template>

<script type='text/javascript'>
  import CloudySpiral from 'styleParts/CloudySpiral'
  
  export default {
    name: 'Dashboard',
    components: { CloudySpiral },
    methods: {
      /**
       * 进入内容
       */
      goContent() {
        this.$router.push("loadingAnimation")
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~styles/mixin.scss";
  
  .dash {
    background: rgba(0, 0, 0, 0.9);
    height: 100vh;
    width: 100vw;
    position: relative;
    
    .hello-wrap {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 450px;
      $this-height: 80px;
      height: $this-height;
      line-height: $this-height;
      text-align: center;
      font-size: 28px;
      border-radius: 8px;
      background-color: $red-trans;
      cursor: pointer;
      transition: background .2s ease-in-out;
      z-index: 1000;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
      overflow: hidden;
      
      &:hover {
        background-color: $red;
        box-shadow: 0 0 24px rgba(0, 0, 0, 0.25);
      }
      
      &::before {
        content: '';
        z-index: -2;
        position: absolute;
        --size: 0;
        left: var(--x);
        top: var(--y);
        width: var(--size);
        height: var(--size);
        background: radial-gradient(circle closest-side, #4405f7, transparent);
        transform: translate(-50%, -50%);
        transition: width .2s ease, height .2s ease;
      }
      
      &:hover::before {
        --size: 450px;
      }
    }
  }
</style>
