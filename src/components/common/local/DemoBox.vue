/**
* 创建于 2018/7/25
* 作者: SHERlocked93
* 功能: 示例 Demo 容器
* slot name: blackboard 演示区
* slot name: realization 实现区 Codepen
*/


<template>
  <div class='demo-box'>
    <div>
      blackboard:
      <slot name='blackboard'></slot>
    </div>
    <div>
      realization:
      <slot name='realization'></slot>
    </div>
  </div>
</template>

<script type='text/javascript'>
  import mixin from 'local/CommonMixin'
  
  export default {
    name: 'DemoBox',
    mixins: [mixin],
    data() {
      return {}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~styles/mixin.scss";
  
  .demo-box {
    border: 1px solid $light-grey;
    border-radius: 2px;
    transition: $comm-transition;
    margin: $comm-distance 0;
    padding: $comm-distance;
    &:hover {
      box-shadow: 0 0 18px 4px $box-shadow;
    }
  }
</style>
