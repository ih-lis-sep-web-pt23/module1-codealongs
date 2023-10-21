// recap data types
// primitives: 7: numbers, strings, boolean, undefined, null, symbol, bigint
// non primitives: objects (arrays is a type of object)

const myArray = ['Lisbon', true, 123];
console.log(typeof myArray); // object

console.log(Array.isArray(myArray)); // true

// primitives
// if we assign two different variables to the same primitive value
// they will be the same
let price1 = 10.99;
let price2 = 10.99;

console.log(price1 === price2); // true

// if we assign a new variable to the value of the first,
// they will also be the same
let price3 = price1;
console.log(price1 === price3); // true

// if we reassign price1, price3 still holds the previous value of price1
price1 = 5.99;
console.log(price3); // 10.99

// immutability is what's happening
// when primitives are copied, they are copied by their value

// non-primitives
// if we assign two different variables with the same non primitive value
// they won't be the same
// non primitive don't hold a specific value, the variables hold a refence
// to the space in memory
const coursesArray1 = ['Web Dev', 'Data', 'UX/UI'];
const coursesArray2 = ['Web Dev', 'Data', 'UX/UI'];

console.log(coursesArray1 === coursesArray2); // false

const book1 = {
  title: 'Harry Potter'
};

const book2 = {
  title: 'Harry Potter'
};
// even though they look the same, these are two different objects
console.log(book1 === book2); // false

// when we copy a non primitive, we are copying the reference
// and not the value
const book3 = book1;
console.log(book3 === book1); // true

// both books change because book3 holds a reference to book1
book1.title = 'The Great Gatsby';
console.log(book3.title); // The Great Gatsby

// how can we copy the values of a non primitive then?
// shallow copies - nested properties will still be copied by reference
// objects

const movie1 = {
  title: 'Titanic',
  cast: [
    { character: 'Rose', playedBy: 'Kate Winslet' },
    { character: 'Jack', playedBy: 'DiCaprio' }
  ]
};

const movie2 = Object.assign({}, movie1);
// console.log(movie2);
movie1.title = 'Harry Potter';
console.log(movie2.title); // Titanic
movie1.cast[0].character = 'Harry';
console.log(movie2.cast); // cast is nested and is copied by reference
const movie3 = { ...movie1 };
console.log(movie3); // spread with objects also creates shallow copy

// array
const cities1 = ['Lisbon', 'Barcelona', 'Madrid', 'Paris'];
const cities2 = [...cities1]; // spread operator,
// no reference because all the values from cities1 are primitives
cities1.push('Berlin');
console.log(cities2);

// deep copy - arrays and objects
const students = [['Nijat'], ['Patrícia', 'Rúben']];
const people = JSON.parse(JSON.stringify(students));
students[1].push('Rita');
console.log(people);

const people2 = JSON.stringify(students);
console.log(typeof people2);
const people3 = JSON.parse(people2);
console.log(typeof people3);

// Mutability
// we should avoid making changes in the original array/object
// but always create a new one when manipulating data

const animals = ['dog', 'cat', 'horse'];
const scaryAnimals = ['spider', 'snake'];

// adding to an array without mutating
// create a shallow copy of both arrays
const allAnimals = animals.concat(scaryAnimals);
console.log(allAnimals);
scaryAnimals.push('shark'); // push changes the original array
console.log(allAnimals);

// spread
// shallow copy
const evenMoreAnimals = ['elephant', ...allAnimals, 'bear', 'mouse'];
console.log(evenMoreAnimals);
allAnimals.push('rabbit');
console.log(evenMoreAnimals);

// slice
// returns a copy of part of the array
// shallow copy
const firstThreeAnimals = evenMoreAnimals.slice(0, 3);
console.log(firstThreeAnimals);

// comparing non primitives
const book4 = {
  title: 'Harry Potter'
};

const book5 = {
  title: 'Harry Potter'
};

console.log(book4.title === book5.title); // false

for (let key in book4) {
  console.log('key:', key);
  for (let key2 in book5) {
    if (key === key2) {
      console.log(book4[key] === book5[key2]);
    }
  }
}
