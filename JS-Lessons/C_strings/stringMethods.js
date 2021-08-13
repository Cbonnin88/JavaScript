/*
String Methods help us work with Strings
*/

// .toUppercase():
let sos = 'help me, i can\'t swim';
let sosShout = sos.toUpperCase(); // changes our string to all capital letters
console.log('before: ' + sos)
console.log('toUppercase() method: ' + sosShout)
console.log("")

// .toLowerCase():
let loud = 'IS THIS QUIET ENOUGHT ?';
let quiet = loud.toLowerCase(); // changes our string to all lowercase letters
console.log('before: ' + loud);
console.log('toLowerCase() method: ' + quiet);
console.log("")

// slice():
let str = 'Vampire, Queen, God';
let slice = str.slice(0, 7);
console.log('before: ' + str);
console.log('slice() method: ' + slice);
console.log("")
/* Will give us the string 'Vampire' because Queen is the extracted part between
 characters 0 and 7
 JavaScript counts positions for zero, the first position is zero
 */

// substring()
let aStr = 'House, Chartres, New';
let newSlice = aStr.substring(6,15);
console.log('before: ' + aStr);
console.log('substring() method:' + newSlice)
console.log("")
/*
Will give us the string 'Chartres' because Chartres is extracted from the positions
 of 6 and 14
 substring is similar to slice() but the difference is that substring cannot accept
  negative indexes
 */

// substr():
let ourString = 'fire, house, cave';
let newString = ourString.substr(13,4);
console.log('before: ' + ourString);
console.log('substr() method: ' + newString );
console.log("")
/*
    Will give us the string 'cave' because the position starts from 13 and it is 4
     characters long.
     The difference with substr() is that the second parameter specifies the length of
      the extracted part.
*/

// replace()
let replaceStr = 'Moving to Bussy Saint Georges or Chessy';
let newReplace = replaceStr.replace('Bussy Saint Georges', 'Chartres');
console.log('before: ' + replaceStr);
console.log('replace() method: ' + newReplace);
console.log('\nRegular Expression')
// to replace case insensitivity, use a regex with an '/i' flag:
let text = "Please stop eating!";
let newText = text.replace(/EATING/i, 'doing that!'); // using a regex
console.log('before: ' + text);
console.log('replace() using a regular expression: ' + newText);
console.log("")

// concat():
let word1 = 'I am';
let word2 = 'learning';
let word3 = 'JavaScript';
let combinedSentence = word1.concat(' ', word2.concat(' ', word3));
console.log('concat() method: ' + combinedSentence);
console.log("")
/*
The concat() method can be used instead of the plus operator
*/
