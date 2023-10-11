// Functions
// Two step process

// 1. Declare the function
// Creating the function and the code we want to run

// keyword function + name of function + () and {}
function sayHelloWorld() {
  return 'Hello World'; // keyword return -> what we want the function to give us back
}

// 2. Call the function
// the code inside the function only runs once it is called
// to call it we use the name and ()
sayHelloWorld();

console.log(sayHelloWorld());

const greeting = sayHelloWorld();
console.log(greeting);

// functions can receive parameters
// these parameters act like variables inside the function
function ageChecking(age) {
  if (age < 18) {
    return 'You are underage';
  } else {
    return 'Congrats, you are above legal age';
  }
}

const myAge = 30;
console.log(ageChecking(myAge));

// we can have more than one parameter
function greet(firstName, city) {
  return `Hi, ${firstName}, welcome to ${city}!`;
}

console.log(greet('Lúcia', 'Amadora'));

function sum(firstValue, secondValue) {
  return firstValue + secondValue;
}

console.log(sum(10, 5));

// return is not mandatory, we can just have the function doing something
// if we don't need the value of it
function doesSomething() {
  console.log('I am doing something');
}
console.log('Here:', doesSomething()); // with no return, we get undefined

function multiplyByFive(value) {
  return 5 * value;
  console.log('Done'); // after the return, no code runs
}

function divideByTen(value) {
  return value / 10;
}
