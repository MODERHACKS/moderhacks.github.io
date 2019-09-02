/*!
 
   ** ****** ** *********

   *TSJ™JS ( https://moderhacks.github.io )
   *v2 ( https://moderhacks.github.io/libs/js/2-x/v2/tsj.js )
   *2nd September 2019 ( 6th Update )
   *by Debarchito Nath ( MOD ER HACKS ) © Copyright | 2019 | ALL RIGHTS RESERVED
   *Includes more simpler, super lighter and powerfull  "tsjStyler JS" v1.5
   *Syntax optimised. Uses the extensible "Fibre DOM" which is the most flexible DOM ever
   *Released Under MIT License ( https://moderhacks.github.io/LICENSE.html )
   
   ** ****** ** *********
   
*/

"use strict";

(function(funcName, baseObj) { funcName = funcName || "Ready"; baseObj = baseObj || window; var readyList = []; var readyFired = false; var readyEventHandlersInstalled = false; function ready() { if (!readyFired) { readyFired = true; for (var i = 0; i < readyList.length; i++) { readyList[i].fn.call(window, readyList[i].ctx); } readyList = []; }  } function readyStateChange() { if ( document.readyState === "complete" ) { ready(); } } baseObj[funcName] = function(callback, context) { if (typeof callback !== "function") { throw new TypeError("callback for Ready(function) must be a function"); } if (readyFired) { setTimeout(function() {callback(context);}, 1); return; } else { readyList.push({fn: callback, ctx: context}); } if (document.readyState === "complete" || (!document.attachEvent && document.readyState === "interactive")) { setTimeout(ready, 1); } else if (!readyEventHandlersInstalled) { if (document.addEventListener) { document.addEventListener("DOMContentLoaded", ready, false); window.addEventListener("load", ready, false); } else { document.attachEvent("onreadystatechange", readyStateChange); window.attachEvent("onload", ready); } readyEventHandlersInstalled = true; } } })("Ready", window); var execute = {}; execute.tsjcss = execute.TSJCSS = function() { return tsj.head(" <link rel='stylesheet' href='https://moderhacks.github.io/libs/TSJCSS/2-x/v2/tsj.css' /> "); }; execute.charset = function(chars) { chars = chars ? chars : "UTF-8"; return tsj.head(" <meta charset='" + chars + "' />"); }; execute.smartView = function(more) { more = more ? more : " "; return tsj.head(' <meta name="viewport" content="width=device-width, initial-scale=1.0, height=device-height"' + more  + ' /> '); }; execute.theme = execute.webTheme = function(clr) { clr = clr ? clr : "#ffffff"; return tsj.head(" <meta name='theme-color' content='" + clr + "'>")}; execute.colorize = execute.codeHighlight = execute.ColoriZe = function() { require(["https://moderhacks.github.io/libs/ext/js/ColoriZe/1-x/v1/clz.js"], function() { ColoriZe(); }); }; execute.tsjmaths = execute.TSJMaths = function(func) { require(["https://moderhacks.github.io/libs/ext/js/TSJMaths/1-x/v1/tm.js"], func); }; var tsj = {}; tsj.details = tsj.about = function() { var details = "Project Name : TSJJS <br /> Version : v2 <br /> DOM Types : Real DOM & Fibre DOM <br /> By : Debarchito Nath ( MOD ER HACKS ) <br /> Released On : August 2019 <br /> Released Under : MIT License <br /> Website : https://moderhacks.github.io <br /> Copyright (c) 2019 | ALL RIGHTS RESERVED"; return tsj.docWrite( details ); };

var GET = tsj.get = tsj.GET = function(sel) { return document.querySelector(sel); }; var get = function(sel) { return document.querySelector(sel); }; var GETAll = tsj.getAll = tsj.GETAll = function(selector) { var rV_23_nodeList = document.querySelectorAll(selector); return new Proxy(rV_23_nodeList, { set: function(target, property, value) { for (let i = 0; i < target.length; i++) { target[i][property] = value; } }, get: function(target, property) { return target[0] && target[0][property]; } }); }; var getAll = function(selector) { var rV_23_nodeList = document.querySelectorAll(selector); return new Proxy(rV_23_nodeList, { set: function(target, property, value) { for (let i = 0; i < target.length; i++) { target[i][property] = value; } }, get: function(target, property) { return target[0] && target[0][property]; } }); }; 

tsj.addAttribute = tsj.addAttr = tsj.addAttributes = tsj.addAttrs = tsj.aAttribute = tsj.aAttr = tsj.aAttributes = tsj.aAttrs = function(sel, attributes) {
var randomVar_66j = GET(sel); for(let key in attributes) { randomVar_66j.setAttribute(key, attributes[key]); } return randomVar_66j; document.body.appendChild(this.parentElement) || document.documentElement.appendChild(this.parentElement); }; tsj.docWrite = function(val) { return document.write(val); }; tsj.write = tsj.append = function(sel, txt) { var randomVar_008eff = GETAll(sel); randomVar_008eff.innerHTML += txt; };  tsj.fWrite = tsj.formatWrite = function(sel, txt) { var randomVar_008eff = GETAll(sel); randomVar_008eff.innerHTML = txt; }; tsj.prepend = function(sel, txt) { var randomVar_018fff = GETAll(sel); randomVar_018fff.innerHTML = txt + randomVar_018fff.innerHTML; }; tsj.cWrite = tsj.createWrite = tsj.createElementWrite = function(sel, crt, attributes, cnt) { var randomVar_Huu56j = GET(sel);
var randomVar_Bg56jU = document.createElement(crt); randomVar_Bg56jU.textContent = cnt; randomVar_Huu56j.appendChild(randomVar_Bg56jU); for(let key in attributes){ randomVar_Bg56jU.setAttribute(key, attributes[key]); }
return randomVar_Bg56jU; return randomVar_Huu56j.appendChild(this.parentElement); }; tsj.nWrite = tsj.newWrite = function(attributes, cnt) { var randomVar_hjg563 = document.createElement("p"); randomVar_hjg563.textContent = cnt; document.body.appendChild(randomVar_hjg563) || document.documentElement.appendChild(randomVar_hjg563); for(let key in attributes){ randomVar_hjg563.setAttribute(key, attributes[key]); }
return randomVar_hjg563; return document.body.appendChild(this.parentElement) ||
document.documentElement.appendChild(this.parentElement); }; tsj.nCWrite = tsj.newCWrite = tsj.nCreateWrite = tsj.newCreateWrite = tsj.nCreateElementWrite = tsj.newCreateElementWrite = tsj.createElement = tsj.cElement =  function(crt, attributes, cnt){
var randomVar_563jhU = document.createElement(crt);
randomVar_563jhU.textContent = cnt; document.body.appendChild(randomVar_563jhU) || document.documentElement.appendChild(randomVar_563jhU);
for(let key in attributes){ randomVar_563jhU.setAttribute(key, attributes[key]); }
return randomVar_563jhU; return document.body.appendChild(this.parentElement) ||
document.documentElement.appendChild(this.parentElement); }; tsj.br = function() { return tsj.cElement("br"); }; tsj.hr = function() { return tsj.cElement("hr"); }; tsj.click = tsj.tap = function(sel, clk) { sel = sel ? sel : this; var randomVar_216963 = GETAll(sel); randomVar_216963.onclick = clk; }; tsj.dblclick = tsj.dbltap = function(sel, clk) {
var randomVar_216963 = GETAll(sel); randomVar_216963.ondblclick = clk; }; tsj.clicks = tsj.mClick = tsj.multipleClick = function(singleClk, doubleClk, tm) {
tm = tm ? tm : 190; return (function() { var alreadyclicked = false; var alreadyclickedTimeout; return function(e) { if (alreadyclicked) { alreadyclicked = false; alreadyclickedTimeout && clearTimeout(alreadyclickedTimeout); doubleClk && doubleClk(e); } else {  alreadyclicked = true;  alreadyclickedTimeout = setTimeout(function() { alreadyclicked = false; singleClk && singleClk(e);  }, tm); } } })(); }; tsj.cSelect = tsj.clickSelect = function(obj) { var text_val=eval(obj); text_val.focus(); text_val.select(); r = text_val.createTextRange(); if (!r.execCommand) return; r.execCommand('copy'); }; tsj.copyContent = tsj.copyCnt = tsj.cContent = tsj.cCnt = function(sel) {
 var copyText = GET(sel); copyText.select();
copyText.setSelectionRange(0, 99999)
document.execCommand("copy"); };

tsj.change = function(sel, clk) {
var randomVar_217963 = GETAll(sel); randomVar_217963.onchange = clk; }; tsj.load = function(sel, clk) {
var randomVar_226963 = GETAll(sel); randomVar_226963.onload = clk; }; tsj.mouseover = function(sel, clk) {
var randomVar_326963 = GETAll(sel); randomVar_326963.onmouseover = clk; }; tsj.mouseout = function(sel, clk) {
var randomVar_426963 = GETAll(sel); randomVar_426963.onmouseout = clk; }; tsj.keyup = function(sel, clk) {
var randomVar_526963 = GETAll(sel); randomVar_526963.onkeyup = clk; }; tsj.keydown = function(sel, clk) {
var randomVar_626963 = GETAll(sel); randomVar_626963.onkeydown = clk; }; tsj.keypress = function(sel, clk) {
var randomVar_726963 = GETAll(sel); randomVar_726963.onkeypress = clk; }; tsj.addEvent = tsj.aEvent = tsj.aEventListener = tsj.addEventListener = tsj.on = function(sel, evnt, clk) { var randomVar_826963 = GETAll(sel); randomVar_826963.addEventListener(evnt, clk) || randomVar_826963.attachEvent("on"+evnt, clk); }; 

