/**
* 创建于 2018/7/25
* 作者: SHERlocked93
* 功能: 加载动画 Loading Animation
*/


<template>
  <div class='loading' id='loading-animation'>
    <h2 id='artical-content'>Loading Animation</h2>
    
    <!--#01 音阶波浪 Loading效果-->
    <h3>音阶波浪 Loading效果</h3>
    <demo-block>
      <template slot='blackboard'>
        <demo-box thisName='LoadingAnimation0101'>
          <loading-animation0101 timingFunction='ease'></loading-animation0101>
        </demo-box>
        <demo-box thisName='LoadingAnimation0101'>
          <loading-animation0101 timingFunction='ease-in'></loading-animation0101>
        </demo-box>
        <demo-box thisName='LoadingAnimation0101'>
          <loading-animation0101 timingFunction='linear'></loading-animation0101>
        </demo-box>
        <demo-box thisName='LoadingAnimation0102'>
          <loading-animation0102></loading-animation0102>
        </demo-box>
      </template>
      
      <template slot='description'>
        根据自己需要修改<code>timingFunction</code>的动效，参数为<code>animation-timing-function</code>。
      </template>
      
      <template slot='realization'>
        <p data-height="265" data-theme-id="light" data-slug-hash="YjQQoR" data-default-tab="css,result" data-user="SHERlocked93" data-pen-title="CSS3 Loading Animation" data-preview="true"
           class="codepen">See the Pen <a href="https://codepen.io/SHERlocked93/pen/YjQQoR/">CSS3 Loading Animation</a> by SHERlocked93 (<a href="https://codepen.io/SHERlocked93">@SHERlocked93</a>) on
          <a href="https://codepen.io">CodePen</a>.</p>
        
        <p data-height="265" data-theme-id="light" data-slug-hash="yJxFo" data-default-tab="css,result" data-user="filipekiss" data-pen-title="Loading Animations" data-preview="true"
           class="codepen">See the Pen <a href="https://codepen.io/filipekiss/pen/yJxFo/">Loading Animations</a> by Filipe Kiss (<a href="https://codepen.io/filipekiss">@filipekiss</a>) on <a
          href="https://codepen.io">CodePen</a>.</p>
      </template>
    </demo-block>
    
    <!--#02 小球球 Loading效果-->
    <h3>小球球 Loading效果</h3>
    <demo-block>
      <template slot='blackboard'>
        <demo-box thisName='LoadingAnimation0201'>
          <loading-animation0201></loading-animation0201>
        </demo-box>
        <demo-box thisName='LoadingAnimation0203'>
          <loading-animation0203></loading-animation0203>
        </demo-box>
        <demo-box thisName='LoadingAnimation0204'>
          <loading-animation0204></loading-animation0204>
        </demo-box>
        <demo-box thisName='LoadingAnimation0202'>
          <loading-animation0202></loading-animation0202>
        </demo-box>
      </template>
      
      <template slot='realization'>
        <p data-height="265" data-theme-id="light" data-slug-hash="zrijB" data-default-tab="css,result" data-user="stryju" data-pen-title="@desnadro's [Loader dots], but one element"
           data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/stryju/pen/zrijB/">@desnadro's [Loader dots], but one element</a> by tomasz stryjewski (<a
          href="https://codepen.io/stryju">@stryju</a>) on <a href="https://codepen.io">CodePen</a>.</p>
        
        <p data-height="265" data-theme-id="light" data-slug-hash="DusIE" data-default-tab="css,result" data-user="janrubio" data-pen-title="Windows 8 Loading Animation" data-preview="true"
           class="codepen">See the Pen <a href="https://codepen.io/janrubio/pen/DusIE/">Windows 8 Loading Animation</a> by Jan Rubio (<a href="https://codepen.io/janrubio">@janrubio</a>) on <a
          href="https://codepen.io">CodePen</a>.</p>
        
        <p data-height="265" data-theme-id="light" data-slug-hash="yJxFo" data-default-tab="css,result" data-user="filipekiss" data-pen-title="Loading Animations" data-preview="true"
           class="codepen">See the Pen <a href="https://codepen.io/filipekiss/pen/yJxFo/">Loading Animations</a> by Filipe Kiss (<a href="https://codepen.io/filipekiss">@filipekiss</a>) on <a
          href="https://codepen.io">CodePen</a>.</p>
      </template>
    </demo-block>
    
    <!--#03 环形 Loading效果-->
    <h3>环形 Loading效果</h3>
    <demo-block>
      <template slot='blackboard'>
        <demo-box thisName='LoadingAnimation0301'>
          <loading-animation0301></loading-animation0301>
        </demo-box>
        <demo-box thisName='LoadingAnimation0302'>
          <loading-animation0302></loading-animation0302>
        </demo-box>
        <demo-box thisName='LoadingAnimation0303'>
          <loading-animation0303></loading-animation0303>
        </demo-box>
      </template>
      
      <template slot='realization'>
        <p data-height="265" data-theme-id="light" data-slug-hash="yJxFo" data-default-tab="css,result" data-user="filipekiss" data-pen-title="Loading Animations" data-preview="true"
           class="codepen">See the Pen <a href="https://codepen.io/filipekiss/pen/yJxFo/">Loading Animations</a> by Filipe Kiss (<a href="https://codepen.io/filipekiss">@filipekiss</a>) on <a
          href="https://codepen.io">CodePen</a>.</p>
      </template>
    </demo-block>
    
    <!--#04 丝带 Loading效果-->
    <h3>丝带 Loading效果</h3>
    <demo-block>
      <template slot='blackboard'>
        <demo-box>
          <loading-animation0201></loading-animation0201>
        </demo-box>
      </template>
      
      <template slot='description'>
        小球通常使用<code>border-radius</code>为50%的div来实现，再使用<code>animation</code>来实现动画。
      </template>
      
      <template slot='realization'>
      
      </template>
    </demo-block>
    
    <!--#05 其他 Loading效果-->
    <h3>其他 Loading效果</h3>
    <demo-block>
      <template slot='blackboard'>
        <demo-box thisName='LoadingAnimation0501'>
          <loading-animation0501></loading-animation0501>
        </demo-box>
        <demo-box thisName='LoadingAnimation0502'>
          <loading-animation0502></loading-animation0502>
        </demo-box>
        <demo-box thisName='LoadingAnimation0503'>
          <loading-animation0503></loading-animation0503>
        </demo-box>
      </template>
      
      <template slot='realization'>
        <p data-height="265" data-theme-id="light" data-slug-hash="yJxFo" data-default-tab="css,result" data-user="filipekiss" data-pen-title="Loading Animations" data-preview="true"
           class="codepen">See the Pen <a href="https://codepen.io/filipekiss/pen/yJxFo/">Loading Animations</a> by Filipe Kiss (<a href="https://codepen.io/filipekiss">@filipekiss</a>) on <a
          href="https://codepen.io">CodePen</a>.</p>
      </template>
    </demo-block>
    
    <h2>呵呵呵</h2><br><br><br><br>
    <h3>哈哈哈</h3><br><br>
    <h3>哈哈哈</h3><br><br>
    <h3>哈哈哈</h3><br><br>
    <h3>哈哈哈</h3><br><br>
    <h3>哈哈哈</h3><br><br>
    <h3>哈哈哈</h3><br><br><br>
    <h2>呵呵呵</h2><br><br>
    <h3>哈哈哈</h3><br><br><br><br>
    <h3>哈哈哈</h3><br><br><br><br>
    <h2>呵呵呵</h2><br><br><br><br>
    <h3>哈哈哈</h3><br><br><br><br>
    <h3>哈哈哈</h3><br><br><br><br>
    <h3>哈哈哈</h3><br><br><br><br>
    <h3>哈哈哈</h3><br><br><br><br>
    <h3>哈哈哈</h3><br><br><br><br>
    <h3>哈哈哈</h3><br><br><br><br>
    <h3>哈哈哈</h3><br><br><br><br>
    <h3>哈哈哈</h3><br><br><br><br>
    <h3>哈哈哈</h3><br><br><br><br>
    <h3>哈哈哈</h3><br><br><br><br>
  </div>
