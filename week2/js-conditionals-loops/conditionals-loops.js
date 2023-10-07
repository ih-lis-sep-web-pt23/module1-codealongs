// Equality Operators

// == and !=
// the double equals check for equality in a loose way
// meaning the values with different data types will be converted
console.log(10 == '10'); // true: string '10' will be converted to number
console.log(true == 1); // true: number 1 gets converted to boolean true
console.log(false != 0); // false: number 0 gets converted to boolean false

// === and !==
// triple equals checks for equality in a strict way
// no type conversion
console.log(10 === '10'); // false
console.log(true === 1); // false
console.log(false !== 0); // true

// Conditionals
// if... else

const city = 'Madrid';

if (city === 'Lisbon') {
  console.log('This runs if the condition is true');
} else {
  console.log('This runs if the condition is false');
}

// else if
const experienceYears = 3;

if (experienceYears <= 3) {
  if (experienceYears === 3) {
    console.log("You're almost a mid dev, don't worry");
  } else {
    console.log("You're a junior dev");
  }
} else if (experienceYears > 3 && experienceYears <= 5) {
  console.log("You're a mid dev");
} else {
  console.log("You're a senior dev");
}

const character = 'Harry';
let house;

if (
  character === 'Dumbledore' ||
  character === 'Harry Potter' ||
  character === 'Hermione Granger'
) {
  house = 'Gryffindor';
  console.log(house);
} else if (
  character === 'Cedric' ||
  character === 'Nymphadora' ||
  character === 'Teddy'
) {
  house = 'Hufflepuff';
} else {
  house = 'Unknown';
}

console.log(`${character} is from ${house} house`);

switch (character) {
  case 'Dumbledore':
  case 'Harry':
  case 'Hermione':
    house = 'Gryffindor';
    break; // we need a break between every different case
  case 'Cedric':
  case 'Nymphadora':
  case 'Teddy':
    house = 'Hufflepuf';
    break;
  default:
    house = 'Unknown';
    break;
}

console.log(`Switch: ${character} is from ${house} house`);

// Loops and iterations

// While
// creates a loop that runs while the condition is true
let i = 0; // i stands for iteration or index

while (i <= 50) {
  console.log('This is inside the while', i); // logging the iteration number
  i++; // incrementing by one
}

// console.log(i);

// Do While
// similar to the while
// even if the condition is false, it will always run at least once
console.log('Printing a:');
let a = 0;
do {
  console.log('This is inside the do while');
  a++;
} while (a < 0);

// For loop
// declare variable; condition; incrementation
console.log('Printing the for loop:');
const number = 40;
for (let i = 100; i >= 0; i--) {
  // if (i === number) {
  //   break;
  // }

  if (i === 20) {
    continue;
  }
  console.log(i);
}
