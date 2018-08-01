/**
* 创建于 2018/7/31
* 作者: QianYu
* 功能: 示例中的小栗子容器
*/


<template>
  <div class='demo-box'
       :style='{
            width: thisWidth ? thisWidth + "px" : "",
            height: thisWidth ? thisWidth + "px" : ""}'>
    <slot></slot>
  </div>
</template>

<script type='text/javascript'>
  export default {
    name: 'DemoBox',
    props: {
      thisWidth: {
        type: String,
        default: '180'
      }       // 宽度
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .demo-box {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
</style>
