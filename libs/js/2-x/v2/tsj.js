/*!
 
   ** ****** ** *********

   *TSJ™JS ( https://moderhacks.github.io )
   *v2 ( https://moderhacks.github.io/libs/js/2-x/v2/tsj.js )
   *August 2019 ( 3rd Update )
   *by Debarchito Nath ( MOD ER HACKS ) © Copyright | 2019 | ALL RIGHTS RESERVED
   *Includes more simpler, super lighter and powerfull "TSJ's tsjStyler JS" v1.2
   
   ** ****** ** *********
   
*/

"use strict";

var tsj = {};

tsj.write = tsj.calc = function(sel, txt) { var randomVar_52j9Gy = document.querySelector(sel); var randomVar_52j9Gu = document.createTextNode(txt); randomVar_52j9Gy.appendChild(randomVar_52j9Gu); };

tsj.cWrite = tsj.createWrite = tsj.createElementWrite = tsj.createElmWrite =  function(sel, crt, cnt, attributes) { var randomVar_Huu56j = document.querySelector(sel);
var randomVar_Bg56jU = document.createElement(crt); randomVar_Bg56jU.textContent = cnt; randomVar_Huu56j.appendChild(randomVar_Bg56jU); for(let key in attributes){ randomVar_Bg56jU.setAttribute(key, attributes[key]); }
return randomVar_Bg56jU; return randomVar_Huu56j.appendChild(this.parentElement); };

tsj.nWrite = tsj.newWrite = tsj.nwrite = tsj.newwrite = function(cnt) { var randomVar_hjg563 = document.createElement("p"); randomVar_hjg563.textContent = cnt; document.body.appendChild(randomVar_hjg563); };

tsj.nCWrite = tsj.newCWrite = tsj.nCreateWrite = tsj.newCreateWrite =  tsj.nCreateElmWrite = tsj.newCreateElmWrite = tsj.nCreateElementWrite = tsj.newCreateElementWrite = tsj.createElement = tsj.createelement = tsj.cElement = tsj.celement = tsj.cElm = tsj.celm =  function(crt, cnt, attributes){
var randomVar_563jhU = document.createElement(crt);
randomVar_563jhU.textContent = cnt; document.body.appendChild(randomVar_563jhU);
for(let key in attributes){ randomVar_563jhU.setAttribute(key, attributes[key]); }
return randomVar_563jhU; return document.body.appendChild(this.parentElement); };

var $ = tsj.get = tsj.GET = function(sel) { return document.querySelector(sel); }; 

tsj.click = tsj.tap = tsj.ontap = function(sel, clk) {
document.querySelector(sel).onclick =  clk; };

tsj.change = function(sel, cng) {
document.querySelector(sel).onchange =  cng; };

tsj.load = function(sel, ld) {
document.querySelector(sel).onload =  ld; };

tsj.mouseover = function(sel, omo) {
document.querySelector(sel).onmouseover =  omo; };

tsj.mouseout = function(sel, omu) {
document.querySelector(sel).onmouseout =  omu; };

tsj.keydown = function(sel, kyd) {
document.querySelector(sel).onkeydown =  kyd; };

tsj.clone = tsj.cloneElement = tsj.cloneElm = function(sel, attributes) {
var randomVar_77777j = document.getElementsByTagName(sel)[0]; var randomVar_66666j = randomVar_77777j.cloneNode(true); document.body.appendChild(randomVar_66666j);
for(let key in attributes) { randomVar_66666j.setAttribute(key, attributes[key]); } return randomVar_66666j; document.body.appendChild(this.parentElement); }

tsj.css = tsj.style =  tsj.styleElement = tsj.styleElm = function(cnt) { 
var randomVar_Bj56kU = document.createElement("style"); randomVar_Bj56kU.textContent = cnt; document.body.appendChild(randomVar_Bj56kU)};

tsj.head = tsj.HEAD = function(cnt) { var randomVar_hjxx73 = document.createElement("head"); randomVar_hjxx73.innerHTML = cnt; document.body.appendChild(randomVar_hjxx73); };

tsj.body = tsj.BODY = function(cnt) { var randomVar_hjxx63 = document.createElement("body"); randomVar_hjxx63.innerHTML = cnt; document.body.appendChild(randomVar_hjxx63); };

