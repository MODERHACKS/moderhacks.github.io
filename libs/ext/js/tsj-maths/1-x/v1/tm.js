/*!
 
   ** ****** ** *********

   *TSJ™ Maths JS ( https://moderhacks.github.io )
   *v1 ( https://moderhacks.github.io/libs/ext/js/tsj-maths/1-x/v1/tm.js )
   *August 2019 ( 1st Update )
   *by Debarchito Nath ( MOD ER HACKS ) © Copyright | 2019 | ALL RIGHTS RESERVED
   *Includes basic calculators for each an every Maths function
   *Released Under MIT License ( https://moderhacks.github.io/LICENSE.html )
   
   ** ****** ** *********
   
*/

/* Full File */

// Natural Logarithm
function ln(val) { return Math.log(val); }; 

// Common Logarithm With Selectable Bases
function log(val, base) { base = base ? base : 10; return (Math.log(val)) / (Math.log(base)); };

// Antilogaritm With Selectable Base
function antilog(val, base) { base = base ? base : 10; return Math.pow(base, val); };

// Basic Operations ( +, -, *, / )
function oper(val) { return val; }; function operation(val) { return val; };

// Factorial ( n! )
function fact(fact) { if(fact == 0) { return 1; } if(fact < 0 ) { return undefined; } for(var rVi = fact; --rVi; ) { fact *= rVi; } return fact; }; function factorial(fact) { if(fact == 0) { return 1; } if(fact < 0 ) { return undefined; } for(var rVi = fact; --rVi; ) { fact *= rVi; } return fact; }

// Power ( nˣ )
function pow(val, val2) { val2 = val2 ? val2 : 1;  return Math.pow(val, val2); }; function power(val, val2) { val2 = val2 ? val2 : 1;  return Math.pow(val, val2); };

// Combination ( ⁿCᵣ )
function combination(n, r) { var rVn = fact(n); var rVr = fact(r) * fact(n - r); var rVnr = rVn / rVr; return rVnr; }; function comb(n, r) { var rVn = fact(n); var rVr = fact(r) * fact(n - r); var rVnr = rVn / rVr; return rVnr; };

// Permuntation ( ⁿPᵣ )
function permuntation(n, r) { var rVnrn = fact(n) / fact(n - r); return rVnrn; }; function perm(n, r) { var rVnrn = fact(n) / fact(n - r); return rVnrn; }; 

// Value Of Pi ( π )
function PI() { return Math.PI; }; function pi() { return Math.PI; };

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
function sin(val) { return Math.sin(val * Math.PI / 180); }; 

// Trigomimetic Ratio Cosine ( cos(x) )
function cos(val) { return Math.cos(val * Math.PI / 180); };

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

// Co-ordinate Distance Formula
function corDist(x, y, x2, y2) { var rVcoA = pow(x2 - x , 2); var rVcoB = pow(y2 - y , 2); var rVcoC = rVcoA + rVcoB; var rVcoD = root(rVcoC, 2); return rVcoD; }; function coordinateDistance(x, y, x2, y2) { var rVcoA = pow(x2 - x , 2); var rVcoB = pow(y2 - y , 2); var rVcoC = rVcoA + rVcoB; var rVcoD = pow(rVcoC, 1/2); return rVcoD; }; 

// Co-ordinate Area Of Triangle
function corArTri(x, y, x2, y2, x3, y3) { var rVf = x * ( y2 - y3 ); var rVs = x2 * ( y3 - y ); var rVl = x3 * ( y - y2 ); var rVadl = rVf + rVs + rVl; var rVaadl = 0.5 * rVadl; return rVaadl; }; function coordinateAreaTriangle(x, y, x2, y2, x3, y3) { var rVf = x * ( y2 - y3 ); var rVs = x2 * ( y3 - y ); var rVl = x3 * ( y - y2 ); var rVadl = rVf + rVs + rVl; var rVaadl = 0.5 * rVadl; return rVaadl; };

/* Basic Calculators */

// Natural Logarithmic Calculator
tsj.lnCalculator = function() {
tsj.cElement("h4", "TSJ Natural Logarithm Calculator :");
tsj.cElement("textarea", "", { placeholder: "Find ln of...", style: "border-radius : 12px; padding : 8px; outline : none;", id: "inputNL"});
tsj.cElement("br"); tsj.cElement("br");
tsj.cElement("button", "Calculate", { style: "outline : none; padding : 8px; border : none; border-radius : 12px; background : black; color : white;", id: "submitNL"});
tsj.cElement("h4", "Result :");
tsj.cElement("p", "", { id: "writeNL"});
tsj.click("#submitNL", function() {
tsj.fWrite("#writeNL", ln(tsj.val("#inputNL"))); }); };

