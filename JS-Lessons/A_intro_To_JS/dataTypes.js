/*Data types are the classifications we give to the different kinds of data that we use in programming.
In JavaScript, there are seven fundamental data types: */

// Numbers :
let number = 4;
let decimal = 12.17;
console.log('Number Types: ' + number + decimal);

// BigInt:
const bigInt = 1234567890123456789012345678901234567890n
// * A BigInt value is created by appending 'n' to the end of an integer

// Strings:
let firstName = 'Chris';
let lastName = 'Bonnin';
console.log('String Types: ' + firstName + lastName); // Prints String Types : Christopher Bonnin

//Booleans:
let truthy = true;
let falsy = false;
console.log('Booleans : ' + truthy + falsy);

// Null represents intentional absence of value:
let nothing = null;
console.log('Null Type: ' + nothing);

// Undefined: It also represents the absence of a value though its different from 'null'
let absent = undefined;
console.log('Undefined Type: ' + absent);

// Object: Stores collections of related data and more complex entities:
let data = <object data="Homes" type="String"/>
console.log('Object Type: ' + data);

