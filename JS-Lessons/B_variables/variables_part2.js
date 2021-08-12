// We can also use variables like this

// using var
var price1 = 150;
var salesTax = .08;
var totalPrice = price1 * (1 + salesTax);
console.log("var keyword:")
console.log("total price is: " + totalPrice)
console.log("")

// using let:
let name = "Christopher Bonnin";
let age = 32;
let dob = "October 18th 1988"
let rating = 7.8
let isHuman = true
console.log("let keyword:")
console.log("His name is " + name + " and his is " + age + " years old as of" +
    " this year. He was born on " + dob + ". Chris gives this hotel a " + rating + " because of some minor" +
    " detail. Is Chris a human ?, the answer is " + isHuman)
console.log("")

// using const
let pricePs5 = 500;
const tvaTax = .20;
const finalPrice = pricePs5 * (1 + tvaTax);
console.log("const keyword:")
console.log("A Playstation 5 in France will cost: " + finalPrice)


/* Common pratices:
Variable shouldn't begin with a number
camelCase is the standard
try to give your variables a clear name
 */


