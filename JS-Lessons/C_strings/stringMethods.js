/*
String Methods help us work with Strings
*/

// .toUppercase():
let sos = 'help me, i can\'t swim';
let sosShout = sos.toUpperCase(); // changes our string to all capital letters
console.log('toUppercase() method: ' + sosShout)

// .toLowerCase():
let loud = 'IS THIS QUIET ENOUGHT ?';
let quiet = loud.toLowerCase(); // changes our string to all lowercase letters
console.log('toLowerCase() method: ' + quiet);

// slice():
let str = 'Vampire, Queen, God';
let slice = str.slice(0, 7);
console.log('slice() method: ' + slice);
/* Will give us the string 'Vampire' because Queen is the extracted part between
 characters 0 and 7
 JavaScript counts positions for zero, the first position is zero
 */

// substring()
let aStr = 'House, Chartres, New';
let newSlice = aStr.substring(6,15);
console.log('substring() method:' + newSlice)
/*
Will give us the string 'Chartres' because Chartres is extracted from the positions
 of 6 and 14
 substring is similar to slice() but the difference is that substring cannot accept
  negative indexes
 */

// substr():
let ourString = 'fire, house, cave';
let newString = ourString.substr(13,4);
console.log('substr() method: ' + newString );
/*
    Will give us the string 'cave' because the position starts from 13 and it is 4
     characters long.
     The difference with substr() is that the second parameter specifies the length of
      the extracted part.
*/