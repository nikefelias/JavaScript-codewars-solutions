// Given a non-negative integer b, write a function which returns an integer d such that the binary representation of b is 
// the same as the decimal representation of d.

function toBinary(n){
return parseInt(n.toString(2), 10);
}

// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

const stringToNumber = function(str){
                  let number = +str;
                  return number;
                }

// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. it must make the first character in the string upper case).

// The string will always start with a letter and will never be empty.

function capitalizeWord(word) {
                  return word[0].toUpperCase() + word.slice(1);
                }

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:
// 1 <= month <= 12
const quarterOf = (month) => {
if (month >=1  && month <= 3) {
return 1;
} else if (month >=3  && month <= 6) {
return 2;
} else if (month >=7  && month <= 9){
return 3;
} else {return 4}
}