// Commom Logarithmic Calculator With Selectable Base
tsj.logCalculator = function() {
tsj.cElement("h4", "TSJ Common Logarithm Calculator :");
tsj.cElement("textarea", "", { placeholder: "Find log of...", style: "border-radius : 12px; padding : 8px; outline : none;", id: "inputCL"});
tsj.cElement("textarea", "", { placeholder: "Base... ( 10 is default )", style: "border-radius : 12px; padding : 8px; outline : none; margin-left : 5px;", id: "baseCL"});
tsj.cElement("br"); tsj.cElement("br");
tsj.cElement("button", "Calculate", { style: "outline : none; padding : 8px; border : none; border-radius : 12px; background : black; color : white;", id: "submitCL"});
tsj.cElement("h4", "Result :");
tsj.cElement("p", "", { id: "writeCL"});
tsj.click("#submitCL", function() {
tsj.fWrite("#writeCL", log(tsj.val("#inputCL"), tsj.val("#baseCL"))); }); };

// Anti-Logarithmic Calculator With Selectable Base
tsj.antilogCalculator = function() {
tsj.cElement("h4", "TSJ Anti-Logarithm Calculator :");
tsj.cElement("textarea", "", { placeholder: "Find antilog of...", style: "border-radius : 12px; padding : 8px; outline : none;", id: "inputAL"});
tsj.cElement("textarea", "", { placeholder: "Base... ( 10 is default )", style: "border-radius : 12px; padding : 8px; outline : none; margin-left : 5px;", id: "baseAL"});
tsj.cElement("br"); tsj.cElement("br");
tsj.cElement("button", "Calculate", { style: "outline : none; padding : 8px; border : none; border-radius : 12px; background : black; color : white;", id: "submitAL"});
tsj.cElement("h4", "Result :");
tsj.cElement("p", "", { id: "writeAL"});
tsj.click("#submitAL", function() {
tsj.fWrite("#writeAL", antilog(tsj.val("#inputAL"), tsj.val("#baseAL"))); }); };

// Factorial Calculator
tsj.factCalculator = tsj.factorialCalculator = function() {
tsj.cElement("h4", "TSJ Fatorial Calculator :");
tsj.cElement("textarea", "", { placeholder: "Find Factorial Of...", style: "border-radius : 12px; padding : 8px; outline : none;", id: "inputF"});
tsj.cElement("br"); tsj.cElement("br");
tsj.cElement("button", "Calculate", { style: "outline : none; padding : 8px; border : none; border-radius : 12px; background : black; color : white;", id: "submitF"});
tsj.cElement("h4", "Result :");
tsj.cElement("p", "", { id: "writeF"});
tsj.click("#submitF", function() {
tsj.fWrite("#writeF", fact(tsj.val("#inputF"))); }); };

// Power Calculator 
tsj.powCalculator = tsj.powerCalculator = function() {
tsj.cElement("h4", "TSJ Power Calculator :");
tsj.cElement("textarea", "", { placeholder: "Enter no...", style: "border-radius : 12px; padding : 8px; outline : none;", id: "inputP"});
tsj.cElement("textarea", "", { placeholder: "Power... ( 1 is default )", style: "border-radius : 12px; padding : 8px; outline : none; margin-left : 5px;", id: "baseP"});
tsj.cElement("br"); tsj.cElement("br");
tsj.cElement("button", "Calculate", { style: "outline : none; padding : 8px; border : none; border-radius : 12px; background : black; color : white;", id: "submitP"});
tsj.cElement("h4", "Result :");
tsj.cElement("p", "", { id: "writeP"});
tsj.click("#submitP", function() {
tsj.fWrite("#writeP", antilog(tsj.val("#baseP"), tsj.val("#inputP"))); }); };

// Permuntation Calculator 
tsj.permCalculator = tsj.permuntationCalculator = function() {
tsj.cElement("h4", "TSJ Permuntation Calculator :");
tsj.cElement("textarea", "", { placeholder: "Enter value of n...", style: "border-radius : 12px; padding : 8px; outline : none;", id: "inputPr"});
tsj.cElement("textarea", "", { placeholder: "Enter value of r...", style: "border-radius : 12px; padding : 8px; outline : none; margin-left : 5px;", id: "basePr"});
tsj.cElement("br"); tsj.cElement("br");
tsj.cElement("button", "Calculate", { style: "outline : none; padding : 8px; border : none; border-radius : 12px; background : black; color : white;", id: "submitPr"});
tsj.cElement("h4", "Result :");
tsj.cElement("p", "", { id: "writePr"});
tsj.click("#submitPr", function() {
tsj.fWrite("#writePr", perm(tsj.val("#inputPr"), tsj.val("#basePr"))); }); };

