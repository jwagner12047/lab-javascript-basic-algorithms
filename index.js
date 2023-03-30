const { maxHeaderSize } = require("http");

console.log("I'm ready!");

let hacker1 = "Max"
let hacker2 = "Tim"

console.log(`"The driver's name is ${hacker1}"`);
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2

if (hacker1.length > hacker2.length){console.log(`"The driver has the longest name it has ${hacker1.length} characters"`)};
if (hacker1.length < hacker2.length){console.log(`"It seems that the navigator has the longest name it has ${hacker2.length} characters"`)};
if (hacker1.length === hacker2.length){console.log(`"Wow, you both have equally long names ${hacker1.length} characters!"`)};

let hacker1Upper = ""
for (let i = 0; i < hacker1.length; i++){
  hacker1Upper += hacker1[i].toUpperCase()+" "
};
console.log(hacker1Upper);

let hacker2Reverse = ""
for (let i = hacker2.length - 1; i >= 0; i--){
  hacker2Reverse += hacker2[i]
}
  console.log(hacker2Reverse)
