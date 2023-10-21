// global scope
// declared at the topmost level, can be accessed inside any function
const message =
  'This is in the global scope and can be accessed from anywhere!';

function getTheMessage() {
  console.log(message);
}

getTheMessage();

// function/local scope
// variables created inside the local scope can only be used there
function sayHelloFromLocalScope() {
  const hello =
    'This is in the local scope and can only be accessed from inside this function';

  console.log(hello); // inside the local scope I have access to it
  // return hello;
}
// sayHelloFromLocalScope();

// console.log(hello); // hello is not defined and we cannot access it here

// block level scope
for (let i = 0; i < 20; i++) {
  // console.log(i); // I have access to the i variable here
}

// console.log(i); // but not here

// Hoisting
// JS feature where the variable and function declarations are moved to the top of their scope

// console.log(lastName); // cannot access before initialization
// console.log(fisrtName); // variable does not exist
const lastName = 'Duarte';

// sayHi();

// I can call this before I declare it
// function sayHi() {
//   console.log('hi');
// }

// if we use variables to declare functions
// we won't be able to call them before the declaraction
const sayHi = () => {
  console.log('hi');
};

// Shadowing
// I can reuse variable names if I declare them in different scopes
// I should avoid it tho
const bootcamp = 'Web Dev';

function printBootcamp() {
  const bootcamp = 'Data';

  console.log(bootcamp);
}

printBootcamp();
