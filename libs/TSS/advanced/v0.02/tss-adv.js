/* 
 *TSS Advanced (TSJ Style Sheets)
 *v0.02-beta
 *by MOD ER HACKS ( Debarchito Nath )
 *Copyright 2020 | ALL RIGHTS RESERVED
 *Released Under MIT LICENSE Which Can Be Found At - https://moderhacks.github.io/LICENSE.md
*/

window.TSS = function(ins) { "use strict"; if(ins === undefined) { ins = {} }; if(ins.el === undefined) { ins.el = "style" }; if(ins.type === undefined) { ins.type = "text/tss" }; if(ins.inject === undefined) { ins.inject = true }; if(ins.vars !== undefined) { Object.assign(TSS.core.vars, ins.vars) }; if(ins.overwrite === undefined) { ins.overwrite = false }; if(ins.inject === true) { if(ins.id === undefined) { ins.id = "TSS[Advanced]-v0.02-beta-Out" }; var el = document.querySelectorAll(ins.el+"[type='"+ins.type+"']"); for(var i = 0; i < el.length; ++i) { // Overwrite method to be placed here...
  el[i].style.display = 'none';
  var sc = document.createElement("style")
  sc.id = ins.id
  sc.innerHTML = TSS.engine(el[i].innerHTML)
  if(ins.output !== undefined) {
   var rVar = ins.output;
   rVar(sc.innerHTML)
  }
  document.querySelector("head").appendChild(sc)
 }
 } else if(ins.inject === false) {
  if(ins.input === undefined) {
   throw Error("TSS-ErrorLog [when TSS(ins)] | 'ins.input' can't be undefined at least when 'ins.inject' is set to false.")
  }
  var rVar = ins.output
  rVar(TSS.engine(ins.input))
 }
}

TSS.core = { vars: {} }

TSS.antistr = function(obj) { return Function(' "use strict"; return (' + obj + ')')() }

