/*
 
    *TSJAnimation 
    *Plugin For TSJJS ( Can work without TSJJS )
    *MOD ER HACKS (c) 2019 | ALL RIGHTS RESERVED
    *Released Under MIT License

*/

// Requirements
tsj.getElements = function (id) { if (typeof id == "object") { return [id]; } else { return document.querySelectorAll(id); }; }; tsj.css = function(cnt) { 
var randomVar_Bj56kU = document.createElement("style"); randomVar_Bj56kU.textContent = cnt; document.head.appendChild(randomVar_Bj56kU) || document.documentElement.appendChild(randomVar_Bj56kU); }; tsj.style = function(sel, styl) { return tsj.css(sel + "{" + styl + "}"); }; tsj.addClass = tsj.aClass = function (sel, name) { tsj.addClassElements(tsj.getElements(sel), name); }; tsj.addClassElements = function (elements, name) { var i, l = elements.length; for (i = 0; i < l; i++) { tsj.addClassElement(elements[i], name); }; }; tsj.addClassElement = function (element, name) { var i, arr1, arr2; arr1 = element.className.split(" "); arr2 = name.split(" "); for (i = 0; i < arr2.length; i++) { if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i]; }; }; };

// Animations
tsj.fadeIn = function(sel, tm, sty, del, no, dir) { tm = tm ? tm : 950; sty = sty ? sty : "ease"; no = no ? no : 1; del = del ? del : 0; dir = dir ? dir : "alternate"; dir = dir ? dir : "alternate"; tsj.css(sel + "{ -webkit-animation: DomfadeIn " + tm + "ms " + sty + "; animation: DomfadeIn " + tm + "ms " + sty + "; -webkit-animation-fill-mode: both; animation-fill-mode: both; animation-iteration-count: " + no + "; -webkit-animation-iteration-count: " + no + "; animation-delay: " + del +"ms; -webkit-animation-delay: " + del +"ms; -webkit-animation-direction: " + dir + "; animation-direction: " + dir + "; } @-webkit-keyframes DomfadeIn { 0% {opacity: 0 !important;} 100% {opacity: 1!important; display : none; } } @keyframes DomfadeIn { 0% {opacity: 0; } 100% {opacity: 1!important; display : none;} } .DOM-1-CSS-fadeIn { -webkit-animation-name: DomfadeIn;  animation-name: DomfadeIn; } "); tsj.aClass(sel, "DOM-1-CSS-fadeIn"); }; tsj.fadeOut = function(sel, tm, sty, del, no, dir) { tm = tm ? tm : 950; sty = sty ? sty : "ease"; no = no ? no : 1; del = del ? del : 0; dir = dir ? dir : "alternate"; tsj.css(sel + "{ -webkit-animation: DomfadeOut " + tm + "ms " + sty + "; animation: DomfadeOut " + tm + "ms " + sty + "; -webkit-animation-fill-mode: both; animation-fill-mode: both; animation-iteration-count: " + no + "; -webkit-animation-iteration-count: " + no + "; animation-delay: " + del +"ms; -webkit-animation-delay: " + del +"ms; -webkit-animation-direction: " + dir + "; animation-direction: " + dir + "; } @-webkit-keyframes DomfadeOut { 0% {opacity: 1 !important;} 100% {opacity: 0!important; display : none; } } @keyframes DomfadeOut { 0% {opacity: 1 !important;} 100% {opacity: 0; } } .DOM-1-CSS-fadeOut { -webkit-animation-name: DomfadeOut;  animation-name: DomfadeOut; } "); tsj.aClass(sel, "DOM-1-CSS-fadeOut"); }; tsj.fadeInOut = tsj.flickerIn = function(sel, tm, sty, del, no, dir) { tm = tm ? tm : 950; sty = sty ? sty : "ease-in-out"; no = no ? no : 1; del = del ? del : 0; dir = dir ? dir : "alternate"; tsj.css( sel + "{ opacity :0; animation:fadingh " + tm + "ms " + sty +" ; -webkit-animation:fadingh " + tm + "ms " + sty +" ; animation-iteration-count: " + no + "; -webkit-animation-iteration-count: " + no + "; animation-delay: " + del +"ms; -webkit-animation-delay: " + del +"ms; -webkit-animation-direction: " + dir + "; animation-direction: " + dir + "; } @keyframes fadingh { 0%{opacity:0}50%{opacity:1}100%{opacity:0} } "); }; tsj.fadeOutIn = tsj.flickerOut = function(sel, tm, sty, del, no, dir) { tm = tm ? tm : 950; sty = sty ? sty : "ease-in-out"; no = no ? no : 1; del = del ? del : 0; dir = dir ? dir : "alternate"; tsj.css( sel + "{animation:fadingg " + tm + "ms " + sty +" ; -webkit-animation:fadingg " + tm + "ms " + sty +" ; animation-iteration-count: " + no + "; -webkit-animation-iteration-count: " + no + "; animation-delay: " + del +"ms; -webkit-animation-delay: " + del +"ms; -webkit-animation-direction: " + dir + "; animation-direction: " + dir + "; } @keyframes fadingg{0%{opacity:1}50%{opacity:0}100%{opacity:1}}"); }; tsj.fadeTo = function(sel, from, opc, tm, sty, del, no, dir) { tm = tm ? tm : 950; sty = sty ? sty : "ease"; no = no ? no : 1; del = del ? del : 0; dir = dir ? dir : "alternate"; tsj.css(sel + "{ -webkit-animation: DomfadeTo " + tm + "ms " + sty + "; animation: DomfadeTo " + tm + "ms " + sty + "; -webkit-animation-fill-mode: both; animation-fill-mode: both; animation-iteration-count: " + no + "; -webkit-animation-iteration-count: " + no + "; animation-delay: " + del +"ms; -webkit-animation-delay: " + del +"ms; -webkit-animation-direction: " + dir + "; animation-direction: " + dir + "; } @-webkit-keyframes DomfadeTo { 0% {opacity: " + from + ";} 100% {opacity: " + opc + "; display : none; } } @keyframes DomfadeTo { 0% {opacity: " + from + "; } 100% {opacity: " + opc + "; display : none;} } .DOM-1-CSS-fadeTo { -webkit-animation-name: DomfadeTo;  animation-name: DomfadeTo; } "); tsj.aClass(sel, "DOM-1-CSS-fadeTo"); };
