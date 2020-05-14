/*
 *TSS (TSJ Style Sheets)
 *v0.02-adv ( Is getting advanced ! )
 *by MOD ER HACKS ( Debarchito Nath )
 *Copyright 2020 | ALL RIGHTS RESERVED
 *Released Under MIT LICENSE Which Can Be Found At - https://moderhacks.github.io/LICENSE.md
*/

window.TSS = function(ins) { "use strict"; if(ins === undefined) { ins = {} }; if(ins.el === undefined) { ins.el = "style" }; if(ins.type === undefined) { ins.type = "text/tss" }; if(ins.inject === undefined) { ins.inject = true }; if(ins.vars === undefined) { ins.vars = {} }; if(ins.overwrite === undefined) { ins.overwrite = false }; if(ins.inject === true) { if(ins.id === undefined) { ins.id = "TSS-v0.02-adv-CSS-Out" }; var el = document.querySelectorAll(ins.el+"[type='"+ins.type+"']"); for(var i = 0; i < el.length; ++i) { // Overwrite method to be placed here...
  var sc = document.createElement("style")
  sc.id = ins.id
  sc.innerHTML = TSS.engine(el[i].innerHTML, ins.vars)
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

TSS.engine = function(val, baseS) {

 val = val.replace(/\/\*([\S\s]*?)\*\//gm, "")

 function _core(va) {

 var jet = "", imp = "", register = {}

 function _js(val) {
  return val.replace(/@register(.*?)(function|property|child)(.*?)\{(.*?)\}/gm, function(_, a, b, c, d) {
   if(a.trim() === "") {
    if(b.trim() === "child") {
      var sp = d.trim().split(",")
      for(var i in sp) {
       sp[i] = sp[i].trim()
      }
      sp = sp.join("|").replace(/\./gm, "\\.")
      sp = "{" + c.trim() + ": '" + sp + "'}"
      register.child = {}
      Object.assign(register.child, TSS.antistr(sp))
      console.log("TSS-Info | Registered new child(s) for " + c.trim() +" - " + d.trim())
      return ""
    }
   } else {
    return _
   }
 }).replace(/\\`/gm, "??_2bt2_??").replace(/`([\S\s]*?)`/gm, function(_, a) { var reg = "/\\b(if|boolean|lighten|darken|reverse|saturate|desaturate|math|hex|array|object|Map|List|vp|replace|match|hexMaster|hslMaster|rgb|Master|red|green|blue|saturation|hue|lightness|addLightness|addDarkness|addSaturation|addDesaturation|alpha"; if(register.child !== undefined && JSON.stringify(register.child) !== "{}") { reg += "|" + register.child.TSS.trim() + ")\\(/gm" } else { reg += ")\\(/gm" }; a = a.trim().replace(/\?\?_2bt2_\?\?/gm, "`").replace(TSS.antistr(reg), "TSS.$1(").replace(/\b(list|string|re|color|map)\./gm, "TSS.$1.").replace(/&\.(.*?)\(/gm, function(_, b) {
 var test = b.replace(/(1|2|3|4|5|6|7|8|9|0|a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z|\$|_)/gm, "").trim(); if(test === "") { return "TSS." + b.trim() + "(" } else { return _ }}).replace(/\\TSS/gm, "&"); return eval(a) })}
 
 function _var(val) {
  return val.replace(/(var\:|\$)(.*?)\[(.*?)\]|(var\:|\$)(\w+)/gm, function(_, y, z) { var data = baseS; function _valid(val) { if(val.replace(/(1|2|3|4|5|6|7|8|9|0|a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z|\$|_)/gm, "") === "") { return true } else { return false }}; if(z === undefined || typeof z === "string" && _valid(z) === true) { var m = _.replace(/\$/gm, "").replace(/var\:/gm, "").trim(); var reg = /\[(.*?)\]/gm; if(_valid(m) === true) { return data[m] || _ } else if(_valid(m.replace(/(\[|\])/gm, "")) === true ) { var get; m.replace(reg, function(a, b) { get = TSS.antistr(b.trim()) }); if(typeof get === "number") { m = m.replace(reg, "").trim(); var lis = data[m].trim(); if(typeof lis === "string") { if(lis.charAt(0) === "[" && lis.charAt(lis.length - 1)) { return TSS.antistr(lis)[get] } else { return TSS.array(lis)[get] }}}} else { var get; m.replace(reg, function(a, b) { get = TSS.antistr(b.trim()) }); if(typeof get === "string") { m = m.replace(reg, "").trim(); lis = data[m].trim(); if(lis.charAt(0) === "{" && lis.charAt(lis.length - 1) === "}") { return TSS.antistr(lis)[get] } else { return TSS.object(lis)[get] }}}} else { return _ }})
 }

 ok = va

 .replace(/@imp(.*?)<js(.*?)\{([\S\s]*?)\}>/gm, function(_, c, a, b) {
   if(a.trim() === "" && c.trim() === "") {
     imp += _var(b.trim());
     return ""
   } else {
     throw SyntaxError("TSS-ErrorLog | Restricted character are in use, due to which '@imp <js{}>' parsing was failed.")
   }
 })
 
 var script = document.createElement("script")
  script.id = "TSS-v0.02-JS-Out[BeforeScript]"
  script.innerHTML += imp
  document.querySelector("body").appendChild(script)
  
  Object.assign(baseS, TSS.core.vars)
  
 ok = ok
 .replace(/(var\:|\$)(.*?)(@|\-)(\w+)/gm, function(_) { return _.replace(/\-/gm, "_0hy0_").replace(/@/gm, "_1at1_") })

 .replace(/\$(.*?)=(.*?)(\;|\n)/gm, function(_, a, b, c) { if(b.includes("=")) { return _ } else { a = a.trim(); b = _js(b); b = '"' + b.trim().replace(/\\sc/gm, ";").replace(/\\c/gm, "??_5cm5_??").replace(/"/gm, '\\"') + '"'; Object.assign(baseS, TSS.antistr("{ " + a + ": " + b + " }")); return "" } })


ok = _var(ok)
 .replace(/<nest(.*?)\{([\S\s]*?)\}>/gm, function(_, a, c) { var emp, emp2; a = a.trim(); c = _js(c); emp = a + " {\n" + c + "\n }"; emp = emp.replace(/&(.*?){([\S\s]*?)\}/gm, function(__, d, e) { var fin = a + d.trim() + " {\n " + e.trim() + "\n}"; emp2 += "\n" + fin; return "" }); var reg = "/(" + a.trim() + "|\\{|\\}|\\s)/gm"; if(emp.replace(TSS.antistr(reg), "") === "") { emp = "" }; emp += emp2.replace(/undefined/gm, ""); emp = emp.replace(/^\s*\n/gm, ""); return emp })

 .replace(/<js(.*?)\{([\S\s]*?)\}>/gm, function(_, a, b) {
   if(a.trim() === "") {
     jet += b.trim();
     return ""
   } else {
     throw SyntaxError("TSS-ErrorLog | Restricted character '" + a.trim() + "' between '<js' & '{'.")
   }
 })

 .replace(/<def(.*?)\{([\S\s]*?)\}>/gm, function(_, a, b) {
  jet += fin = "function " + a.trim() + " {\n " + b.trim() + "\n}"
  return ""
 })

 .replace(/<mixin(.*?)\{([\S\s]*?)\}>/gm, function(_, a, b) { var get = {}, chars = a.trim().replace(/\((.*?)\)/gm, function(_, c) { get.a = "/\\b(" + c.trim().replace(/,/gm, "\|").replace(/\s/gm, "") + ")\\b/gm" }); b = _js(b); b = '"' + b.trim().replace(/"/gm, '\\"').replace(/\n/gm, '" + "\\n') + '"'; b = b.replace(TSS.antistr(get.a), '" + $& + "'); jet += "function " + a.trim() + " {\n return " + b + "\n};"; return "" })

  var script = document.createElement("script")
  script.id = "TSS-v0.02-JS-Out[AfterScript]"
  script.innerHTML += jet
   document.querySelector("body").appendChild(script)

  Object.assign(baseS, TSS.core.vars)
  ok = _js(ok)

  .replace(/@console(.*?)\n/gm, function(_, a) { a = a.trim(); console.log(a); return "" }).replace(/\[\^s\]/gm, "")

   return ok.replace(/^\s*\n/gm, "") };


   return _core(_core(val))

}

TSS.list = {
 length: function(val) { val = TSS.array(val); return val.length },
 insert: function(val, index, item) { val = TSS.array(val); val.splice(index, 0, item); return val },
 splice: function(val, index, rem, item) { val = TSS.array(val); val.splice(index, rem, item); return val },
 append: function(val, item) { return TSS.list.insert(val, val.length, item) },
 nth: function(val, id) { val = TSS.array(val); return val[id] },
 flat: function(a, b) { function flatten(arr, result) { if(typeof result === "undefined") { result = [] }; for (var i = 0; i < length; i++) { if (arr[i] instanceof Array) { flatten(arr[i], result) } else { result.push(arr[i]) }}; return result }; return flatten(a, b) },
 index: function(list, str, a) { list = TSS.array(list); return list.indexOf(str, a) },
}

TSS.string = {
 length: function(val) { return val.length },
 random: function(length) { if(length === undefined) { length = 7 }; var result = '', characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', charactersLength = characters.length; for ( var i = 0; i < length; i++ ) { result += characters.charAt(Math.floor(Math.random() * charactersLength)) }; return result }
}

TSS.map = {

 objectify: function(val) { val = "{ " + val.substring(1, val.length - 1) + " }"; return TSS.antistr(val) },

 merge: function(val, val2) { if(typeof val === "string" && typeof val2 === "string") { val = TSS.object(val); val2 = TSS.object(val2); var get = JSON.stringify(Object.assign(val, val2)); return "(" + get.substring(1, get.length - 1) + ")" }},

 stringify: function(val) { if(typeof val === "string") { return JSON.stringify(TSS.object(val)) } else if(val instanceof Object) { return JSON.stringify(val) }},

 parse: function(val) { if(typeof val === "string") { return JSON.parse(TSS.object(val))  } else if(val instanceof Object) { return JSON.parse(val) }},

 keys: function(val) { if(typeof val === "string") { return Object.getOwnPropertyNames(TSS.object(val)) } else if(val instanceof Object) { return Object.getOwnPropertyNames(val) }},

 values: function(val) { if(typeof val === "string") { return Object.values(TSS.object(val)) } else if(val instanceof Object) { return Object.values(val) } },

 hasKey: function(val, key) { if(typeof val === "string") { val = TSS.object(val) }; if(val.hasOwnProperty(key)) { return true } else { return false }},
 
 valueOf: function(object, value) { for (var prop in object) { if (object.hasOwnProperty(prop)) { if (object[prop] === value) return prop }}}


}

TSS.array = function(val) { if(typeof val === "string") { val = val.replace(/\\c/gm, "??_5cm5_??").trim().split(","); for (var i in val) { val[i] = val[i].replace(/\?\?_5cm5_\?\?/gm, ",") }; return val } else if(val instanceof Array) { return val } }

TSS.object = function(val) { if(val instanceof Object) { return val } else if(typeof val === "string") { val = val.trim(); if(val.charAt(0) === "(" && val.charAt(val.length - 1) === ")") { if(val.charAt(val.length - 2) === ",") { val = "{" + val.substring(1, val.length - 1) + "}" } else { val = "{" + val.substring(1, val.length - 1) + ",}" }; val = val.replace(/\:(.*?),/gm, function(_, a) { return ": '" + a.replace(/'/, "\\'").trim() + "'," }).replace(/\?\?_5cm5_\?\?/gm, ","); return TSS.antistr(val) }}}

// "\c" (TSS Shorts) problems in Map to Object as well as List to Array Parsers

TSS.Map = function(val) { if(val instanceof Object) { var va = JSON.stringify(val); return "(" + va.substring(1, va.length - 1).replace(/"/gm, "") + ")" } else if(typeof val === "string") { return val }}

TSS.List = function(val) { if(val instanceof Array) { return val.join(",") } else { return Array.prototype.slice.call(arguments).sort() }}

TSS.if = function(cond, tr, fl) { if(typeof cond === "string") { cond = TSS.antistr(cond) }; if(cond) { if(typeof tr === "function") { var rVar = tr; return rVar() } else { return tr } } else { if(typeof fl === "function") { var rVar = fl; return rVar() } else { return fl } } }

TSS.boolean = function(cond) { if(typeof cond === "string") { cond = TSS.antistr(cond) }; if(cond) { return true } else { return false } }

TSS.reverse = function(val) {
  return val.split("").reverse().join("")
}

TSS.vp = function(c, d) {
  return "-webkit-" + c + ": " + d + ";\n -moz-" + c + ": " + d + "; \n -o-" + c + ": " + d + ";\n -ms-" + c + ": " + d + ";\n -khtml-" + c + ": " + d + ";\n " + c + ": " + d
}

TSS.assignVar = function(a) {
  Object.assign(TSS.core.vars, a)
}


TSS.replace = function(str) { for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) { args[_key - 1] = arguments[_key] }; return str.replace.apply(str, args) }

TSS.match = function(str) { for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) { args[_key - 1] = arguments[_key] }; return str.match.apply(str, args) } 

TSS.red = function(clr, isPct) { clr = TSS.rgbMaster(clr, isPct); var sp = clr.split(","); return sp[0].replace(/(rgb|rgba)\(/, "").trim()}

TSS.green = function(clr, isPct) { clr = TSS.rgbMaster(clr, isPct); var sp = clr.split(","); return sp[1].trim() }

TSS.blue = function(clr, isPct) { clr = TSS.rgbMaster(clr, isPct); var sp = clr.split(","); return sp[2].replace(/\)/, "").trim() }

TSS.alpha = function(clr, isPct) { clr = TSS.rgbMaster(clr, isPct); var sp = clr.split(","); if(sp[3] === undefined) { sp[3] = "0" }; return sp[3].replace(/\)/, "").trim() }

TSS.saturation = function(clr) { clr = TSS.hslMaster(clr); var sp = clr.split(","); return sp[1].trim() }

TSS.lightness = function(clr) { clr = TSS.hslMaster(clr); var sp = clr.split(","); return sp[2].replace(/\)/, "").trim() }

TSS.hue = function(clr) { clr = TSS.hslMaster(clr); var sp = clr.split(","); return sp[0].replace(/(hsl|hsla)\(/, "").trim() + "deg" }

TSS.lighten = TSS.addLightness = function(clr, no) { clr = TSS.hslMaster(clr); var sp = clr.split(","); var lightness = Number(no.replace(/%/gm, "").trim()) + Number(sp[2].replace(/\)/, "").replace(/%/gm, "")) + "%"; if(TSS.alpha(clr) === "0") { var hsl = "hsl(" + TSS.hue(clr).replace("deg", "") + "," + TSS.saturation(clr) + "," + lightness + ")"; return TSS.convertColor.HSLToHex(hsl)} else { var hsla = "hsla(" + TSS.hue(clr).replace("deg", "") + "," + TSS.saturation(clr) + "," + lightness + "," + TSS.alpha(clr) + ")"; return TSS.convertColor.HSLAToHexA(hsla)}}

TSS.darken = TSS.addDarkness = function(clr, no) { return TSS.lighten(clr, "-" + no.trim()) }

TSS.hexMaster = function(val) { if(val.includes("rgba")) { return TSS.convertColor.RGBAToHexA(val) } else if(val.includes("rgb")) { return TSS.convertColor.RGBToHex(val) } else if(val.includes("hsla")) { return TSS.convertColor.HSLAToHexA(val) } else if(val.includes("hsl")) { return TSS.convertColor.HSLToHex(val) } else { val = TSS.convertColor.nameToRGB(val); return TSS.convertColor.RGBToHex(val) }}

TSS.rgbMaster = function(val, isPct) { if(val.includes("#")) { var t = val.replace("#", "").trim(); if(t.length === 6) { return TSS.convertColor.hexToRGB(val, isPct) } else if(t.length === 8) { return TSS.convertColor.hexAToRGBA(val, isPct) }} else if(val.includes("hsla")) { return TSS.convertColor.HSLAToRGBA(val, isPct) } else if(val.includes("hsl")) { return TSS.convertColor.HSLToRGB(val, isPct)} else if(val.includes("rgba")) { return  TSS.convertColor.hexAToRGBA(TSS.convertColor.RGBAToHexA(val), isPct)} else if(val.includes("rgb")) { return TSS.convertColor.hexToRGB(TSS.convertColor.RGBToHex(val), isPct)} else { return TSS.convertColor.nameToRGB(TSS.convertColor.RGBToHex(TSS.convertColor.hexToRGB(val, isPct)))}}

TSS.hslMaster = function(val) { if(val.includes("#")) { var t = val.replace("#", "").trim(); if(t.length === 6) { return TSS.convertColor.hexToHSL(val) } else if(t.length === 8) { return TSS.convertColor.hexAToHSLA(val)}} else if(val.includes("rgba")) { return TSS.convertColor.RGBAToHSLA(val) } else if(val.includes("rgb")) { return TSS.convertColor.RGBToHSL(val)} else if(val.includes("hsla")) { return  TSS.convertColor.RGBAToHSLA(TSS.convertColor.HSLAToRGBA(val)) } else if(val.includes("hsl")) { return TSS.convertColor.RGBToHSL(TSS.convertColor.HSLToRGB(val)) } else { return TSS.convertColor.nameToRGB(TSS.convertColor.RGBToHSL(val))}}

TSS.convertColor = {

 RGBToHex: function(rgb) { var sep = rgb.indexOf(",") > -1 ? "," : " "; rgb = rgb.substr(4).split(")")[0].split(sep); for (var R in rgb) { var r = rgb[R]; if (r.indexOf("%") > -1) rgb[R] = Math.round(r.substr(0,r.length - 1) / 100 * 255) }; var r = (+rgb[0]).toString(16), g = (+rgb[1]).toString(16), b = (+rgb[2]).toString(16); if (r.length == 1) r = "0" + r; if (g.length == 1) g = "0" + g; if (b.length == 1) b = "0" + b; return "#" + r + g + b },
 
 RGBAToHexA: function(rgba) { var sep = rgba.indexOf(",") > -1 ? "," : " "; rgba = rgba.substr(5).split(")")[0].split(sep); if (rgba.indexOf("/") > -1) rgba.splice(3,1); for (var R in rgba) { var r = rgba[R]; if (r.indexOf("%") > -1) { var p = r.substr(0,r.length - 1) / 100; if (R < 3) { rgba[R] = Math.round(p * 255) } else { rgba[R] = p }}}; var r = (+rgba[0]).toString(16), g = (+rgba[1]).toString(16), b = (+rgba[2]).toString(16), a = Math.round(+rgba[3] * 255).toString(16); if (r.length == 1) r = "0" + r; if (g.length == 1) g = "0" + g; if (b.length == 1) b = "0" + b; if (a.length == 1) a = "0" + a; return "#" + r + g + b + a },

 hexToRGB: function(h,isPct) { var r = 0, g = 0, b = 0; isPct = isPct === true; if (h.length == 4) { r = "0x" + h[1] + h[1]; g = "0x" + h[2] + h[2]; b = "0x" + h[3] + h[3] } else if (h.length == 7) { r = "0x" + h[1] + h[2]; g = "0x" + h[3] + h[4]; b = "0x" + h[5] + h[6] } if (isPct) { r = +(r / 255 * 100).toFixed(1); g = +(g / 255 * 100).toFixed(1); b = +(b / 255 * 100).toFixed(1) }; return "rgb(" + (isPct ? r + "%," + g + "%," + b + "%" : +r + "," + +g + "," + +b) + ")" },
 
 hexAToRGBA: function(h,isPct) { var r = 0, g = 0, b = 0, a = 1; if (h.length == 5) { r = "0x" + h[1] + h[1]; g = "0x" + h[2] + h[2]; b = "0x" + h[3] + h[3]; a = "0x" + h[4] + h[4] } else if (h.length == 9) { r = "0x" + h[1] + h[2]; g = "0x" + h[3] + h[4]; b = "0x" + h[5] + h[6]; a = "0x" + h[7] + h[8] }; a = +(a / 255).toFixed(3); if (isPct) { r = +(r / 255 * 100).toFixed(1); g = +(g / 255 * 100).toFixed(1); b = +(b / 255 * 100).toFixed(1); a = +(a * 100).toFixed(1) }; return "rgba(" + (isPct ? r + "%," + g + "%," + b + "%," + a + "%" : +r + "," + +g + "," + +b + "," + a) + ")" },

 RGBToHSL: function(rgb) { var sep = rgb.indexOf(",") > -1 ? "," : " "; rgb = rgb.substr(4).split(")")[0].split(sep); for (var R in rgb) { var r = rgb[R]; if (r.indexOf("%") > -1) rgb[R] = Math.round(r.substr(0,r.length - 1) / 100 * 255)}; var r = rgb[0] / 255, g = rgb[1] / 255, b = rgb[2] / 255; var cmin = Math.min(r,g,b), cmax = Math.max(r,g,b), delta = cmax - cmin, h = 0, s = 0, l = 0; if (delta == 0) h = 0; else if (cmax == r) h = ((g - b) / delta) % 6; else if (cmax == g)  h = (b - r) / delta + 2; else h = (r - g) / delta + 4; h = Math.round(h * 60); if (h < 0) h += 360; l = (cmax + cmin) / 2; s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1)); s = +(s * 100).toFixed(1); l = +(l * 100).toFixed(1); return "hsl(" + h + "," + s + "%," + l + "%)" },

 RGBAToHSLA: function(rgba) { var sep = rgba.indexOf(",") > -1 ? "," : " "; rgba = rgba.substr(5).split(")")[0].split(sep); if (rgba.indexOf("/") > -1) rgba.splice(3,1); for (var R in rgba) { var r = rgba[R]; if (r.indexOf("%") > -1) { var p = r.substr(0,r.length - 1) / 100; if (R < 3) { rgba[R] = Math.round(p * 255) } else { rgba[R] = p }}}; var r = rgba[0] / 255, g = rgba[1] / 255, b = rgba[2] / 255, a = rgba[3]; var cmin = Math.min(r,g,b), cmax = Math.max(r,g,b), delta = cmax - cmin, h = 0, s = 0, l = 0; if (delta == 0) h = 0; else if (cmax == r) h = ((g - b) / delta) % 6; else if (cmax == g)  h = (b - r) / delta + 2; else h = (r - g) / delta + 4; h = Math.round(h * 60); if (h < 0) h += 360; l = (cmax + cmin) / 2; s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1)); s = +(s * 100).toFixed(1); l = +(l * 100).toFixed(1); return "hsla(" + h + "," + s + "%," +l + "%," + a + ")" },

 HSLToRGB: function(hsl, isPct) { var sep = hsl.indexOf(",") > -1 ? "," : " "; hsl = hsl.substr(4).split(")")[0].split(sep); isPct = isPct === true; var h = hsl[0], s = hsl[1].substr(0,hsl[1].length - 1) / 100, l = hsl[2].substr(0,hsl[2].length - 1) / 100; if (h.indexOf("deg") > -1) h = h.substr(0,h.length - 3); else if (h.indexOf("rad") > -1) h = Math.round(h.substr(0,h.length - 3) * (180 / Math.PI)); else if (h.indexOf("turn") > -1) h = Math.round(h.substr(0,h.length - 4) * 360); if (h >= 360) h %= 360; var c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs((h / 60) % 2 - 1)), m = l - c/2, r = 0, g = 0, b = 0; if (0 <= h && h < 60) { r = c; g = x; b = 0 } else if (60 <= h && h < 120) { r = x; g = c; b = 0 } else if (120 <= h && h < 180) { r = 0; g = c; b = x } else if (180 <= h && h < 240) { r = 0; g = x; b = c } else if (240 <= h && h < 300) { r = x; g = 0; b = c } else if (300 <= h && h < 360) { r = c; g = 0; b = x }; r = Math.round((r + m) * 255); g = Math.round((g + m) * 255); b = Math.round((b + m) * 255); if (isPct) { r = +(r / 255 * 100).toFixed(1); g = +(g / 255 * 100).toFixed(1); b = +(b / 255 * 100).toFixed(1) }; return "rgb("+ (isPct ? r + "%," + g + "%," + b + "%" : +r + "," + +g + "," + +b) + ")" },

 HSLAToRGBA: function(hsla, isPct) { var sep = hsla.indexOf(",") > -1 ? "," : " "; hsla = hsla.substr(5).split(")")[0].split(sep); isPct = isPct === true; if (hsla.indexOf("/") > -1) hsla.splice(3,1); var h = hsla[0], s = hsla[1].substr(0,hsla[1].length - 1) / 100, l = hsla[2].substr(0,hsla[2].length - 1) / 100, a = hsla[3]; if (h.indexOf("deg") > -1) h = h.substr(0,h.length - 3); else if (h.indexOf("rad") > -1) h = Math.round(h.substr(0,h.length - 3) * (180 / Math.PI)); else if (h.indexOf("turn") > -1) h = Math.round(h.substr(0,h.length - 4) * 360); if (h >= 360) h %= 360; var c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs((h / 60) % 2 - 1)), m = l - c/2, r = 0, g = 0, b = 0; if (0 <= h && h < 60) { r = c; g = x; b = 0 } else if (60 <= h && h < 120) { r = x; g = c; b = 0 } else if (120 <= h && h < 180) { r = 0; g = c; b = x } else if (180 <= h && h < 240) { r = 0; g = x; b = c } else if (240 <= h && h < 300) { r = x; g = 0; b = c } else if (300 <= h && h < 360) { r = c; g = 0; b = x }; r = Math.round((r + m) * 255); g = Math.round((g + m) * 255); b = Math.round((b + m) * 255); var pctFound = a.indexOf("%") > -1; if (isPct) { r = +(r / 255 * 100).toFixed(1); g = +(g / 255 * 100).toFixed(1); b = +(b / 255 * 100).toFixed(1); if (!pctFound) { a *= 100 } else { a = a.substr(0,a.length - 1) }} else if (pctFound) { a = a.substr(0,a.length - 1) / 100 }; return "rgba("+ (isPct ? r + "%," + g + "%," + b + "%," + a + "%" : +r + ","+ +g + "," + +b + "," + +a) + ")" },

 hexToHSL: function(hex, isPct) { hex = TSS.convertColor.hexToRGB(hex, isPct); hex = TSS.convertColor.RGBToHSL(hex); return hex },

 hexAToHSLA: function hexAToHSLA(hex, isPct) { hex = TSS.convertColor.hexAToRGBA(hex, isPct); hex = TSS.convertColor.RGBAToHSLA(hex); return hex },

 HSLToHex: function(hsl, isPct) { hsl = TSS.convertColor.HSLToRGB(hsl, isPct); hsl = TSS.convertColor.RGBToHex(hsl); return hsl },

 HSLAToHexA: function(hsla, isPct) { hsla = TSS.convertColor.HSLAToRGBA(hsla, isPct); hsla = TSS.convertColor.RGBAToHexA(hsla); return hsla },

 nameToRGB: function(name) { var fakeDiv = document.createElement("div"); fakeDiv.style.color = name; document.querySelector("body").appendChild(fakeDiv); var cs = window.getComputedStyle(fakeDiv), pv = cs.getPropertyValue("color"); document.querySelector("body").removeChild(fakeDiv); return pv }
 
}

// Pollyfills
if (typeof Object.assign != 'function') { Object.assign = function(target, varArgs) { if (target == null) { throw new TypeError('Cannot convert undefined or null to object') }; var to = Object(target); for (var index = 1; index < arguments.length; index++) { var nextSource = arguments[index]; if (nextSource != null) { for (var nextKey in nextSource) { if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) { to[nextKey] = nextSource[nextKey]; } } } }; return to } }; if (!String.prototype.includes) { String.prototype.includes = function(search, start) { if (search instanceof RegExp) { throw TypeError('First argument must not be a RegExp') }; if (start === undefined) { start = 0 }; return this.indexOf(search, start) !== -1 } };

/* What's new ?

 **Features**
 
 1. PRE-Execution with @imp
 Optimization
 2. Maps & Lists

*/
