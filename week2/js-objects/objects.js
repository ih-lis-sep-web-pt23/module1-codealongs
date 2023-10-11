// Objects
// key-value pair inside curly brackets

// objects group information together
const user = {
  username: 'luciaduarte',
  email: 'lucia@me.com',
  firstName: 'Lúcia',
  lastName: 'Duarte'
};

// like arrays, htye can hold any data type inside
const ironhackPortugal = {
  city: 'Lisbon',
  courses: ['WebDev', 'Data', 'UX/UI'],
  isOpen: true,
  nrOfStudents: 50,
  10: 'ten'
};

ironhackPortugal.courses.push('Cyber');
console.log(ironhackPortugal.courses);

// accessing properties
console.log(ironhackPortugal.city); // using dot notation: nameOfObject dot nameOfKey
console.log(ironhackPortugal['isOpen']); // nameOfObject squareBrackets nameOfKey as string
// console.log(ironhackPortugal.10);
console.log(ironhackPortugal['10']); // if the key is a number, we must use bracketNotation

// adding properties
ironhackPortugal.country = 'Portugal';
ironhackPortugal['nrOfClassrooms'] = 4;

console.log(ironhackPortugal);

// Check if property exists
const myComputer = {
  brand: 'Apple',
  model: 'MacBook Air'
};

console.log('brand' in myComputer); // true
console.log('year' in myComputer); // false

// Updating
myComputer.brand = 'MacBook Pro';
myComputer.brand = 'Apple';
myComputer.model = 'MacBook Pro';

// Removing values
delete myComputer.brand;

console.log(myComputer);

// Iterating

// looping over the keys of the object
const allKeys = Object.keys(user); // returns array of all the keys
console.log(allKeys);

const allValues = Object.values(user);
console.log(allValues);

// for in loop
// iterates over all the keys of an object
for (let key in user) {
  console.log(key);
}

// accessing the values
for (let bananas in user) {
  console.log(user[bananas]);
}
// console.log(user.key);
