
//Declaring and Using Variables//

let studentName = "Ashley";
let studentAge = 24;
let isEnrolled = true;

console.log (`Hi my name is ${studentName} and I am ${studentAge}.`)
console.log (`Am I enrolled at Humber College?: ${isEnrolled}`)

//Demonstrating Data Types
let assignment = "Lab 1 - Basics of JavaScript" // example of string
let week = 2; // example of number
let submit = true; // example of boolean
const animals = ['cat', 'dog', 'rabbit']; // example of array
const myName = {
    first: "Ashley",
    middle: "Diamante",
    last: "Atento",
} // example of object

console.log (`This assignment is called ${assignment} for Week ${week}`)
console.log (`Did I submit the assignment?: ${submit}`)
console.log (`Here is a list of animals I like: ${animals[0]}, ${animals[2]}, ${animals[1]}`)
console.log (`Here is an object I created using my name: ${myName.first} ${myName.middle}, ${myName.last}`)

//Arithmetic Operators
console.log("1 + 2 =", 1+2)
console.log("1 - 2 =", 1-2)
console.log("1 * 2 =", 1*2)
console.log("1 / 2 =", 1/2)

//Comparison Operators
let x = 2;
let y = 6;
console.log ("is 2 greater than 6?", x > y)
console.log ("is 2 less than 6?", x < y)
console.log ("is 2 equal to 6?", x === y)
console.log ("is 2 not equal to 6?", x !== y)

//Logical Operators
let a = true;
let b = false;
console.log ("true and true =",true && true)
console.log ("true or false =", true || false)
console.log ("true is not true =", !true)