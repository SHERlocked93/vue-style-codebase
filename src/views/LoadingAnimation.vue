/**
* 创建于 2018/7/25
* 作者: SHERlocked93
* 功能: 加载动画 Loading Animation
*/


<template>
  <div class='loading'>
    
    <h2 id='loading-animation'><a href='#loading-animation'>Loading Animation</a></h2>
    加载中状态的动效<code>consolas</code>
  
  </div>
</template>

<script type='text/javascript'>
  import mixin from 'local/CommonMixin'
  
  export default {
    name: 'LoadingAnimation',
    mixins: [mixin],
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .loading {
  }
</style>