tsj.historyBack = function(sel) {
sel = sel ? sel : 1; return window.history.back(-sel); }; tsj.historyForward = function(sel) {
sel = sel ? sel : 1; return window.history.forward(+sel); }; 

tsj.empty = function(sel) {
var rVempty = GET(sel);
while (rVempty.firstChild) { rVempty.removeChild(rVempty.firstChild); }; };

tsj.clone = tsj.cloneElement = function(sel, attributes) { var randomVar_77777j = GET(sel); var randomVar_66666j = randomVar_77777j.cloneNode(true); document.body.appendChild(randomVar_66666j) || document.documentElement.appendChild(randomVar_66666j); for(let key in attributes) { randomVar_66666j.setAttribute(key, attributes[key]); } return randomVar_66666j; document.body.appendChild(this.parentElement) || document.documentElement.appendChild(this.parentElement); }; tsj.cloneAll = tsj.cloneElementAll = function(sel) 
{ var rVxyz = document.querySelectorAll(sel); rVxyz.forEach(function(element) { let rVabc = element.cloneNode(true); document.body.appendChild(rVabc) || document.documentElement.appendChild(rVabc); }); }; 

tsj.css = function(cnt) { 
var randomVar_Bj56kU = document.createElement("style"); randomVar_Bj56kU.textContent = cnt; document.head.appendChild(randomVar_Bj56kU) || document.documentElement.appendChild(randomVar_Bj56kU); }; tsj.style = function(sel, styl) { return tsj.css(sel + "{" + styl + "}"); }; tsj.randomColoring = tsj.randomColor  = tsj.rColor = tsj.rColoring = function(sel, don, tm) { tm = tm ? tm : 1000; setInterval( function() {
var random = Math.floor(Math.random()*16777215).toString(16); tsj.style(sel + "{" + don + " : #" + random + "; }");
}, tm); }; tsj.loadStyle = function(url) { return new Promise((resolve, reject) => { var link = document.createElement('link'); link.type = 'text/css'; link.rel = 'stylesheet'; link.onload = function() { resolve(); console.log('Your style is loaded and ready for usage !'); }; link.href = url; var headScript = document.querySelector('script'); headScript.parentNode.insertBefore(link, headScript); }); };

tsj.fadeIn = function(sel, tm, sty, del, no, dir) { tm = tm ? tm : 950; sty = sty ? sty : "ease"; no = no ? no : 1; del = del ? del : 0; dir = dir ? dir : "alternate"; dir = dir ? dir : "alternate"; tsj.css(sel + "{ -webkit-animation: DomfadeIn " + tm + "ms " + sty + "; animation: DomfadeIn " + tm + "ms " + sty + "; -webkit-animation-fill-mode: both; animation-fill-mode: both; animation-iteration-count: " + no + "; -webkit-animation-iteration-count: " + no + "; animation-delay: " + del +"ms; -webkit-animation-delay: " + del +"ms; -webkit-animation-direction: " + dir + "; animation-direction: " + dir + "; } @-webkit-keyframes DomfadeIn { 0% {opacity: 0 !important;} 100% {opacity: 1!important; display : none; } } @keyframes DomfadeIn { 0% {opacity: 0; } 100% {opacity: 1!important; display : none;} } .DOM-1-CSS-fadeIn { -webkit-animation-name: DomfadeIn;  animation-name: DomfadeIn; } "); tsj.aClass(sel, "DOM-1-CSS-fadeIn"); }; tsj.fadeOut = function(sel, tm, sty, del, no, dir) { tm = tm ? tm : 950; sty = sty ? sty : "ease"; no = no ? no : 1; del = del ? del : 0; dir = dir ? dir : "alternate"; tsj.css(sel + "{ -webkit-animation: DomfadeOut " + tm + "ms " + sty + "; animation: DomfadeOut " + tm + "ms " + sty + "; -webkit-animation-fill-mode: both; animation-fill-mode: both; animation-iteration-count: " + no + "; -webkit-animation-iteration-count: " + no + "; animation-delay: " + del +"ms; -webkit-animation-delay: " + del +"ms; -webkit-animation-direction: " + dir + "; animation-direction: " + dir + "; } @-webkit-keyframes DomfadeOut { 0% {opacity: 1 !important;} 100% {opacity: 0!important; display : none; } } @keyframes DomfadeOut { 0% {opacity: 1 !important;} 100% {opacity: 0; display : none;} } .DOM-1-CSS-fadeOut { -webkit-animation-name: DomfadeOut;  animation-name: DomfadeOut; } "); tsj.aClass(sel, "DOM-1-CSS-fadeOut"); }; tsj.fadeInOut = tsj.flickerIn = function(sel, tm, sty, del, no, dir) { tm = tm ? tm : 950; sty = sty ? sty : "ease-in-out"; no = no ? no : 1; del = del ? del : 0; dir = dir ? dir : "alternate"; tsj.css( sel + "{ opacity :0; animation:fadingh " + tm + "ms " + sty +" ; -webkit-animation:fadingh " + tm + "ms " + sty +" ; animation-iteration-count: " + no + "; -webkit-animation-iteration-count: " + no + "; animation-delay: " + del +"ms; -webkit-animation-delay: " + del +"ms; -webkit-animation-direction: " + dir + "; animation-direction: " + dir + "; } @keyframes fadingh { 0%{opacity:0}50%{opacity:1}100%{opacity:0} } "); }; tsj.fadeOutIn = tsj.flickerOut = function(sel, tm, sty, del, no, dir) { tm = tm ? tm : 950; sty = sty ? sty : "ease-in-out"; no = no ? no : 1; del = del ? del : 0; dir = dir ? dir : "alternate"; tsj.css( sel + "{animation:fadingg " + tm + "ms " + sty +" ; -webkit-animation:fadingg " + tm + "ms " + sty +" ; animation-iteration-count: " + no + "; -webkit-animation-iteration-count: " + no + "; animation-delay: " + del +"ms; -webkit-animation-delay: " + del +"ms; -webkit-animation-direction: " + dir + "; animation-direction: " + dir + "; } @keyframes fadingg{0%{opacity:1}50%{opacity:0}100%{opacity:1}}"); }; tsj.fadeTo = function(sel, from, opc, tm, sty, del, no, dir) { tm = tm ? tm : 950; sty = sty ? sty : "ease"; no = no ? no : 1; del = del ? del : 0; dir = dir ? dir : "alternate"; tsj.css(sel + "{ -webkit-animation: DomfadeTo " + tm + "ms " + sty + "; animation: DomfadeTo " + tm + "ms " + sty + "; -webkit-animation-fill-mode: both; animation-fill-mode: both; animation-iteration-count: " + no + "; -webkit-animation-iteration-count: " + no + "; animation-delay: " + del +"ms; -webkit-animation-delay: " + del +"ms; -webkit-animation-direction: " + dir + "; animation-direction: " + dir + "; } @-webkit-keyframes DomfadeTo { 0% {opacity: " + from + ";} 100% {opacity: " + opc + "; display : none; } } @keyframes DomfadeTo { 0% {opacity: " + from + "; } 100% {opacity: " + opc + "; display : none;} } .DOM-1-CSS-fadeTo { -webkit-animation-name: DomfadeTo;  animation-name: DomfadeTo; } "); tsj.aClass(sel, "DOM-1-CSS-fadeTo"); };

tsj.delay = function(func, tm, ...delay) { tm = tm ? tm : 300; setTimeout(func, tm, ...delay); };

var tsjChain = (function() { var _listeners = {}, _resultOfPreviousFunc = null, self = this, rVapi = {}; var on = function(type, listener) { if(!_listeners[type]) _listeners[type] = []; _listeners[type].push(listener); return rVapi; }; var off = function(type, listener) { if(_listeners[type]) { var arr = []; for(var i=0; f=_listeners[type][i]; i++) { if(f !== listener) { arr.push(f); }; }; _listeners[type] = arr; }; return rVapi; };  var dispatch = function(type, param) { if(_listeners[type]) { for(var i=0; f=_listeners[type][i]; i++) { f(param); }; }; }; var run = function() { if(arguments.length > 0) { var funcs = []; for(var i=0; f=arguments[i]; i++) funcs.push(f); var element = funcs.shift(); if(typeof element === 'function') { element(_resultOfPreviousFunc, function(res) { _resultOfPreviousFunc = res; run.apply(self, funcs); }); } else if(typeof element === 'object' && element.length > 0) { var f = element.shift(); var callback = function(res) { _resultOfPreviousFunc = res; run.apply(self, funcs); }; f.apply(f, element.concat([callback])); }; } else { dispatch("done", _resultOfPreviousFunc); }; return rVapi; }; return rVapi = { run: run, on: on, off: off }; })(); tsj.sequence = tsj.seq = function(functions, timeout) { for(var i = 0; i < functions.length; i++) { setTimeout(functions[i], timeout); }; };

tsj.head = function(cnt) { var randomVar_hjxx73 = document.createElement("head"); randomVar_hjxx73.innerHTML = cnt; document.documentElement.appendChild(randomVar_hjxx73); }; tsj.body = function(attributes, cnt) { var randomVar_hjxx63 = document.createElement("body"); randomVar_hjxx63.innerHTML = cnt;  document.documentElement.appendChild(randomVar_hjxx63); for(let key in attributes){ randomVar_hjxx63.setAttribute(key, attributes[key]); }
return randomVar_hjxx63; return document.body.appendChild(this.parentElement) ||
document.documentElement.appendChild(this.parentElement);}; 

