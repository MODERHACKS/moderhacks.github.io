/*!
 
   ** ****** ** *********

   *TSJMaths ( https://moderhacks.github.io )
   *v1 ( https://moderhacks.github.io/libs/ext/tsj-maths/1-x/v1/tm.js )
   *August 2019 ( 1st Update )
   *by Debarchito Nath ( MOD ER HACKS ) © Copyright | 2019 | ALL RIGHTS RESERVED
   *Released Under MIT License ( https://moderhacks.github.io/LICENSE.html )
   
   ** ****** ** *********
   
*/

(function(funcName, baseObj) { funcName = funcName || "Ready"; baseObj = baseObj || window; var readyList = []; var readyFired = false; var readyEventHandlersInstalled = false; function ready() { if (!readyFired) { readyFired = true; for (var i = 0; i < readyList.length; i++) { readyList[i].fn.call(window, readyList[i].ctx); } readyList = []; }  } function readyStateChange() { if ( document.readyState === "complete" ) { ready(); } } baseObj[funcName] = function(callback, context) { if (typeof callback !== "function") { throw new TypeError("callback for Ready(function) must be a function"); } if (readyFired) { setTimeout(function() {callback(context);}, 1); return; } else { readyList.push({fn: callback, ctx: context}); } if (document.readyState === "complete" || (!document.attachEvent && document.readyState === "interactive")) { setTimeout(ready, 1); } else if (!readyEventHandlersInstalled) { if (document.addEventListener) { document.addEventListener("DOMContentLoaded", ready, false); window.addEventListener("load", ready, false); } else { document.attachEvent("onreadystatechange", readyStateChange); window.attachEvent("onload", ready); } readyEventHandlersInstalled = true; } } })("Ready", window);

/* Full File */

// Natural Logarithm
function ln(val) { return Math.log(val); }; 

// Common Logarithm With Selectable Bases
function log(val, base) { base = base ? base : 10; return (Math.log(val)) / (Math.log(base)); };

// Antilogaritm With Selectable Base
function antilog(val, base) { base = base ? base : 10; return Math.pow(base, val); };

// Basic Operations ( +, -, *, / )
function add(val, vl) { return val + vl; }; function addition(val, vl) { return val + vl; }; function sub(val, vl) { return val - vl; }; function subtract(val, vl) { return val - vl; }; function subtraction(val, vl) { return val - vl; }; function mul(val, vl) { return val * vl; }; function multiply(val, vl) { return val * vl; }; function multiplication(val, vl) { return val * vl; }; function div(val, vl) { return val / vl; }; function divide(val, vl) { return val / vl; }; function division(val, vl) { return val / vl; };

// Factorial ( n! )
function fact(fact) { if(fact == 0) { return 1; } if(fact < 0 ) { return undefined; } for(var rVi = fact; --rVi; ) { fact *= rVi; } return fact; }; function factorial(fact) { if(fact == 0) { return 1; } if(fact < 0 ) { return undefined; } for(var rVi = fact; --rVi; ) { fact *= rVi; } return fact; }

// Power ( nˣ )
function pow(val, val2) { val2 = val2 ? val2 : 1;  return Math.pow(val, val2); }; function power(val, val2) { val2 = val2 ? val2 : 1;  return Math.pow(val, val2); };

// Combination ( ⁿCᵣ )
function combination(n, r) { var rVn = fact(n); var rVr = fact(r) * fact(n - r); var rVnr = rVn / rVr; return rVnr; }; function comb(n, r) { var rVn = fact(n); var rVr = fact(r) * fact(n - r); var rVnr = rVn / rVr; return rVnr; };

// Permuntation ( ⁿPᵣ )
function permuntation(n, r) { var rVnrn = fact(n) / fact(n - r); return rVnrn; }; function perm(n, r) { var rVnrn = fact(n) / fact(n - r); return rVnrn; }; 

// Value Of Pi ( π )
function pi() { return Math.PI; }; function Pi() { return Math.PI; };

// Round Fig To The Nearest Integer
function round(val) { return Math.round(val); }; function roundFig(val) { return Math.round(val); };

// Round Up To The Next Integer
function roundUp(val) { return Math.ceil(val); }; function ceil(val) { return Math.ceil(val); };
 
// Round Down To The Previous Integer
function roundDown(val) { return Math.floor(val); }; function floor(val) { return Math.floor(val); };

// Give The Positive Value 
function abs(val) { return Math.abs(val); };function absolute(val) { return Math.abs(val); };