tsj.hide = function (sel) {
  tsj.hideElements(tsj.getElements(sel));
};
tsj.hideElements = function (elements) {
  var i, l = elements.length;
  for (i = 0; i < l; i++) {
    tsj.hideElement(elements[i]);
  }
};
tsj.hideElement = function (element) {
  tsj.styleElement(element, "display", "none");
};
tsj.show = function (sel, a) {
  var elements = tsj.getElements(sel);
  if (a) {tsj.hideElements(elements);}
  tsj.showElements(elements);
};
tsj.showElements = function (elements) {
  var i, l = elements.length;
  for (i = 0; i < l; i++) {
    tsj.showElement(elements[i]);
  }
};
tsj.showElement = function (element) {
  tsj.styleElement(element, "display", "block");
};
tsj.addStyle = tsj.addstyle = function (sel, prop, val) {
  tsj.styleElements(tsj.getElements(sel), prop, val);
};
tsj.styleElements = function (elements, prop, val) {
  var i, l = elements.length;
  for (i = 0; i < l; i++) {    
    tsj.styleElement(elements[i], prop, val);
  }
};
tsj.styleElement = function (element, prop, val) {
  element.style.setProperty(prop, val);
};
tsj.toggleShow = function (sel) {
  var i, x = tsj.getElements(sel), l = x.length;
  for (i = 0; i < l; i++) {    
    if (x[i].style.display == "none") {
      tsj.styleElement(x[i], "display", "block");
    } else {
      tsj.styleElement(x[i], "display", "none");
    }
  }
};
tsj.addClass = tsj.addclass = tsj.aClass = tsj.aclass = function (sel, name) {
  tsj.addClassElements(tsj.getElements(sel), name);
};
tsj.addClassElements = function (elements, name) {
  var i, l = elements.length;
  for (i = 0; i < l; i++) {
    tsj.addClassElement(elements[i], name);
  }
};
tsj.addClassElement = function (element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
};
tsj.removeClass = tsj.removeclass = tsj.rClass = tsj.rclass = function (sel, name) {
  tsj.removeClassElements(tsj.getElements(sel), name);
};
tsj.removeClassElements = function (elements, name) {
  var i, l = elements.length, arr1, arr2, j;
  for (i = 0; i < l; i++) {
    tsj.removeClassElement(elements[i], name);
  }
};
tsj.removeClassElement = function (element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
};
tsj.toggleClass = tsj.toggleclass = tsj.tClass = tsj.tclass = tsj.tgClass = tsj.tgclass = function (sel, c1, c2) {
  tsj.toggleClassElements(tsj.getElements(sel), c1, c2);
};
tsj.toggleClassElements = function (elements, c1, c2) {
  var i, l = elements.length;
  for (i = 0; i < l; i++) {    
    tsj.toggleClassElement(elements[i], c1, c2);
  }
};
tsj.toggleClassElement = function (element, c1, c2) {
  var t1, t2, t1Arr, t2Arr, j, arr, allPresent;
  t1 = (c1 || "");
  t2 = (c2 || "");
  t1Arr = t1.split(" ");
  t2Arr = t2.split(" ");
  arr = element.className.split(" ");
  if (t2Arr.length == 0) {
    allPresent = true;
    for (j = 0; j < t1Arr.length; j++) {
      if (arr.indexOf(t1Arr[j]) == -1) {allPresent = false;}
    }
    if (allPresent) {
      tsj.removeClassElement(element, t1);
    } else {
      tsj.addClassElement(element, t1);
    }
  } else {
    allPresent = true;
    for (j = 0; j < t1Arr.length; j++) {
      if (arr.indexOf(t1Arr[j]) == -1) {allPresent = false;}
    }
    if (allPresent) {
      tsj.removeClassElement(element, t1);
      tsj.addClassElement(element, t2);          
    } else {
      tsj.removeClassElement(element, t2);        
      tsj.addClassElement(element, t1);
    }
  }
};
tsj.getElements = function (id) {
  if (typeof id == "object") {
    return [id];
  } else {
    return document.querySelectorAll(id);
  }
};
tsj.filterHTML = function(id, sel, filter) {
  var a, b, c, i, ii, iii, hit;
  a = tsj.getElements(id);
  for (i = 0; i < a.length; i++) {
    b = a[i].querySelectorAll(sel);
    for (ii = 0; ii < b.length; ii++) {
      hit = 0;
      if (b[ii].innerText.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
        hit = 1;
      }
      c = b[ii].getElementsByTagName("*");
      for (iii = 0; iii < c.length; iii++) {
        if (c[iii].innerText.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
          hit = 1;
        }
      }
      if (hit == 1) {
        b[ii].style.display = "";
      } else {
        b[ii].style.display = "none";
      }
    }
  }
};
tsj.sortHTML = function(id, sel, sortvalue) {
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
tsj.displayObject = function (id, data) {
  var htmlObj, htmlTemplate, html, arr = [], a, l, rowClone, x, j, i, ii, cc, repeat, repeatObj, repeatX = "";
  htmlObj = document.getElementById(id);
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

// End