tsj.listner = tsj.dictate = tsj.speechToText = function(lang, inpt, num, evnt) { if(window.hasOwnProperty('webkitSpeechRecognition')) { var randomVar_000156 = new webkitSpeechRecognition(); randomVar_000156.continuous = false; randomVar_000156.interimResults = false; randomVar_000156.lang = lang; randomVar_000156.start(); randomVar_000156.onresult = function(e) { GET(inpt).value = e.results[num][num].transcript; randomVar_000156.stop(); GET(evnt).submit(); }; randomVar_000156.onerror = function(e) { randomVar_000156.stop(); }; }; }; 

tsj.getHTML = tsj.gHTML = tsj.getHtml = tsj.gHtml = function(sel) { return GET(sel).innerHTML; }; tsj.getText = tsj.gText = function(sel) { return GET(sel).textContent; }; tsj.value = tsj.val = tsj.getValue = tsj.gValue = tsj.getVal = tsj.gVal = function(sel) { return GET(sel).value; }; tsj.getTag = tsj.gTag = function(sel) { return GET(sel).tagName; }; tsj.getAttribute = tsj.getAttr =  tsj.gAttr = tsj.gAttribute = function(sel, attr) { return GET(sel).getAttribute(attr); }; tsj.hide = function (sel) { tsj.hideElements(tsj.getElements(sel)); }; tsj.hideElements = function (elements) { var i, l = elements.length; for (i = 0; i < l; i++) { tsj.hideElement(elements[i]); }; }; tsj.hideElement = function (element) { tsj.styleElement(element, "display", "none"); }; tsj.show = function (sel, a) { var elements = tsj.getElements(sel); if (a) { tsj.hideElements(elements); }; tsj.showElements(elements); }; tsj.showElements = function (elements) { var i, l = elements.length; for (i = 0; i < l; i++) { tsj.showElement(elements[i]); }; }; tsj.showElement = function (element) { tsj.styleElement(element, "display", "block"); }; tsj.addStyle = tsj.aStyle = function (sel, prop, val) { tsj.styleElements(tsj.getElements(sel), prop, val); }; tsj.styleElements = function (elements, prop, val) { var i, l = elements.length; for (i = 0; i < l; i++) { tsj.styleElement(elements[i], prop, val); }; }; tsj.styleElement = function (element, prop, val) { element.style.setProperty(prop, val); }; tsj.toggleShow = tsj.tShow = tsj.showToggle = function(sel) { var i, x = tsj.getElements(sel), l = x.length; for (i = 0; i < l; i++) { if (x[i].style.display == "none") { tsj.styleElement(x[i], "display", "block"); } else { tsj.styleElement(x[i], "display", "none"); }; }; }; tsj.addClass = tsj.aClass = function (sel, name) { tsj.addClassElements(tsj.getElements(sel), name); }; tsj.addClassElements = function (elements, name) { var i, l = elements.length; for (i = 0; i < l; i++) { tsj.addClassElement(elements[i], name); }; }; tsj.addClassElement = function (element, name) { var i, arr1, arr2; arr1 = element.className.split(" "); arr2 = name.split(" "); for (i = 0; i < arr2.length; i++) { if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i]; }; }; }; tsj.removeClass = tsj.rClass = function (sel, name) { tsj.removeClassElements(tsj.getElements(sel), name); }; tsj.removeClassElements = function (elements, name) { var i, l = elements.length, arr1, arr2, j; for (i = 0; i < l; i++) { tsj.removeClassElement(elements[i], name); }; }; tsj.removeClassElement = function (element, name) { var i, arr1, arr2; arr1 = element.className.split(" "); arr2 = name.split(" "); for (i = 0; i < arr2.length; i++) { while (arr1.indexOf(arr2[i]) > -1) { arr1.splice(arr1.indexOf(arr2[i]), 1); }; }; element.className = arr1.join(" "); }; tsj.switchClass = tsj.sClass = function(sel, old, nw) { tsj.removeClass(sel, old); tsj.addClass(sel, nw); }; tsj.toggleClass = tsj.tClass = function (sel, c1, c2) { tsj.toggleClassElements(tsj.getElements(sel), c1, c2); }; tsj.toggleClassElements = function (elements, c1, c2) { var i, l = elements.length; for (i = 0; i < l; i++) { tsj.toggleClassElement(elements[i], c1, c2); }; }; tsj.toggleClassElement = function (element, c1, c2) { var t1, t2, t1Arr, t2Arr, j, arr, allPresent; t1 = (c1 || ""); t2 = (c2 || ""); t1Arr = t1.split(" "); t2Arr = t2.split(" "); arr = element.className.split(" "); if (t2Arr.length == 0) { allPresent = true; for (j = 0; j < t1Arr.length; j++) { if (arr.indexOf(t1Arr[j]) == -1) {allPresent = false; }; }; if (allPresent) { tsj.removeClassElement(element, t1); } else { tsj.addClassElement(element, t1); }; } else { allPresent = true; for (j = 0; j < t1Arr.length; j++) {  if (arr.indexOf(t1Arr[j]) == -1) {allPresent = false; }; }; if (allPresent) { tsj.removeClassElement(element, t1); tsj.addClassElement(element, t2); } else { tsj.removeClassElement(element, t2); tsj.addClassElement(element, t1); }; }; }; tsj.getElements = function (id) { if (typeof id == "object") { return [id]; } else { return document.querySelectorAll(id); }; }; tsj.filterHTML = tsj.filterHtml = function(id, sel, filter) { var a, b, c, i, ii, iii, hit; a = tsj.getElements(id); for (i = 0; i < a.length; i++) { b = a[i].querySelectorAll(sel); for (ii = 0; ii < b.length; ii++) { hit = 0; if (b[ii].innerText.toUpperCase().indexOf(filter.toUpperCase()) > -1) { hit = 1; }; c = b[ii].getElementsByTagName("*"); for (iii = 0; iii < c.length; iii++) { if (c[iii].innerText.toUpperCase().indexOf(filter.toUpperCase()) > -1) { hit = 1; }; }; if (hit == 1) { b[ii].style.display = ""; } else { b[ii].style.display = "none"; }; }; }; }; tsj.sortHTML = tsj.sortHtml = function(id, sel, sortvalue) {
  var a, b, i, ii, y, bytt, v1, v2, cc, j;
  a = tsj.getElements(id);
  for (i = 0; i < a.length; i++) {
    for (j = 0; j < 2; j++) {
      cc = 0;
      y = 1;
      while (y == 1) {
        y = 0;
        b = a[i].querySelectorAll(sel);
        for (ii = 0; ii < (b.length - 1); ii++) {
          bytt = 0;
          if (sortvalue) {
            v1 = b[ii].querySelector(sortvalue).innerText;
            v2 = b[ii + 1].querySelector(sortvalue).innerText;
          } else {
            v1 = b[ii].innerText;
            v2 = b[ii + 1].innerText;
          }
          v1 = v1.toLowerCase();
          v2 = v2.toLowerCase();
          if ((j == 0 && (v1 > v2)) || (j == 1 && (v1 < v2))) {
            bytt = 1;
            break;
          }
        }
        if (bytt == 1) {
          b[ii].parentNode.insertBefore(b[ii + 1], b[ii]);
          y = 1;
          cc++;
        }
      }
      if (cc > 0) {break;}
    }
  }
};
tsj.slideshow = function (sel, ms, func) {
  var i, ss, x = tsj.getElements(sel), l = x.length;
  ss = {};
  ss.current = 1;
  ss.x = x;
  ss.ondisplaychange = func;
  if (!isNaN(ms) || ms == 0) {
    ss.milliseconds = ms;
  } else {
    ss.milliseconds = 1000;
  }
  ss.start = function() {
    ss.display(ss.current)
    if (ss.ondisplaychange) {ss.ondisplaychange();}
    if (ss.milliseconds > 0) {
      window.clearTimeout(ss.timeout);
      ss.timeout = window.setTimeout(ss.next, ss.milliseconds);
    }
  };
  ss.next = function() {
    ss.current += 1;
    if (ss.current > ss.x.length) {ss.current = 1;}
    ss.start();
  };
  ss.previous = function() {
    ss.current -= 1;
    if (ss.current < 1) {ss.current = ss.x.length;}
    ss.start();
  };
  ss.display = function (n) {
    tsj.styleElements(ss.x, "display", "none");
    tsj.styleElement(ss.x[n - 1], "display", "block");
  }
  ss.start();
  return ss;
};
tsj.includeHTML = function(cb) {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("tsj-include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          elmnt.removeAttribute("tsj-include-html");
          tsj.includeHTML(cb);
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
  if (cb) cb();
};
tsj.getHttpData = function (file, func) {
  tsj.http(file, function () {
    if (this.readyState == 4 && this.status == 200) {
      func(this.responseText);
    }
  });
};
tsj.getHttpObject = function (file, func) {
  tsj.http(file, function () {
    if (this.readyState == 4 && this.status == 200) {
      func(JSON.parse(this.responseText));
    }
  });
};
tsj.displayHttp = function (id, file) {
  tsj.http(file, function () {
    if (this.readyState == 4 && this.status == 200) {
      tsj.displayObject(id, JSON.parse(this.responseText));
    }
  });
};
tsj.http = function (target, readyfunc, xml, method) {
  var httpObj;
  if (!method) {method = "GET"; }
  if (window.XMLHttpRequest) {
    httpObj = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    httpObj = new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (httpObj) {
    if (readyfunc) {httpObj.onreadystatechange = readyfunc;}
    httpObj.open(method, target, true);
    httpObj.send(xml);
  }
};
tsj.getElementsByAttribute = function (x, att) {
  var arr = [], arrCount = -1, i, l, y = x.getElementsByTagName("*"), z = att.toUpperCase();
  l = y.length;
  for (i = -1; i < l; i += 1) {
    if (i == -1) {y[i] = x;}
    if (y[i].getAttribute(z) !== null) {arrCount += 1; arr[arrCount] = y[i];}
  }
  return arr;
};  
tsj.dataObject = {},
tsj.displayObject = tsj.data = function (id, data) {
  var htmlObj, htmlTemplate, html, arr = [], a, l, rowClone, x, j, i, ii, cc, repeat, repeatObj, repeatX = "";
  htmlObj = GET(id);
  htmlTemplate = init_template(id, htmlObj);
  html = htmlTemplate.cloneNode(true);
  arr = tsj.getElementsByAttribute(html, "tsj-repeat");
  l = arr.length;
  for (j = (l - 1); j >= 0; j -= 1) {
    cc = arr[j].getAttribute("tsj-repeat").split(" ");
    if (cc.length == 1) {
      repeat = cc[0];
    } else {
      repeatX = cc[0];
      repeat = cc[2];
    }
    arr[j].removeAttribute("tsj-repeat");
    repeatObj = data[repeat];
    if (repeatObj && typeof repeatObj == "object" && repeatObj.length != "undefined") {
      i = 0;
      for (x in repeatObj) {
        i += 1;
        rowClone = arr[j];
        rowClone = tsj_replace_curly(rowClone, "element", repeatX, repeatObj[x]);
        a = rowClone.attributes;
        for (ii = 0; ii < a.length; ii += 1) {
          a[ii].value = tsj_replace_curly(a[ii], "attribute", repeatX, repeatObj[x]).value;
        }
        (i === repeatObj.length) ? arr[j].parentNode.replaceChild(rowClone, arr[j]) : arr[j].parentNode.insertBefore(rowClone, arr[j]);
      }
    } else {
      console.log("tsj-repeat must be an array. " + repeat + " is not an array.");
      continue;
    }
  }
  html = tsj_replace_curly(html, "element");
  htmlObj.parentNode.replaceChild(html, htmlObj);
  function init_template(id, obj) {
    var template;
    template = obj.cloneNode(true);
    if (tsj.dataObject.hasOwnProperty(id)) {return tsj.dataObject[id];}
    tsj.dataObject[id] = template;
    return template;
  }
  function tsj_replace_curly(elmnt, typ, repeatX, x) {
    var value, rowClone, pos1, pos2, originalHTML, lookFor, lookForARR = [], i, cc, r;
    rowClone = elmnt.cloneNode(true);
    pos1 = 0;
    while (pos1 > -1) {
      originalHTML = (typ == "attribute") ? rowClone.value : rowClone.innerHTML;
      pos1 = originalHTML.indexOf("{{", pos1);
      if (pos1 === -1) {break;}
      pos2 = originalHTML.indexOf("}}", pos1 + 1);
      lookFor = originalHTML.substring(pos1 + 2, pos2);
      lookForARR = lookFor.split("||");
      value = undefined;
      for (i = 0; i < lookForARR.length; i += 1) {
        lookForARR[i] = lookForARR[i].replace(/^\s+|\s+$/gm, ''); //trim
        if (x) {value = x[lookForARR[i]];}
        if (value == undefined && data) {value = data[lookForARR[i]];}
        if (value == undefined) {
          cc = lookForARR[i].split(".");
          if (cc[0] == repeatX) {value = x[cc[1]]; }
        }
        if (value == undefined) {
          if (lookForARR[i] == repeatX) {value = x;}
        }
        if (value == undefined) {
          if (lookForARR[i].substr(0, 1) == '"') {
            value = lookForARR[i].replace(/"/g, "");
          } else if (lookForARR[i].substr(0,1) == "'") {
            value = lookForARR[i].replace(/'/g, "");
          }
        }
        if (value != undefined) {break;}
      }
      if (value != undefined) {
        r = "{{" + lookFor + "}}";
        if (typ == "attribute") {
          rowClone.value = rowClone.value.replace(r, value);
        } else {
          tsj_replace_html(rowClone, r, value);
        }
      }
      pos1 = pos1 + 1;
    }
    return rowClone;
  }
  function tsj_replace_html(a, r, result) {
    var b, l, i, a, x, j;
    if (a.hasAttributes()) {
      b = a.attributes;
      l = b.length;
      for (i = 0; i < l; i += 1) {
        if (b[i].value.indexOf(r) > -1) {b[i].value = b[i].value.replace(r, result);}
      }
    }
    x = a.getElementsByTagName("*");
    l = x.length;
    a.innerHTML = a.innerHTML.replace(r, result);
  }
};

/* * tsjStyler JS *v1.4 *Inspired by CSSX *Contains Extracts from CSSX (c) Krasimir */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("tsjStyler", [], factory);
	else if(typeof exports === 'object')
		exports["tsjStyler"] = factory();
	else
		root["tsjStyler"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var factory, goGlobal, stylesheets, api, randomId, plugins = [];
	
	__webpack_require__(1);
	
	factory = __webpack_require__(5);
	goGlobal = __webpack_require__(15);
	randomId = __webpack_require__(16);
	
	stylesheets = [];
	
	function createStyleSheet(id) {
	  var s, i;
	
	  if (typeof id === 'undefined') {
	    id = randomId();
	  }
	
	  for (i = 0; i < stylesheets.length; i++) {
	    if (stylesheets[i].id() === id) {
	      return stylesheets[i];
	    }
	  }
	  s = factory.apply(factory, arguments);
	  stylesheets.push(s);
	  return s;
	};
	
	api = function (id) { return createStyleSheet(id, plugins); };
	
	api.domChanges = function (flag) {
	  factory.disableDOMChanges = !flag;
	};
	api.minify = function (flag) {
	  factory.minify = flag;
	};
	api.nextTick = function (flag) {
	  factory.useNextTick = flag;
	};
	api.getStylesheets = function () {
	  return stylesheets;
	};
	api.clear = function () {
	  var i;
	
	  for (i = 0; i < stylesheets.length; i++) {
	    stylesheets[i].clear();
	  }
	  stylesheets = [];
	  return api;
	};
	api.getCSS = function () {
	  var i, css = '';
	
	  for (i = 0; i < stylesheets.length; i++) {
	    css += stylesheets[i].getCSS();
	  }
	  return css;
	};
	api.plugins = function (arr) {
	  plugins = plugins.concat(arr);
	};
	
	module.exports = api;
	
	goGlobal(module.exports);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);


/***/ },
/* 2 */
/***/ function(module, exports) {

	if (!Array.prototype.filter) {
	  Array.prototype.filter = function(fun/*, thisArg*/) {
	    'use strict';
	
	    if (this === void 0 || this === null) {
	      throw new TypeError();
	    }
	
	    var t = Object(this);
	    var len = t.length >>> 0;
	    if (typeof fun !== 'function') {
	      throw new TypeError();
	    }
	
	    var res = [];
	    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
	    for (var i = 0; i < len; i++) {
	      if (i in t) {
	        var val = t[i];
	
	        // NOTE: Technically this should Object.defineProperty at
	        //       the next index, as push can be affected by
	        //       properties on Object.prototype and Array.prototype.
	        //       But that method's new, and collisions should be
	        //       rare, so use the more-compatible alternative.
	        if (fun.call(thisArg, val, i, t)) {
	          res.push(val);
	        }
	      }
	    }
	
	    return res;
	  };
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	// Production steps of ECMA-262, Edition 5, 15.4.4.18
	// Reference: http://es5.github.io/#x15.4.4.18
	if (!Array.prototype.forEach) {
	
	  Array.prototype.forEach = function(callback, thisArg) {
	
	    var T, k;
	
	    if (this == null) {
	      throw new TypeError(' this is null or not defined');
	    }
	
	    // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
	    var O = Object(this);
	
	    // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
	    // 3. Let len be ToUint32(lenValue).
	    var len = O.length >>> 0;
	
	    // 4. If IsCallable(callback) is false, throw a TypeError exception.
	    // See: http://es5.github.com/#x9.11
	    if (typeof callback !== "function") {
	      throw new TypeError(callback + ' is not a function');
	    }
	
	    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
	    if (arguments.length > 1) {
	      T = thisArg;
	    }
	
	    // 6. Let k be 0
	    k = 0;
	
	    // 7. Repeat, while k < len
	    while (k < len) {
	
	      var kValue;
	
	      // a. Let Pk be ToString(k).
	      //   This is implicit for LHS operands of the in operator
	      // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
	      //   This step can be combined with c
	      // c. If kPresent is true, then
	      if (k in O) {
	
	        // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
	        kValue = O[k];
	
	        // ii. Call the Call internal method of callback with T as the this value and
	        // argument list containing kValue, k, and O.
	        callback.call(T, kValue, k, O);
	      }
	      // d. Increase k by 1.
	      k++;
	    }
	    // 8. return undefined
	  };
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	// Production steps of ECMA-262, Edition 5, 15.4.4.19
	// Reference: http://es5.github.io/#x15.4.4.19
	if (!Array.prototype.map) {
	
	  Array.prototype.map = function(callback, thisArg) {
	
	    var T, A, k;
	
	    if (this == null) {
	      throw new TypeError(' this is null or not defined');
	    }
	
	    // 1. Let O be the result of calling ToObject passing the |this| 
	    //    value as the argument.
	    var O = Object(this);
	
	    // 2. Let lenValue be the result of calling the Get internal 
	    //    method of O with the argument "length".
	    // 3. Let len be ToUint32(lenValue).
	    var len = O.length >>> 0;
	
	    // 4. If IsCallable(callback) is false, throw a TypeError exception.
	    // See: http://es5.github.com/#x9.11
	    if (typeof callback !== 'function') {
	      throw new TypeError(callback + ' is not a function');
	    }
	
	    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
	    if (arguments.length > 1) {
	      T = thisArg;
	    }
	
	    // 6. Let A be a new array created as if by the expression new Array(len) 
	    //    where Array is the standard built-in constructor with that name and 
	    //    len is the value of len.
	    A = new Array(len);
	
	    // 7. Let k be 0
	    k = 0;
	
	    // 8. Repeat, while k < len
	    while (k < len) {
	
	      var kValue, mappedValue;
	
	      // a. Let Pk be ToString(k).
	      //   This is implicit for LHS operands of the in operator
	      // b. Let kPresent be the result of calling the HasProperty internal 
	      //    method of O with argument Pk.
	      //   This step can be combined with c
	      // c. If kPresent is true, then
	      if (k in O) {
	
	        // i. Let kValue be the result of calling the Get internal 
	        //    method of O with argument Pk.
	        kValue = O[k];
	
	        // ii. Let mappedValue be the result of calling the Call internal 
	        //     method of callback with T as the this value and argument 
	        //     list containing kValue, k, and O.
	        mappedValue = callback.call(T, kValue, k, O);
	
	        // iii. Call the DefineOwnProperty internal method of A with arguments
	        // Pk, Property Descriptor
	        // { Value: mappedValue,
	        //   Writable: true,
	        //   Enumerable: true,
	        //   Configurable: true },
	        // and false.
	
	        // In browsers that support Object.defineProperty, use the following:
	        // Object.defineProperty(A, k, {
	        //   value: mappedValue,
	        //   writable: true,
	        //   enumerable: true,
	        //   configurable: true
	        // });
	
	        // For best browser support, use the following:
	        A[k] = mappedValue;
	      }
	      // d. Increase k by 1.
	      k++;
	    }
	
	    // 9. return A
	    return A;
	  };
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var CSSRule = __webpack_require__(6);
	var applyToDOM = __webpack_require__(8);
	var nextTick = __webpack_require__(9);
	var generate = __webpack_require__(13);
	var isArray = __webpack_require__(7);
	
	var ids = 0;
	var getId = function () { return 'x' + (++ids); };
	
	module.exports = function (id, plugins) {
	  var _id = id || getId();
	  var _api = {};
	  var _rules = [];
	  var _customProperties = {};
	  var _remove = null;
	  var _css = '';
	  var _scope = '';
	
	  var ruleExists = function (rules, selector, parent) {
	    return rules.reduce(function (result, rule) {
	      if (result !== false) return result;
	      if (rule.selector === selector) {
	        if (parent) {
	          return rule.parent && parent.selector === rule.parent.selector ? rule : false;
	        }
	        return rule;
	      }
	      return false;
	    }, false);
	  };
	  var registerRule = function (rule, addAt) {
	    if (typeof addAt !== 'undefined') {
	      _rules.splice(addAt, 0, rule);
	    } else {
	      _rules.push(rule);
	    }
	    rule.index = _rules.length - 1;
	  };
	  var isNested = function (obj) {
	    if (typeof obj !== 'object') {
	      return true;
	    } else if (isArray(obj)) {
	      return typeof obj[0] === 'string';
	    }
	    return false;
	  };
	
	  _api.id = _api.style = function () {
	    return _id;
	  };
	  _api.add = _api.style =  _api.update = function (rawRules, parent, addAt, considerAsNew) {
	    var rule, prop, tmpRawRules, cssProps, props, nestedRules, selector, tmp;
	    var created = [];
	
	    if (typeof rawRules === 'string') {
	      tmp = {};
	      tmp[rawRules] = {};
	      rawRules = tmp;
	    }
	
	    if (typeof rawRules === 'function') {
	      rawRules = rawRules();
	    }
	
	    for (selector in rawRules) {
	      if (isArray(rawRules[selector])) {
	        rawRules[selector].forEach(function (r) {
	          tmp = {};
	          tmp[selector] = r;
	          _api.add(tmp, parent, undefined, true);
	        });
	      } else {
	        rule = ruleExists(_rules, selector, parent);
	        cssProps = {};
	        props = {};
	        nestedRules = [];
	
	        // new rule
	        if (considerAsNew || !rule) {
	          props = rawRules[selector];
	          for (prop in props) {
	            if (isNested(props[prop])) {
	              cssProps[prop] = props[prop];
	            } else {
	              tmpRawRules = {};
	              tmpRawRules[prop] = props[prop];
	              nestedRules.push(tmpRawRules);
	            }
	          }
	
	          rule = CSSRule(selector, this.resolveCustomProps(cssProps), _api);
	
	          if (!parent) {
	            registerRule(rule, addAt);
	          } else {
	            rule.parent = parent;
	            parent.registerNested(rule);
	          }
	          nestedRules.forEach(function (rawRulesNested) {
	            _api.add(rawRulesNested, rule);
	          });
	
	        // existing rule
	        } else {
	          rule.update(rawRules[selector]);
	        }
	
	        this.compile();
	        created.push(rule);
	      }
	    }
	
	    return created.length === 1 ? created[0] : created;
	  };
	  _api.rules = function () {
	    return _rules;
	  };
	  _api.compile = function () {
	    if (module.exports.useNextTick) {
	      nextTick(function () {
	        _api.compileImmediate();
	      }, _id);
	      return _api;
	    }
	    return _api.compileImmediate();
	  };
	  _api.compileImmediate = function () {
	    _css = generate(_rules, module.exports.minify, plugins, _scope);
	    if (!module.exports.disableDOMChanges) {
	      _remove = applyToDOM(_css, _id);
	    }
	    return _api;
	  };
	  _api.clear = function () {
	    _rules = [];
	    _css = '';
	    if (_remove !== null) {
	      _remove();
	      _remove = null;
	    }
	    return _api;
	  };
	  _api.destroy = function () {
	    return _api.clear();
	  };
	  _api.getCSS = function () {
	    this.compileImmediate();
	    return _css;
	  };
	  _api.define = function (prop, func) {
	    _customProperties[prop] = func;
	  };
	  _api.scope = function (scope) {
	    _scope = scope;
	  };
	  _api._getCustomProps = function () {
	    return _customProperties;
	  };
	  _api.resolveCustomProps = function (actual) {
	    var result = actual, prop, newProp, value;
	    var custom = _customProperties;
	
	    for (prop in custom) {
	      if (typeof actual[prop] !== 'undefined') {
	        value = custom[prop](actual[prop]);
	        delete actual[prop];
	        for (newProp in value) {
	          actual[newProp] = value[newProp];
	        }
	      }
	    }
	    return result;
	  };
	
	  return _api;
	};
	
	module.exports.disableDOMChanges = false;
	module.exports.minify = true;
	module.exports.useNextTick = true;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(7);
	
	module.exports = function CSSRule(selector, props, stylesheet) {
	  var _api = {
	    selector: selector,
	    props: props,
	    stylesheet: stylesheet,
	    index: null,
	    nestedRules: null,
	    parent: null
	  };
	
	  _api.clone = function () {
	    var rule = CSSRule(this.selector, this.props, this.stylesheet);
	
	    rule.index = this.index;
	    rule.nestedRules = this.nestedRules;
	    rule.parent = this.parent;
	
	    return rule;
	  };
	
	  _api.descendant = _api.d = _api.css =_api.ng = _api.nextGeneration = function (rawRules) {
	    var selector;
	
	    if (typeof rawRules === 'function') rawRules = rawRules();
	
	    for (selector in rawRules) {
	      rawRules[_api.selector + ' ' + selector] = rawRules[selector];
	      delete rawRules[selector];
	    }
	    return _api.stylesheet.add(rawRules, this.parent, this.index);
	  };
	  _api.nested = _api.n = function (rawRules) {
	    return _api.stylesheet.add(rawRules, this);
	  };
	  _api.update = function (props) {
	    var prop, areThereNestedRules = this.nestedRules !== null;
	
	    if (typeof props === 'function') {
	      props = props();
	    }
	
	    props = this.stylesheet.resolveCustomProps(props);
	
	    for (prop in props) {
	      if (typeof props[prop] !== 'object') {
	        this.props[prop] = props[prop];
	      } else if (areThereNestedRules) {
	        if (this.nestedRules[prop]) {
	          this.nestedRules[prop].update(props[prop]);
	        }
	      }
	    }
	    return this;
	  };
	  _api.registerNested = function (rule) {
	    var nestedRule;
	
	    if (this.nestedRules === null) this.nestedRules = {};
	
	    nestedRule = this.nestedRules[rule.selector];
	
	    if (nestedRule) {
	      if (isArray(nestedRule)) {
	        nestedRule.push(rule);
	      } else {
	        this.nestedRules[rule.selector] = [ nestedRule, rule ];
	      }
	    } else {
	      this.nestedRules[rule.selector] = rule;
	    }
	    return this;
	  };
	
	  return _api;
	};


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function (v) {
	  return Object.prototype.toString.call(v) === '[object Array]';
	};


/***/ },
/* 8 */
/***/ function(module, exports) {

	var cache = {};
	
	var qs = function (selector) {
	  return document.querySelector(selector);
	};
	
	var createNode = function (type, attrs, content) {
	  var node = document.createElement(type), i, a;
	
	  for (i = 0; i < attrs.length; i++) {
	    a = attrs[i];
	    node.setAttribute(a.name, a.value);
	  }
	  node.innerHTML = content;
	  (qs('head') || qs('body')).appendChild(node);
	  return node;
	};
	
	var remove = function (id) {
	  return function () {
	    if (cache[id]) {
	      cache[id].el.parentNode.removeChild(cache[id].el);
	      delete cache[id];
	    }
	  };
	};
	
	module.exports = function (css, id) {
	  var el;
	
	  if (!cache[id]) {
	    el = createNode(
	      'style', [
	        { name: 'id', value: id },
	        { name: 'type', value: 'text/css'}
	      ],
	       css
	    );
	    cache[id] = { el: el, css: css, remove: remove(id) };
	  } else {
	    if (cache[id].css !== css) {
	      cache[id].css = css;
	      cache[id].el.innerHTML = css;
	    }
	  }
	
	  return cache[id].remove;
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {var cache = {};
	
	__webpack_require__(12);
	
	module.exports = function (work, id) {
	  if (!cache[id]) {
	    cache[id] = work;
	    setImmediate(function () {
	      delete cache[id];
	      work();
	    });
	  }
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10).setImmediate))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(11).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};
	
	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);
	
	  immediateIds[id] = true;
	
	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });
	
	  return id;
	};
	
	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10).setImmediate, __webpack_require__(10).clearImmediate))

