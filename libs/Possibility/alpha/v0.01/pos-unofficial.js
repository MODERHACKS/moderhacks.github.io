/*
 *PossibilityJS
 *v0.01-alpha (Unofficial) - Gets Frequent Updates
 *by Debarchito Nath ( MOD ER HACKS ) (c) 2020 | ALL RIGHTS RESERVED
 *Released Under 'THE MIT LICENSE' which can be found at - https://moderhacks.github.io/LICENSE.md
*/

"use strict"

window.Possibility = window.Pos = function(ins) {
  document.querySelector("head").innerHTML += "<style id='Possibility-CSS-Out'></style>"
  var p = document.querySelectorAll("script[type='text/possibility']")
  for(var i = 0; i < p.length; ++i) {
    var script = document.createElement("script")
    script.type = "text/javascript"
    script.id = "Possibility-JS-Out"
    script.innerHTML += Pos.engine(Pos.engine(p[i].innerHTML))
    document.querySelector("body").appendChild(script)
    if(ins !== undefined) {
      if(ins.output !== undefined) {
        var rV = ins.output
        rV(script.innerHTML)
      }
    }
  }
}


Pos.engine = function(val) {
  return val.replace(/\.add(.*?)\((.*?)<style>([\S\s]*?)<\/style>(.*?)\)/gm, function(_, a, b, c, d) {
    var t = new Pos.TOOLS()
    var fin
    if(t.isEmpty(a) === t.isEmpty(b) === t.isEmpty(d)) {
      fin = '.add("' + c.trim().replace(/"/gm, '\\"').replace(/\n/gm, '" + "\\n') + '")'
    } else {
      return _
    }
    return fin
  }).replace(/<str>([\S\s]*?)<\/str>/gm, function(_, a) {
    return '"' + a.trim().replace(/"/gm, '\\"').replace(/\n/gm, '" + "\\n') + '"'
  })
}

Pos.antistring = function(obj) {
  return new Function('"use strict"; return (' + obj + ')')()
}

Pos.el = function(a, b, c) {
  if(typeof a === "string") {
    var el = document.querySelectorAll(a)
    for(var i = 0; i < el.length; ++i) {
      var fun, no
      if(b === undefined && c === undefined) {
       return document.querySelector(a)
      } else if(typeof b === "number" && typeof c === "function") {
        no = el[b]
        fun = c
      } else if(typeof b === "function" && c === undefined) {
        no = el[i]
        fun = b
      } else if(b.trim() === "*" && typeof c === "function") {
        no = el[i]
        fun = c
      }
      fun(no)
    }
  }
}

Pos.render = function (template, elem, ins) {
  if(ins === undefined) { ins = {} }
  if (typeof template === 'function') {
    template.elem = elem
  }
  elem = typeof elem === 'string' ? document.querySelector(elem) : elem
  if (!elem) return
  template = (typeof template === 'function' ? template(template.state) : template)
  if (typeof template !== 'string') return
  if (elem.innerHTML === template) return
  elem.innerHTML = template
  if (typeof window.CustomEvent === 'function') {
    var event = new CustomEvent('render', { bubbles: true })
    elem.dispatchEvent(event)
  }
  return elem
}

Pos.STYLESHEET = function() {
  this.add = function(sty) {
    var tools = new Pos.TOOLS()
    sty = tools.executor("vf", sty)
    document.querySelector("#Possibility-CSS-Out").innerHTML += sty
  }
}

Pos.ELEMENT = function() {

  this.create = function(el, ins) {
    if(ins === undefined) {
      ins = {}
    }
    var a = document.createElement(el)
    if(ins instanceof Object) {
      if(ins.parent === undefined) {
        ins.parent = "body"
      }
      if(ins.html === undefined) {
        ins.html === ""
      }
      if(ins.text === undefined) {
        ins.text === ""
      }
      if(ins.val === undefined) {
        ins.val = ""
      }
      if (el === "input") {
        a.value = ins.val
      } else {
        if(typeof ins.html === "string" && ins.html.trim() !== "") {
          a.innerHTML = ins.html
        }
        else if(typeof ins.text === "string" && ins.text.trim() !== "") {
          a.innerText = ins.text
        }
      }
      if(ins.attr === undefined) {
        ins.attr = {}
      }
      document.getElementsByTagName(ins.parent)[0].appendChild(a)
      if(JSON.stringify(ins.attr) !== "{}") {
      Object.entries(ins.attr).forEach(function (_ref) {
        var _ref2 = Pos.innerTools.slicedToArray(_ref, 2), key = _ref2[0], val = _ref2[1]
        if ( typeof val === 'object') {
          var t = new Pos.TOOLS()
          t.assign(a[key], val)
        } else {
          a[key] = val
        }
      })
     }
      return a
    } else if(typeof ins === "string") {
      if(el === "input") {
        a.value = ins
      } else {
        a.innerHTML = ins
      }
      document.getElementsByTagName("body")[0].appendChild(a)
    }
  }

this.node = function(tag, attrs, children) {
  var element = document.createElement(tag)
  for (var name in attrs) {
    if (name && attrs.hasOwnProperty(name)) {
       var value = attrs[name]
       if (value === true) {
         element.setAttribute(name, name)
       } else if (value !== false && value != null) {
         element.setAttribute(name, value.toString())
       }
     }
   }
   for (var i = 2; i < arguments.length; i++) {
     var child = arguments[i]
     element.appendChild(child.nodeType == null ? document.createTextNode(child.toString()) : child)
   }
   return element
 }

this.push = function(html, ins) {
  if(ins === undefined) {
    ins = {}
  }
  if(ins.parent === undefined) {
    ins.parent = "body"
  }
  if(ins.overwrite === undefined) {
    ins.overwrite = false
  }
  if(ins.type === undefined) {
    ins.type = "html"
  }
  if(ins.overwrite === false) {
    if(ins.type === "html") {
      document.querySelector(ins.parent).innerHTML += html
    } else if(ins.type === "text") {
      document.querySelector(ins.parent).innerText += html
    } else {
      throw TypeError("Possibility-ErrorLog [Possibility.ELEMENT() => this.push() or this.inject()] | '" + ins.type + "' is not a valid type.")
    }
  } else {
    if(ins.type === "html") {
      document.querySelector(ins.parent).innerHTML = html
    } else if(ins.type === "text") {
      document.querySelector(ins.parent).innerText = html
    } else {
      throw TypeError("Possibility-ErrorLog [Possibility.ELEMENT() => this.push() or this.inject()] | '" + ins.type + "' is not a valid type.")
    }
  }
}

}

Pos.TEMPLATE = function() {

  var tempStore = {}
  var tools = new Pos.TOOLS()

  this.register = function(id, temp) {
    tools.assign(tempStore, Pos.antistring('{ ' + id.trim() + ':' + '"' + temp.trim().replace(/"/gm, '\\"').replace(/\n/gm, '" + "\\n') + '" }'))
  }

  this.render = function(id, ins) {
    if(ins === undefined) {
      ins = {}
    }
    if(ins.parent === undefined) {
      ins.parent = "body"
    }
    if(ins.data === undefined) {
      ins.data = {}
    }
    if(tempStore[id] === undefined) {
      throw Error("Possibility-ErrorLog [Possibility.TEMPLATE() => this.render()] | '" + id + "' is not a registered template.")
    } else {
      tempStore[id] = tools.executor("vf", tempStore[id])
      document.querySelector(ins.parent).innerHTML += tempStore[id]
    }
  }

}

Pos.INTERFACE = function() {

  var required = {}
  var tools = new Pos.TOOLS()

 this.register = function(id, app) {
   tools.assign(required, Pos.antistring("{" + id.trim() + ":" + JSON.stringify(app) + "}"))
 }

 this.check = function(id, app) {
  if(tools.deepEqual(required[id], tools.replaceWithType(app))) {
    return app
  } else {
   throw Error("Possibility-ErrorLog [Possibilty.INTERFACE() => this.check()] | Interface with id '" + id + "' was violated.")
  }
 }
}

Pos.TOOLS = function() {

  this.isEmpty = function(str) { var ret; if(str.trim() === "") { ret = true } else { ret = false }; return ret }

  this.executor = function(type, str, sr, ed, body) {
    if(sr === undefined || sr === null) { sr = '\\{\\{' }
    if(ed === undefined || ed === null) { ed = '\\}\\}' }
    var reg = "/" + sr + "(.*?)" + ed + "/gm", fin
    if(type.trim() === "vf") {
      fin = str.replace(Pos.antistring(reg), function(_, ad) {
        var ret
        if(ad.includes("*")) {
          var sp = ad.split("*")
          ret = Pos.antistring(sp[0].trim()).toString().repeat(Pos.antistring(sp[1].trim()))
        } else {
          return Pos.antistring(ad.trim()).toString()
        }
        return ret
      })
    } else if(type.trim() === "cv") {
      fin = str.replace(Pos.antistring(reg), function(_, ad) {
        var ret
        if(ad.includes("*")) {
          var sp = ad.split("*")
          ret = Pos.antistring(body[sp[0].trim()]).toString().repeat(Pos.antistring(sp[1].trim()))
        } else {
          return Pos.antistring(body[ad.trim()]).toString()
        }
        return ret
      })
    } else {
      throw SyntaxError("Possibility-ErrorLog [Possibility.TOOLS() => this.executor()] | '" + type.trim() + "' is nor valid or registered flag.")
    }
 return fin
  }

  this.assign = function(target) { for (var i = 1; i < arguments.length; ++i) { var source = arguments[i]; for (var key in source) { if(source.hasOwnProperty(key)) { target[key] = source[key] }}}; return target }

   this.replaceWithType = function(obj) {
     return Object.fromEntries(Object.entries(obj).map(function (_ref) {
       var _ref2 = Pos.innerTools.slicedToArray(_ref, 2), k = _ref2[0], v = _ref2[1]
       var type
       switch (true) {
         case Array.isArray(v):
           type = "array"
           break
         case v === null:
           type = "null"
           break
         default:
           type = Pos.innerTools.type(v)
        }
        return [k, type]
      }))
    }

   this.deepEqual = function(v1, v2) {
     function deepEqual(x, y) {
       var ok = Object.keys,
       tx = Possibility.innerTools.type(x),
       ty = Possibility.innerTools.type(y)
       return x && y && tx === 'object' && tx === ty ? ok(x).length === ok(y).length && ok(x).every(function (key) {
         return deepEqual(x[key], y[key])
       }) : x === y
     }
     return deepEqual(v1, v2)
   }

   this.pick = function(object) {
     for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
       keys[_key - 1] = arguments[_key]
     }
     var filteredEntries = Object.entries(object).filter(function (_ref) {
       var _ref2 = Pos.innerTools.slicedToArray(_ref, 2), key = _ref2[0], _value = _ref2[1]
       return keys.includes(key)
     })
     return Object.fromEntries(filteredEntries)
   }

  this.findKey = function(object, callback, thisValue) {
    for (var _i = 0, _Object$entries = Object.entries(object); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = Pos.innerTools.slicedToArray(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1]
      if (callback.call(thisValue, value, key, object)) {
        return key
      }
    }
    return undefined
  };

  this.mapObject = function(object, callback, thisValue) {
    var mappedEntries = Object.entries(object).map(function (_ref) {
      var _ref2 = Pos.innerTools.slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1]
      var mappedValue = callback.call(thisValue, value, key, object)
      return [key, mappedValue]
    })
    return Object.fromEntries(mappedEntries)
  }

  this.invert = function(object) {
    var mappedEntries = Object.entries(object).map(function (_ref) {
      var _ref2 = Pos.innerTools.slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1]
      return [value, key]
    })
    return Object.fromEntries(mappedEntries)
  }

}

Possibility.AJAX = function() {

this.get = function(url, ins) {
  if(ins.async === undefined) {
    ins.async = true
  }
  if(window.XMLHttpRequest) {
    var request = new XMLHttpRequest()
  } else {
    request = new ActiveXObject("Microsoft.XMLHTTP")
  }
  request.open('GET', url, ins.async)
  request.onreadystatechange = function() {
    if (this.readyState === 4) {
      if (this.status >= 200 && this.status < 400) {
        if(ins.before !== undefined) {
          var rVar0= ins.before
          rVar0()
        }
        var rVar1 = ins.success
        rVar1(this.responseText)
        if(ins.after !== undefined) {
          var rVar2 = ins.after
          rVar2()
        }
      } else {
          var rVar2 = ins.error
          rVar2()
      }
    }
  }
  request.send()
  request = null
}

 this.post = function(url, ins) {
   if(ins.async === undefined) {
     ins.async = true
   }
   if(ins.contentType === undefined) {
     ins.contentType = "application/x-www-form-urlencoded"
   }
   if(ins.charset === undefined) {
     ins.charset = "UTF-8"
   }
   if(window.XMLHttpRequest) {
     var request = new XMLHttpRequest()
   } else {
     request = new ActiveXObject("Microsoft.XMLHTTP")
   }
   request.open('POST', url, ins.async)
   request.setRequestHeader('Content-Type', ins.contentType + "; charset=" + ins.charset)
   request.send(ins.data)
  }

}

Pos.FILE = function() {
  var baseS = ""
  var ajax = new Pos.AJAX()
  this.root = function(src) {
    baseS = src
  }
  this.load = function(src, async, fun) {
    if(async === undefined) { async = false }
    ajax.get(baseS + src, {
      async: async,
      success: function(data) {
        var el = new Possibility.ELEMENT()
        el.create("script", {
          html: Pos.engine(data)
        })
        if(fun !== undefined) {
          var rV = fun
          rV(data)
        }
      },
      error: function() {
        throw Error("Possibility-ErrorLog [Possibility.LOADER() => this.load()] | Unable to load '" + src + "'.")
      }
    })
  }
  this.add = function(src, par, asy) {
   if(asy === undefined) { asy = false }
   if(par === null) { par = "body" }
   var el = new Pos.ELEMENT()
   el.create("script", {
    parent: par,
    attr: {
     src: baseS + src,
     defer: asy,
     async: asy
    }
   })
  }
  this.get = function(src, rep) {
   var get;
   if(rep === undefined) { rep = "\\n" }
   ajax.get(baseS + src, {
    async: false,
    success: function(data) {
      get = data.replace(/\n/gm, rep)
    },
    error: function() {
     throw Error("Possibility-ErrorLog [Possibility.LOADER() => this.get()] | Unable to get content from '" + src + "'.")
    }
   })
   return get
  }
  this.enable = function() {
   var all = document.querySelectorAll("*")
   for(var i = 0; i < all.length; ++i) {
    if(all[i].hasAttribute("pos:content")) {
     var src = all[i].getAttribute("pos:content").trim()
     var async;
     if(all[i].hasAttribute("pos:async")) {
       async = Pos.antistring(all[i].getAttribute("pos:async"))
     } else { async = true }
     ajax(src, {
      async: async,
      success: function(data) {
       all[i].innerHTML = data
      }, 
      error: function() {
       throw Error("Possibility-ErrorLog [Possibility.LOADER() => this.enable()] | Unable to load content from '" + src + "' into your " + all[i] + ".")
      }
     })
    }
   }
  }
}

Pos.innerTools = {
  type: function(ob) {
   function _typeof(obj) {
     if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
       _typeof = function _typeof(obj) {
         return typeof obj
       }
     } else {
       _typeof = function _typeof(obj) {
         return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
       }
     }
     return _typeof(obj)
   }
   return _typeof(ob)
 },
 slicedToArray: function(arr, i) {
    return Pos.innerTools.arrayWithHoles(arr) || Pos.innerTools.iterableToArrayLimit(arr, i)
 },
 iterableToArrayLimit: function(arr, i) {
   if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
     return
   }
   var _arr = [], _n = true, _d = false, _e = undefined
   try {
     for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
       _arr.push(_s.value); if (i && _arr.length === i) break
     }
   } catch (err) {
      _d = true; _e = err
   } finally {
     try {
       if (!_n && _i["return"] != null) _i["return"]()
     } finally {
       if (_d) throw _e
     }
   }
   return _arr
 },
 arrayWithHoles: function(arr) {
   if (Array.isArray(arr)) return arr
 }
}

