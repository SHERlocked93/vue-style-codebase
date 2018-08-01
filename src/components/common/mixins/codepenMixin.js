/**
 * 创建于 2018/7/25
 * 作者: SHERlocked93
 * 功能: Codepen相关的Mixin
 */


export default {
  methods: {
    /**
     * 重加载Codepen
     * @private
     */
    _reloadEmbed(el) {
      window.__CPEmbed(el)
    }
  },
  mounted() {
    this.$nextTick(
      window.__CPEmbed() // 重加载Codepen
    )
  }
}
