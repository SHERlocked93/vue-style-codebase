/**
 * 创建于 2018/9/7
 * 作者: QianYu
 * type: 全局mixins
 * 功能: 获取系统数据字典
 * 使用方法：https://segmentfault.com/a/1190000016320939
 */

import * as Api from 'api'

export default {
  data() {
    return {
      _filterFunc: null,       // 过滤器函数
      _sysParams: null,        // 获取数据字典
      _sysParamsPromise: null  // 获取sysParams之后返回的Promise
    }
  },
  methods: {
    /**
     * 注册过滤器到_filterFunc中
     * @private
     */
    _getSysParamsFunc() {
      const thisPromise = this.$data._sysParamsPromise
      return thisPromise || Api.sysParams()
        .then(({ data }) => {
          this.$data._sysParams = data
          this.$data._filterFunc = {}
          Object.keys(data).forEach(paramKey =>
            this.$data._filterFunc[paramKey] = val => {
              const tar = data[paramKey].find(item => item['paramValue'] === val)
              return tar['paramDesc'] || ''
            })
          return data
        })
        .catch(err => console.error(err, ' in src/mixins/sysParamsMixin.js'))
    },

    /**
     * 按照键值获取单个过滤器
     * @returns {*}
     * @param id 过滤器key
     * @param val 传给过滤器的value
     */
    _rootFilters(val, id = 'DEPARTMENT') {
      const func = this.$data._filterFunc
      const mth = func && func[id]
      return mth && mth(val) || val
    },

    /**
     * 获取数据字典
     * @returns {Object}
     * @private
     */
    _getSysParams() {
      return this.$data._sysParams
    }
  },
  mounted() {
    this.$data._filterFunc ||
    (this.$data._sysParamsPromise = this._getSysParamsFunc())
  }
}
