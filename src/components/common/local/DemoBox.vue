/**
* 创建于 2018/7/25
* 作者: SHERlocked93
* 功能: 示例 Demo 容器
* slot name: blackboard 演示区
* slot name: realization 实现区 Codepen
*/


<template>
  <div class='demo-box'>
    <!-- 实例 -->
    <div class='demo-board'>
      blackboard:
      <slot name='blackboard'></slot>
    </div>
    
    <!-- 实现 -->
    <div class='demo-real' v-if='isExpand' ref='demoReal'>
      <slot name='realization'></slot>
    </div>
    
    <!-- 底部 -->
    <div class='demo-footer' @click='clickFooter'>
      <i class="el-icon-caret-top"></i>
      <span class='show-real'>显示实现</span>
    </div>
  </div>
</template>

<script type='text/javascript'>
  import mixin from 'local/CommonMixin'
  
  export default {
    name: 'DemoBox',
    mixins: [mixin],
    data() {
      return {
        isExpand: false     // 当前是否是展开
      }
    },
    methods: {
      /**
       * 单击显示实现
       */
      clickFooter() {
        this.isExpand = !this.isExpand
        this.$nextTick(() =>
          this._reloadEmbed(this.$refs.demoReal)
        )
      }
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
    
    &:hover {
      box-shadow: 0 0 12px 1px $box-shadow;
    }
    
    /* 实例 */
    .demo-board {
    }
    
    /* 实现 */
    .demo-real {
    }
    
    .demo-board, .demo-real {
      border-bottom: 1px solid $light-grey;
      padding: $comm-distance;
    }
    
    /* 底部 */
    .demo-footer {
      text-align: center;
      line-height: 40px;
      cursor: pointer;
      
      [class^='el-icon'] {
        margin-right: 10px;
      }
      
      .show-real {
        visibility: hidden;
        opacity: 0;
        transform: translateX(20px);
      }
      
      [class^='el-icon'], .show-real {
        transition: $comm-transition;
      }
      
      &:hover {
        color: $green;
        [class^='el-icon'] {
          /*margin-right: 10px;*/
          transform: translateX(-10px);
        }
        .show-real {
          display: inline-block;
          transform: translateX(0);
          opacity: 1;
          visibility: initial;
        }
      }
    }
  }
</style>
