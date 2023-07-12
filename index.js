// Iteration 1: Names and Input

let hacker1 = "Oscar";
console.log(`"The driver's name is ${hacker1}"`);
let hacker2 = "Sergi";
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals

let hacker1 = "Oscar";
let hacker2 = "Sergi";

let hacker1length = hacker1.length;
let hacker2length = hacker2.length;


if (hacker1length > hacker2length){
  console.log(`The driver has the longest name, it has 10 characters`);
} else if (hacker2length > hacker1length){
   console.log(`It seems that the navigator has the longest name, it has 10 characters.`);
  } else if (hacker2length = hacker1length){
  console.log(`Wow, you both have equally long names, 5 characters!`);
  }

// Iteration 3: Loops

// 3.1

const hacker1 = "Oscar";
let capitalLetters = hacker1.toUpperCase();

let capitalName = "";

for (let i = 0; i < capitalLetters.length; i++){

  capitalName += capitalLetters[i] + " ";
  
} 
console.log(capitalName);

// 3.2

const hacker2 = "Sergi";
let wordReversed = "";
// Your code:
for (let i = hacker2.length - 1; i >= 0; i--) {
 const char = hacker2[i]
 wordReversed +=char
}
console.log(wordReversed);

// 3.3

const hacker1 = "Oscar";
const hacker2 = "Sergi";

switch(hacker1.localeCompare(hacker2)){

  case -1: 
    console.log(`The driver's name goes first.`);
    break;

  case 1:
    console.log(`Yo, the navigator goes first, definitely.`);
    break;

  case 0:
    console.log(`What?! You both have the same name?`);
    break;
}

