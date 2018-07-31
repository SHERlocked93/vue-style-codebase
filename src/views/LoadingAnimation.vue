/**
* 创建于 2018/7/25
* 作者: SHERlocked93
* 功能: 加载动画 Loading Animation
*/


<template>
  <div class='loading'>
    
    <h2 id='loading-animation'><a href='#loading-animation'>Loading Animation</a></h2>
    
    <h3>音阶波浪Loading效果</h3>
    加载中状态的动效，下面是用不同动画的速度曲线实现的音阶波浪Loading动效
    
    <demo-block>
      <template slot='blackboard'>
        <demo-box>
          <loading-animation1 timingFunction='ease'></loading-animation1>
        </demo-box>
        <demo-box>
          <loading-animation1 timingFunction='ease-in'></loading-animation1>
        </demo-box>
        <demo-box>
          <loading-animation1 timingFunction='linear'></loading-animation1>
        </demo-box>
      </template>
      
      <template slot='description'>
        根据自己需要修改<code>timingFunction</code>的动效，参数为<code>animation-timing-function</code>
      </template>
      
      <template slot='realization'>
        <p data-height="265" data-theme-id="light" data-slug-hash="YjQQoR" data-default-tab="css,result" data-user="SHERlocked93" data-pen-title="CSS3 Loading Animation" data-preview="true"
           class="codepen">See the Pen <a href="https://codepen.io/SHERlocked93/pen/YjQQoR/">CSS3 Loading Animation</a> by SHERlocked93 (<a href="https://codepen.io/SHERlocked93">@SHERlocked93</a>) on
          <a href="https://codepen.io">CodePen</a>.</p>
      </template>
    </demo-block>
    
    <h3>小球乱动Loading效果</h3>
    
    <demo-block>
      <template slot='blackboard'>
        <demo-box thisWidth='180'>
          <loading-animation2></loading-animation2>
        </demo-box>
        <demo-box thisWidth='180'>
          <loading-animation3></loading-animation3>
        </demo-box>
      </template>
      
      <template slot='description'>
        根据自己需要修改<code>timingFunction</code>的动效，参数为<code>animation-timing-function</code>
      </template>
      
      <template slot='realization'>
        <p data-height="265" data-theme-id="light" data-slug-hash="zrijB" data-default-tab="css,result" data-user="stryju" data-pen-title="@desnadro's [Loader dots], but one element"
           data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/stryju/pen/zrijB/">@desnadro's [Loader dots], but one element</a> by tomasz stryjewski (<a
          href="https://codepen.io/stryju">@stryju</a>) on <a href="https://codepen.io">CodePen</a>.</p>
      </template>
    </demo-block>
  </div>
</template>

<script type='text/javascript'>
  import DemoBlock from 'local/DemoBlock'
  import LoadingAnimation1 from 'styleParts/loadingAnimation/LoadingAnimation1'
  import LoadingAnimation2 from 'styleParts/loadingAnimation/LoadingAnimation2'
  import LoadingAnimation3 from 'styleParts/loadingAnimation/LoadingAnimation3'
  
  export default {
    name: 'LoadingAnimation',
    components: { LoadingAnimation1, LoadingAnimation2, LoadingAnimation3, DemoBlock }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .loading {
  }
</style>
