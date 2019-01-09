/**
* 创建于 2018/11/4
* 作者: QianYu
* 功能: HoverAnimation0301 按钮Hover效果
* Codepen: https://codepen.io/SHERlocked93/pen/dQPymB
* 参考： https://www.zcfy.cc/article/stunning-hover-effects-with-css-variables
*/


<template>
  <div class="ha-0301">
    <div class='ha-0301-hook'>
      <span>Hover瞅瞅！</span>
    </div>
  </div>
</template>

<script type='text/javascript'>
  export default {
    name: 'HoverAnimation0301',
    mounted() {
      document.querySelector('.ha-0301-hook').onmousemove = e => {
        const x = e.layerX - e.target.offsetLeft
        const y = e.layerY - e.target.offsetTop
        e.target.style.setProperty('--x', `${ x }px`)
        e.target.style.setProperty('--y', `${ y }px`)
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .ha-0301 {
    position: relative;
    
    /deep/ .ha-0301-hook {
      position: relative;
      background: rgb(255, 75, 70);
      $this-height: 40px;
      height: $this-height;
      line-height: $this-height;
      text-align: center;
      width: 130px;
      border: none;
      color: rgba(255, 255, 255, .9);
      cursor: pointer;
      font-size: 1.2em;
      overflow: hidden;
      border-radius: 4px;
      
      span {
        position: relative;
        pointer-events: none;
      }
      
      &::before {
        content: '';
        position: absolute;
        --size: 0;
        left: var(--x);
        top: var(--y);
        width: var(--size);
        height: var(--size);
        background: radial-gradient(circle closest-side, #4405f7, transparent);
        transform: translate(-50%, -50%);
        transition: width .2s ease, height .2s ease;
      }
      
      &:hover::before {
        --size: 200px;
      }
    }
  }
</style>
