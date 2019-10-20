/*! *CCMC - Custom CSS Management Classes ( Minified ) *Version : 0.01-alpha *A TSJCSS Class Extension Program *It Is Under Project TSJ *Released Under MIT License */ var CCMC = {}; CCMC.propertyGallery = { color : "color" , padding : "padding" , margin :"margin" , overflow : "overflow" , background : "background" , display : "display" , visibility : "visibility" , resize : "resize" , border : "border" , outline : "outline" , none : "none" , height : "height" , width : "width" , font : "font" , position : "position" , float : "float" , left : "left" , right : "right" , top : "top" , bottom :"bottom" , text : "text" , opacity : "opacity" , content : "content" , quotes : "quotes" , flex : "flex" , order : "order" , columns : "columns" , direction : "direction" , animation : "animation" , transform : "transform" , perspective : "perspective" , transition : "transition" , clear : "clear" , clip : "clip" , cursor : "cursor", clr : "color" , padd : "padding" , marg :"margin" , of : "overflow" , bg : "background" , disp : "display" , visi : "visibility" , resi : "resize" , bord : "border" , outl : "outline" , heig : "height" , widt : "width" , posi : "position" , floa : "float" , righ : "right" , bott :"bottom" , opac : "opacity" , cont : "content" , quot : "quotes" , orde : "order" , cols : "columns" , dire : "direction" , dir : "direction", anim : "animation" , tranf : "transform" , pers : "perspective" , trani : "transition" , clea : "clear" , curs : "cursor" }; CCMC.execute = function() { function applyStyle(element, style, value) { var properStyle = CCMC.propertyGallery[style] || style; element.style[properStyle] = value; }; var regexp = /(\w+)-([^\s]*)/g; var elements = document.querySelectorAll('[data-class]'); elements.forEach(function (element) { var matches = element.dataset.class.matchAll(regexp); var _iteratorNormalCompletion = true; var _didIteratorError = false; var _iteratorError = undefined; try { for (var _iterator = matches[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) { var match = _step.value; applyStyle(element, match[1], match[2]); }; } catch (err) { _didIteratorError = true; _iteratorError = err; } finally { try { if (!_iteratorNormalCompletion && _iterator.return != null) { _iterator.return(); }; } finally { if (_didIteratorError) { throw _iteratorError; }; }; }; }); }; CCMC.extend = function(val) { for (var _len = arguments.length, obj = new Array(_len), _key = 1; _key < _len; _key++) { obj[_key] = arguments[_key]; }; return Object.assign.apply(Object, [CCMC.propertyGallery].concat(val)); }; CCMC.setCustomAttribute = function(val) { var a = document.getElementsByTagName("*"); for ( var b = 0; b < a.length; b++ ) { if( a[b].hasAttribute(val) ) { a[b].setAttribute("data-class", a[b].getAttribute(val).toString() ); }; }; CCMC.execute(); }; CCMC.execute(); // End
