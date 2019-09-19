/*!
 
   ** ****** ** *********

   *ColoriZe JS  ( https://moderhacks.github.io )
   *Prevously Named : TSJ™ Code Highlight 
   *v1 ( https://moderhacks.github.io/libs/ext/js/ColoriZe/1-x/v1/clz.js )
   *19th September 2019 ( 3rd Update )
   *by Debarchito Nath ( MOD ER HACKS ) © Copyright | 2019 | ALL RIGHTS RESERVED
   *Includes new and better custom classes, easy to remember syntax is used.
   *Released Under MIT License ( https://moderhacks.github.io/LICENSE.html )
   
   ** ****** ** *********
   
*/

// Main
var ColoriZe = function() { var x, i, j, k, l, modes = ["html", "js", "java", "css", "sql", "python", "kotlin"]; if (!document.getElementsByClassName) {return;}; k = modes.length; for (j = 0; j < k; j++) { x = document.getElementsByClassName( "ColoriZe-" + modes[j]); l = x.length; for (i = 0; i < l; i++) { x[i].innerHTML = ScriptColoriZe(x[i].innerHTML, modes[j]); }; }; };

// Helper
function ScriptColoriZe(x, lang) { 
// HTML 
var tagcolor = "#919191"; var tagnamecolor = "#387FB3"; var attributecolor = "#D04B00"; var attributevaluecolor = "#369e69"; var commentcolor = "grey"; var headcolor = "green!important";
// CSS
var cssselectorcolor = "#2082FF"; var csspropertycolor = "#369e69"; var csspropertyvaluecolor = "#7C007C"; var cssdelimitercolor = "#2082FF"; var cssimportantcolor = "#1866C7";  
// Javascript
var jscolor = "#1A7074"; var jskeywordcolor = "#2082FF"; var jsstringcolor = "#369E69"; var jsnumbercolor = "#ff5c5c"; var jspropertycolor = "#00AD79";
// Java
var javacolor = "#1A7074"; var javakeywordcolor = "#2082FF"; var javastringcolor = "#369E69"; var javanumbercolor = "#ff5c5c"; var javapropertycolor = "#00ad79";
// Kotlin
var kotlincolor = "#1A7074"; var kotlinkeywordcolor = "#2082FF"; var kotlinstringcolor = "#369E69"; var kotlinnumbercolor = "#ff5c5c"; var kotlinpropertycolor = "#00ad79";
// PHP
var phptagcolor = "green"; var phpcolor = "#1A7074"; var phpkeywordcolor = "#2082FF"; var phpglobalcolor = "#00ad79"; var phpstringcolor = "#369E69"; var phpnumbercolor = "#ff5c5c";  
// Python
var pythoncolor = "#1A7074"; var pythonkeywordcolor = "#2082FF"; var pythonstringcolor = "#369E69"; var pythonnumbercolor = "#ff5c5c";  
// Angular 
var angularstatementcolor = "#008eff";
// My SQL
var sqlcolor = "#1A7074"; var sqlkeywordcolor = "#2082FF"; var sqlstringcolor = "#369E69"; var sqlnumbercolor = "#ff5c5c"; 

// Language Identification
if (!lang) {lang = "html"; }; if (lang == "html") { return htmlMode(x); }; if (lang == "css") { return cssMode(x); }; if (lang == "js") { return jsMode(x); }; if (lang == "java") { return javaMode(x); }; if (lang == "kotlin") { return kotlinMode(x); }; if (lang == "php") { return phpMode(x); }; if (lang == "sql") { return sqlMode(x); }; if (lang == "python") { return pythonMode(x); }; return x; function extract(str, start, end, func, repl) { var s, e, d = "", a = []; while (str.search(start) > -1) { s = str.search(start); e = str.indexOf(end, s); if (e == -1) {e = str.length; } if (repl) { a.push(func(str.substring(s, e + (end.length)))); str = str.substring(0, s) + repl + str.substr(e + (end.length)); } else { d += str.substring(0, s); d += func(str.substring(s, e + (end.length))); str = str.substr(e + (end.length)); }; }; this.rest = d + str; this.arr = a; };
  
  // HTML Mode
  function htmlMode(txt) {
    var rest = txt, done = "", php, comment, angular, startpos, endpos, note, i;
    php = new extract(rest, "&lt;\\?php", "?&gt;", phpMode, "TSJPHPPOS");
    rest = php.rest;
    comment = new extract(rest, "&lt;!--", "--&gt;", commentMode, "TSJHTMLCOMMENTPOS");
    rest = comment.rest;
    while (rest.indexOf("&lt;") > -1) {
      note = "";
      startpos = rest.indexOf("&lt;");
      if (rest.substr(startpos, 9).toUpperCase() == "&LT;STYLE") {note = "css";}
      if (rest.substr(startpos, 10).toUpperCase() == "&LT;SCRIPT") {note = "javascript";}        
      endpos = rest.indexOf("&gt;", startpos);
      if (endpos == -1) {endpos = rest.length;}
      done += rest.substring(0, startpos);
      done += tagMode(rest.substring(startpos, endpos + 4));
      rest = rest.substr(endpos + 4);
      if (note == "css") {
        endpos = rest.indexOf("&lt;/style&gt;");
        if (endpos > -1) {
          done += cssMode(rest.substring(0, endpos));
          rest = rest.substr(endpos);
        }
      }
      if (note == "javascript") {
        endpos = rest.indexOf("&lt;/script&gt;");
        if (endpos > -1) {
          done += jsMode(rest.substring(0, endpos));
          rest = rest.substr(endpos);
        }
      }
    }
    rest = done + rest;
    angular = new extract(rest, "{{", "}}", angularMode);
    rest = angular.rest;
    for (i = 0; i < comment.arr.length; i++) {
        rest = rest.replace("TSJHTMLCOMMENTPOS", comment.arr[i]);
    }
    for (i = 0; i < php.arr.length; i++) {
        rest = rest.replace("TSJPHPPOS", php.arr[i]);
    }
    return rest;
  }
  function tagMode(txt) {
    var rest = txt, done = "", startpos, endpos, result;
    while (rest.search(/(\s|<br>)/) > -1) {    
      startpos = rest.search(/(\s|<br>)/);
      endpos = rest.indexOf("&gt;");
      if (endpos == -1) {endpos = rest.length;}
      done += rest.substring(0, startpos);
      done += attributeMode(rest.substring(startpos, endpos));
      rest = rest.substr(endpos);
    }
    result = done + rest;
    result = "<span style='color:" + tagcolor + ";font-weight:bold;' class='clz-web-fulltag clz-web-tag clz-web-tag-start clz-html-fulltag clz-html-tag clz-html-tag-start'>&lt;</span>" + result.substring(4);
    if (result.substr(result.length - 4, 4) == "&gt;") {
      result = result.substring(0, result.length - 4) + "<span style='color:" + tagcolor + ";font-weight:900;' class='clz-web-fulltag clz-web-tag clz-web-tag-stop clz-html-fulltag clz-html-tag clz-html-tag-stop' >&gt;</span>";
    }
    return "<span style='color:" + tagnamecolor + ";font-weight:bold;' class='clz-web-fulltag clz-web-tagname clz-html-fulltag clz-html-tagname'>" + result + "</span>";
  }  
  function attributeMode(txt) {
    var rest = txt, done = "", startpos, endpos, singlefnuttpos, doublefnuttpos, spacepos;
    while (rest.indexOf("=") > -1) {
      endpos = -1;
      startpos = rest.indexOf("=");
      singlefnuttpos = rest.indexOf("'", startpos);
      doublefnuttpos = rest.indexOf('"', startpos);
      spacepos = rest.indexOf(" ", startpos + 2);
      if (spacepos > -1 && (spacepos < singlefnuttpos || singlefnuttpos == -1) && (spacepos < doublefnuttpos || doublefnuttpos == -1)) {
        endpos = rest.indexOf(" ", startpos);      
      } else if (doublefnuttpos > -1 && (doublefnuttpos < singlefnuttpos || singlefnuttpos == -1) && (doublefnuttpos < spacepos || spacepos == -1)) {
        endpos = rest.indexOf('"', rest.indexOf('"', startpos) + 1);
      } else if (singlefnuttpos > -1 && (singlefnuttpos < doublefnuttpos || doublefnuttpos == -1) && (singlefnuttpos < spacepos || spacepos == -1)) {
        endpos = rest.indexOf("'", rest.indexOf("'", startpos) + 1);
      }
      if (!endpos || endpos == -1 || endpos < startpos) {endpos = rest.length;}
      done += rest.substring(0, startpos);
      done += attributeValueMode(rest.substring(startpos, endpos + 1));
      rest = rest.substr(endpos + 1);
    }
    return "<span style='color:" + attributecolor + ";font-weight:normal;margin-right:2px;' class='clz-html-attribute'>" + done + rest + "</span>";
  }
  function attributeValueMode(txt) {
    return "<span style='color:" + attributevaluecolor + ";font-style:italic;font-weight:600;' class='clz-html-attribute-value'>" + txt + "</span>";
  }
  function angularMode(txt) {
    return "<span style='color:" + angularstatementcolor + ";' class='clz-angularstatement clz-html-angularstatement clz-angular-statement clz-html-angular-statement'>" + txt + "</span>";
  }
  function commentMode(txt) {
    return "<span style='color:" + commentcolor + ";font-weight:normal;font-style:italic;font-family:serif;' class='clz-comment'>" + txt + "</span>";
  }
  
  // CSS Mode
  function cssMode(txt) {
    var rest = txt, done = "", s, e, comment, i, midz, c, cc;
    comment = new extract(rest, /\/\*/, "*/", commentMode, "TSJCSSCOMMENTPOS");
    rest = comment.rest;
    while (rest.search("{") > -1) {
      s = rest.search("{");
      midz = rest.substr(s + 1);
      cc = 1;
      c = 0;
      for (i = 0; i < midz.length; i++) {
        if (midz.substr(i, 1) == "{") {cc++; c++}
        if (midz.substr(i, 1) == "}") {cc--;}
        if (cc == 0) {break;}
      }
      if (cc != 0) {c = 0;}
      e = s;
      for (i = 0; i <= c; i++) {
        e = rest.indexOf("}", e + 1);
      }
      if (e == -1) {e = rest.length;}
      done += rest.substring(0, s + 1);
      done += cssPropertyMode(rest.substring(s + 1, e));
      rest = rest.substr(e);
    }
    rest = done + rest;
    rest = rest.replace(/{/g, "<span style='color:" + cssdelimitercolor + ";font-style:italic;margin-right:3px;' class='clz-css-symbols clz-css-symbol clz-css-parenthesis clz-css-curlies clz-css-parenthesis-start clz-css-symbol-start clz-css-symbols-start clz-css-curly-start'>{</span>");
    rest = rest.replace(/}/g, "<span style='color:" + cssdelimitercolor + ";font-style:italic;' class='clz-css-symbols clz-css-symbol clz-css-parenthesis clz-css-curlies clz-css-parenthesis-stop clz-css-symbol-stop clz-css-symbols-stop clz-css-curly-stop'>}</span>");
    for (i = 0; i < comment.arr.length; i++) {
        rest = rest.replace("TSJCSSCOMMENTPOS", comment.arr[i]);
    }
    return "<span style='color:" + cssselectorcolor +  ";font-weight:bold;' class='clz-css-selector'>" + rest + "</span>";
  }
  function cssPropertyMode(txt) {
    var rest = txt, done = "", s, e, n, loop;
    if (rest.indexOf("{") > -1 ) { return cssMode(rest); }
    while (rest.search(":") > -1) {
      s = rest.search(":");
      loop = true;
      n = s;
      while (loop == true) {
        loop = false;
        e = rest.indexOf(";", n);
        if (rest.substring(e - 5, e + 1) == "&nbsp;") {
          loop = true;
          n = e + 1;
        }
      }
      if (e == -1) {e = rest.length;}
      done += rest.substring(0, s);
      done += cssPropertyValueMode(rest.substring(s, e + 1));
      rest = rest.substr(e + 1);
    }
    return "<span style='color:" + csspropertycolor + ";font-weight:normal;font-style:normal;' class='clz-css-property'>" + done + rest + "</span>";
  }
  function cssPropertyValueMode(txt) {
    var rest = txt, done = "", s; 
    rest = "<span style='color:" + cssdelimitercolor + "' class='clz-css-symbols clz-css-symbol clz-css-colon clz-css-symbol-value clz-css-symbols-value clz-css-doubledot clz-css-dotdot clz-css-twodot'>:</span>" + rest.substring(1);
    while (rest.search(/!important/i) > -1) {
      s = rest.search(/!important/i);
      done += rest.substring(0, s);
      done += cssImportantMode(rest.substring(s, s + 10));
      rest = rest.substr(s + 10);
    }
    result = done + rest;    
    if (result.substr(result.length - 1, 1) == ";" && result.substr(result.length - 6, 6) != "&nbsp;" && result.substr(result.length - 4, 4) != "&lt;" && result.substr(result.length - 4, 4) != "&gt;" && result.substr(result.length - 5, 5) != "&amp;") {
      result = result.substring(0, result.length - 1) + "<span style='color:" + cssdelimitercolor + ";margin-left:2px;' class='clz-css-symbols clz-css-symbol clz-css-semicolon clz-css-dotcomma clz-css-symbol-end'>;</span>";
    }
    return "<span style='color:" + csspropertyvaluecolor + "' class='clz-css-property-value'>" + result + "</span>";
  }
  function cssImportantMode(txt) {
    return "<span style='color:" + cssimportantcolor + ";font-weight:bold;' class='clz-css-important'>" + txt + "</span>";
  }
  
  // Javascript Mode
  function jsMode(txt) {
    var rest = txt, done = "", esc = [], i, cc, tt = "", sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, numpos, mypos, dotpos, y;
    for (i = 0; i < rest.length; i++)  {
      cc = rest.substr(i, 1);
      if (cc == "\\") {
        esc.push(rest.substr(i, 2));
        cc = "TSJJSESCAPE";
        i++;
      }
      tt += cc;
    }
    rest = tt;
    y = 1;
    while (y == 1) {
      sfnuttpos = getPos(rest, "'", "'", jsStringMode);
      dfnuttpos = getPos(rest, '"', '"', jsStringMode);
      compos = getPos(rest, /\/\*/, "*/", commentMode);
      comlinepos = getPos(rest, /\/\//, "<br>", commentMode);      
      numpos = getNumPos(rest, jsNumberMode);
      keywordpos = getKeywordPos("js", rest, jsKeywordMode);
      dotpos = getDotPos(rest, jsPropertyMode);
      if (Math.max(numpos[0], sfnuttpos[0], dfnuttpos[0], compos[0], comlinepos[0], keywordpos[0], dotpos[0]) == -1) {break;}
      mypos = getMinPos(numpos, sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, dotpos);
      if (mypos[0] == -1) {break;}
      if (mypos[0] > -1) {
        done += rest.substring(0, mypos[0]);
        done += mypos[2](rest.substring(mypos[0], mypos[1]));
        rest = rest.substr(mypos[1]);
      }
    }
    rest = done + rest;
    for (i = 0; i < esc.length; i++) {
      rest = rest.replace("TSJJSESCAPE", esc[i]);
    }
    return "<span style='color:" + jscolor + ";' class='clz-js clz-js-text'>" + rest + "</span>";
  }
  function jsStringMode(txt) {
    return "<span style='color:" + jsstringcolor + ";font-style:oblique;margin-right:4px;' class='clz-js-string'>" + txt + "</span>";
  }
  function jsKeywordMode(txt) {
    return "<span style='color:" + jskeywordcolor + ";font-weight:bold;' class='clz-js-keyword'>" + txt + "</span>";
  }
  function jsNumberMode(txt) {
    return "<span style='color:" + jsnumbercolor + ";font-weight:bold;' class='clz-js-number clz-js-num'>" + txt + "</span>";
  }
  function jsPropertyMode(txt) {
    return "<span style='color:" + jspropertycolor + ";font-weight:bold;margin-right:1px;' class='clz-js-property'>" + txt + "</span>";
  }
  function getDotPos(txt, func) {
    var x, i, j, s, e, arr = [".","<", " ", ";", "(", "+", ")", "[", "]", ",", "&", ":", "{", "}", "/" ,"-", "*", "|", "%"];
    s = txt.indexOf(".");
    if (s > -1) {
      x = txt.substr(s + 1);
      for (j = 0; j < x.length; j++) {
        cc = x[j];
        for (i = 0; i < arr.length; i++) {
          if (cc.indexOf(arr[i]) > -1) {
            e = j;
            return [s + 1, e + s + 1, func];
          }
        }
      }
    }
    return [-1, -1, func];
  }
  function getMinPos() {
    var i, arr = [];
    for (i = 0; i < arguments.length; i++) {
      if (arguments[i][0] > -1) {
        if (arr.length == 0 || arguments[i][0] < arr[0]) {arr = arguments[i];}
      }
    }
    if (arr.length == 0) {arr = arguments[i];}
    return arr;
  }
  
  // Java Mode
  function javaMode(txt) {
    var rest = txt, done = "", esc = [], i, cc, tt = "", sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, numpos, mypos, dotpos, y;
    for (i = 0; i < rest.length; i++)  {
      cc = rest.substr(i, 1);
      if (cc == "\\") {
        esc.push(rest.substr(i, 2));
        cc = "TSJJSESCAPE";
        i++;
      }
      tt += cc;
    }
    rest = tt;
    y = 1;
    while (y == 1) {
      sfnuttpos = getPos(rest, "'", "'", javaStringMode);
      dfnuttpos = getPos(rest, '"', '"', javaStringMode);
      compos = getPos(rest, /\/\*/, "*/", commentMode);
      comlinepos = getPos(rest, /\/\//, "<br>", commentMode);      
      numpos = getNumPos(rest, javaNumberMode);
      keywordpos = getKeywordPos("java", rest, javaKeywordMode);
      dotpos = getDotPos(rest, javaPropertyMode);
      if (Math.max(numpos[0], sfnuttpos[0], dfnuttpos[0], compos[0], comlinepos[0], keywordpos[0], dotpos[0]) == -1) {break;}
      mypos = getMinPos(numpos, sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, dotpos);
      if (mypos[0] == -1) {break;}
      if (mypos[0] > -1) {
        done += rest.substring(0, mypos[0]);
        done += mypos[2](rest.substring(mypos[0], mypos[1]));
        rest = rest.substr(mypos[1]);
      }
    }
    rest = done + rest;
    for (i = 0; i < esc.length; i++) {
      rest = rest.replace("TSJJSESCAPE", esc[i]);
    }
    return "<span style='color:" + javacolor + ";' class='clz-java clz-java-text'>" + rest + "</span>";
  }
  function javaStringMode(txt) {
    return "<span style='color:" + javastringcolor + ";font-style:italic;margin-right:4px;' class='clz-java-string'>" + txt + "</span>";
  }
  function javaKeywordMode(txt) {
    return "<span style='color:" + javakeywordcolor + ";font-weight:bold;' class='clz-java-keyword'>" + txt + "</span>";
  }
  function javaNumberMode(txt) {
    return "<span style='color:" + javanumbercolor + ";font-weight:bold;' class='clz-java-number clz-java-num'>" + txt + "</span>";
  }
  function javaPropertyMode(txt) {
    return "<span style='color:" + javapropertycolor + ";font-weight:bold;margin-right:1px;'  class='clz-java-property'>" + txt + "</span>";
  }
  
  // Kotlin Mode
  function kotlinMode(txt) {
    var rest = txt, done = "", esc = [], i, cc, tt = "", sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, numpos, mypos, dotpos, y;
    for (i = 0; i < rest.length; i++)  {
      cc = rest.substr(i, 1);
      if (cc == "\\") {
        esc.push(rest.substr(i, 2));
        cc = "TSJJSESCAPE";
        i++;
      }
      tt += cc;
    }
    rest = tt;
    y = 1;
    while (y == 1) {
      sfnuttpos = getPos(rest, "'", "'", kotlinStringMode);
      dfnuttpos = getPos(rest, '"', '"', kotlinStringMode);
      compos = getPos(rest, /\/\*/, "*/", commentMode);
      comlinepos = getPos(rest, /\/\//, "<br>", commentMode);      
      numpos = getNumPos(rest, kotlinNumberMode);
      keywordpos = getKeywordPos("kotlin", rest, kotlinKeywordMode);
      dotpos = getDotPos(rest, kotlinPropertyMode);
      if (Math.max(numpos[0], sfnuttpos[0], dfnuttpos[0], compos[0], comlinepos[0], keywordpos[0], dotpos[0]) == -1) {break;}
      mypos = getMinPos(numpos, sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, dotpos);
      if (mypos[0] == -1) {break;}
      if (mypos[0] > -1) {
        done += rest.substring(0, mypos[0]);
        done += mypos[2](rest.substring(mypos[0], mypos[1]));
        rest = rest.substr(mypos[1]);
      }
    }
    rest = done + rest;
    for (i = 0; i < esc.length; i++) {
      rest = rest.replace("TSJJSESCAPE", esc[i]);
    }
    return "<span style='color:" + kotlincolor + ";'  class='clz-kotlin clz-kotlin-text'>" + rest + "</span>";
  }
  function kotlinStringMode(txt) {
    return "<span style='color:" + kotlinstringcolor + ";font-style:italic;margin-right:4px;'  class='clz-kotlin-string'>" + txt + "</span>";
  }
  function kotlinKeywordMode(txt) {
    return "<span style='color:" + kotlinkeywordcolor + ";font-weight:bold;'  class='clz-kotlin-keyword'>" + txt + "</span>";
  }
  function kotlinNumberMode(txt) {
    return "<span style='color:" + kotlinnumbercolor + ";font-weight:bold;' class='clz-kotlin-number clz-kotlin-num'>" + txt + "</span>";
  }
  function kotlinPropertyMode(txt) {
    return "<span style='color:" + kotlinpropertycolor + ";font-weight:bold;margin-right:1px;' class='clz-kotlin-property'>" + txt + "</span>";
  }
  
  // My SQL Mode
  function sqlMode(txt) {
    var rest = txt, y, done = "", sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, numpos, mypos;
    y = 1;
    while (y == 1) {
      sfnuttpos = getPos(rest, "'", "'", sqlStringMode);
      dfnuttpos = getPos(rest, '"', '"', sqlStringMode);
      compos = getPos(rest, /\/\*/, "*/", commentMode);
      comlinepos = getPos(rest, /--/, "<br>", commentMode);      
      numpos = getNumPos(rest, sqlNumberMode);
      keywordpos = getKeywordPos("sql", rest, sqlKeywordMode);
      if (Math.max(numpos[0], sfnuttpos[0], dfnuttpos[0], compos[0], comlinepos[0], keywordpos[0]) == -1) {break;}
      mypos = getMinPos(numpos, sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos);
      if (mypos[0] == -1) {break;}
      if (mypos[0] > -1) {
        done += rest.substring(0, mypos[0]);
        done += mypos[2](rest.substring(mypos[0], mypos[1]));
        rest = rest.substr(mypos[1]);
      }
    }
    rest = done + rest;
    return "<span style='color:" + sqlcolor + ";' class='clz-sql clz-SQL clz-sql-text clz-SQL-text'>" + rest + "</span>";
  }
  function sqlStringMode(txt) {
    return "<span style='color:" + sqlstringcolor + ";font-style:italic;margin-right:4px;' class='clz-sql-string clz-SQL-string'>" + txt + "</span>";
  }
  function sqlKeywordMode(txt) {
    return "<span style='color:" + sqlkeywordcolor + ";font-weight:bold;font-style:italic;margin-right:2px;' class='clz-sql-keyword clz-SQL-keyword'>" + txt + "</span>";
  }
  function sqlNumberMode(txt) {
    return "<span style='color:" + sqlnumbercolor + ";font-weight:bold;' class='clz-sql-number clz-sql-num clz-SQL-number clz-SQL-num'>" + txt + "</span>";
  }
  
  // PHP Mode
  function phpMode(txt) {
    var rest = txt, done = "", sfnuttpos, dfnuttpos, compos, comlinepos, comhashpos, keywordpos, mypos, y;
    y = 1;
    while (y == 1) {
      sfnuttpos = getPos(rest, "'", "'", phpStringMode);
      dfnuttpos = getPos(rest, '"', '"', phpStringMode);
      compos = getPos(rest, /\/\*/, "*/", commentMode);
      comlinepos = getPos(rest, /\/\//, "<br>", commentMode);      
      comhashpos = getPos(rest, "#", "<br>", commentMode);
      numpos = getNumPos(rest, phpNumberMode);
      keywordpos = getKeywordPos("php", rest, phpKeywordMode);      
      if (Math.max(numpos[0], sfnuttpos[0], dfnuttpos[0], compos[0], comlinepos[0], comhashpos[0], keywordpos[0]) == -1) {break;}
      mypos = getMinPos(numpos, sfnuttpos, dfnuttpos, compos, comlinepos, comhashpos, keywordpos);
      if (mypos[0] == -1) {break;}
      if (mypos[0] > -1) {
        done += rest.substring(0, mypos[0]);
        done += mypos[2](rest.substring(mypos[0], mypos[1]));
        rest = rest.substr(mypos[1]);
      }
    }
    rest = done + rest;
    rest = "<span style='color:" + phptagcolor + ";font-weight:bold;font-style:italic;' class='clz-web-fulltag clz-web-tag clz-web-tag-start clz-php-tag clz-php-tag-start'>&lt;" + rest.substr(4, 4) + "</span>" + rest.substring(8);
    if (rest.substr(rest.length - 5, 5) == "?&gt;") {
      rest = rest.substring(0, rest.length - 5) + "<span style='color:" + phptagcolor + ";font-weight:bold;font-style:italic;' class='clz-web-fulltag clz-web-tag clz-web-tag-stop clz-php-tag clz-php-tag-stop'>?&gt;</span>";
    }
    return "<span style='color:" + phpcolor + ";' class='clz-php clz-php-text'>" + rest + "</span>";
  }
  function phpStringMode(txt) {
    return "<span style='color:" + phpstringcolor + ";font-style:italic;margin-right:4px;' class='clz-php-string'>" + txt + "</span>";
  }
  function phpNumberMode(txt) {
    return "<span style='color:" + phpnumbercolor + ";font-weight:bold;' class='clz-php-number clz-php-num'>" + txt + "</span>";
  }
  function phpKeywordMode(txt) {
    var glb = ["$GLOBALS","$_SERVER","$_REQUEST","$_POST","$_GET","$_FILES","$_ENV","$_COOKIE","$_SESSION"];
    if (glb.indexOf(txt.toUpperCase()) > -1) {
      if (glb.indexOf(txt) > -1) {
        return "<span style='color:" + phpglobalcolor + ";font-weight:bold;' class='clz-php-global'>" + txt + "</span>";
      } else {
        return txt;
      }
    } else {
      return "<span style='color:" + phpkeywordcolor + "; font-weight : bold;' class='clz-php-keyword'>" + txt + "</span>";
    }
  }
  
  // Python Mode
  function pythonMode(txt) {
    var rest = txt, done = "", sfnuttpos, dfnuttpos, compos, comlinepos, comhashpos, keywordpos, mypos, y;
    y = 1;
    while (y == 1) {
      sfnuttpos = getPos(rest, "'", "'", pythonStringMode);
      dfnuttpos = getPos(rest, '"', '"', pythonStringMode);
      compos = getPos(rest, /\/\*/, "*/", commentMode);
      comlinepos = getPos(rest, /\/\//, "<br>", commentMode);   
      comhashpos = getPos(rest, "#", "<br>", commentMode);
      numpos = getNumPos(rest, pythonNumberMode);
      keywordpos = getKeywordPos("python", rest, pythonKeywordMode);      
      if (Math.max(numpos[0], sfnuttpos[0], dfnuttpos[0], compos[0], comlinepos[0], comhashpos[0], keywordpos[0]) == -1) {break;}
      mypos = getMinPos(numpos, sfnuttpos, dfnuttpos, compos, comlinepos, comhashpos, keywordpos);
      if (mypos[0] == -1) {break;}
      if (mypos[0] > -1) {
        done += rest.substring(0, mypos[0]);
        done += mypos[2](rest.substring(mypos[0], mypos[1]));
        rest = rest.substr(mypos[1]);
      }
    }
    rest = done + rest;
    return "<span style='color:" + pythoncolor + ";' class='clz-python clz-python-text'>" + rest + "</span>";
  }
  function pythonStringMode(txt) {
    return "<span style='color:" + pythonstringcolor + ";font-style:italic;margin-right:4px;' class='clz-python-string'>" + txt + "</span>";
  }
  function pythonNumberMode(txt) {
    return "<span style='color:" + pythonnumbercolor + ";font-weight:bold;' class='clz-python-number clz-python-num'>" + txt + "</span>";
  }
  function pythonKeywordMode(txt) {
    return "<span style='color:" + pythonkeywordcolor + ";font-weight:bold;margin-right:2px;' class='clz-python-keyword'>" + txt + "</span>";
  }
  function getKeywordPos(typ, txt, func) {
    var words, i, pos, rpos = -1, rpos2 = -1, patt;
    if (typ == "js") {
      words = ["abstract","arguments","boolean","break","byte","case","catch","char","class","const","continue","debugger","default","delete",
      "do","double","else","enum","eval","event","export","extends","false","final","finally","float","for","function","goto","if","implements","import",
      "in","instanceof","int","interface","let","long","NaN","native","new","null","package","private","protected","public","return","short","static",
      "super","switch","synchronized","this","throw","throws","transient","true","try","typeof","var","void","volatile","while","with","yield"];
    } else if (typ == "java") {
      words = ["abstract","arguments","boolean","break","byte","case","catch","char","class","const","continue","debugger","default","delete",
      "do","double","else","enum","eval","event","export","extends","false","final","finally","float","for","function","goto","if","implements","import",
      "in","instanceof","int","interface","let","long","NaN","native","new","null","package","private","protected","public","return","short","static",
      "super","switch","synchronized","this","throw","throws","transient","true","try","typeof","var","void","volatile","while","with","yield",
      "String"];
    } else if (typ == "kotlin") {
      words = ['package','as','typealias','class','interface','this','super','val','operator','var','fun','for','is','in','This','throw','return',
      'annotation','break','continue','object','if','else','while','do','try','when','!in','!is','as?','file','import','where','by','get','set',
      'abstract','enum','open','inner','override','private','public','internal','protected','catch','finally','out','final','vararg','reified',
      'dynamic','companion','constructor','init','sealed','field','property', 'println', 'receiver','param','sparam','lateinit','data','inline','noinline',
      'tailrec','external','annotation','crossinline','const','operator','infix','suspend','actual','expect','setparam','Boolean','Byte','Character',
      'CharSequence','Class','ClassLoader','Cloneable','Comparable','Compiler','Double','Exception','Float','Integer','Long','Math','Number','Object',
      'Package','Pair','Process','Runtime','Runnable','SecurityManager','Short','StackTraceElement','StrictMath','String','StringBuffer','System',
      'Thread','ThreadGroup','ThreadLocal','Throwable','Triple','Void','Annotation','Any','BooleanArray','ByteArray','Char','CharArray',
      'DeprecationLevel','DoubleArray','Enum','FloatArray','Function','Int','IntArray','Lazy','LazyThreadSafetyMode','LongArray','Nothing','ShortArray','Unit'];
    } else if (typ == "php") {
      words = ["$GLOBALS","$_SERVER","$_REQUEST","$_POST","$_GET","$_FILES","$_ENV","$_COOKIE","$_SESSION",
      "__halt_compiler","abstract","and","array","as","break","callable","case","catch","class","clone","const","continue","declare","default",
      "die","do", "error_reporting", "echo","else","elseif","empty","enddeclare","endfor","endforeach","endif","endswitch","endwhile","eval","exit","extends","final","for",
      "foreach","function","global","goto","if","implements","include","include_once","instanceof","insteadof","interface","isset","list","namespace","new",
      "or","print","private","protected","public","require","require_once","return","static","switch","throw","trait","try","unset","use","var","while","xor"];
    } else if (typ == "sql") {
      words = ["ADD","EXTERNAL","PROCEDURE","ALL","FETCH","PUBLIC","ALTER","FILE","RAISERROR","AND","FILLFACTOR","READ","ANY","READTEXT","AS","FOREIGN",
      "RECONFIGURE","ASC","FREETEXT","REFERENCES","AUTHORIZATION","FREETEXTTABLE","REPLICATION","BACKUP","FROM","RESTORE","BEGIN","FULL","RESTRICT","BETWEEN",
      "FUNCTION","RETURN","BREAK","GOTO","REVERT","BROWSE","GRANT","REVOKE","BULK","GROUP","RIGHT","BY","HAVING","ROLLBACK","CASCADE","HOLDLOCK","ROWCOUNT",
      "CASE","IDENTITY","ROWGUIDCOL","CHECK","IDENTITY_INSERT","RULE","CHECKPOINT","IDENTITYCOL","SAVE","CLOSE","IF","SCHEMA","CLUSTERED","IN",
      "SECURITYAUDIT","COALESCE","INDEX","SELECT","COLLATE","INNER","SEMANTICKEYPHRASETABLE","COLUMN","INSERT","SEMANTICSIMILARITYDETAILSTABLE","COMMIT",
      "INTERSECT","SEMANTICSIMILARITYTABLE","COMPUTE","INTO","SESSION_USER","CONSTRAINT","IS","SET","CONTAINS","JOIN","SETUSER","CONTAINSTABLE","KEY",
      "SHUTDOWN","CONTINUE","KILL","SOME","CONVERT","LEFT","STATISTICS","CREATE","LIKE","SYSTEM_USER","CROSS","LINENO","TABLE","CURRENT","LOAD","TABLESAMPLE",
      "CURRENT_DATE","MERGE","TEXTSIZE","CURRENT_TIME","NATIONAL","THEN","CURRENT_TIMESTAMP","NOCHECK","TO","CURRENT_USER","NONCLUSTERED","TOP","CURSOR",
      "NOT","TRAN","DATABASE","NULL","TRANSACTION","DBCC","NULLIF","TRIGGER","DEALLOCATE","OF","TRUNCATE","DECLARE","OFF","TRY_CONVERT","DEFAULT","OFFSETS",
      "TSEQUAL","DELETE","ON","UNION","DENY","OPEN","UNIQUE","DESC","OPENDATASOURCE","UNPIVOT","DISK","OPENQUERY","UPDATE","DISTINCT","OPENROWSET",
      "UPDATETEXT","DISTRIBUTED","OPENXML","USE","DOUBLE","OPTION","USER","DROP","OR","VALUES","DUMP","ORDER","VARYING","ELSE","OUTER","VIEW","END",
      "OVER","WAITFOR","ERRLVL","PERCENT","WHEN","ESCAPE","PIVOT","WHERE","EXCEPT","PLAN","WHILE","EXEC","PRECISION","WITH","EXECUTE","PRIMARY",
      "WITHIN GROUP","EXISTS","PRINT","WRITETEXT","EXIT","PROC","LIMIT","MODIFY","COUNT","REPLACE"];
    } else if (typ == "python") {
      words = ["as", "assert", "break", "class", "continue", "def", "del", "elif", "else", "except", "finally", "for", "from", "global", "if", "import",
      "lambda", "pass", "raise", "return", "try", "while", "with", "yield", "in", "abs", "all", "any", "bin", "bool", "bytearray", "callable", "chr",
      "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "filter", "float", "format", "frozenset", "getattr",
      "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max",
      "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "print", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice",
      "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip", "__import__", "NotImplemented", "Ellipsis", "__debug__"];
    }
   
    for (i = 0; i < words.length; i++) {
      if (typ == "php" || typ == "sql") {
        pos = txt.toLowerCase().indexOf(words[i].toLowerCase());
      } else {
        pos = txt.indexOf(words[i]);
      }
      if (pos > -1) {
        patt = /\W/g;
        if (txt.substr(pos + words[i].length,1).match(patt) && txt.substr(pos - 1,1).match(patt)) {
          if (pos > -1 && (rpos == -1 || pos < rpos)) {
            rpos = pos;
            rpos2 = rpos + words[i].length;
          }
        }
      } 
    }
    return [rpos, rpos2, func];
  }
  function getPos(txt, start, end, func) {
    var s, e;
    s = txt.search(start);
    e = txt.indexOf(end, s + (end.length));
    if (e == -1) {e = txt.length;}
    return [s, e + (end.length), func];
  }
  function getNumPos(txt, func) {
    var arr = ["<br>", " ", ";", "(", "+", ")", "[", "]", ",", "&", ":", "{", "}", "/" ,"-", "*", "|", "%", "="], i, j, c, startpos = 0, endpos, word;
    for (i = 0; i < txt.length; i++) {
      for (j = 0; j < arr.length; j++) {
        c = txt.substr(i, arr[j].length);
        if (c == arr[j]) {
          if (c == "-" && (txt.substr(i - 1, 1) == "e" || txt.substr(i - 1, 1) == "E")) {
            continue;
          }
          endpos = i;
          if (startpos < endpos) {
            word = txt.substring(startpos, endpos);
            if (!isNaN(word)) {return [startpos, endpos, func];}
          }
          i += arr[j].length;
          startpos = i;
          i -= 1;
          break;
        }
      }
    }  
    return [-1, -1, func];
  }  
}

// End 
