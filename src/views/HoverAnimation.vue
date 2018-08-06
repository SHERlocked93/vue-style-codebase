/**
* 创建于 2018/7/24
* 作者: SHERlocked93
* 功能: hover 过渡动画
*/


<template>
  <div class='hover' id='hover-animation'>
    <h2>Hover Animation</h2>
  </div>
</template>

<script type='text/javascript'>
  import Catalog from 'utils/genCatalog'
  
  export default {
    name: 'HoverAnimation',
    data() {
      return {}
    },
    mounted() {
      new Catalog({
        contentEl: 'hover-animation',
        catelogEl: `catalog-content-${this.$options.name}`,
        selector: ['h2', 'h3']
      })
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
