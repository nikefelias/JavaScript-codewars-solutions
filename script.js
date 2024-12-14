// Given a non-negative integer b, write a function which returns an integer d such that the binary representation of b is 
// the same as the decimal representation of d.

function toBinary(n){
return parseInt(n.toString(2), 10);
}