/***/ },
/* 11 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, clearImmediate, process) {(function (global, undefined) {
	    "use strict";
	
	    if (global.setImmediate) {
	        return;
	    }
	
	    var nextHandle = 1; // Spec says greater than zero
	    var tasksByHandle = {};
	    var currentlyRunningATask = false;
	    var doc = global.document;
	    var setImmediate;
	
	    function addFromSetImmediateArguments(args) {
	        tasksByHandle[nextHandle] = partiallyApplied.apply(undefined, args);
	        return nextHandle++;
	    }
	
	    // This function accepts the same arguments as setImmediate, but
	    // returns a function that requires no arguments.
	    function partiallyApplied(handler) {
	        var args = [].slice.call(arguments, 1);
	        return function() {
	            if (typeof handler === "function") {
	                handler.apply(undefined, args);
	            } else {
	                (new Function("" + handler))();
	            }
	        };
	    }
	
	    function runIfPresent(handle) {
	        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // "too much recursion" error.
	            setTimeout(partiallyApplied(runIfPresent, handle), 0);
	        } else {
	            var task = tasksByHandle[handle];
	            if (task) {
	                currentlyRunningATask = true;
	                try {
	                    task();
	                } finally {
	                    clearImmediate(handle);
	                    currentlyRunningATask = false;
	                }
	            }
	        }
	    }
	
	    function clearImmediate(handle) {
	        delete tasksByHandle[handle];
	    }
	
	    function installNextTickImplementation() {
	        setImmediate = function() {
	            var handle = addFromSetImmediateArguments(arguments);
	            process.nextTick(partiallyApplied(runIfPresent, handle));
	            return handle;
	        };
	    }
	
	    function canUsePostMessage() {
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `global.postMessage` means something completely different and can't be used for this purpose.
	        if (global.postMessage && !global.importScripts) {
	            var postMessageIsAsynchronous = true;
	            var oldOnMessage = global.onmessage;
	            global.onmessage = function() {
	                postMessageIsAsynchronous = false;
	            };
	            global.postMessage("", "*");
	            global.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous;
	        }
	    }
	
	    function installPostMessageImplementation() {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
	
	        var messagePrefix = "setImmediate$" + Math.random() + "$";
	        var onGlobalMessage = function(event) {
	            if (event.source === global &&
	                typeof event.data === "string" &&
	                event.data.indexOf(messagePrefix) === 0) {
	                runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };
	
	        if (global.addEventListener) {
	            global.addEventListener("message", onGlobalMessage, false);
	        } else {
	            global.attachEvent("onmessage", onGlobalMessage);
	        }
	
	        setImmediate = function() {
	            var handle = addFromSetImmediateArguments(arguments);
	            global.postMessage(messagePrefix + handle, "*");
	            return handle;
	        };
	    }
	
	    function installMessageChannelImplementation() {
	        var channel = new MessageChannel();
	        channel.port1.onmessage = function(event) {
	            var handle = event.data;
	            runIfPresent(handle);
	        };
	
	        setImmediate = function() {
	            var handle = addFromSetImmediateArguments(arguments);
	            channel.port2.postMessage(handle);
	            return handle;
	        };
	    }
	
	    function installReadyStateChangeImplementation() {
	        var html = doc.documentElement;
	        setImmediate = function() {
	            var handle = addFromSetImmediateArguments(arguments);
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement("script");
	            script.onreadystatechange = function () {
	                runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	            return handle;
	        };
	    }
	
	    function installSetTimeoutImplementation() {
	        setImmediate = function() {
	            var handle = addFromSetImmediateArguments(arguments);
	            setTimeout(partiallyApplied(runIfPresent, handle), 0);
	            return handle;
	        };
	    }
	
	    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
	    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
	    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;
	
	    // Don't get fooled by e.g. browserify environments.
	    if ({}.toString.call(global.process) === "[object process]") {
	        // For Node.js before 0.9
	        installNextTickImplementation();
	
	    } else if (canUsePostMessage()) {
	        // For non-IE10 modern browsers
	        installPostMessageImplementation();
	
	    } else if (global.MessageChannel) {
	        // For web workers, where supported
	        installMessageChannelImplementation();
	
	    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
	        // For IE 6–8
	        installReadyStateChangeImplementation();
	
	    } else {
	        // For older browsers
	        installSetTimeoutImplementation();
	    }
	
	    attachTo.setImmediate = setImmediate;
	    attachTo.clearImmediate = clearImmediate;
	}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(10).clearImmediate, __webpack_require__(11)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var isEmpty = __webpack_require__(14);
	var isArray = __webpack_require__(7);
	
	module.exports = function (topRules, minify, plugins, scope) {
	  var scopeTheSelector = function (selector) {
	    if (scope === '') return selector;
	    if (selector.indexOf(scope) === 0 || selector.indexOf('@') === 0) return selector;
	    return scope + ' ' + selector;
	  };
	  var applyPlugins = function (props) {
	    var n;
	
	    for (n = 0; n < plugins.length; n++) {
	      props = plugins[n](props);
	    }
	    return props;
	  };
	
	  var newLine = minify ? '' : '\n';
	  var interval = minify ? '' : ' ';
	  var tab = minify ? '' : '  ';
	
	  var process = function (rules, indent) {
	    var css = '', r, prop, props, value;
	    var addLine = function (line, noNewLine) {
	      css += line + (noNewLine ? '' : newLine);
	    };
	    var processRule = function (rule) {
	      // console.log(rule);
	      if (!isEmpty(rule.props) || rule.nestedRules !== null) {
	        addLine(indent + scopeTheSelector(rule.selector) + interval + '{');
	        props = applyPlugins(rule.props);
	        for (prop in props) {
	          value = typeof props[prop] === 'function' ? props[prop]() : props[prop];
	          if (isArray(value)) {
	            value.forEach(function (v) {
	              addLine(indent + tab + prop + ':' + interval + v + ';');
	            });
	          } else {
	            addLine(indent + tab + prop + ':' + interval + value + ';');
	          }
	        }
	        if (rule.nestedRules) {
	          addLine(process(rule.nestedRules, indent + tab), true);
	        }
	        addLine(indent + '}');
	      }
	    };
	
	    indent = minify ? '' : indent;
	    if (isArray(rules)) {
	      rules.forEach(processRule);
	    } else {
	      for (r in rules) {
	        if (isArray(rules[r])) {
	          rules[r].forEach(processRule);
	        } else {
	          processRule(rules[r]);
	        }
	      }
	    };
	
	    return css;
	  };
	
	  return process(topRules, '');
	};


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function (obj) {
	  var prop;
	
	  for (prop in obj) {
	    if (obj.hasOwnProperty(prop)) {
	      return false;
	    }
	  }
	  return true;
	};


/***/ },
/* 15 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = function (api) {
	  if (typeof global !== 'undefined') {
	    global.tsjStyler = api;
	  }
	  if (typeof window !== 'undefined') {
	    window.tsjStyler = api;
	  }
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 16 */
/***/ function(module, exports) {

	var ids = 0;
	
	module.exports = function () {
	  return '_tsjStyler' + (++ids);
	};
	module.exports.resetIDs = function () {
	  ids = 0;
	};


/***/ }
/******/ ])
});
;