if (!String.prototype.includes) { String.prototype.includes = function(search, start) { 'use strict'; if (search instanceof RegExp) { throw TypeError('First argument must not be a RegExp') }; if (start === undefined) { start = 0; }; return this.indexOf(search, start) !== -1 }}; if (!Object.keys) { Object.keys = (function() { var hasOwnProperty = Object.prototype.hasOwnProperty, hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'), dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'], dontEnumsLength = dontEnums.length; return function(obj) { if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) { throw new TypeError('Object.keys called on non-object') }; var result = [], prop, i; for (prop in obj) { if (hasOwnProperty.call(obj, prop)) { result.push(prop) }}; if (hasDontEnumBug) { for (i = 0; i < dontEnumsLength; i++) { if (hasOwnProperty.call(obj, dontEnums[i])) { result.push(dontEnums[i]) }}}; return result }}())}; if (!Object.entries) { Object.entries = function( obj ){ var ownProps = Object.keys( obj ), i = ownProps.length, resArray = new Array(i); while (i--) { resArray[i] = [ownProps[i], obj[ownProps[i]]] }; return resArray; }}; if(!Object.fromEntries) { Object.fromEntries = function(iterable) { var result = {}; var _iteratorNormalCompletion = true; var _didIteratorError = false; var _iteratorError = undefined; try { for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) { var _step$value = Pos.innerTools.slicedToArray(_step.value, 2), key = _step$value[0], value = _step$value[1]; var coercedKey = void 0; if (typeof key === 'string' || Pos.innerTools.type(key) === 'symbol') { coercedKey = key } else { coercedKey = String(key) }; Object.defineProperty(result, coercedKey, { value: value, writable: true, enumerable: true, configurable: true })}} catch (err) { _didIteratorError = true; _iteratorError = err } finally { try { if (!_iteratorNormalCompletion && _iterator.return != null) { _iterator.return() }} finally { if (_didIteratorError) { throw _iteratorError }}}; return result }};