// Combination Calculator 
tsj.combCalculator = tsj.combinationCalculator = function() {
tsj.cElement("h4", "TSJ Combination Calculator :");
tsj.cElement("textarea", "", { placeholder: "Enter value of n...", style: "border-radius : 12px; padding : 8px; outline : none;", id: "inputCr"});
tsj.cElement("textarea", "", { placeholder: "Enter value of r...", style: "border-radius : 12px; padding : 8px; outline : none; margin-left : 5px;", id: "baseCr"});
tsj.cElement("br"); tsj.cElement("br");
tsj.cElement("button", "Calculate", { style: "outline : none; padding : 8px; border : none; border-radius : 12px; background : black; color : white;", id: "submitCr"});
tsj.cElement("h4", "Result :");
tsj.cElement("p", "", { id: "writeCr"});
tsj.click("#submitCr", function() {
tsj.fWrite("#writeCr", comb(tsj.val("#inputCr"), tsj.val("#baseCr"))); }); };

// Root Calculator 
tsj.rtCalculator = tsj.rootCalculator = function() {
tsj.cElement("h4", "TSJ Root Calculator :");
tsj.cElement("textarea", "", { placeholder: "Enter number...", style: "border-radius : 12px; padding : 8px; outline : none;", id: "inputRt"});
tsj.cElement("textarea", "", { placeholder: "Root...", style: "border-radius : 12px; padding : 8px; outline : none; margin-left : 5px;", id: "baseRt"});
tsj.cElement("br"); tsj.cElement("br");
tsj.cElement("button", "Calculate", { style: "outline : none; padding : 8px; border : none; border-radius : 12px; background : black; color : white;", id: "submitRt"});
tsj.cElement("h4", "Result :");
tsj.cElement("p", "", { id: "writeRt"});
tsj.click("#submitRt", function() {
tsj.fWrite("#writeRt", root(tsj.val("#inputRt"), tsj.val("#baseRt"))); }); };

// Trigonometric Calculator
tsj.trigonometricCalculator = tsj.trgCalculator = function() {
tsj.cElement("h4", "TSJ Trigonometric Calculator :");
tsj.cElement("h5", "*NOTE : Default Angle is 0", { style: "color : grey;"});
tsj.cElement("textarea", "", { placeholder: "Enter Sin of...", style: "border-radius : 12px; padding : 8px; outline : none; margin-left : 5px;", id: "inputSin"});
tsj.cElement("textarea", "", { placeholder: "Enter Cos of...", style: "border-radius : 12px; padding : 8px; outline : none; margin-left : 5px;", id: "inputCos"});
tsj.cElement("textarea", "", { placeholder: "Enter Tan of...", style: "border-radius : 12px; padding : 8px; outline : none; margin-left : 5px;", id: "inputTan"});
tsj.cElement("textarea", "", { placeholder: "Enter Cot of...", style: "border-radius : 12px; padding : 8px; outline : none; margin-left : 5px;", id: "inputCot"});
tsj.cElement("textarea", "", { placeholder: "Enter Sec of...", style: "border-radius : 12px; padding : 8px; outline : none; margin-left : 5px;", id: "inputSec"});
tsj.cElement("textarea", "", { placeholder: "Enter Cosec of...", style: "border-radius : 12px; padding : 8px; outline : none; margin-left : 5px;", id: "inputCosec"});
tsj.cElement("br"); tsj.cElement("br");
tsj.cElement("button", "Calculate", { style: "outline : none; padding : 8px; border : none; border-radius : 12px; background : black; color : white;", id: "submitTrg"});
tsj.cElement("h4", "Result :");
tsj.cElement("p", "", { id: "writeSin"});
tsj.cElement("p", "", { id: "writeCos"});
tsj.cElement("p", "", { id: "writeTan"});
tsj.cElement("p", "", { id: "writeCot"});
tsj.cElement("p", "", { id: "writeSec"});
tsj.cElement("p", "", { id: "writeCosec"});
tsj.click("#submitTrg", function() {
tsj.fWrite("#writeSin", sin(tsj.val("#inputSin")) + " ~ Sin");
tsj.fWrite("#writeCos", cos(tsj.val("#inputCos")) + " ~ Cos");
tsj.fWrite("#writeTan", tan(tsj.val("#inputTan")) + " ~ Tan");
tsj.fWrite("#writeCot", cot(tsj.val("#inputCot")) + " ~ Cot");
tsj.fWrite("#writeSec", sec(tsj.val("#inputSec")) + " ~ Sec");
tsj.fWrite("#writeCosec", cosec(tsj.val("#inputCosec")) + " ~ Cosec"); }); };

