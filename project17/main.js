
/**
 * ? Output :-  Number + String + Number = Number (121)
*  console.log(1+ "2" +1);
* * if the string one varible is in string and if we added it it will concate nate all of them in a string and compare it all into the string
* ! 121



*? Output :- String - Number = Number(3)
// console.log("5"-2);
*! 3

// The - operator in JavaScript only works with numbers, so JavaScript converts the string "5" to the number 5


* ? Output :- String + Number = Number(52)
*? console.log("5"+2);
//52


**  Key Rule:
// The + operator performs string concatenation if either operand is a string.

// Unlike -, *, /, the + operator can operate on both numbers and strings, and it prefers string concatenation if strings are involved
*/


// console.log("10" + "2");
// 102


// console.log("10" +"2a");
// 102a


// 2
// console.log(true+true);
// value of true is 1




// true
// false means 0
// console.log(false == 0);


// console.log(null == undefined);
// true

// Because types are different: null is object, undefined is undefined
// type of null is object and type of undefined is undefined


// null print
// console.log(null);



// object
// console.log(typeof []);



// console.log([] ==![]);

// "" == false
// → 0 == 0
// → true


// number
// console.log(typeof NaN);

// object
// console.log(typeof null);


// object
// console.log(typeof []);

// object
// console.log( typeof {});


// undefined
// console.log(typeof undefined);


// JavaScript uses 64-bit binary floating-point (IEEE 754 standard), which cannot precisely represent some decimal numbers, like 0.1 or 0.2
// console.log(0.1+ 0.2 == 0.3);



// Both operands are empty arrays: [] and []

// In JavaScript, when an array is used in a string context, it is converted to a string using the .toString() method.

// The .toString() method on an empty array returns "" (an empty string)


// ""
// console.log([] + []);

// object
// console.log([] + {});






// When you write:

// js
// Copy code
// {} + []
// JavaScript interprets it as:

// js
// Copy code
// {}; +[];  // Two separate statements
// Here’s what’s happening:

// {} is treated as an empty block of code (not an object).

// +[] is evaluated:

// [] is an empty array.

// Applying unary + to [] converts it to a number:

// js
// Copy code
// +[] === 0
// So the second statement evaluates to 0.

// Thus, the overall result is:

// js
// Copy code
// {}   // empty block
// +[]  // equals 0
// → 0
// ✅ Output:
// Copy code
// 0


// object
// console.log({} + []);


// 1
// console.log([] + 1);

// true
// Step-by-step:
// "2" is a string, so is "12"

// It compares the first character of each:

// "2" → Unicode: 50

// "1" → Unicode: 49
// console.log("2" > "12");

// true
// console.log([] == 0);

// false
// console.log([] === 0)




// 🔍 Why is null == 0 false?
// Because of how JavaScript handles type coercion with the loose equality operator (==).

// 🧠 JavaScript Rules to Know:
// null is only loosely equal to undefined

// js
// Copy code
// null == undefined  // ✅ true
// null is not equal to any number, including 0

// js
// Copy code
// null == 0  // ❌ false
// null is not converted to 0 when compared using == to a number

// ✅ Summary Table:
// Expression	Result	Reason
// null == 0	false	No coercion between null and number
// null === 0	false	Strict equality (different types)
// null == undefined	true	Special case in JavaScript
// Number(null)



// false

// console.log(null  ==0);


// true

// console.log(null >= 0);

// false
// console.log(undefined == false);

// ✅ Summary Table:
// Expression	Result	Reason
// undefined == false	false	No coercion between undefined and false
// undefined === false	false	Different types (undefined vs boolean)
// undefined == null	true	Special case in JavaScript
// Boolean(undefined)	false	It's falsy when converted manually



// true
// console.log( " " == 0);


// true
// console.log("\t\r\n" == 0);

// Number("\t\r\n") → 0
// Now the comparison becomes:

// js
// Copy code
// 0 == 0 → true

// true
// console.log([] == "");

// true
// console.log([0] == 0);


// true
// console.log([1] == true);


// true
// console.log(typeof null);


// true
// console.log([null] == 0);


// true
// console.log([undefined] == 0);

// true
// console.log([[]] == 0);

// true
// console.log([1] == true);


// true
// console.log([null] == 0);

// true
// console.log([undefined] == 0);

// true
// console.log([[[]]] == 0);


// true
// console.log(true || false);

//false
// console.log(false && true);



// hello
// console.log(0 || "Hello");

// console.log( typeof "");

// ""
// console.log("" && "Word");






