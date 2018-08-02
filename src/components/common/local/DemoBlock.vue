/**
* 创建于 2018/7/25
* 作者: SHERlocked93
* 功能: 示例 Demo 容器
* slot name: blackboard 演示区
* slot name: description 描述区
* slot name: realization 实现区
*/


<template>
  <div class='demo-block'>
    <!-- 实例 -->
    <div class='demo-board'>
      <slot name='blackboard'></slot>
    </div>
    
    <!-- 实现 -->
    <div class='demo-play' v-if='isExpand' ref='demoReal'>
      <div class='demo-desc' v-if='$slots.description'>
        <slot name='description'></slot>
      </div>
      
      <div class='demo-real' v-if='$slots.realization'>
        <slot name='realization'></slot>
      </div>
    </div>
    
    <!-- 底部 -->
    <div class='demo-footer'
         @click='clickFooter'>
      <i :class='isExpand ? "el-icon-caret-top" : "el-icon-caret-bottom"'></i>
      <span class='show-real'>{{isExpand? '隐藏实现' : '显示实现'}}</span>
    </div>
  </div>
</template>

<script type='text/javascript'>
  import CodepenMixin from 'mixins/codepenMixin'
  
  export default {
    name: 'DemoBlock',
    mixins: [CodepenMixin],
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
  
  .demo-block {
    border: 1px solid $light-grey;
    border-radius: $radius;
    transition: $comm-transition;
    margin: $comm-distance 0;
    
    &:hover {
      box-shadow: 0 0 12px 0 $box-shadow;
    }
    
    /* 实例 */
    .demo-board {
      display: flex;
      flex-flow: row;
      flex-wrap: wrap;
      border-bottom: $comm-border;
      .demo-box {
        padding: $comm-distance;
        /*border-right: $comm-border;*/
      }
    }
    
    /* 实现 */
    .demo-play {
      padding: $comm-distance;
      border-bottom: $comm-border;
      .demo-desc {
        background-color: $light-grey;
        border-radius: $radius;
        padding: $comm-distance;
        margin-bottom: $comm-distance;
      }
      .demo-real {
      }
    }
    
    /* 底部 */
    .demo-footer {
      text-align: center;
      line-height: 40px;
      cursor: pointer;
      color: $light;
      
      [class^='el-icon'] {
        margin-right: 10px;
        transform: translateX(20px);
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
          transform: translateX(0px);
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
