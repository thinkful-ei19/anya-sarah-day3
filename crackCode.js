'use strict';

const cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5,
};

function crackingTheCode(array) {
  let result = [];
  //let array = message.split(' ');
  for (let i = 0; i < array.length; i++) {
    let rule = cipher[array[i][0]];
    rule ? result.push(array[i][rule-1]) : result.push(' ');
   
    // if (array[i] [0] === Object.keys(cipher)[0]) {
    //   //(array[i] [0] === 'a') {
    //     result += array[i][1];
    //   //result += array[i][cipher.a-1];
    // } else if (array[i] [0] === Object.keys(cipher)[1]) {
    //   result +=  array[i][cipher.b-1];
    // } else if (array[i] [0] === Object.keys(cipher)[2]) {
    //   result += array[i][3];
    //   //result += array[i][cipher.c-1];
    // } else if (array[i] [0] === Object.keys(cipher)[3]) {
    //   result += array[i][cipher.d-1];
    // } else {
    //   result += Object.values(cipher)[4];
    // }      
  } return result;
}
  


//condensed version
// const decode = function (word) {
//   if (word[0].charCodeAt() > 100) return ' ';
//   return word[word[0].charCodeAt() - 96];
// };

const decodeWords = function (words) {
  return crackingTheCode(words.split(' ')).join('');
};

console.log(decodeWords('craft block argon meter bells brown croon droop'));

//console.log(decodeWords('craft block argon meter bells brown croon droop'));


// Redo your Cracking the Code problem from String Drills but this time use an object as your cipher. Additionally, create a decodeWords function that utilizes your decode function to accept a single string of words, and then return the fully decoded message as a string.
// A code has been invented which replaces each character in a sentence with a five letter word. The first letter of each encoded word determines which of the remaining four characters contains the decoded character according to this table:

// First letter	Character number
// a	2
// b	3
// c	4
// d	5
// So for example, the encoded word 'cycle' would be decoded to the character 'l'. This is because the first letter is a 'c', so you look for the fourth character, which is 'l'.

// If the first letter of the encoded word isn't 'a', 'b', 'c', or 'd' (for example 'mouse') this should be decoded to a space.

// Write a function called decode which takes an encoded word as an argument, and returns the correct decoded character.

// Use your function to decode the following message: 'craft block argon meter bells brown croon droop'.