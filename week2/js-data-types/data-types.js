// There are two main categories for data types
// 1. Primitive values
// 2. Non primitive values

// 1. Primitive values
// any data type that is not an object

// 1.1 Numbers
// integers or floating points
// with numbers we can do mathematical operations

const age = 30; // integers
const price = 12.99; // floating point

// Addition
console.log(1 + 1);

// Subtraction
console.log(9 - 1);

// Multiplication
console.log(2 * 2);

// Division
console.log(10 / 2);

// Exponentiation
console.log(2 ** 5);

// Modulo (or remainder)
// if I divide the first number by the second equally, how much will remain?
console.log(4 % 2); // 0
console.log(5 % 2); // 1

// assignment operators
let sum = 2 + 2;
console.log(sum); // the variable will hold the result of the math operation

sum = sum + 2;
console.log(sum); // 6: the previous value of sum (4) + 2

sum += 2;
console.log(sum);

sum -= 5;
sum *= 10;
sum /= 3;
sum %= 5;
sum **= 6;

sum++; // adds one to the value of sum
sum--; // substracts one to the value of sum

// Grouping operator

// Mathematical precedente thats effect here:
// 3*4 happens first = 12
// then the addition 2 + 12
// then the subtraction 14 - 1
const withoutGrouping = 2 + 3 * 4 - 1;
console.log(withoutGrouping); // 13

// With parenthesis, we can change the order of the operations
// first the addition 2 + 3 = 5
// then the subtraction 4 - 1 = 3
// then multiplication 5 * 3 = 15
const withGrouping = (2 + 3) * (4 - 1);
console.log(withGrouping); // 15

// 1.2 Strings

// To create strings, we need wuotes
// can be double (""), single('') or backticks (``)
const firstName = 'Lúcia';
let lastName = 'Duarte';
const actualFirstName = `Ana`;

// Difference between single quote and double quote
const warning = "Don't go that way";
const singleWarning = "Don't go that way"; // escaping the character: Don\'t
const backticksWarning = `Don't go that way!`;

// Backticks create a template literal which allows interpolation
const greeting = `Hello there, ${firstName}`;
console.log(greeting);

console.log(`I take ${10 + 5} minutes to arrive there`);
console.log('10' + '5');

console.log(
  'Hi, my name is ' +
    firstName +
    ' ' +
    lastName +
    ' ' +
    'and I live in Portugal'
);

const multiline = `With backticks
I can have
Multiple line`;

console.log(multiline);

// String properties and methods

// string.length
// we can know the size of a string with it
// spaces also count for the length
const bootcamp = 'Web Dev';
console.log(`The string has ${bootcamp.length} characters`);

// adding characters to strings: concatenate
let greet = 'Hello';
greet += ' student';
console.log(greet);

// Accessing characters
// we can know the character at a specific position
console.log(bootcamp.charAt(0));
console.log(bootcamp[1]); // we can also access by using square brackets

// Finding a substring

const ironhackMotto = 'Trust the process';

// returns true of false
console.log(ironhackMotto.includes('process')); // true
console.log(ironhackMotto.includes('ironhack')); // false

// Find the position where the substring appears
console.log(ironhackMotto.indexOf('process')); // 10
console.log(ironhackMotto.indexOf('ironhack')); // returns a negative value because it does not exist

// getting a substring
console.log(ironhackMotto.substring(0, 5)); // Trust, ending value is excluding
console.log(ironhackMotto.slice(-7)); // with negative values, it starts from the end
console.log(ironhackMotto);
const lastWord = ironhackMotto.slice(-7);
console.log(lastWord);

// Repeat
console.log('la'.repeat(5));

// Uppercase and lowercase
console.log(ironhackMotto.toUpperCase());
console.log(ironhackMotto.toLowerCase());

// 1.3 Boolean - true / false
// Some questions can be either yes or no, true or false

const isLoggedIn = false;
const isDeveloper = true;
const isHappy = true;
const isTired = false;

// Logic Operators
// the OR: ||
// Returns true if one of the expressions is true
console.log(isLoggedIn || isDeveloper); // true

// the AND: &&
// Returns true if all of the expressions are true
console.log(isDeveloper && isHappy); // true
console.log(isDeveloper && isTired); // false

// the NOT: !
// negates the value of the expression, turning a true into a false and vice versa
console.log(!isDeveloper); // false
console.log(!isTired); // true

// 1.4 Undefined
let time;
console.log(time); // undefined

// 1.5 Null
// Similar to undefined, meaning there is no value.
let myLastName = 'Duarte';
myLastName = null;

// Truthy and Falsy values

// Truthy values
// boolean true
// any string that is NOT empty
// '0' as string
// 'false' as string
// any number that is NOT 0 (zero)
// negative numbers: -5
// [] empty array
// {} empty object

// Falsy values
// boolean false
// empty string
// 0 number
// NaN
// undefined
// null

let myAge;

if (null) {
  console.log('This value is truthy');
} else {
  console.log('This value is falsy');
}
