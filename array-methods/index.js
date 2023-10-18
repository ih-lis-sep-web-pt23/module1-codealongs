// array methods

const originalArray = ['Lúcia', 'André', 'Maik', 'Eric', 'Gonçalo', 'Katia'];

// const printNames = (name, index) => console.log(index, name);

// for each
// originalArray.forEach(printNames);

// iterates over the array
// uses an anonymous arrow function
const forEachChanges = originalArray.forEach((name, index) => {
  // console.log(index, name);
  return name.toUpperCase();
});
console.log('forEach:', forEachChanges);
console.log('original forEach', originalArray);

// map
// creates a new array: DOES NOT CHANGE THE ORIGINAL ARRAY
// transforms the data intro a new array with the same size as the original
const upperCasedArray = originalArray.map(name => {
  return name.toUpperCase();
});

console.log('Original:', originalArray);
console.log('Mapped:', upperCasedArray);

// one liner version
const upperCasedArrayTwo = originalArray.map(name => name.toUpperCase());
console.log(upperCasedArrayTwo);

// grade the students

// I want to grade these students based on 2 projects (40% of the final grade)
// and their final exam (60% of final grade)
// return an array with just name and final grade
const students = [
  {
    fullName: 'Tony Parker',
    firstProject: 80,
    secondProject: 75,
    finalExam: 90
  },
  {
    fullName: 'Marc Barchini',
    firstProject: 84,
    secondProject: 65,
    finalExam: 65
  },
  {
    fullName: 'Claudia Lopez',
    firstProject: 45,
    secondProject: 95,
    finalExam: 99
  },
  {
    fullName: 'Alvaro Briattore',
    firstProject: 82,
    secondProject: 92,
    finalExam: 70
  },
  {
    fullName: 'Isabel Ortega',
    firstProject: 90,
    secondProject: 32,
    finalExam: 85
  },
  {
    fullName: 'Francisco Martinez',
    firstProject: 90,
    secondProject: 55,
    finalExam: 78
  },
  {
    fullName: 'Jorge Carrillo',
    firstProject: 83,
    secondProject: 77,
    finalExam: 90
  },
  {
    fullName: 'Miguel López',
    firstProject: 80,
    secondProject: 75,
    finalExam: 75
  },
  {
    fullName: 'Carolina Perez',
    firstProject: 85,
    secondProject: 72,
    finalExam: 67
  },
  {
    fullName: 'Ruben Pardo',
    firstProject: 89,
    secondProject: 72,
    finalExam: 65
  }
];

const finalGrades = students.map(student => {
  const projectsAvg = (student.firstProject + student.secondProject) / 2;
  const finalGrade = student.finalExam * 0.6 + projectsAvg * 0.4;

  return {
    fullName: student.fullName,
    finalGrade: Math.round(finalGrade)
  };
});

console.log(finalGrades);

// filter
// returns an array with all the elements that pass
// the filtering condition
// creates a new array: DOES NOT CHANGE THE ORIGINAL ARRAY

const filteredNames = originalArray.filter(name => {
  return name.length >= 5;
});

console.log(filteredNames);

// return the places with a pool that are cheaper than 300
const placesArray = [
  {
    title: "Awesome Suite 20' away from la Rambla",
    price: 200,
    type: 'Private Room',
    pool: true,
    garage: false
  },
  {
    title: 'Private apartment',
    price: 190,
    type: 'Entire Place',
    pool: true,
    garage: true
  },
  {
    title: 'Apartment with awesome views',
    price: 400,
    type: 'Entire Place',
    pool: false,
    garage: false
  },
  {
    title: 'Apartment in la Rambla',
    price: 150,
    type: 'Private Room',
    pool: false,
    garage: true
  },
  {
    title: 'Comfortable place in Barcelona´s center',
    price: 390,
    type: 'Entire place',
    pool: true,
    garage: true
  },
  {
    title: 'Room near Sagrada Familia',
    price: 170,
    type: 'Private Room',
    pool: false,
    garage: false
  },
  {
    title: 'Great house next to Camp Nou',
    price: 140,
    type: 'Entire place',
    pool: true,
    garage: true
  },
  {
    title: 'New apartment with 2 beds',
    price: 2000,
    type: 'Entire place',
    pool: false,
    garage: true
  },
  {
    title: 'Awesome Suite',
    price: 230,
    type: 'Private Room',
    pool: false,
    garage: false
  },
  {
    title: "Apartment 10' from la Rambla",
    price: 930,
    type: 'Entire place',
    pool: true,
    garage: true
  }
];

const cheapWithPool = placesArray.filter(place => {
  // return place.pool === true && place.price < 300;

  return place.pool && place.price < 300;

  // if (place.pool === true && place.price < 300) {
  //   return true;
  // } else {
  //   return false;
  // }
});

console.log(cheapWithPool);

// reduce
// turns a list of values into a single value

const numbers = [1, 2, 3, 4, 5];

// const sumOfNumbers = numbers.reduce((acc, cur) => {
//   console.log(`The accumulator is ${acc} and the current value is ${cur}`);
//   return acc + cur;
// }, 0); // -> Starting value is passed here

// if we don't pass a starting value
// the accumulator will be the first element of the array
// and the iterations will start at the second element
const sumOfNumbers = numbers.reduce((acc, cur) => {
  console.log(`The accumulator is ${acc} and the current value is ${cur}`);
  return acc + cur;
});

console.log(sumOfNumbers);

const sum = numbers.reduce((acc, cur) => {
  return acc + cur;
});

const average = sum / numbers.length;

const avg =
  numbers.reduce((acc, cur) => {
    return acc + cur;
  }) / numbers.length;

console.log(average);

const allTheNames = originalArray.reduce((acc, cur) => {
  return acc + cur;
});

console.log(allTheNames);

// reverse
// like the name says, it reverses the order of the elements inside the array
// MUTATES THE ORIGINAL ARRAY

const reversedNumbers = numbers.reverse();
console.log(reversedNumbers);
console.log(numbers);

// creates a copy of the array using the spread operator ...
const copyArray = [...numbers];
copyArray.reverse();
console.log(copyArray);
console.log(numbers);

// sort
// MUTATES THE ORIGINAL ARRAY
const randomNumbers = [23, 1, 56, 195, 45, 0, 300, 256];
randomNumbers.sort();

console.log(randomNumbers);

// we can pass a compare function to our sort method

// ordering in ascending
randomNumbers.sort((a, b) => a - b);
console.log(randomNumbers);

// pseudo-code, not really working
function compare(a, b) {
  if (a - b > 0) {
    // a is greater than b because the result of a - b is a positive value
    // so we switch b to come before a
  }
  if (b - a > 0) {
    // b is greater than a
    // switch a to be before b
  }
  if (a - b === 0) {
    // they are the same, keep as is
  }
}
