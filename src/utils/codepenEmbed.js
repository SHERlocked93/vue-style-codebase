// noinspection CommaExpressionJS
/**
 * 创建于 2018/7/26
 * 作者: QianYu
 * 功能: codepen 的重加载函数
 */


document.getElementsByClassName || (document.getElementsByClassName = function(e) {
  let n, t, r
  const docu = document, arr = []
  if (docu.querySelectorAll) return docu.querySelectorAll("." + e)
  if (docu.evaluate) for (t = ".//*[contains(concat(' ', @class, ' '), ' " + e + " ')]", n = docu.evaluate(t, docu, null, 0, null); r = n.iterateNext();) {arr.push(r)} else {
    for (n = docu.getElementsByTagName("*"), t = new RegExp("(^|\\s)" + e + "(\\s|$)"), r = 0; r < n.length; r++) t.test(n[r].className) && arr.push(n[r])
  }
  return arr
}), function() {
  function init(el = document) {
    function _init(el) {
      const e = el.getElementsByClassName("codepen")
      let t = e.length - 1
      for (; t > -1; t--) {
        let u = a(e[t])
        // noinspection CommaExpressionJS
        if (0 !== Object.keys(u).length && (u = o(u), u.user = n(u, e[t]), r(u))) {
          const c = i(u), l = s(u, c)
          f(e[t], l)
        }
      }
      m()
    }
    
    function n(e, n) {
      if ("string" === typeof e.user) return e.user
      let t = 0
      const r = n.children.length
      for (; t < r; t++) {
        const a = n.children[t], o = a.href || "", i = o.match(/codepen\.(io|dev)\/(\w+)\/pen\//i)
        if (i) return i[2]
      }
      return "anon"
    }
    
    function r(e) {return e["slug-hash"]}
    
    function a(e) {
      // noinspection ES6ConvertVarToLetConst
      for (var n = {}, t = e.attributes, r = 0, a = t.length; r < a; r++) {
        const o = t[r].name
        0 === o.indexOf("data-") && (n[o.replace("data-", "")] = t[r].value)
      }
      return n
    }
    
    function o(e) {// noinspection CommaExpressionJS
      return e.href && (e["slug-hash"] = e.href), e.type && (e["default-tab"] = e.type), e.safe && ("true" === e.safe ? e.animations = "run" : e.animations = "stop-after-5"), e
    }
    
    function i(e) {
      const n = u(e), t = e.user ? e.user : "anon", r = "?" + l(e), a = e.preview && "true" === e.preview ? "embed/preview" : "embed", o = [n, t, a, e["slug-hash"] + r].join("/")
      return o.replace(/\/\//g, "//")
    }
    
    function u(e) {return e.host ? c(e.host) : "file:" === document.location.protocol ? "https://codepen.io" : "//codepen.io"}
    
    function c(e) {return e.match(/^\/\//) || !e.match(/https?:/) ? document.location.protocol + "//" + e : e}
    
    function l(e) {
      let n = ""
      for (let t in e) {
        // noinspection JSUnfilteredForInLoop,CommaExpressionJS
        "" !== n && (n += "&"), n += t + "=" + encodeURIComponent(e[t])
      }
      return n
    }
    
    function s(e, n) {
      let r
      // noinspection CommaExpressionJS
      e["pen-title"] ? r = e["pen-title"] : (r = "CodePen Embed " + t, t++)
      const a = {
        id: "cp_embed_" + e["slug-hash"].replace("/", "_"), src: n, scrolling: "no", frameborder: "0", height: d(e), allowTransparency: "true", allowfullscreen: "true", allowpaymentrequest: "true",
        name: "CodePen Embed", title: r, "class": "cp_embed_iframe " + (e["class"] ? e["class"] : ""), style: "width: " + p + "; overflow: hidden;"
      }
      let o = "<iframe "
      for (let i in a) o += i + '="' + a[i] + '" '
      // noinspection JSUnusedAssignment
      return o += "></iframe>"
    }
    
    function d(e) {return e.height ? e.height : 300}
    
    function f(e, n) {
      if (e.parentNode) {
        const t = document.createElement("div")
        // noinspection CommaExpressionJS
        t.className = "cp_embed_wrapper", t.innerHTML = n, e.parentNode.replaceChild(t, e)
      } else e.innerHTML = n
    }
    
    function m() {"function" === typeof __CodePenIFrameAddedToPage && __CodePenIFrameAddedToPage()}
    
    // noinspection ES6ConvertVarToLetConst
    var p = "100%"
    _init(el)
  }
  
  function _afterReady(e) {/in/.test(document.readyState) ? setTimeout("window.__cp_domReady(" + e + ")", 9) : e()}
  
  // noinspection ES6ConvertVarToLetConst
  var t = 1
  // noinspection CommaExpressionJS
  window.__cp_domReady = _afterReady, window.__CPEmbed = init, _afterReady(function() {new __CPEmbed})
}()