</template>

<script type='text/javascript'>
  import DemoBlock from 'local/DemoBlock'
  import BreathingLight from 'styleParts/BreathingLight'
  import LoadingAnimation0101 from 'styleParts/loadingAnimation/LoadingAnimation0101'
  import LoadingAnimation0102 from 'styleParts/loadingAnimation/LoadingAnimation0102'
  import LoadingAnimation0201 from 'styleParts/loadingAnimation/LoadingAnimation0201'
  import LoadingAnimation0202 from 'styleParts/loadingAnimation/LoadingAnimation0202'
  import LoadingAnimation0203 from 'styleParts/loadingAnimation/LoadingAnimation0203'
  import LoadingAnimation0204 from 'styleParts/loadingAnimation/LoadingAnimation0204'
  import LoadingAnimation0301 from 'styleParts/loadingAnimation/LoadingAnimation0301'
  import LoadingAnimation0302 from 'styleParts/loadingAnimation/LoadingAnimation0302'
  import LoadingAnimation0303 from 'styleParts/loadingAnimation/LoadingAnimation0303'
  import LoadingAnimation0501 from 'styleParts/loadingAnimation/LoadingAnimation0501'
  import LoadingAnimation0502 from 'styleParts/loadingAnimation/LoadingAnimation0502'
  import LoadingAnimation0503 from 'styleParts/loadingAnimation/LoadingAnimation0503'
  import Catalog from 'utils/genCatalog'
  
  export default {
    name: 'LoadingAnimation',
    components: {
      LoadingAnimation0101, LoadingAnimation0102,
      LoadingAnimation0201, LoadingAnimation0202,
      LoadingAnimation0203, LoadingAnimation0204,
      LoadingAnimation0301, LoadingAnimation0302,
      LoadingAnimation0303,
      LoadingAnimation0501, LoadingAnimation0502,
      LoadingAnimation0503, DemoBlock
    },
    mounted() {
      new Catalog({
        contentEl: 'loading-animation',
        catelogEl: `catalog-content-${this.$options.name}`,
        selector: ['h2', 'h3']
      })
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~styles/mixin.scss";
  
  .loading {
  }
</style>
