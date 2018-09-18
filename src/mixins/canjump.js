/**
 * 创建于 2018/9/18
 * 作者: QianYu
 * 功能: 路由是否可跳转mixin
 */


const canjump = {
  data() {
    return {
      $_canJump: true,                       // 是否可以直接跳转
      $_tipsMessage: '是否放弃当前操作？'      // 提示
    }
  },
  methods: {
    /**
     * 信息修改标记
     */
    _infoChange(flag) {
      this.$data.$_canJump = flag
    },

    /**
     * 改变提示
     * @param res
     * @private
     */
    _tipsMessageChange(res) {
      this.$data.$_tipsMessage = res || '是否放弃当前操作？'
    }
  },
  beforeRouteLeave(to, from, next) {
    if (!this.$data.$_canJump) {   // 跳转前提示是否保存
      this.$confirm(this.$data.$_tipsMessage, '提示', {
          center: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        .then(() => next())
        .catch(() => next(false))
    } else {
      next()
    }
  }
}
export default canjump
