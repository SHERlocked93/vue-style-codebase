/**
 * 生成文章目录
 * @param opts 配置项
 */
export default function(opts) {
  let defaultOpts = {
    linkClass: 'cl-link',                             // 所有目录项都有的类
    linkActiveClass: 'cl-link-active',                // active的目录项
    datasetName: 'data-cata-target',                  // 目录项DOM的attribute存放对应目录的id
    selector: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],   // 按优先级排序
    active: null                                      // 激活时候回调
  }
  
  const Opt = Object.assign({}, defaultOpts, opts)
  
  const $content = document.getElementById(Opt.contentEl)        // 内容元素
  const $content_parent = $content.parentNode || document.body   // 内容元素的父元素
  const $catelog = document.getElementById(Opt.catelogEl)        // 目录元素
  
  let allCatelogs = $content.querySelectorAll(Opt.selector.join())
  let tree = getCatelogsTree(allCatelogs)
  $catelog.innerHTML = generateHtmlTree(tree, { id: -1 })
  
  /**
   * 滚动处理事件
   * @param e
   */
  $content_parent.addEventListener('scroll', function resolveScroll(el) {
    let scrollToEl = null
    for (let i = allCatelogs.length - 1; i >= 0; i--) {
      if (allCatelogs[i].offsetTop <= $content_parent.scrollTop) {
        scrollToEl = allCatelogs[i]
        break
      }
    }
    if (scrollToEl) setActiveItem(scrollToEl.id)
    else setActiveItem(null)            // 无匹配的元素
  })
  
  /* 点击事件 */
  $catelog.addEventListener('click', function({ target }) {
    const datasetId = target.getAttribute(Opt.datasetName)
    target.classList.contains(Opt.linkClass) &&
    document.getElementById(datasetId)
      .scrollIntoView({ behavior: "smooth", block: "start" })
  })
  
  /**
   * 获取目录树，生成类似于Vnode的树
   * @param catelogs
   */
  function getCatelogsTree(catelogs) {
    let title, tagName, tree = [], treeItem = {}, parentItem = { id: -1 }, lastTreeItem = null, id
    
    for (let i = 0; i < catelogs.length; i++) {
      title = catelogs[i].innerText || catelogs[i].textContent
      tagName = catelogs[i].tagName
      id = 'heading-' + i
      catelogs[i].id = id
      treeItem = {
        name: title,
        tagName: tagName,
        id: id,
        level: +getLevel(tagName),
        parent: parentItem
      }
      if (lastTreeItem) {
        if (getLevel(treeItem.tagName) > getLevel(lastTreeItem.tagName)) {
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
    while (lastTreeParent && (getLevel(currTreeItem.tagName) <= getLevel(lastTreeParent.tagName))) {
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
   * 生成DOM树
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
          ul += `<li><div class='${ Opt.linkClass } cl-level-${ tree[i].level }' ${Opt.datasetName}='${ tree[i].id }'>${tree[i].name}</div>`
          ul += generateHtmlTree(tree, tree[i])
          ul += '</li>'
        }
      }
      ul += '</ul>'
    }
    return hasChild ? ul : ''
  }
  
  function isEqual(node, node2) {
    return node && node2 && typeof node === 'object' && typeof node2 === 'object' && node.id === node2.id
  }
  
  /**
   *  设置选中的项
   */
  function setActiveItem(id) {
    let catas = [...$catelog.querySelectorAll(`[${Opt.datasetName}]`)]
    
    catas.forEach(T => {
      if (T.getAttribute(Opt.datasetName) === id) {
        T.classList.add(Opt.linkActiveClass)
        typeof Opt.active === 'function' &&
        Opt.active.call(this, T)                    // 执行active钩子
      } else {
        T.classList.remove(Opt.linkActiveClass)
      }
    })
  }
}
