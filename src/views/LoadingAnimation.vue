/**
* 创建于 2018/7/25
* 作者: SHERlocked93
* 功能: 加载动画 Loading Animation
*/


<template>
  <div class='loading'>
    
    <h2 id='loading-animation'><a href='#loading-animation'>Loading Animation</a></h2>
    加载中状态的动效
    
    <demo-block>
      <template slot='blackboard'>
        <demo-box>呵呵呵</demo-box>
        <demo-box>呵呵呵</demo-box>
        <demo-box>呵呵呵</demo-box>
      </template>
      
      <template slot='description'>呵呵呵啊</template>
      
      <template slot='realization'>
        <p data-height="365" data-theme-id="0" data-slug-hash="JcqbE" data-default-tab="css,result" data-user="iliadraznin" data-pen-title="CSS3 Working Clock" data-preview="true"
           class="codepen">See the Pen <a href="https://codepen.io/iliadraznin/pen/JcqbE/">CSS3 Working Clock</a> by Ilia (<a href="https://codepen.io/iliadraznin">@iliadraznin</a>) on <a
          href="https://codepen.io">CodePen</a>.</p>
      </template>
    </demo-block>
  </div>
</template>

<script type='text/javascript'>
  import DemoBlock from 'local/DemoBlock'
  
  export default {
    name: 'LoadingAnimation',
    components: { DemoBlock },
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
