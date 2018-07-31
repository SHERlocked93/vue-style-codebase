/**
* 创建于 2018/7/31
* 作者: QianYu
* 功能: 示例中的小栗子容器
*/


<template>
  <div class='demo-box'>
    <slot></slot>
  </div>
</template>

<script type='text/javascript'>
  export default {
    name: 'DemoBox'
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .demo-box {
    background-color: green;
  }
</style>
