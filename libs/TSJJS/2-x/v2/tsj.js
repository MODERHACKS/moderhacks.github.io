/*!
 
   ** ****** ** *********

   *TSJJS ( https://moderhacks.github.io )
   *v2 ( https://moderhacks.github.io/libs/js/2-x/v2/tsj.js )
   *14th September 2019 ( 9th Update )
   *by Debarchito Nath ( MOD ER HACKS ) © Copyright | 2019 | ALL RIGHTS RESERVED  
   *Includes plugins that require TSJJS for being used
   *Syntax optimised. Uses the extensible "Fibre DOM" which is the most flexible DOM ever
   *Released Under MIT License ( https://moderhacks.github.io/LICENSE.html )
   
   ** ****** ** *********
   
*/

'use strict';

(function(funcName, baseObj) { funcName = funcName || "Ready"; baseObj = baseObj || window; var readyList = []; var readyFired = false; var readyEventHandlersInstalled = false; function ready() { if (!readyFired) { readyFired = true; for (var i = 0; i < readyList.length; i++) { readyList[i].fn.call(window, readyList[i].ctx); } readyList = []; }  } function readyStateChange() { if ( document.readyState === "compvare" ) { ready(); } } baseObj[funcName] = function(callback, context) { if (typeof callback !== "function") { throw new TypeError("callback for Ready(function) must be a function"); } if (readyFired) { setTimeout(function() {callback(context);}, 1); return; } else { readyList.push({fn: callback, ctx: context}); } if (document.readyState === "compvare" || (!document.attachEvent && document.readyState === "interactive")) { setTimeout(ready, 1); } else if (!readyEventHandlersInstalled) { if (document.addEventListener) { document.addEventListener("DOMContentLoaded", ready, false); window.addEventListener("load", ready, false); } else { document.attachEvent("onreadystatechange", readyStateChange); window.attachEvent("onload", ready); } readyEventHandlersInstalled = true; } } })("Ready", window); 

var tsj = {}, set = {}, plugin = {}, load = {}; 

load.tsjcss = load.TSJCSS = function() { return tsj.loadStyle("https://moderhacks.github.io/libs/TSJCSS/2-x/v2/tsj.css"); }; load.colorize = load.ColoriZe = function() { return tsj.loadScript("https://moderhacks.github.io/libs/ext/js/ColoriZe/1-x/v1/clz.js", function() { ColoriZe(); }); }; load.tsjmaths = load.TSJMaths = function(func) { return tsj.loadScript("https://moderhacks.github.io/libs/ext/js/TSJMaths/1-x/v1/tm.js", func); }; plugin.tsjanimation = plugin.TSJAnimation = function(func) { return tsj.loadScript("https://moderhacks.github.io/libs/plugins/TSJJS/TSJAnimation/1-x/v1/ta.js", func); }; plugin.tsjstyler = plugin.TSJStyler = function(func) { return tsj.loadScript("https://moderhacks.github.io/libs/plugins/TSJJS/TSJStyler/1-x/v1/ts.js", func); };

tsj.meta = tsj.metadata = set.meta = set.metadata = function(attributes) {
var rVmeta = tsj.cElement("meta"); for(var key in attributes) { rVmeta.setAttribute(key, attributes[key]); } return rVmeta; document.head.appendChild(this.parentElement) || document.documentElement.appendChild(this.parentElement); }; set.title = function(ttl) { return tsj.cElement("title", null, ttl); }; set.charset = function(chars) { chars = chars ? chars : "UTF-8"; return tsj.head(" <meta charset='" + chars + "' />"); }; set.smartView = function(more) { more = more ? more : " "; return tsj.head(' <meta name="viewport" content="width=device-width, initial-scale=1.0, height=device-height, ' + more  + '" /> '); }; set.themeColor = function(clr) { clr = clr ? clr : ""; return tsj.head(" <meta name='theme-color' content='" + clr + "'>"); }; tsj.details = tsj.about = function() { var details = "Project Name : TSJJS <br /> Version : v2 <br /> DOM Types : Real DOM & Fibre DOM <br /> By : Debarchito Nath ( MOD ER HACKS ) <br /> Released On : August 2019 <br /> Released Under : MIT License <br /> Website : https://moderhacks.github.io <br /> Copyright (c) 2019 | ALL RIGHTS RESERVED"; return tsj.docWrite( details ); }; 