// Give Selective Root Of Given Number ( √(x) )
function root(x, n) { try { var rVnegate = n % 2 == 1 && x < 0; if(rVnegate) x = -x; var rVpossible = Math.pow(x, 1 / n); n = Math.pow(rVpossible, n); if(Math.abs(x - n) < 1 && (x > 0 == n > 0)) return rVnegate ? -rVpossible : rVpossible; } catch(e){} }; function rt(x, n) { try { var rVnegate = n % 2 == 1 && x < 0; if(rVnegate) x = -x; var rVpossible = Math.pow(x, 1 / n); n = Math.pow(rVpossible, n); if(Math.abs(x - n) < 1 && (x > 0 == n > 0)) return rVnegate ? -rVpossible : rVpossible; } catch(e){} }; 

// Trigonometric Ratio Sine ( sin(x) )
function sin(val) { return Math.sin(val * pi() / 180); }; 

// Trigomimetic Ratio Cosine ( cos(x) )
function cos(val) { return Math.cos(val * pi() / 180); };

// Trigonometric Ratio Tangent ( tan(x) )
function tan(val) { var rVtan = sin(val) / cos(val); return rVtan; };

// Trigonometric Ratio Cosecant ( cosec(x) )
function cosec(val) { var rVcosec = 1 / sin(val); return rVcosec; };

// Trigonometric Ratio Secant ( sec(x) )
function sec(val) { var rVsec = 1 / cos(val); return rVsec; }

// Trigonometric Ratio Cotangent ( cot(x) )
function cot(val) { var rVcot = 1 / tan(val); return rVcot; }

// Exponent ( Eˣ )
function exp(val) { return Math.exp(val); }; function exponent(val) { return Math.exp(val); };

// Roots of Quadratic Equation
function quadRoots(a, b, c) { var rVx = ( - b + root(pow(b, 2) - (4 * a * c), 2)) / (2 * a); var rVy = (- b - root(pow(b, 2) - (4 * a * c), 2)) / (2 * a); return "( " + rVx + " , " + rVy + " )"; }; function quadraticRoots(a, b, c) { var rVx = ( - b + root(pow(b, 2) - (4 * a * c), 2)) / (2 * a); var rVy = (- b - root(pow(b, 2) - (4 * a * c), 2)) / (2 * a); return "( " + rVx + " , " + rVy + " )"; };

// Plus Root of Quadratic Equation
function PQuadRoot(a, b, c) { var rVs = ( - b + root(pow(b, 2) - (4 * a * c), 2)) / (2 * a);  return rVs; }; function PlusQuadraticRoot(a, b, c) { var rVr = ( - b + root(pow(b, 2) - (4 * a * c), 2)) / (2 * a); return rVr; };

// Minus Root of Quadratic Equation
function MQuadRoot(a, b, c) { var rVls = ( - b - root(pow(b, 2) - (4 * a * c), 2)) / (2 * a);  return rVls; }; function MinusQuadraticRoot(a, b, c) { var rVrt = ( - b - root(pow(b, 2) - (4 * a * c), 2)) / (2 * a); return rVrt; };

// Co-ordinate Distance Formula
function corDist(x, y, x2, y2) { var rVcoA = pow(x2 - x , 2); var rVcoB = pow(y2 - y , 2); var rVcoC = rVcoA + rVcoB; var rVcoD = root(rVcoC, 2); return rVcoD; }; function coordinateDistance(x, y, x2, y2) { var rVcoA = pow(x2 - x , 2); var rVcoB = pow(y2 - y , 2); var rVcoC = rVcoA + rVcoB; var rVcoD = pow(rVcoC, 1/2); return rVcoD; }; 

// Co-ordinate Area Of Triangle
function corArTri(x, y, x2, y2, x3, y3) { var rVf = x * ( y2 - y3 ); var rVs = x2 * ( y3 - y ); var rVl = x3 * ( y - y2 ); var rVadl = rVf + rVs + rVl; var rVaadl = 0.5 * rVadl; return rVaadl; }; function coordinateAreaTriangle(x, y, x2, y2, x3, y3) { var rVf = x * ( y2 - y3 ); var rVs = x2 * ( y3 - y ); var rVl = x3 * ( y - y2 ); var rVadl =  abs(rVf + rVs + rVl); var rVaadl = 0.5 * rVadl; return rVaadl; };

// Circumference Of Circle
function cfCir(r) { return 2 * pi() * r; }; function circumferenceCircle(r) { return 2 * pi() * r; };

// Area Of Circle
function arCir(r) { return pi() * pow(r, 2); }; function areaCircle(r) { return pi() * pow(r, 2); };

