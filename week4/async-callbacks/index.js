// synchronicity
// single threaded - from top to bottom in one go
// synchronous - does not move to following line without finishing the first

// 1. Hungry
// 2. My house is a mess
// 3. I have a party to go to

// Sync - one thing happens after the other
// 1. Cook
// 2. Clean the house
// 3. Get ready and leave for the party (probably be late)

// Async - having multiple things happening at once
// 1. Order food
// 2. Clean the house while I want for the food
// 3. Leave in time for the party

// Asynchronicity
// setTimeout
setTimeout(() => {
  console.log('Hello after 3 seconds');
}, 3000);

console.log('Hi before the setTimeout');

// cancel a timeout
const timeoutId = setTimeout(() => {
  console.log('I will cancel this');
}, 3000);

setTimeout(() => {
  clearTimeout(timeoutId);
}, 2000);

// setInterval
// similar to setTimeout but executes the code multiple times
// whithin the provided interval
// setInterval(() => {
//   console.log('Hi from setInterval');
// }, 2000);

// when using setInterval, it's important to set a stopping condition
// let i = 0;
// const intervalId = setInterval(() => {
//   i++;
//   console.log(`${i} seconds have passed since this started`);

//   if (i > 10) {
//     clearInterval(intervalId);
//   }
// }, 1000);

// using setInterval, create a countdown to enter the new year!
// From 10 to Happy New Year!
let i = 5;
const intervalId = setInterval(() => {
  if (i > 0) {
    console.log(i);
  }
  i--;

  if (i <= -1) {
    console.log('Happy New Year!');
    clearInterval(intervalId);
  }
}, 1000);