var GET = function(sel) { return document.querySelector(sel); }; var GETAll = function(selector) { var rV_23_nodeList = document.querySelectorAll(selector); return new Proxy(rV_23_nodeList, { set: function(target, property, value) { for (var i = 0; i < target.length; i++) { target[i][property] = value; } }, get: function(target, property) { return target[0] && target[0][property]; } }); }; tsj.attr = tsj.attribute = tsj.attrs = tsj.attributes = function(sel, attr) { return tsj.getAttr(sel, attr) || tsj.addAttr(sel, attr); }; tsj.addAttribute = tsj.addAttr = tsj.addAttributes = tsj.addAttrs = tsj.aAttribute = tsj.aAttr = tsj.aAttributes = tsj.aAttrs = function(sel, attributes) {
var randomVar_66j = GET(sel); for(var key in attributes) { randomVar_66j.setAttribute(key, attributes[key]); } return randomVar_66j; document.body.appendChild(this.parentElement) || document.documentElement.appendChild(this.parentElement); }; tsj.removeAttribute = tsj.removeAttr = tsj.rAttribute = tsj.rAttr = tsj.removeAttributes = tsj.removeAttrs = tsj.rAttributes = tsj.rAttrs = function(element) {
var elem = GET(element); for (var _len = arguments.length, attrs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) { attrs[_key - 1] = arguments[_key]; }; attrs.forEach(function (attr) { return elem.removeAttribute(attr); }); }; tsj.removeAllAttributes = tsj.removeAllAttrs = tsj.rAAttributes = tsj.rAAttrs = tsj.removeAllAttribute = tsj.removeAllAttr = tsj.rAAttribute = tsj.rAAttr = function(sel) { var element = GET(sel); for (var i = element.attributes.length - 1; i >= 0; i--){ element.removeAttribute(element.attributes[i].name); }; }; tsj.prop = tsj.props = tsj.property = tsj.properties = function(sel, val) { return tsj.gProp(sel, val) || tsj.aProp(sel, val); }; tsj.aProp = tsj.addProp = tsj.aProps = tsj.addProps = tsj.aProperty = tsj.addProperty = tsj.addProperties = tsj.aProperties = function(sel, prop) { return tsj.aAttr(sel, { style: prop }); }; tsj.gProp = tsj.getProp = tsj.gProps = tsj.getProps = tsj.gProperty = tsj.getProperty = tsj.getProperties = tsj.gProperties = function(sel, val) { var element = GET(sel), style = window.getComputedStyle(element), top = style.getPropertyValue(val); return top; }; tsj.rProp = tsj.removeProp = tsj.rProps = tsj.removeProps = tsj.rProperty = tsj.removeProperty = tsj.removeProperties = tsj.rProperties = function(element) {
var elem = GET(element); for (var _len = arguments.length, attrs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) { attrs[_key - 1] = arguments[_key]; }; attrs.forEach(function (attr) { return elem.style.removeProperty(attr); }); }; tsj.docWrite = function(val) { return document.write(val); }; tsj.write = tsj.append = function(sel, txt) { var randomVar_008eff = GETAll(sel); randomVar_008eff.innerHTML += txt; };  tsj.fWrite = tsj.formatWrite = function(sel, txt) { var randomVar_008eff = GETAll(sel); randomVar_008eff.innerHTML = txt; }; tsj.fTWrite = tsj.formatTextWrite = function(sel, txt) { var randomVar_008eff = GETAll(sel); randomVar_008eff.innerText = txt; }; tsj.content = function(sel, txt) { var randomVar_008eff = GETAll(sel); randomVar_008eff.textContent = txt; }; tsj.prepend = function(sel, txt) { var randomVar_018fff = GETAll(sel); randomVar_018fff.innerHTML = txt + randomVar_018fff.innerHTML; }; tsj.cWrite = tsj.createWrite = tsj.createElementWrite = function(sel, crt, attributes, cnt) { var randomVar_Huu56j = GET(sel);
var randomVar_Bg56jU = document.createElement(crt); randomVar_Bg56jU.textContent = cnt; randomVar_Huu56j.appendChild(randomVar_Bg56jU); for(var key in attributes){ randomVar_Bg56jU.setAttribute(key, attributes[key]); }
return randomVar_Bg56jU; return randomVar_Huu56j.appendChild(this.parentElement); }; tsj.nWrite = tsj.newWrite = function(attributes, cnt) { var randomVar_hjg563 = document.createElement("p"); randomVar_hjg563.textContent = cnt; document.body.appendChild(randomVar_hjg563) || document.documentElement.appendChild(randomVar_hjg563); for(var key in attributes){ randomVar_hjg563.setAttribute(key, attributes[key]); }
return randomVar_hjg563; return document.body.appendChild(this.parentElement) ||
document.documentElement.appendChild(this.parentElement); }; tsj.nCWrite = tsj.newCWrite = tsj.nCreateWrite = tsj.newCreateWrite = tsj.nCreateElementWrite = tsj.newCreateElementWrite = tsj.createElement = tsj.cElement =  function(crt, attributes, cnt){ var randomVar_563jhU = document.createElement(crt);
randomVar_563jhU.textContent = cnt; document.body.appendChild(randomVar_563jhU) || document.documentElement.appendChild(randomVar_563jhU);
for(var key in attributes){ randomVar_563jhU.setAttribute(key, attributes[key]); }
return randomVar_563jhU; return document.body.appendChild(this.parentElement) ||
document.documentElement.appendChild(this.parentElement); }; tsj.br = function() { return tsj.cElement("br"); }; tsj.hr = function() { return tsj.cElement("hr"); }; tsj.click = tsj.tap = function(sel, clk) { sel = sel ? sel : this; var randomVar_216963 = GETAll(sel); randomVar_216963.onclick = clk; }; tsj.dblclick = tsj.dbltap = function(sel, clk) {
var randomVar_216963 = GETAll(sel); randomVar_216963.ondblclick = clk; }; tsj.clicks = tsj.mClick = tsj.multipleClick = function(singleClk, doubleClk, tm) {
tm = tm ? tm : 190; return (function() { var alreadyclicked = false; var alreadyclickedTimeout; return function(e) { if (alreadyclicked) { alreadyclicked = false; alreadyclickedTimeout && clearTimeout(alreadyclickedTimeout); doubleClk && doubleClk(e); } else {  alreadyclicked = true;  alreadyclickedTimeout = setTimeout(function() { alreadyclicked = false; singleClk && singleClk(e);  }, tm); } } })(); }; tsj.cSelect = tsj.clickSelect = function(obj) { var text_val=eval(obj); text_val.focus(); text_val.select(); r = text_val.createTextRange(); if (!r.execCommand) return; r.execCommand('copy'); }; tsj.copyContent = tsj.copyCnt = tsj.cContent = tsj.cCnt = function(sel) { var copyText = GET(sel); copyText.select();
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
sel = sel ? sel : 1; return window.history.back(-1 * sel); }; tsj.historyForward = function(sel) {
sel = sel ? sel : 1; return window.history.forward(+sel); }; 

