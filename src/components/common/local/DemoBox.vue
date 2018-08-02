/**
* 创建于 2018/7/31
* 作者: QianYu
* 功能: 示例中的小栗子容器
*/


<template>
  <div class='demo-box demo-box-hook'
       ref='demoBox'
       :data-clipboard-text='thisName'
       :style='{
            width: thisWidth ? thisWidth + "px" : "",
            height: thisWidth ? thisWidth + "px" : ""}'>
    <slot></slot>
    <div class='demo-no'>
      {{thisName}}
    </div>
  </div>
</template>

<script type='text/javascript'>
  import ClipboardMixin from 'mixins/clipboardMixin'
  
  export default {
    name: 'DemoBox',
    mixins: [ClipboardMixin],
    props: {
      thisWidth: {
        type: Number,
        default: 180
      },       // 宽度
      thisName: {
        type: String,
        default: ''
      }        // 组件名称
    },
    mounted() {
      this._loadEleClipboard(this.$refs.demoBox)
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
    cursor: pointer;
    
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
