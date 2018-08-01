/**
 * 创建于 2018/7/25
 * 作者: SHERlocked93
 * 功能: Clipboard相关的Mixin
 */

import Clipboard from 'clipboard'

export default {
  data() {
    return {
      _clipboard: null      // Clipboard.js剪切板对象
    }
  },
  methods: {
    /**
     * 装载 Clipboard 剪切板操作对象
     * @param el css选择器、DOM、DOM元素的list
     */
    _loadEleClipboard(el) {
      this._clipboard = new Clipboard(this.$refs.demoBox)
      
      this._clipboard.on('success', e => this.$message({
        type: 'success',
        dangerouslyUseHTMLString: true,
        message: `组件名 <strong>${this.thisName}</strong> 已经成功复制到剪切板`
      }))
      
      this._clipboard.on('error', err => console.error('复制失败', err))
    }
  },
  destroyed() {
    this._clipboard &&
    (this._clipboard = null)
  }
}