tsj.empty = function(sel) {
var rVempty = GET(sel);
while (rVempty.firstChild) { rVempty.removeChild(rVempty.firstChild); }; };

tsj.clone = tsj.cloneElement = function(sel, attributes) { var randomVar_77777j = GET(sel); var randomVar_66666j = randomVar_77777j.cloneNode(true); document.body.appendChild(randomVar_66666j) || document.documentElement.appendChild(randomVar_66666j); for(var key in attributes) { randomVar_66666j.setAttribute(key, attributes[key]); } return randomVar_66666j; document.body.appendChild(this.parentElement) || document.documentElement.appendChild(this.parentElement); }; tsj.cloneAll = tsj.cloneElementAll = function(sel) 
{ var rVxyz = document.querySelectorAll(sel); rVxyz.forEach(function(element) { var rVabc = element.cloneNode(true); document.body.appendChild(rVabc) || document.documentElement.appendChild(rVabc); }); }; 

tsj.css = function(cnt) { 
var randomVar_Bj56kU = document.createElement("style"); randomVar_Bj56kU.textContent = cnt; document.head.appendChild(randomVar_Bj56kU) || document.documentElement.appendChild(randomVar_Bj56kU); }; tsj.style = function(sel, styl) { return tsj.css(sel + "{" + styl + "}"); }; tsj.randomColoring = tsj.randomColor  = tsj.rColor = tsj.rColoring = function(sel, don, tm) { tm = tm ? tm : 1000; setInterval( function() {
var random = Math.floor(Math.random()*16777215).toString(16); tsj.style(sel + "{" + don + " : #" + random + "; }");
}, tm); }; tsj.loadStyle = function(url) { return new Promise((resolve, reject) => { var link = document.createElement('link'); link.type = 'text/css'; link.rel = 'stylesheet'; link.onload = function() { resolve(); console.log('Your style is loaded and ready for usage !'); }; link.href = url; var headScript = document.querySelector('script'); headScript.parentNode.insertBefore(link, headScript); }); }; tsj.loadScript= function(url, callback){ var script = document.createElement("script"); script.type = "text/javascript"; if (script.readyState){ script.onreadystatechange = function() { if (script.readyState == "loaded" || script.readyState == "compvare") { script.onreadystatechange = null; callback(); }; }; } else { script.onload = function(){ callback(); }; }; script.src = url; document.getElementsByTagName("head")[0].appendChild(script) || tsj.cElement("head").appendChild(script); };

