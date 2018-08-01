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
    <div class='demo-no'>
      {{thisNo}}
    </div>
  </div>
</template>

<script type='text/javascript'>
  export default {
    name: 'DemoBox',
    props: {
      thisWidth: {
        type: Number,
        default: 180
      },       // 宽度
      thisNo: {
        type: String,
        default: ''
      }        // 组件编号
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import '~styles/mixin.scss';
  
  .demo-box {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .demo-no {
      visibility: hidden;
      position: absolute;
      left: 0;
      top: 2px;
      color: $border-grey;
    }
    
    &:hover {
      .demo-no {
        visibility: visible;
      }
    }
  }
</style>
