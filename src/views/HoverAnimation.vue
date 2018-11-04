/**
* 创建于 2018/7/24
* 作者: SHERlocked93
* 功能: hover 过渡动画
*/


<template>
  <div class='hover' id='hover-animation'>
    <h2>Hover Animation</h2>
    
    Hover Animation 主要是鼠标移上去的时候的效果，一般通过transform来实现；
    
    <h3>基础效果</h3>
    <demo-block>
      <template slot='blackboard'>
        <demo-box thisName='HoverAnimation0101'>
          <hover-animation0101></hover-animation0101>
        </demo-box>
      </template>
      
      <template slot='realization'>
        <p data-height="265" data-theme-id="0" data-slug-hash="Pxwobw" data-default-tab="css,result" data-user="SHERlocked93" data-pen-title="Easing variables" class="codepen">See the Pen <a
          href="https://codepen.io/SHERlocked93/pen/Pxwobw/">Easing variables</a> by SHERlocked93 (<a href="https://codepen.io/SHERlocked93">@SHERlocked93</a>) on <a
          href="https://codepen.io">CodePen</a>.</p>
      </template>
    </demo-block>
    
    <h3>文字 Hover效果</h3>
    <demo-block>
      <template slot='blackboard'>
        <demo-box thisName='HoverAnimation0201'>
          <hover-animation0201></hover-animation0201>
        </demo-box>
      </template>
      
      <template slot='realization'>
        <p data-height="265" data-theme-id="0" data-slug-hash="RqNwjw" data-default-tab="css,result" data-user="SHERlocked93" data-pen-title="Hover underline animation" class="codepen">See the Pen <a
          href="https://codepen.io/SHERlocked93/pen/RqNwjw/">Hover underline animation</a> by SHERlocked93 (<a href="https://codepen.io/SHERlocked93">@SHERlocked93</a>) on <a
          href="https://codepen.io">CodePen</a>.</p>
      </template>
    </demo-block>
    
    <h3>按钮 Hover效果</h3>
    <demo-block>
      <template slot='blackboard'>
        <demo-box thisName='HoverAnimation0301'>
          <hover-animation0301></hover-animation0301>
        </demo-box>
      </template>
      
      <template slot='realization'>
        <p data-height="265" data-theme-id="0" data-slug-hash="dQPymB" data-default-tab="css,result" data-user="SHERlocked93" data-pen-title="Mouse cursor gradient tracking"
           class="codepen">See the Pen <a href="https://codepen.io/SHERlocked93/pen/dQPymB/">Mouse cursor gradient tracking</a> by SHERlocked93 (<a
          href="https://codepen.io/SHERlocked93">@SHERlocked93</a>) on <a href="https://codepen.io">CodePen</a>.</p>
      </template>
    </demo-block>
    
    
    <h3>哈哈哈</h3><br><br>
    <h3>哈哈哈</h3><br><br>
    <h3>哈哈哈</h3><br><br>
    <h3>哈哈哈</h3><br><br>
    <h3>哈哈哈</h3><br><br>
    <h3>哈哈哈</h3><br><br><br>
  </div>
</template>

<script type='text/javascript'>
  import DemoBlock from 'local/DemoBlock'
  import Catalog from 'progress-catalog'
  import HoverAnimation0101 from 'styleParts/hoverAnimation/HoverAnimation0101'
  import HoverAnimation0201 from 'styleParts/hoverAnimation/HoverAnimation0201'
  import HoverAnimation0301 from 'styleParts/hoverAnimation/HoverAnimation0301'
  
  export default {
    name: 'HoverAnimation',
    components: {
      HoverAnimation0101, HoverAnimation0201,
      HoverAnimation0301
    },
    mounted() {
      new Catalog({
        contentEl: 'hover-animation',
        catalogEl: `catalog-content-${this.$options.name}`,
        selector: ['h2', 'h3']
      })
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  
  .hover-animation {
  }
</style>
