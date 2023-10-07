/* console.log('Hello World!');  
console.log('kjsgdjagsd)
*/

// one line comment
/* 
Block comment
*/

// Variables

// let - we can declare empty variables
// without any value at first
// we can after change the value of the variable
let book; // empty variable: variable declaration

console.log(book); // -> undefined
// variable initialization
book = 'Harry Potter';

// assign a value at the time of declaration
let film = 'Titanic';

console.log(book);

// changing values
let age = 30;

age = 31;

console.log(age);

// Variable declaration with const
// variables with const need a value from the start
// and cannot be changed after
const bootcamp = 'Web Dev';

// bootcamp = 'Data'; does not work, gives us a typeError: Assignment to constant variable.

console.log(bootcamp);

// Name variables should be cameCase
let firstName = 'Lúcia';

//JS is case sensitive
// below we have two different variables!
let color;
let Color;

// some words are reserved and cannot be used as variables
// let
// const
// function

// nice variable names:
let email;
let time;
let city;
let hasColor;

// not so nice variable names
let x;
let whyNot;
let variable1;
let info;

// variable names should be descriptive but concise
let isDeveveloper; // good
let isDev; // good
let isTheUserAnSoftwareDeveloper; // bad
