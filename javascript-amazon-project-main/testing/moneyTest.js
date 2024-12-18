import formatCurrency from "../scripts/utils/money.js";

//-- two types of TEST-CASES

console.log("**--TEST SUITE: FORMAT CURRENCY--**"); // test suite: grouping related test 2geda

//BASIC TEST CASE - that is, just a basic/nor,al test with simpler tests
console.log("CONVERTS CENTS TO DOLLARS");
const result = formatCurrency(2095) === "20.95" ? "Passed" : "Failed";
console.log(result);

// EDGE TEST CASE - edge as in a edge above what our function/ code can handle
console.log("WORKS WITH ZERO");
const result2 = formatCurrency(0) === "0.00" ? "Passed" : "Failed";
console.log(result2);

console.log("ROUNDS UP CORRECTLY");
const result3 = formatCurrency(2000.95) === "20.01" ? "Passed" : "Failed";
console.log(result3);

console.log("ROUNDS DOWN CORRECTLY");
const result4 = formatCurrency(2000.4) === "20.00" ? "Passed" : "Failed";
console.log(result4);

console.log("ROUNDS UP CORRECTLY");
const result5 = formatCurrency(2000.5) === "20.01" ? "Passed" : "Failed";
console.log(result5);

// || USING TESTING FRAMEWORK

/* 1. Jasmine - for JS
2. Jest for reactJS
3. MocheJS  */
