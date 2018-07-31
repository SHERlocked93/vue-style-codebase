/**
 * 创建于 2018/7/23
 * 作者: SHERlocked93
 * 功能: 事件总线
 * App.contentScrollbar.backToTop : App.vue中内容区回升到顶部
 */

import Vue from 'vue'

const EventBus = new Vue({
  data: {
    scrollbarWrapper: null      // 存放首页的el-scrollbar Dom
  }
})

export default EventBus