tsj.delay = function(func, tm, ...delay) { tm = tm ? tm : 300; setTimeout(func, tm, ...delay); };

var tsjChain = (function() { var _listeners = {}, _resultOfPreviousFunc = null, self = this, rVapi = {}; var on = function(type, listener) { if(!_listeners[type]) _listeners[type] = []; _listeners[type].push(listener); return rVapi; }; var off = function(type, listener) { if(_listeners[type]) { var arr = []; for(var i=0; f=_listeners[type][i]; i++) { if(f !== listener) { arr.push(f); }; }; _listeners[type] = arr; }; return rVapi; };  var dispatch = function(type, param) { if(_listeners[type]) { for(var i=0; f=_listeners[type][i]; i++) { f(param); }; }; }; var run = function() { if(arguments.length > 0) { var funcs = []; for(var i=0; f=arguments[i]; i++) funcs.push(f); var element = funcs.shift(); if(typeof element === 'function') { element(_resultOfPreviousFunc, function(res) { _resultOfPreviousFunc = res; run.apply(self, funcs); }); } else if(typeof element === 'object' && element.length > 0) { var f = element.shift(); var callback = function(res) { _resultOfPreviousFunc = res; run.apply(self, funcs); }; f.apply(f, element.concat([callback])); }; } else { dispatch("done", _resultOfPreviousFunc); }; return rVapi; }; return rVapi = { run: run, on: on, off: off }; })(); tsj.sequence = tsj.seq = function(functions, timeout) { for(var i = 0; i < functions.length; i++) { setTimeout(functions[i], timeout); }; };

tsj.head = function(cnt) { var randomVar_hjxx73 = document.createElement("head"); randomVar_hjxx73.innerHTML = cnt; document.documentElement.appendChild(randomVar_hjxx73); }; tsj.body = function(attributes, cnt) { var randomVar_hjxx63 = document.createElement("body"); randomVar_hjxx63.innerHTML = cnt;  document.documentElement.appendChild(randomVar_hjxx63); for(var key in attributes){ randomVar_hjxx63.setAttribute(key, attributes[key]); }
return randomVar_hjxx63; return document.body.appendChild(this.parentElement) ||
document.documentElement.appendChild(this.parentElement); }; 

