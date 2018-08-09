/**
* 创建于 2018/7/24
* 作者: SHERlocked93
* 功能: hover 过渡动画
*/


<template>
  <div class='hover' id='hover-animation'>
    <h2>Hover Animation</h2><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    
    <h2>呵呵呵</h2><br><br><br><br>
    <h3>哈哈哈</h3><br><br>
    <h3>哈哈哈</h3><br><br>
    <h3>哈哈哈</h3><br><br>
    <h3>哈哈哈</h3><br><br>
    <h3>哈哈哈</h3><br><br>
    <h3>哈哈哈</h3><br><br><br>
  </div>
</template>

<script type='text/javascript'>
  import Catalog from 'progress-catalog'
  
  export default {
    name: 'HoverAnimation',
    data() {
      return {}
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

</style>
