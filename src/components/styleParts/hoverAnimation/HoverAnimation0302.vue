/**
* 创建于 2019/1/9
* 作者: SHERlocked93
* 功能: HoverAnimation0302 按钮Hover效果
* Codepen: https://codepen.io/SHERlocked93/pen/zyLPEy
*/


<template>
  <div class="ha-0302">
    <div class='ha-0302-btn'>Hover瞅瞅！</div>
  </div>
</template>

<script type='text/javascript'>
  export default {
    name: 'HoverAnimation0302'
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .ha-0302 {
    .ha-0302-btn {
      $this-height: 40px;
      $this-width: 130px;
      margin:auto;
      width: $this-width;
      line-height: $this-height;
      text-align: center;
      color: #fff;
      font-size: 1.2em;
      cursor: pointer;
      background: linear-gradient(#0a8048 0%, #2aa452 50%, #83fdac 100%) 0 0;
      background-size: 100% 150%;
      transition: .3s;
      border-radius: 4px;
  
      &:hover {
        background-position: 0 75%;
      }
    }
  }
</style>
