// function declaraction
function calculateSum(x, y) {
  return x + y;
}

// function expression
// we can assign a function to a variable
// the function itself is anonymous, it has no name
// but we use the variable that holds it to call it
const greetPeople = function () {
  console.log('Hi, everyone!');
};

greetPeople();

// callback
function eatDinner(bananas) {
  console.log('Eating dinner...');
  // undefined(): if we call the function when the eatDinner is invoked:
  // eatDinner(eatDessert())
  bananas();
}

const eatDessert = function () {
  console.log('Eating dessert');
};

// when passing the function as argument, we don't use the ()
eatDinner(eatDessert);

// arrow function
const simpleWelcome = () => {
  console.log('Welcome');
};

simpleWelcome();

const personalizedWelcome = name => {
  console.log(`Welcome, ${name}`);
};

personalizedWelcome('Lúcia');

const createUser = (username, email) => {
  return {
    username: username,
    email: email
  };
};

const myUser = createUser('Lúcia', 'lucia@me.com');
console.log(myUser);

// arrow function can also support single line
// we omit the curly brackets and the return keyword
const multiplyValues = (x, y) => x * y;

const sayHello = () => console.log('Hello');

const something = sayHello();
console.log('something:', something);

console.log(multiplyValues(1, 2));
