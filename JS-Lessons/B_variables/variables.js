/*
Variables are containers for storing data (values)
There are three ways to declare a variable in JavaScript:
var, let, const
 */

// var:
var name = "Chris Bonnin";
var age = 32;
var isHuman = true;
var empty = undefined;
console.log("var keyword:")
console.log(name + " is of type " + typeof name) // founding out the type using 'typeof'
console.log(age + " is of type " + typeof age)
console.log(isHuman + " is of type " + typeof isHuman)
console.log(empty + " is of type " + typeof empty)

// var can redeclare variables:
console.log("Redeclaring variables:")
var city = "Paris";
var city = "Philadelphia";
console.log(city)

var num = 12.44;
{
    var num = 100;
}
console.log(num)
console.log("")
// * Redeclaring a variable can impose problems

// the 'let' keyword was introduced in ES6:
let name2 = "Alcina Dimitrescu";
let age2 = 100;
let isHuman2 = false;
let empty2 = undefined;
console.log("let keyword:")
console.log(name2)
console.log(age2)
console.log(isHuman2)
console.log(empty2)
console.log("")
// variables with let cannot be redeclared

// The 'const' keyword was introduced in ES6
const name3 = "Ethan Winters"
const age3 = 34;
const isHuman3 = false;
const empty3 = undefined;
console.log("const keyword:")
console.log(name3)
console.log(age3)
console.log(isHuman3)
console.log(empty3)

/* like 'let', a const variable cannot be reassigned, as a general rule, always declare a variable with const unless you
know that the value will change
 */

// JavaScript is an Unscripted Dynamic Language











