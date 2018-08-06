/**
* 创建于 2018/7/24
* 作者: SHERlocked93
* 功能: panel 展板动画
*/


<template>
  <div class='panel' id='panel-animation'>
    <h2>Panel Animation</h2>
  </div>
</template>

<script type='text/javascript'>
  import Catalog from 'utils/genCatalog'
  
  export default {
    name: 'PanelAnimation',
    data() {
      return {}
    },
    mounted() {
      new Catalog({
        contentEl: 'panel-animation',
        catelogEl: `catalog-content-${this.$options.name}`,
        selector: ['h2', 'h3']
      })
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