tsj.listner = tsj.dictate = tsj.speechToText = function(lang, inpt, num, evnt) { if(window.hasOwnProperty('webkitSpeechRecognition')) { var randomVar_000156 = new webkitSpeechRecognition(); randomVar_000156.continuous = false; randomVar_000156.interimResults = false; randomVar_000156.lang = lang; randomVar_000156.start(); randomVar_000156.onresult = function(e) { GET(inpt).value = e.results[num][num].transcript; randomVar_000156.stop(); GET(evnt).submit(); }; randomVar_000156.onerror = function(e) { randomVar_000156.stop(); }; }; }; 

tsj.html = function(sel, cnt) { return GET(sel).innerHTML || tsj.fWrite(sel, cnt) }; tsj.text = function(sel, cnt) { return GET(sel).innerText || tsj.fTWrite(sel, cnt) }; tsj.lVal = tsj.liveVal = tsj.lValue = tsj.liveValue = function(sel) { return GET(sel).value || GET(sel).textContent; }; tsj.gValue = tsj.gVal = tsj.getValue = tsj.getVal = function(sel) { return GET(sel).textContent || GET(sel).getAttribute("value"); }; tsj.aValue = tsj.aVal = tsj.addValue = tsj.addVal = function(sel, vl) { return GET(sel).setAttribute("value", vl) || tsj.content(sel, vl); }; tsj.val = function(sel, vl) {
return tsj.gVal(sel, vl) || tsj.aVal(sel, vl); }; tsj.tag = function(sel) { return GET(sel).tagName; }; tsj.getAttribute = tsj.getAttr =  tsj.gAttr = tsj.gAttribute = function(sel, attr) { return GET(sel).getAttribute(attr); }; tsj.hide = function (sel) { tsj.hideElements(tsj.getElements(sel)); }; tsj.hideElements = function (elements) { var i, l = elements.length; for (i = 0; i < l; i++) { tsj.hideElement(elements[i]); }; }; tsj.hideElement = function (element) { tsj.styleElement(element, "display", "none"); }; tsj.show = function (sel, a) { var elements = tsj.getElements(sel); if (a) { tsj.hideElements(elements); }; tsj.showElements(elements); }; tsj.showElements = function (elements) { var i, l = elements.length; for (i = 0; i < l; i++) { tsj.showElement(elements[i]); }; }; tsj.showElement = function (element) { tsj.styleElement(element, "display", "block"); }; tsj.addStyle = tsj.aStyle = function (sel, prop, val) { tsj.styleElements(tsj.getElements(sel), prop, val); }; tsj.styleElements = function (elements, prop, val) { var i, l = elements.length; for (i = 0; i < l; i++) { tsj.styleElement(elements[i], prop, val); }; }; tsj.styleElement = function (element, prop, val) { element.style.setProperty(prop, val); }; tsj.toggleShow = tsj.tShow = tsj.showToggle = function(sel) { var i, x = tsj.getElements(sel), l = x.length; for (i = 0; i < l; i++) { if (x[i].style.display == "none") { tsj.styleElement(x[i], "display", "block"); } else { tsj.styleElement(x[i], "display", "none"); }; }; }; tsj.addClass = tsj.aClass = function (sel, name) { tsj.addClassElements(tsj.getElements(sel), name); }; tsj.addClassElements = function (elements, name) { var i, l = elements.length; for (i = 0; i < l; i++) { tsj.addClassElement(elements[i], name); }; }; tsj.addClassElement = function (element, name) { var i, arr1, arr2; arr1 = element.className.split(" "); arr2 = name.split(" "); for (i = 0; i < arr2.length; i++) { if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i]; }; }; }; tsj.removeClass = tsj.rClass = function (sel, name) { tsj.removeClassElements(tsj.getElements(sel), name); }; tsj.removeClassElements = function (elements, name) { var i, l = elements.length, arr1, arr2, j; for (i = 0; i < l; i++) { tsj.removeClassElement(elements[i], name); }; }; tsj.removeClassElement = function (element, name) { var i, arr1, arr2; arr1 = element.className.split(" "); arr2 = name.split(" "); for (i = 0; i < arr2.length; i++) { while (arr1.indexOf(arr2[i]) > -1) { arr1.splice(arr1.indexOf(arr2[i]), 1); }; }; element.className = arr1.join(" "); }; tsj.switchClass = tsj.sClass = function(sel, old, nw) { tsj.removeClass(sel, old); tsj.addClass(sel, nw); }; tsj.toggleClass = tsj.tClass = function (sel, c1, c2) { tsj.toggleClassElements(tsj.getElements(sel), c1, c2); }; tsj.toggleClassElements = function (elements, c1, c2) { var i, l = elements.length; for (i = 0; i < l; i++) { tsj.toggleClassElement(elements[i], c1, c2); }; }; tsj.toggleClassElement = function (element, c1, c2) { var t1, t2, t1Arr, t2Arr, j, arr, allPresent; t1 = (c1 || ""); t2 = (c2 || ""); t1Arr = t1.split(" "); t2Arr = t2.split(" "); arr = element.className.split(" "); if (t2Arr.length == 0) { allPresent = true; for (j = 0; j < t1Arr.length; j++) { if (arr.indexOf(t1Arr[j]) == -1) {allPresent = false; }; }; if (allPresent) { tsj.removeClassElement(element, t1); } else { tsj.addClassElement(element, t1); }; } else { allPresent = true; for (j = 0; j < t1Arr.length; j++) {  if (arr.indexOf(t1Arr[j]) == -1) {allPresent = false; }; }; if (allPresent) { tsj.removeClassElement(element, t1); tsj.addClassElement(element, t2); } else { tsj.removeClassElement(element, t2); tsj.addClassElement(element, t1); }; }; }; tsj.getElements = function (id) { if (typeof id == "object") { return [id]; } else { return document.querySelectorAll(id); }; }; tsj.filterHTML = tsj.filterHtml = function(id, sel, filter) { var a, b, c, i, ii, iii, hit; a = tsj.getElements(id); for (i = 0; i < a.length; i++) { b = a[i].querySelectorAll(sel); for (ii = 0; ii < b.length; ii++) { hit = 0; if (b[ii].innerText.toUpperCase().indexOf(filter.toUpperCase()) > -1) { hit = 1; }; c = b[ii].getElementsByTagName("*"); for (iii = 0; iii < c.length; iii++) { if (c[iii].innerText.toUpperCase().indexOf(filter.toUpperCase()) > -1) { hit = 1; }; }; if (hit == 1) { b[ii].style.display = ""; } else { b[ii].style.display = "none"; }; }; }; }; tsj.sortHTML = tsj.sortHtml = function(id, sel, sortvalue) { var a, b, i, ii, y, bytt, v1, v2, cc, j; a = tsj.getElements(id); for (i = 0; i < a.length; i++) { for (j = 0; j < 2; j++) { cc = 0;
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
tsj.includeHTML = tsj.includeHtml = function(cb) {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("tsj-include");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          elmnt.removeAttribute("tsj-include");
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
tsj.getHttpData = tsj.getHTTPData = function (file, func) {
  tsj.http(file, function () {
    if (this.readyState == 4 && this.status == 200) {
      func(this.responseText);
    }
  });
};
tsj.getHttpObject = tsj.getHTTPObject = function (file, func) {
  tsj.http(file, function () {
    if (this.readyState == 4 && this.status == 200) {
      func(JSON.parse(this.responseText));
    }
  });
};
tsj.displayHttp = tsj.displayHTTP = function (id, file) {
  tsj.http(file, function () {
    if (this.readyState == 4 && this.status == 200) {
      tsj.displayObject(id, JSON.parse(this.responseText));
    }
  });
};
tsj.http = tsj.HTTP = function (target, readyfunc, xml, method) {
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
        r = "tsj{{" + lookFor + "}}";
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

// End
