/**
 * 生成文章目录
 * @param opts 配置项
 */
export default function(opts) {
  
  let defaultOpts = {
    linkClass: 'cl-link',                             // 所有目录项都有的类
    linkActiveClass: 'cl-link-active',                // active的目录项
    catelogAttrName: 'data-cata-target',              // 目录项DOM的attribute存放对应目录的id
    supplyTop: 0,
    selector: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],   // 按优先级排序
    active: null                                      // 激活时候回调
  }
  
  if (typeof Object.assign !== 'function') {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, "assign", {
      value: function assign(target, varArgs) { // .length of function is 2
        'use strict'
        if (target == null) { // TypeError if undefined or null
          throw new TypeError('Cannot convert undefined or null to object')
        }
        
        const to = Object(target)
        
        for (let index = 1; index < arguments.length; index++) {
          const nextSource = arguments[index]
          
          if (nextSource != null) { // Skip over if undefined or null
            for (let nextKey in nextSource) {
              // Avoid bugs when hasOwnProperty is shadowed
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey]
              }
            }
          }
        }
        return to
      },
      writable: true,
      configurable: true
    })
  }
  
  function arrayLikeToArray(al) {
    return Array.prototype.slice.call(al)
  }
  
  const option = Object.assign({}, defaultOpts, opts)
  const $content = document.getElementById(option.contentEl)      // 内容元素
  const $catelog = document.getElementById(option.catelogEl)      // 目录元素
  
  const { AttrName } = option
  
  /**
   * 获取目录树
   * @param catelogs
   */
  function getCatelogsTree(catelogs) {
    let title, tagName,
      tree = [], treeItem = {}, parentItem = { id: -1 }, lastTreeItem = null
    
    let id
    
    for (let i = 0; i < catelogs.length; i++) {
      title = catelogs[i].innerText || catelogs[i].textContent
      tagName = catelogs[i].tagName
      id = 'heading-' + i
      catelogs[i].id = id
      treeItem = {
        name: title,
        tagName: tagName,
        id: id,
        level: getLevel(tagName),
        parent: parentItem
      }
      if (lastTreeItem) {
        if (getPriority(treeItem.tagName) < getPriority(lastTreeItem.tagName)) {
          treeItem.parent = lastTreeItem
        } else {
          treeItem.parent = findParent(treeItem, lastTreeItem)
        }
      }
      lastTreeItem = treeItem
      tree.push(treeItem)
    }
    return tree
  }
  
  /**
   * 找到当前节点的父级
   * @param currTreeItem
   * @param lastTreeItem
   * @returns {*|Window}
   */
  function findParent(currTreeItem, lastTreeItem) {
    let lastTreeParent = lastTreeItem.parent
    while (lastTreeParent && (getPriority(currTreeItem.tagName) >= getPriority(lastTreeParent.tagName))) {
      lastTreeParent = lastTreeParent.parent
    }
    return lastTreeParent || { id: -1 }
  }
  
  /**
   *  获取等级
   * @param tagName
   * @returns {*}
   */
  function getLevel(tagName) {
    return tagName ? tagName.slice(1) : 0
  }
  
  /**
   *  获取权重
   * @param tagName h1~h6
   * @param selector array
   * @return {number}
   */
  function getPriority(tagName, selector = defaultOpts.selector) {
    let priority = 0
    if (tagName) {
      let lower = tagName.toLowerCase()
      if (selector.includes(lower)) {
        priority = selector.length - selector.indexOf(lower)
      }
    }
    return priority
  }
  
  /**
   * 生成树
   * @param tree
   * @param _parent
   * @return {string}
   */
  function generateHtmlTree(tree, _parent) {
    let ul, hasChild = false
    if (tree) {
      ul = '<ul>'
      for (let i = 0; i < tree.length; i++) {
        if (isEqual(tree[i].parent, _parent)) {
          hasChild = true
          ul += `<li><div class="${ option.linkClass } cl-level-${ tree[i].level }" ${AttrName}="${ tree[i].id }">` + tree[i].name + '</div>'
          ul += generateHtmlTree(tree, tree[i])
          ul += '</li>'
        }
      }
      ul += '</ul>'
    }
    return hasChild ? ul : ''
  }
  
  /**
   * 获取dataset属性
   * @param el
   * @param id
   * @returns {*}
   */
  function getDataset(el, id) {
    if (el.dataset) {
      return el.dataset[id]
    } else {
      return el.getAttribute(`data-${ id }`)
    }
  }
  
  function isEqual(node, node2) {
    return node && node2 && typeof node === 'object' && typeof node2 === 'object' && node.id === node2.id
  }
  
  /**
   * 获取滚动条滚动的高度
   * @returns {number}
   */
  function getScrollTop() {
    return document.documentElement.scrollTop || document.body.scrollTop
  }
  
  let allCatelogs = $content.querySelectorAll(option.selector.join())
  
  let tree = getCatelogsTree(allCatelogs)
  
  let clickToScroll = false      // 点击跳转不触发scroll事件
  
  $catelog.innerHTML = generateHtmlTree(tree, { id: -1 })
  
  $catelog.addEventListener('click', function(e) {
    let target = e.target || e.srcElement
    let id = target.getAttribute(AttrName)
    if (id) {
      let headEl = document.getElementById(id)
      clickToScroll = true
      window.scrollTo(0, headEl.offsetTop - option.supplyTop)
      setActiveItem(id)
    }
  })
  
  /**
   *  设置选中的项
   */
  function setActiveItem(id) {
    let catelogs = $catelog.querySelectorAll(`[${AttrName}]`)
    catelogs = arrayLikeToArray(catelogs)
    let activeTarget = null, c
    
    for (let i = 0; i < catelogs.length; i++) {
      c = catelogs[i]
      let dataSet = c.getAttribute(AttrName)
      if (dataSet === id) {
        
        c.classList.add(option.linkActiveClass)
        
        activeTarget = c
        
        if ($catelog.children[0].offsetHeight > $catelog.offsetHeight) {
          if (c.offsetTop > $catelog.offsetHeight / 2) {
            // 距离底部小于容器的一般，不能margin上去了
            if ($catelog.children[0].offsetHeight - c.offsetTop - c.offsetHeight < $catelog.offsetHeight / 2) {
              $catelog.children[0].style.marginTop = -$catelog.children[0].offsetHeight + $catelog.offsetHeight + 'px'
            } else {
              $catelog.children[0].style.marginTop = ($catelog.offsetHeight / 2) - c.offsetTop + 'px'
            }
          } else {
            $catelog.children[0].style.marginTop = '0px'
          }
        }
        
      } else {
        c.classList.remove(option.linkActiveClass)
      }
    }
    if (typeof option.active === 'function') {
      option.active.call(this, activeTarget)
    }
  }
  
  /**
   * 滚动处理事件
   * @param e
   */
  window.addEventListener('scroll', function resolveScroll(e) {
    if (!clickToScroll) {
      let scrollTop = getScrollTop() + option.supplyTop
      let scrollToEl = null
      for (let i = allCatelogs.length - 1; i >= 0; i--) {
        if (allCatelogs[i].offsetTop <= scrollTop) {
          scrollToEl = allCatelogs[i]
          break
        }
      }
      if (scrollToEl) setActiveItem(scrollToEl.id)
      else setActiveItem(null)   // 无匹配的元素
    }
    clickToScroll = false
  })
}