TSS.engine = function(val) {

 val = val.replace(/\/\*([\S\s]*?)\*\//gm, "")
 
 function _core(va) { 
 
 var jet, register = {}
 
 function _js(val) {
  return val.replace(/@register(.*?)(function|property|child)(.*?)\{(.*?)\}/gm, function(_, a, b, c, d) {
   if(a.trim() === "") {
    if(b=== "child") {
      var sp = d.trim().split(",")
      for(var i in sp) {
       sp[i] = sp[i].trim()
      }
      sp = sp.join("|").replace(/\./gm, "\\.")
      sp = "{" + c.trim() + ": '" + sp + "'}"
      register.child = {}
      Object.assign(register.child, TSS.antistr(sp))
      return ""
    }
   } else {
    return _
   }
  }).replace(/\\`/gm, "??_2bt2_??").replace(/`([\S\s]*?)`/gm, function(_, a) { var reg = "/\\b(if|boolean|lighten|darken|reverse|saturate|desaturate|math|tohex|array|object|Map|List"; if(register.child !== undefined && JSON.stringify(register.child) !== "{}") { reg += "|" + register.child.TSS.trim() + ")\\(/gm" } else { reg += ")\\(/gm" }; a = a.trim().replace(/\?\?_2bt2_\?\?/gm, "`").replace(TSS.antistr(reg), "TSS.$1(").replace(/\b(list|string|re|color|map)\./gm, "TSS.$1.").replace(/&\.(.*?)\(/gm, function(_, b) {
 var test = b.replace(/(1|2|3|4|5|6|7|8|9|0|a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z|\$|_)/gm, "").trim(); if(test === "") { return "TSS." + b.trim() + "(" } else { return _ }}).replace(/\\TSS/gm, "&"); return eval(a) })}

 ok = va
 
 .replace(/(var\:|\$)(.*?)(@|\-)(\w+)/gm, function(_) { return _.replace(/\-/gm, "_0hy0_").replace(/@/gm, "_1at1_") })
 
 .replace(/\$(.*?)=(.*?)(\;|\n)/gm, function(_, a, b, c) { if(b.includes("=")) { return _ } else { a = a.trim(); b = _js(b); b = '"' + b.trim().replace(/\\sc/gm, ";").replace(/\\c/gm, "??_5cm5_??").replace(/"/gm, '\\"') + '"'; Object.assign(TSS.core.vars, TSS.antistr("{ " + a + ": " + b + " }")); return "" } })
 
 .replace(/(var\:|\$)(.*?)\[(.*?)\]|(var\:|\$)(\w+)/gm, function(_, y, z) { var data = TSS.core.vars; function _valid(val) { if(val.replace(/(1|2|3|4|5|6|7|8|9|0|a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z|\$|_)/gm, "") === "") { return true } else { return false }}; if(z === undefined || typeof z === "string" && _valid(z) === true) { var m = _.replace(/\$/gm, "").replace(/var\:/gm, "").trim(); var reg = /\[(.*?)\]/gm; if(_valid(m) === true) { return data[m] || _ } else if(_valid(m.replace(/(\[|\])/gm, "")) === true ) { var get; m.replace(reg, function(a, b) { get = TSS.antistr(b.trim()) }); if(typeof get === "number") { m = m.replace(reg, "").trim(); var lis = data[m].trim(); if(typeof lis === "string") { if(lis.charAt(0) === "[" && lis.charAt(lis.length - 1)) { return TSS.antistr(lis)[get] } else { return TSS.array(lis)[get] }}}} else { var get; m.replace(reg, function(a, b) { get = TSS.antistr(b.trim()) }); if(typeof get === "string") { m = m.replace(reg, "").trim(); lis = data[m].trim(); if(lis.charAt(0) === "{" && lis.charAt(lis.length - 1) === "}") { return TSS.antistr(lis)[get] } else { return TSS.object(lis)[get] }}}} else { return _ }})
 
 
  ok = _js(ok)
  
  .replace(/@debug(.*?)\n/gm, function(_, a) { a = a.trim(); alert(a); console.log(a); return "" })
  
   return ok.replace(/^\s*\n/gm, "") }; 
   
   
   return _core(_core(val))
   
}
   
TSS.list = {
 length: function(val) {
  val = TSS.array(val)
  return val.length;
 },
 insert: function(val, index, item) {
    val = TSS.array(val)
    val.splice(index, 0, item);
    return val
 },
 splice: function(val, index, rem, item) {
    val = TSS.array(val)
    val.splice(index, rem, item);
    return val
 },
 append: function(val, item) {
   return TSS.list.insert(val, val.length, item)
 },
 nth: function(val, id) {
  val = TSS.array(val)
  return val[id]
 },
 flat: function(a, b) { function flatten(arr, result) { if(typeof result === "undefined") { result = [] }; for (var i = 0; i < length; i++) { if (arr[i] instanceof Array) { flatten(arr[i], result) } else { result.push(arr[i]) }}; return result }; return flatten(a, b) }
 
}

TSS.string = {
 random: function(length) { if(length === undefined) { length = 7 }; var result = '', characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', charactersLength = characters.length; for ( var i = 0; i < length; i++ ) { result += characters.charAt(Math.floor(Math.random() * charactersLength)) }; return result }
}

TSS.map = {

 objectify: function(val) { val = "{ " + val.substring(1, val.length - 1) + " }"; return TSS.antistr(val) },
 
 merge: function(val, val2) { if(typeof val === "string" && typeof val2 === "string") { val = TSS.object(val); val2 = TSS.object(val2); var get = JSON.stringify(Object.assign(val, val2)); return "(" + get.substring(1, get.length - 1) + ")" }},
 
 stringify: function(val) { if(typeof val === "string") { return JSON.stringify(TSS.object(val)) } else if(val instanceof Object) { return JSON.stringify(val) }},
 
 parse: function(val) { if(typeof val === "string") { return JSON.parse(TSS.object(val))  } else if(val instanceof Object) { return JSON.parse(val) }},
 
 keys: function(val) { if(typeof val === "string") { return Object.getOwnPropertyNames(TSS.object(val)) } else if(val instanceof Object) { return Object.getOwnPropertyNames(val) }},
 
 values: function(val) { if(typeof val === "string") { return Object.values(TSS.object(val)) } else if(val instanceof Object) { return Object.values(val) } },

 hasKey: function(val, key) { if(typeof val === "string") { val = TSS.object(val) }; if(val.hasOwnProperty(key)) { return true } else { return false }}
 
}

TSS.re = {
 rep: function(targ, reg, rep, flag) {
  if(reg	 === undefined) {
   return targ
  } else {
   if(flag === undefined) { flag = "" }
   reg = "/" + reg.trim() + "/" + flag
   return targ.replace(TSS.antistr(reg), rep)
  }
 },
 mat: function(targ, reg, flag) {
  if(reg	 === undefined) {
   return targ
  } else {
   if(flag === undefined) { flag = "" }
   reg = "/" + reg.trim() + "/" + flag
   return targ.match(TSS.antistr(reg))
  }
 }
}

TSS.array = function(val) { if(typeof val === "string") { val = val.replace(/\\c/gm, "??_5cm5_??").trim().split(","); for (var i in val) { val[i] = val[i].replace(/\?\?_5cm5_\?\?/gm, ",") }; return val } else if(val instanceof Array) { return val } }

TSS.object = function(val) { if(val instanceof Object) { return val } else if(typeof val === "string") { val = val.trim(); if(val.charAt(0) === "(" && val.charAt(val.length - 1) === ")") { if(val.charAt(val.length - 2) === ",") { val = "{" + val.substring(1, val.length - 1) + "}" } else { val = "{" + val.substring(1, val.length - 1) + ",}" }; val = val.replace(/\:(.*?),/gm, function(_, a) { return ": '" + a.replace(/'/, "\\'").trim() + "'," }).replace(/\?\?_5cm5_\?\?/gm, ","); return TSS.antistr(val) }}}

// "\c" (TSS Shorts) problems in Map to Object as well as List to Array Parsers

TSS.Map = function(val) { if(val instanceof Object) { var va = JSON.stringify(val); return "(" + va.substring(1, va.length - 1).replace(/"/gm, "") + ")" } else if(typeof val === "string") { return val }}

TSS.List = function(val) { if(val instanceof Array) { return val.join(",") } else { return Array.prototype.slice.call(arguments).sort() }}

TSS.if = function(cond, tr, fl) { if(typeof cond === "string") { cond = TSS.antistr(cond) }; if(cond) { if(typeof tr === "function") { var rVar = tr; return rVar() } else { return tr } } else { if(typeof fl === "function") { var rVar = fl; return rVar() } else { return fl } } }

TSS.boolean = function(cond) { if(typeof cond === "string") { cond = TSS.antistr(cond) }; if(cond) { return true } else { return false } }

TSS.reverse = function(str)

// Pollyfills
if (typeof Object.assign != 'function') { Object.assign = function(target, varArgs) { if (target == null) { throw new TypeError('Cannot convert undefined or null to object') }; var to = Object(target); for (var index = 1; index < arguments.length; index++) { var nextSource = arguments[index]; if (nextSource != null) { for (var nextKey in nextSource) { if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) { to[nextKey] = nextSource[nextKey]; } } } }; return to } }; if (!String.prototype.includes) { String.prototype.includes = function(search, start) { if (search instanceof RegExp) { throw TypeError('First argument must not be a RegExp') }; if (start === undefined) { start = 0 }; return this.indexOf(search, start) !== -1 } };

// End