/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.3.6 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, https://github.com/requirejs/requirejs/blob/master/LICENSE
 */
var requirejs,require,define;!function(global,setTimeout){var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.3.6",commentRegExp=/\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,isBrowser=!("undefined"==typeof window||"undefined"==typeof navigator||!window.document),isWebWorker=!isBrowser&&"undefined"!=typeof importScripts,readyRegExp=isBrowser&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),contexts={},cfg={},globalDefQueue=[],useInteractive=!1;function commentReplace(e,t){return t||""}function isFunction(e){return"[object Function]"===ostring.call(e)}function isArray(e){return"[object Array]"===ostring.call(e)}function each(e,t){var i;if(e)for(i=0;i<e.length&&(!e[i]||!t(e[i],i,e));i+=1);}function eachReverse(e,t){var i;if(e)for(i=e.length-1;-1<i&&(!e[i]||!t(e[i],i,e));i-=1);}function hasProp(e,t){return hasOwn.call(e,t)}function getOwn(e,t){return hasProp(e,t)&&e[t]}function eachProp(e,t){var i;for(i in e)if(hasProp(e,i)&&t(e[i],i))break}function mixin(i,e,r,n){return e&&eachProp(e,function(e,t){!r&&hasProp(i,t)||(!n||"object"!=typeof e||!e||isArray(e)||isFunction(e)||e instanceof RegExp?i[t]=e:(i[t]||(i[t]={}),mixin(i[t],e,r,n)))}),i}function bind(e,t){return function(){return t.apply(e,arguments)}}function scripts(){return document.getElementsByTagName("script")}function defaultOnError(e){throw e}function getGlobal(e){if(!e)return e;var t=global;return each(e.split("."),function(e){t=t[e]}),t}function makeError(e,t,i,r){var n=new Error(t+"\nhttps://requirejs.org/docs/errors.html#"+e);return n.requireType=e,n.requireModules=r,i&&(n.originalError=i),n}if(void 0===define){if(void 0!==requirejs){if(isFunction(requirejs))return;cfg=requirejs,requirejs=void 0}void 0===require||isFunction(require)||(cfg=require,require=void 0),req=requirejs=function(e,t,i,r){var n,o,a=defContextName;return isArray(e)||"string"==typeof e||(o=e,isArray(t)?(e=t,t=i,i=r):e=[]),o&&o.context&&(a=o.context),(n=getOwn(contexts,a))||(n=contexts[a]=req.s.newContext(a)),o&&n.configure(o),n.require(e,t,i)},req.config=function(e){return req(e)},req.nextTick=void 0!==setTimeout?function(e){setTimeout(e,4)}:function(e){e()},require||(require=req),req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext},req({}),each(["toUrl","undef","defined","specified"],function(t){req[t]=function(){var e=contexts[defContextName];return e.require[t].apply(e,arguments)}}),isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],baseElement=document.getElementsByTagName("base")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=defaultOnError,req.createNode=function(e,t,i){var r=e.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");return r.type=e.scriptType||"text/javascript",r.charset="utf-8",r.async=!0,r},req.load=function(t,i,r){var e,n=t&&t.config||{};if(isBrowser)return(e=req.createNode(n,i,r)).setAttribute("data-requirecontext",t.contextName),e.setAttribute("data-requiremodule",i),!e.attachEvent||e.attachEvent.toString&&e.attachEvent.toString().indexOf("[native code")<0||isOpera?(e.addEventListener("load",t.onScriptLoad,!1),e.addEventListener("error",t.onScriptError,!1)):(useInteractive=!0,e.attachEvent("onreadystatechange",t.onScriptLoad)),e.src=r,n.onNodeCreated&&n.onNodeCreated(e,n,i,r),currentlyAddingScript=e,baseElement?head.insertBefore(e,baseElement):head.appendChild(e),currentlyAddingScript=null,e;if(isWebWorker)try{setTimeout(function(){},0),importScripts(r),t.completeLoad(i)}catch(e){t.onError(makeError("importscripts","importScripts failed for "+i+" at "+r,e,[i]))}},isBrowser&&!cfg.skipDataMain&&eachReverse(scripts(),function(e){if(head||(head=e.parentNode),dataMain=e.getAttribute("data-main"))return mainScript=dataMain,cfg.baseUrl||-1!==mainScript.indexOf("!")||(mainScript=(src=mainScript.split("/")).pop(),subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath),mainScript=mainScript.replace(jsSuffixRegExp,""),req.jsExtRegExp.test(mainScript)&&(mainScript=dataMain),cfg.deps=cfg.deps?cfg.deps.concat(mainScript):[mainScript],!0}),define=function(e,i,t){var r,n;"string"!=typeof e&&(t=i,i=e,e=null),isArray(i)||(t=i,i=null),!i&&isFunction(t)&&(i=[],t.length&&(t.toString().replace(commentRegExp,commentReplace).replace(cjsRequireRegExp,function(e,t){i.push(t)}),i=(1===t.length?["require"]:["require","exports","module"]).concat(i))),useInteractive&&(r=currentlyAddingScript||getInteractiveScript())&&(e||(e=r.getAttribute("data-requiremodule")),n=contexts[r.getAttribute("data-requirecontext")]),n?(n.defQueue.push([e,i,t]),n.defQueueMap[e]=!0):globalDefQueue.push([e,i,t])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)}function newContext(u){var i,e,l,c,d,g={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},p={},f={},r={},h=[],m={},n={},v={},x=1,b=1;function q(e,t,i){var r,n,o,a,s,u,c,d,p,f,l=t&&t.split("/"),h=g.map,m=h&&h["*"];if(e&&(u=(e=e.split("/")).length-1,g.nodeIdCompat&&jsSuffixRegExp.test(e[u])&&(e[u]=e[u].replace(jsSuffixRegExp,"")),"."===e[0].charAt(0)&&l&&(e=l.slice(0,l.length-1).concat(e)),function(e){var t,i;for(t=0;t<e.length;t++)if("."===(i=e[t]))e.splice(t,1),t-=1;else if(".."===i){if(0===t||1===t&&".."===e[2]||".."===e[t-1])continue;0<t&&(e.splice(t-1,2),t-=2)}}(e),e=e.join("/")),i&&h&&(l||m)){e:for(o=(n=e.split("/")).length;0<o;o-=1){if(s=n.slice(0,o).join("/"),l)for(a=l.length;0<a;a-=1)if((r=getOwn(h,l.slice(0,a).join("/")))&&(r=getOwn(r,s))){c=r,d=o;break e}!p&&m&&getOwn(m,s)&&(p=getOwn(m,s),f=o)}!c&&p&&(c=p,d=f),c&&(n.splice(0,d,c),e=n.join("/"))}return getOwn(g.pkgs,e)||e}function E(t){isBrowser&&each(scripts(),function(e){if(e.getAttribute("data-requiremodule")===t&&e.getAttribute("data-requirecontext")===l.contextName)return e.parentNode.removeChild(e),!0})}function w(e){var t=getOwn(g.paths,e);if(t&&isArray(t)&&1<t.length)return t.shift(),l.require.undef(e),l.makeRequire(null,{skipMap:!0})([e]),!0}function y(e){var t,i=e?e.indexOf("!"):-1;return-1<i&&(t=e.substring(0,i),e=e.substring(i+1,e.length)),[t,e]}function S(e,t,i,r){var n,o,a,s,u=null,c=t?t.name:null,d=e,p=!0,f="";return e||(p=!1,e="_@r"+(x+=1)),u=(s=y(e))[0],e=s[1],u&&(u=q(u,c,r),o=getOwn(m,u)),e&&(u?f=i?e:o&&o.normalize?o.normalize(e,function(e){return q(e,c,r)}):-1===e.indexOf("!")?q(e,c,r):e:(u=(s=y(f=q(e,c,r)))[0],f=s[1],i=!0,n=l.nameToUrl(f))),{prefix:u,name:f,parentMap:t,unnormalized:!!(a=!u||o||i?"":"_unnormalized"+(b+=1)),url:n,originalName:d,isDefine:p,id:(u?u+"!"+f:f)+a}}function k(e){var t=e.id,i=getOwn(p,t);return i||(i=p[t]=new l.Module(e)),i}function M(e,t,i){var r=e.id,n=getOwn(p,r);!hasProp(m,r)||n&&!n.defineEmitComplete?(n=k(e)).error&&"error"===t?i(n.error):n.on(t,i):"defined"===t&&i(m[r])}function O(i,e){var t=i.requireModules,r=!1;e?e(i):(each(t,function(e){var t=getOwn(p,e);t&&(t.error=i,t.events.error&&(r=!0,t.emit("error",i)))}),r||req.onError(i))}function j(){globalDefQueue.length&&(each(globalDefQueue,function(e){var t=e[0];"string"==typeof t&&(l.defQueueMap[t]=!0),h.push(e)}),globalDefQueue=[])}function P(e){delete p[e],delete f[e]}function R(){var e,r,t=1e3*g.waitSeconds,n=t&&l.startTime+t<(new Date).getTime(),o=[],a=[],s=!1,u=!0;if(!i){if(i=!0,eachProp(f,function(e){var t=e.map,i=t.id;if(e.enabled&&(t.isDefine||a.push(e),!e.error))if(!e.inited&&n)w(i)?s=r=!0:(o.push(i),E(i));else if(!e.inited&&e.fetched&&t.isDefine&&(s=!0,!t.prefix))return u=!1}),n&&o.length)return(e=makeError("timeout","Load timeout for modules: "+o,null,o)).contextName=l.contextName,O(e);u&&each(a,function(e){!function n(o,a,s){var e=o.map.id;o.error?o.emit("error",o.error):(a[e]=!0,each(o.depMaps,function(e,t){var i=e.id,r=getOwn(p,i);!r||o.depMatched[t]||s[i]||(getOwn(a,i)?(o.defineDep(t,m[i]),o.check()):n(r,a,s))}),s[e]=!0)}(e,{},{})}),n&&!r||!s||!isBrowser&&!isWebWorker||d||(d=setTimeout(function(){d=0,R()},50)),i=!1}}function a(e){hasProp(m,e[0])||k(S(e[0],null,!0)).init(e[1],e[2])}function o(e,t,i,r){e.detachEvent&&!isOpera?r&&e.detachEvent(r,t):e.removeEventListener(i,t,!1)}function s(e){var t=e.currentTarget||e.srcElement;return o(t,l.onScriptLoad,"load","onreadystatechange"),o(t,l.onScriptError,"error"),{node:t,id:t&&t.getAttribute("data-requiremodule")}}function T(){var e;for(j();h.length;){if(null===(e=h.shift())[0])return O(makeError("mismatch","Mismatched anonymous define() module: "+e[e.length-1]));a(e)}l.defQueueMap={}}return c={require:function(e){return e.require?e.require:e.require=l.makeRequire(e.map)},exports:function(e){if(e.usingExports=!0,e.map.isDefine)return e.exports?m[e.map.id]=e.exports:e.exports=m[e.map.id]={}},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){return getOwn(g.config,e.map.id)||{}},exports:e.exports||(e.exports={})}}},(e=function(e){this.events=getOwn(r,e.id)||{},this.map=e,this.shim=getOwn(g.shim,e.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0}).prototype={init:function(e,t,i,r){r=r||{},this.inited||(this.factory=t,i?this.on("error",i):this.events.error&&(i=bind(this,function(e){this.emit("error",e)})),this.depMaps=e&&e.slice(0),this.errback=i,this.inited=!0,this.ignore=r.ignore,r.enabled||this.enabled?this.enable():this.check())},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=t)},fetch:function(){if(!this.fetched){this.fetched=!0,l.startTime=(new Date).getTime();var e=this.map;if(!this.shim)return e.prefix?this.callPlugin():this.load();l.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,function(){return e.prefix?this.callPlugin():this.load()}))}},load:function(){var e=this.map.url;n[e]||(n[e]=!0,l.load(this.map.id,e))},check:function(){if(this.enabled&&!this.enabling){var t,e,i=this.map.id,r=this.depExports,n=this.exports,o=this.factory;if(this.inited){if(this.error)this.emit("error",this.error);else if(!this.defining){if(this.defining=!0,this.depCount<1&&!this.defined){if(isFunction(o)){if(this.events.error&&this.map.isDefine||req.onError!==defaultOnError)try{n=l.execCb(i,o,r,n)}catch(e){t=e}else n=l.execCb(i,o,r,n);if(this.map.isDefine&&void 0===n&&((e=this.module)?n=e.exports:this.usingExports&&(n=this.exports)),t)return t.requireMap=this.map,t.requireModules=this.map.isDefine?[this.map.id]:null,t.requireType=this.map.isDefine?"define":"require",O(this.error=t)}else n=o;if(this.exports=n,this.map.isDefine&&!this.ignore&&(m[i]=n,req.onResourceLoad)){var a=[];each(this.depMaps,function(e){a.push(e.normalizedMap||e)}),req.onResourceLoad(l,this.map,a)}P(i),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else hasProp(l.defQueueMap,i)||this.fetch()}},callPlugin:function(){var u=this.map,c=u.id,e=S(u.prefix);this.depMaps.push(e),M(e,"defined",bind(this,function(e){var o,t,i,r=getOwn(v,this.map.id),n=this.map.name,a=this.map.parentMap?this.map.parentMap.name:null,s=l.makeRequire(u.parentMap,{enableBuildCallback:!0});return this.map.unnormalized?(e.normalize&&(n=e.normalize(n,function(e){return q(e,a,!0)})||""),M(t=S(u.prefix+"!"+n,this.map.parentMap,!0),"defined",bind(this,function(e){this.map.normalizedMap=t,this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),void((i=getOwn(p,t.id))&&(this.depMaps.push(t),this.events.error&&i.on("error",bind(this,function(e){this.emit("error",e)})),i.enable()))):r?(this.map.url=l.nameToUrl(r),void this.load()):((o=bind(this,function(e){this.init([],function(){return e},null,{enabled:!0})})).error=bind(this,function(e){this.inited=!0,(this.error=e).requireModules=[c],eachProp(p,function(e){0===e.map.id.indexOf(c+"_unnormalized")&&P(e.map.id)}),O(e)}),o.fromText=bind(this,function(e,t){var i=u.name,r=S(i),n=useInteractive;t&&(e=t),n&&(useInteractive=!1),k(r),hasProp(g.config,c)&&(g.config[i]=g.config[c]);try{req.exec(e)}catch(e){return O(makeError("fromtexteval","fromText eval for "+c+" failed: "+e,e,[c]))}n&&(useInteractive=!0),this.depMaps.push(r),l.completeLoad(i),s([i],o)}),void e.load(u.name,s,o,g))})),l.enable(e,this),this.pluginMaps[e.id]=e},enable:function(){(f[this.map.id]=this).enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,function(e,t){var i,r,n;if("string"==typeof e){if(e=S(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[t]=e,n=getOwn(c,e.id))return void(this.depExports[t]=n(this));this.depCount+=1,M(e,"defined",bind(this,function(e){this.undefed||(this.defineDep(t,e),this.check())})),this.errback?M(e,"error",bind(this,this.errback)):this.events.error&&M(e,"error",bind(this,function(e){this.emit("error",e)}))}i=e.id,r=p[i],hasProp(c,i)||!r||r.enabled||l.enable(e,this)})),eachProp(this.pluginMaps,bind(this,function(e){var t=getOwn(p,e.id);t&&!t.enabled&&l.enable(e,this)})),this.enabling=!1,this.check()},on:function(e,t){var i=this.events[e];i||(i=this.events[e]=[]),i.push(t)},emit:function(e,t){each(this.events[e],function(e){e(t)}),"error"===e&&delete this.events[e]}},(l={config:g,contextName:u,registry:p,defined:m,urlFetched:n,defQueue:h,defQueueMap:{},Module:e,makeModuleMap:S,nextTick:req.nextTick,onError:O,configure:function(e){if(e.baseUrl&&"/"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+="/"),"string"==typeof e.urlArgs){var i=e.urlArgs;e.urlArgs=function(e,t){return(-1===t.indexOf("?")?"?":"&")+i}}var r=g.shim,n={paths:!0,bundles:!0,config:!0,map:!0};eachProp(e,function(e,t){n[t]?(g[t]||(g[t]={}),mixin(g[t],e,!0,!0)):g[t]=e}),e.bundles&&eachProp(e.bundles,function(e,t){each(e,function(e){e!==t&&(v[e]=t)})}),e.shim&&(eachProp(e.shim,function(e,t){isArray(e)&&(e={deps:e}),!e.exports&&!e.init||e.exportsFn||(e.exportsFn=l.makeShimExports(e)),r[t]=e}),g.shim=r),e.packages&&each(e.packages,function(e){var t;t=(e="string"==typeof e?{name:e}:e).name,e.location&&(g.paths[t]=e.location),g.pkgs[t]=e.name+"/"+(e.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")}),eachProp(p,function(e,t){e.inited||e.map.unnormalized||(e.map=S(t,null,!0))}),(e.deps||e.callback)&&l.require(e.deps||[],e.callback)},makeShimExports:function(t){return function(){var e;return t.init&&(e=t.init.apply(global,arguments)),e||t.exports&&getGlobal(t.exports)}},makeRequire:function(o,a){function s(e,t,i){var r,n;return a.enableBuildCallback&&t&&isFunction(t)&&(t.__requireJsBuild=!0),"string"==typeof e?isFunction(t)?O(makeError("requireargs","Invalid require call"),i):o&&hasProp(c,e)?c[e](p[o.id]):req.get?req.get(l,e,o,s):(r=S(e,o,!1,!0).id,hasProp(m,r)?m[r]:O(makeError("notloaded",'Module name "'+r+'" has not been loaded yet for context: '+u+(o?"":". Use require([])")))):(T(),l.nextTick(function(){T(),(n=k(S(null,o))).skipMap=a.skipMap,n.init(e,t,i,{enabled:!0}),R()}),s)}return a=a||{},mixin(s,{isBrowser:isBrowser,toUrl:function(e){var t,i=e.lastIndexOf("."),r=e.split("/")[0];return-1!==i&&(!("."===r||".."===r)||1<i)&&(t=e.substring(i,e.length),e=e.substring(0,i)),l.nameToUrl(q(e,o&&o.id,!0),t,!0)},defined:function(e){return hasProp(m,S(e,o,!1,!0).id)},specified:function(e){return e=S(e,o,!1,!0).id,hasProp(m,e)||hasProp(p,e)}}),o||(s.undef=function(i){j();var e=S(i,o,!0),t=getOwn(p,i);t.undefed=!0,E(i),delete m[i],delete n[e.url],delete r[i],eachReverse(h,function(e,t){e[0]===i&&h.splice(t,1)}),delete l.defQueueMap[i],t&&(t.events.defined&&(r[i]=t.events),P(i))}),s},enable:function(e){getOwn(p,e.id)&&k(e).enable()},completeLoad:function(e){var t,i,r,n=getOwn(g.shim,e)||{},o=n.exports;for(j();h.length;){if(null===(i=h.shift())[0]){if(i[0]=e,t)break;t=!0}else i[0]===e&&(t=!0);a(i)}if(l.defQueueMap={},r=getOwn(p,e),!t&&!hasProp(m,e)&&r&&!r.inited){if(!(!g.enforceDefine||o&&getGlobal(o)))return w(e)?void 0:O(makeError("nodefine","No define call for "+e,null,[e]));a([e,n.deps||[],n.exportsFn])}R()},nameToUrl:function(e,t,i){var r,n,o,a,s,u,c=getOwn(g.pkgs,e);if(c&&(e=c),u=getOwn(v,e))return l.nameToUrl(u,t,i);if(req.jsExtRegExp.test(e))a=e+(t||"");else{for(r=g.paths,o=(n=e.split("/")).length;0<o;o-=1)if(s=getOwn(r,n.slice(0,o).join("/"))){isArray(s)&&(s=s[0]),n.splice(0,o,s);break}a=n.join("/"),a=("/"===(a+=t||(/^data\:|^blob\:|\?/.test(a)||i?"":".js")).charAt(0)||a.match(/^[\w\+\.\-]+:/)?"":g.baseUrl)+a}return g.urlArgs&&!/^blob\:/.test(a)?a+g.urlArgs(e,a):a},load:function(e,t){req.load(l,e,t)},execCb:function(e,t,i,r){return t.apply(r,i)},onScriptLoad:function(e){if("load"===e.type||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){interactiveScript=null;var t=s(e);l.completeLoad(t.id)}},onScriptError:function(e){var i=s(e);if(!w(i.id)){var r=[];return eachProp(p,function(e,t){0!==t.indexOf("_@r")&&each(e.depMaps,function(e){if(e.id===i.id)return r.push(t),!0})}),O(makeError("scripterror",'Script error for "'+i.id+(r.length?'", needed by: '+r.join(", "):'"'),e,[i.id]))}}}).require=l.makeRequire(),l}function getInteractiveScript(){return interactiveScript&&"interactive"===interactiveScript.readyState||eachReverse(scripts(),function(e){if("interactive"===e.readyState)return interactiveScript=e}),interactiveScript}}(this,"undefined"==typeof setTimeout?void 0:setTimeout); tsj.loadScript = function(src, callback) { return require([src], callback); }; tsj.loadScripts = function(src, callback) { return require(src, callback); };
