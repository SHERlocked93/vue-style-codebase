/**
* 创建于 2018/7/25
* 作者: SHERlocked93
* 功能: 加载动画 Loading Animation
*/


<template>
  <div class='loading'>
    
    <h2 id='loading-animation'><a href='#loading-animation'>Loading Animation</a></h2>
    加载中状态的动效<code>consolas</code>
    
    <demo-box>
      <template slot='blackboard'>
        Blackboard 样例
      </template>
      
      <template slot='realization'>
        Realize 样例 Codepen
      </template>
    </demo-box>
  </div>
</template>

<script type='text/javascript'>
  import DemoBox from '@/components/common/local/DemoBox'
  
  export default {
    name: 'LoadingAnimation',
    components: { DemoBox },
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
