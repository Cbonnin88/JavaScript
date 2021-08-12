/*
The LENGTH PROPERTY returns the length of a string
variableName.length
*/

let weather = 'Wow, it\'s gonna be 37, darn it\'s gonna be sooo hot!';
console.log('The length of this string is: ' + weather.length) // this will give us the
// length of our string

let sentence = 'How long is the string ?';
console.log('The length of this string is: ' + sentence.length)

let answer = 'How long is this string';
console.log('\'How long is this string\' is: ' + answer.length + ' characters long.')

let firstName = 'Christopher';
let middleName = 'Brian';
let lastName = 'Bonnin';
let fullName = firstName + " " + middleName + " " + lastName;
console.log(firstName + ' is ' + firstName.length + ' characters long.');
console.log(middleName + ' is ' + middleName.length + ' characters long.');
console.log(lastName + ' is ' + lastName.length + ' characters long.');
console.log(fullName + ' is ' + fullName.length + ' characters long.');