// Length Of An Arc Of A Circle
function lenArc(ang, r) { return ( ang / 360 ) * cfCir(r); }; function lengthArc(ang, r) { return ( ang / 360 ) * cfCir(r); };

// Area Of Minor Sector Of Circle In Angles
function arMinSect(ang, r) { return ( ang / 360 ) * arCir(r); }; function areaMinorSector(ang, r) { return ( ang / 360 ) * arCir(r); };
 
// Area Of Major Sector Of Circle In Angles
function arMajSect(ang, r) { return arCir(r) - arMinSect(ang, r); }; function areaMajorSector(ang, r) { return arCir(r) - arMinSect(ang, r); };

// Radian In Angle
function rad() { return 180 / pi(); }; function radian() { return 180 / pi(); };

// Angle In Radian
function angRad() { return 1 / rad(); }; function angleRadian() { return 1 / rad(); };

// Area Of Minor Sector Of Circle In Radian
function arRadMinSect(rad, r) { return ( rad / 2 ) * pow(r, 2); }; function AreaRadianMinorSector(ang, r) { return ( rad / 2 ) * pow(r, 2); };

// Area Of Major Sector Of Circle In Radian
function arRadMajSect(rad, r) { return arCir(r) - arRadMinSect(rad, r); }; function areaRadianMajorSector(rad, r) { return arCir(r) - arRadMinSect(rad, r); };

// Length Of Arc Of Minor Segment
function lenMinSegmArc(ang, r) { return 0.01745 * r * ang; }; function lenghtMinorSegmentArc(ang, r) { return 0.01745 * r * ang; };

// Length Of Arc Of Major Segment
function lenMajSegmArc(ang, r) { return lenArc(ang, r) - lenMinSegmArc(ang, r); };

// Area Of Minor Segment Of Circle In Angles
function arMinSegm(ang, r) { return ( ( ang / 360 ) * pi() * pow(r, 2) ) - ( sin(ang) * pow(r, 2) ) / 2; };

// Sector Angle
function angSec(l, r) { return ( 180 / l ) / pi() * r; };

// Probability
function prob(pe, ae) { return pe / ae; }; function probability(pe, ae) { return pe / ae; };

// Get The Max Number
function max(array) {
return Math.max.apply(null, array); };

// Get The Min Number
function min(array) { return Math.min.apply(null, array); };

// *Supportive Function ( Not For General Usage )
function stat(array) { var rVnum = 0; for (var i = 0, l = array.length; i < l; i++) rVnum += array[i]; return rVnum; };

// Find the Mean ( Statistics )
function mean(array) { return stat(array) / array.length; };

// Find The Median ( Statistics )
function median(array) { array.sort(function(a, b) { return a - b; }); var rVmid = array.length / 2; return rVmid % 1 ? array[rVmid - 0.5] : (array[rVmid - 1] + array[rVmid]) / 2; };

// Find The Mode ( Statistics )
function mode(array) { if (!array.length) return []; var rVmodeMap = {}, rVmaxCount = 0, rVmodes = []; array.forEach(function(val) { if (!rVmodeMap[val]) rVmodeMap[val] = 1; else rVmodeMap[val]++; if (rVmodeMap[val] > rVmaxCount) { rVmodes = [val]; rVmaxCount = rVmodeMap[val]; } else if (rVmodeMap[val] === rVmaxCount) { rVmodes.push(val); rVmaxCount = rVmodeMap[val]; } }); return rVmodes; };

// Find The Range ( Statistics )
function range(array) { return arr.max(array) - arr.min(array); };
	
// Find The Midrange ( Statistics )	
function midrange(array) { return arr.range(array) / 2; };

// Find The Variance ( Statistics )
function variance(array) { var rVmean = mean(array); return mean(array.map(function(num) { return pow(num - rVmean, 2); })); };

// Find The Standard Deviation ( Statistics )	
function standardDeviation(array) { return root(variance(array), 2); };	function stdDev(array) { return root(variance(array), 2); };	

// Find The Mean Absolute Deviation ( Statistics )
function meanAbsoluteDeviation(array) { var rVman = mean(array); return mean(array.map(function(num) { return abs(num - rVman); }));}; function meanAbsDev(array) { var rVman = mean(array); return mean(array.map(function(num) { return abs(num - rVman); }));};

// Find The Zscores ( Statistics )	
function zScores(array) { var rVmen = arr.mean(array); var rVstandardDeviation = stdDev(array); return array.map(function(num) { return (num - rVman) / rVstandardDeviation; }); };

// End