// Co-ordinate Distance Formula
tsj.corDistCalculator = tsj.coordinateDistanceCalculator = function() {
tsj.cElement("h4", "TSJ Co-ordinate Distance Formula :");
tsj.cElement("h5", "*NOTE : Default Co-ordinate is 0", { style: "color : grey;"});
tsj.cElement("input", "", { placeholder: "x1", type: "text", style: "border-radius : 12px; padding : 8px; outline : none; width : 10%; margin-left : 5px; border-color : black;", id: "inputX"});
tsj.cElement("input", "", { placeholder: "y1", type: "text", style: "border-radius : 12px; padding : 8px; outline : none; width : 10%; margin-left : 5px;border-color : black;", id: "inputY"});
tsj.cElement("input", "", { placeholder: "x2", type: "text", style: "border-radius : 12px; padding : 8px; outline : none; width : 10%; margin-left : 5px;border-color : black;", id: "inputX2"});
tsj.cElement("input", "", { placeholder: "y2", type: "text", style: "border-radius : 12px; padding : 8px; outline : none; width : 10%; margin-left : 5px;border-color : black;", id: "inputY2"});
tsj.cElement("br"); tsj.cElement("br");
tsj.cElement("button", "Calculate", { style: "outline : none; padding : 8px; border : none; border-radius : 12px; background : black; color : white;", id: "submitDist"});
tsj.cElement("h4", "Result :");
tsj.cElement("p", "", { id: "writeDist"});
tsj.click("#submitDist", function() {
tsj.fWrite("#writeDist", corDist(tsj.val("#inputX"), tsj.val("#inputY"), tsj.val("#inputX2"), tsj.val("#inputY2")));
});
};

// Co-ordinate Area Of Triangle
tsj.corArTriCalculator = tsj.coordinateAreaTriangleCalculator = function() {
tsj.cElement("h4", "TSJ Co-ordinate Area Of Triamgle :");
tsj.cElement("h5", "*NOTE : Default Co-ordinate is 0", { style: "color : grey;"});
tsj.cElement("input", "", { placeholder: "x1", type: "text", style: "border-radius : 12px; padding : 8px; outline : none; width : 10%; margin-left : 5px; border-color : black; margin-top : 5px;", id: "inputx"});
tsj.cElement("input", "", { placeholder: "y1", type: "text", style: "border-radius : 12px; padding : 8px; outline : none; width : 10%; margin-left : 5px;border-color : black; margin-top : 5px;", id: "inputy"});
tsj.cElement("input", "", { placeholder: "x2", type: "text", style: "border-radius : 12px; padding : 8px; outline : none; width : 10%; margin-left : 5px;border-color : black; margin-top : 5px;", id: "inputx2"});
tsj.cElement("input", "", { placeholder: "y2", type: "text", style: "border-radius : 12px; padding : 8px; outline : none; width : 10%; margin-left : 5px;border-color : black; margin-top : 5px;", id: "inputy2"});
tsj.cElement("input", "", { placeholder: "x3", type: "text", style: "border-radius : 12px; padding : 8px; outline : none; width : 10%; margin-left : 5px;border-color : black; margin-top : 5px;", id: "inputx3"});
tsj.cElement("input", "", { placeholder: "y3", type: "text", style: "border-radius : 12px; padding : 8px; outline : none; width : 10%; margin-left : 5px;border-color : black;margin-top : 5px;", id: "inputy3"});
tsj.cElement("br"); tsj.cElement("br");
tsj.cElement("button", "Calculate", { style: "outline : none; padding : 8px; border : none; border-radius : 12px; background : black; color : white;", id: "submitAr"});
tsj.cElement("h4", "Result :");
tsj.cElement("p", "", { id: "writeAr"});
tsj.click("#submitAr", function() {
tsj.fWrite("#writeAr", corArTri(tsj.val("#inputx"), tsj.val("#inputy"), tsj.val("#inputx2"), tsj.val("#inputy2"), tsj.val("#inputx3"), tsj.val("#inputy3")));
});
};
