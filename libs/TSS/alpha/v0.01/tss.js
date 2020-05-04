/*
 *TSS ( TSJ Style Sheets ) 
 *Version v0.01-alpha ( The software is in alpha stage, so it will take time to clear all the bugs )
 *By MOD ER HACKS ( Debarchito Nath ) (c) Copyright 2018-20 | ALL RIGHTS RESERVED
 *Released Under MIT License Which Can Be Found At - https://moderhacks.github.io/LICENSE.md
*/

window.TSS = function(ins) {
"use strict";
 if(ins === undefined) ins = {}
 if(ins.el === undefined) ins.el = "style"
 if(ins.type === undefined) ins.type = "text/tss"
 if(ins.vars === undefined) ins.vars = {}
 if(ins.injection === undefined) ins.injection = true
 if(ins.injection === true) {
 var el = document.querySelectorAll(ins.el + "[type='" + ins.type + "']"); for(var i = 0; i < el.length; ++i) { var style = document.createElement("style"); style.id = "TSS-Output"; style.innerHTML = _final(el[i].innerHTML); if(ins.output !== undefined) { var rVghju = ins.output; rVghju(style.innerHTML) }; document.querySelector("head").appendChild(style)}} else if(ins.injection === false) { var rVghju = ins.output; rVghju(_final(ins.input))}

 function _final(val) { return _tssx(_tssx(val.replace(/\/\*([\S\s]*?)\*\//gm, function() { return "" }))) }
 
 function _unassign(target, source) { Object.keys(source).forEach(function (key) { delete target[key] }) }
 
 function _fit(val) { val = val.replace(/^\s*\n/gm, "").replace(/\s/gm, ""); if(val === "") { return true } else { return false } }
 
 function _exe(st) { if(st.charAt(0) !== " " && st.charAt(st.length - 1) !== " ") { return true } else { return false } };
 
 function _balanced(str) { return !str.split('').reduce(function (uptoPrevChar, thisChar) { if (thisChar === '(' || thisChar === '{' || thisChar === '[') { return ++uptoPrevChar } else if (thisChar === ')' || thisChar === '}' || thisChar === ']') { return --uptoPrevChar }; return uptoPrevChar }, 0) };
 
 var _matchRecursive = function() { var formatParts = /^([\S\s]+?)\.\.\.([\S\s]+)/, metaChar = /[-[\]{}()*+?.\\^$|,]/g, escape = function (str) { return str.replace(metaChar, "\\$&") }; return function (str, format) { var p = formatParts.exec(format); if (!p) throw new Error("Format must include start and end tokens separated by '...'"); if (p[1] == p[2]) throw new Error("Start and end format tokens cannot be identical"); var	opener = p[1], closer = p[2], iterator = new RegExp(format.length == 5 ? "["+escape(opener+closer)+"]" : escape(opener)+"|"+escape(closer), "g"), results = [], openTokens, matchStartIndex, match; do { openTokens = 0; while (match = iterator.exec(str)) { if (match[0] == opener) { if (!openTokens) matchStartIndex = iterator.lastIndex; openTokens++ } else if (openTokens) { openTokens--; if (!openTokens) results.push(str.slice(matchStartIndex, match.index)) } } } while (openTokens && (iterator.lastIndex = matchStartIndex)); return results } }();

 function _tssx(val) { 
 return val

 .replace(/\$(.*?)=(.*?)(\;|\n)/gm, function(_, a, b, c) { if(b.includes("=")) { return _ } else { a = a.trim().replace(/\-/gm, "_0hy0_").replace(/@/gm, "_1at1_"); b = '"' + b.trim().replace(/&/gm, ";").replace(/\\\;/gm, "&").replace(/"/gm, '\\"') + '"'; Object.assign(ins.vars, TSS.antistr("{ " + a + ": " + b + " }")); return "" } })

  .replace(/(var\:|\$)(.*?)(\-|@)(\w+)|(var\:|\$)(\w+)/gm, function(_) { var m = _; m = m.replace(/\$/gm, "").replace(/var\:/gm, "").replace(/\-/gm, "_0hy0_").replace(/@/gm, "_1at1_").trim(); return ins.vars[m] || _ })
 
 .replace(/@js([\S\s]*?)\/@js/gm, function(_, a) { var sc = document.createElement("script"); sc.id = "TSS-@js"; sc.innerHTML += a.trim(); document.querySelector("head").appendChild(sc); return "" })
 
 .replace(/@inherit(.*?)\/@inherit/gm, function(_, a) { if(a.includes(".")) { a = a.replace(/\./, "\\.").trim() } else { a = a.trim() }; var x  = "/" + a + "(.*?)\\{([\\S\\s]*?)\\}/gm", y = {}; el[i].innerHTML.replace(TSS.antistr(x), function(c, d, e) { y.a = e.trim() }); return y.a })
 
 .replace(/@vp([\S\s]*?)\/@vp/gm, function(_, b) { var sp = b.trim().split(","), c = sp[0].trim(), d = sp[1].trim(); return "-webkit-" + c + ": " + d + ";\n -moz-" + c + ": " + d + "; \n -o-" + c + ": " + d + ";\n -ms-" + c + ": " + d + ";\n -khtml-" + c + ": " + d + ";\n " + c + ": " + d })
 
 .replace(/Math\.PI/gm, Math.PI)
 .replace(/Math\.E/gm, Math.E)
 .replace(/Math\.SQRT2/gm, Math.SQRT2)
.replace(/Math\.SQRT1_2/gm, Math.SQRT1_2)
.replace(/Math\.LN2/gm, Math.LN2)
.replace(/Math\.LN10/gm, Math.LN10)
.replace(/Math\.LOG2E/gm, Math.LOG2E)
.replace(/Math\.LOG10E/gm, Math.LOG10E)
.replace(/Math\.(.*?)\((.*?)\)/gm, function(_, a, b) { return TSS.antistr("Math." + a.trim() + "(" + b.trim() + ")")})
 
 .replace(/@mixin(.*?)(\n|\|)([\S\s]*?)\/@mixin/gm, function(_, a, c, b) { var get = {}, chars = a.trim().replace(/\((.*?)\)/gm, function(_, c) { get.a = "/\\b(" + c.trim().replace(/,/gm, "\|").replace(/\s/gm, "") + ")\\b/gm" }); b = '"' + b.trim().replace(/"/gm, '\\"').replace(/\n/gm, '" + "\\n') + '"'; b = b.replace(TSS.antistr(get.a), '" + $& + "'); var frame = "function " + a.trim() + " {\n return " + b + "\n};"; var sc = document.createElement("script"); sc.id = "TSS-@mixin"; sc.innerHTML += frame.trim(); document.querySelector("head").appendChild(sc); return "" })
 
 .replace(/@get([\S\s]*?)\/@get/gm, function(_, a) { a = a.trim(); var fin = {}, sp = a.split("["), sl = sp[0].trim().replace(/\./gm, "\\."), reg = "/" + sl + "(.*?)\\{([\\S\\s]*?)\\}/gm", e = el[i].innerHTML.replace(TSS.antistr(reg), function(__, f, g) { if(_fit(f) === true) { var prop = sp[1].trim().replace(/\]/gm, ""), reg2 = "/" + prop + "(.*?)\\:(.*?)(\\;|\\n)/gm", main = g.replace(TSS.antistr(reg2), function(___, h, i) { if(_fit(h) === true) { fin.a = i.trim() } }) } }); return fin.a })
 
  .replace(/`([\S\s]*?)`/gm, function(_, a) { a = a.trim().replace(/\b(if|boolean|lighten|darken|replace|reverse|saturate|desaturate|math|tohex|regexp)\(/gm, "TSS.$1(").replace(/&\.(.*?)\(/gm, function(_, b) {
 var test = b.replace(/(1|2|3|4|5|6|7|8|9|0|a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z|\$|_)/gm, "").trim(); if(test === "") { return "TSS." + b.trim() + "(" } else { return _ }}).replace(/\\TSS/gm, "&"); return eval(a) })
  
  .replace(/@nest(.*?)(\n|\|)([\S\s]*?)\/@nest/gm, function(_, a, b, c) { var emp, emp2; a = a.trim(); emp = a + " {\n" + c + "\n }"; emp = emp.replace(/&(.*?){([\S\s]*?)\}/gm, function(__, d, e) { var fin = a + d.trim() + " {\n " + e.trim() + "\n}"; emp2 += "\n" + fin; return "" }); var reg = "/(" + a.trim() + "|\\{|\\}|\\s)/gm"; if(emp.replace(TSS.antistr(reg), "") === "") { emp = "" }; emp += emp2.replace(/undefined/gm, ""); emp = emp.replace(/^\s*\n/gm, ""); return emp })
  
 .replace(/%(.*?)\{([\S\s]*?)\}/gm, "")
 .replace(/\[s\]/gm, " ").replace(/\[\^s\]/gm, "")
 .replace(/\[c\]/gm, ",").replace(/\[n\]/gm, "\n")
 .replace(/\[a:(.*?)\]/gm, function(_, a) { return a })
 .replace(/^\s*\n/gm, "");
 
}
}

// TSS Built-In Functions

TSS.antistr = function(val) { return new Function(' "use strict"; return (' + val + ')')() }

TSS.tohex = function(rgb) { if(rgb.includes("rgb(")) { var sep = rgb.indexOf(",") > -1 ? "," : " "; rgb = rgb.substr(4).split(")")[0].split(sep); for (var R in rgb) { var r = rgb[R]; if (r.indexOf("%") > -1); rgb[R] = Math.round(r.substr(0,r.length - 1) / 100 * 255) }; var r = (+rgb[0]).toString(16), g = (+rgb[1]).toString(16), b = (+rgb[2]).toString(16); if (r.length == 1) { r = "0" + r }; if (g.length == 1) { g = "0" + g }; if (b.length == 1) { b = "0" + b }; return "#" + r + g + b }; if(rgb.includes("rgba(")) { var sep = rgb.indexOf(",") > -1 ? "," : " "; rgb = rgb.substr(5).split(")")[0].split(sep); if (rgb.indexOf("/") > -1) rgb.splice(3,1); for (var R in rgb) { var r = rgb[R]; if (r.indexOf("%") > -1) { var p = r.substr(0,r.length - 1) / 100; if (R < 3) { rgb[R] = Math.round(p * 255) } else { rgb[R] = p } } }; var r = (+rgb[0]).toString(16), g = (+rgb[1]).toString(16), b = (+rgb[2]).toString(16), a = Math.round(+rgb[3] * 255).toString(16); if (r.length == 1) r = "0" + r; if (g.length == 1) g = "0" + g; if (b.length == 1) b = "0" + b; if (a.length == 1) a = "0" + a; return "#" + r + g + b + a } }

TSS.lighten = function(color, ratio) { if(typeof ratio === "string") { ratio = eval(ratio.replace(/%/gm, "").trim()) / 100 }; if(!color.includes("#")) { color = TSS.tohex(color) }; return TSS.extension.changeColor(color, ratio, false) }

TSS.darken = function(color, ratio) { if(typeof ratio === "string") { ratio = eval(ratio.replace(/%/gm, "").trim()) / 100 }; if(!color.includes("#")) { color = TSS.tohex(color) }; return TSS.extension.changeColor(color, ratio, true) }

TSS.saturate = function(hex, sat) { if(!hex.includes("#")) { hex = TSS.tohex(hex) }; if(typeof sat === "number") { sat = 100 - sat } else if (typeof sat === "string") { sat = 100 - eval(sat.replace(/%/gm, "").trim()) }; var hash = hex.substring(0, 1) === "#"; hex = (hash ? hex.substring(1) : hex).split(""); var long = hex.length > 3, rgb = [], i = 0, len = 3; rgb.push( hex.shift() + (long ? hex.shift() : "") ); rgb.push( hex.shift() + (long ? hex.shift() : "") ); rgb.push( hex.shift() + (long ? hex.shift() : "") ); for( ; i < len; i++ ) { if ( !long ) { rgb[i] += rgb[i]; }; rgb[i] = Math.round( parseInt(rgb[i], 16)/100*sat).toString(16); rgb[i] += rgb[i].length === 1 ? rgb[i] : "" }; return (hash ? "#" : "") + rgb.join("") }

TSS.desaturate = function(hex, sat) {
if(typeof sat === "string") { sat = eval(sat.replace(/%/gm, "").trim()) }; return TSS.saturate(hex, 100 - sat) }

TSS.reverse = function(val) { return val.split("").reverse().join("") }

TSS.replace = function(str, rep, val, flags) { if (flags === undefined) { flags = "" }; if(flags === "") { return str.replace(rep, val) } else { var reg = "/" + rep.trim() + "/" + flags.trim(); return str.replace(TSS.antistr(reg.trim()), val) } }

TSS.boolean = function(cond) { if(typeof cond === "string") { cond = cond.replace(/px/gm, ""); if(TSS.antistr(cond)) { return true } else { return false } } else { if(cond) { return true } else { return false } } }

TSS.if = function(cond, tr, fl) { if(typeof cond === "string") { cond = TSS.antistr(cond.trim().replace(/px/gm, "")) } if(cond) { return tr } else { return fl } }

TSS.regexp = function(mode, str, reg, val) { if(val === undefined) { val = "" }; if(mode === "r" || "replace") { return str.replace(reg, val) } else if(mode === "m" || "match") { return str.match(reg) } else if(mode === "ma" || "matchAll") { return str.matchAll(reg) } }

TSS.math = function(val) { var a; if (val.includes("px")) { a = "px" } else { a = "" }; return eval(val.replace(/px/gm, "").trim()).toString() + a }

TSS.extension = {
 
 pad: function(num, totalChars) { var pad = '0'; num = num + ''; while (num.length < totalChars) { num = pad + num; }; return num; },

 changeColor: function(color, ratio, darker) { color = color.replace(/^\s*|\s*$/, ''); color = color.replace(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i, '#$1$1$2$2$3$3'); var difference = Math.round(ratio * 256) * (darker ? -1 : 1), rgb = color.match(new RegExp('^rgba?\\(\\s*' + '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' + '\\s*,\\s*' + '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' + '\\s*,\\s*' + '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' + '(?:\\s*,\\s*' + '(0|1|0?\\.\\d+))?' + '\\s*\\)$', 'i')), alpha = !!rgb && rgb[4] != null ? rgb[4] : null, decimal = !!rgb? [rgb[1], rgb[2], rgb[3]] : color.replace(/^#?([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])/i, function() { return parseInt(arguments[1], 16) + ',' + parseInt(arguments[2], 16) + ',' + parseInt(arguments[3], 16) }).split(/,/), returnValue; return !!rgb ? 'rgb' + (alpha !== null ? 'a' : '') + '(' + Math[darker ? 'max' : 'min']( parseInt(decimal[0], 10) + difference, darker ? 0 : 255 ) + ', ' + Math[darker ? 'max' : 'min']( parseInt(decimal[1], 10) + difference, darker ? 0 : 255 ) + ', ' + Math[darker ? 'max' : 'min']( parseInt(decimal[2], 10) + difference, darker ? 0 : 255 ) + (alpha !== null ? ', ' + alpha : '') + ')' : [ '#', TSS.extension.pad(Math[darker ? 'max' : 'min']( parseInt(decimal[0], 10) + difference, darker ? 0 : 255 ).toString(16), 2), TSS.extension.pad(Math[darker ? 'max' : 'min']( parseInt(decimal[1], 10) + difference, darker ? 0 : 255 ).toString(16), 2), TSS.extension.pad(Math[darker ? 'max' : 'min']( parseInt(decimal[2], 10) + difference, darker ? 0 : 255 ).toString(16), 2) ].join('') }
}

if (typeof Object.assign != 'function') { Object.assign = function(target, varArgs) { if (target == null) { throw new TypeError('Cannot convert undefined or null to object') }; var to = Object(target); for (var index = 1; index < arguments.length; index++) { var nextSource = arguments[index]; if (nextSource != null) { for (var nextKey in nextSource) { if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) { to[nextKey] = nextSource[nextKey]; } } } }; return to } }; if (!String.prototype.includes) { String.prototype.includes = function(search, start) { if (search instanceof RegExp) { throw TypeError('First argument must not be a RegExp') }; if (start === undefined) { start = 0 }; return this.indexOf(search, start) !== -1 } }; Math.percent = function(a, b) { return ( ( a / b ) * 100 ) + "%" }; 

// End
