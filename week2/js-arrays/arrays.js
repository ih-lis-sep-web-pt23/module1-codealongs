// Arrays
// Data structure that allows to group a colection of elements inside a variable
// can contain any data type

const names = ['Lúcia', 'André', 'Maik'];
const emptyArray = [];

// can hold mixed values
const mixedArray = [true, 'Lisbon', 2023];

// we can access the values by the index
console.log(mixedArray[1]); // Lisbon

// we can use length to know how many elements the array has
console.log(mixedArray.length); // 3

// adding a new element to an array
// push adds the value at the end of the array
const newName = 'Carolina';
names.push(newName);

console.log(names);

// adds element to the beggining of the array
names.unshift('Juan');
console.log(names);

// remove the first element
names.shift();
console.log(names);

// remove the last element
names.pop();
console.log(names);

// removes element from provided location
// first we provide the starting point (always 0 based)
// then we say how many elements we want to delete
names.splice(1, 1);
console.log(names);

// looping over arrays
for (let i = 0; i < mixedArray.length; i++) {
  console.log(mixedArray[i]);
  // console.log(mixedArray[0]): first iteration
  // console.log(mixedArray[1]): second iteration
  // console.log(mixedArray[2]): third iteration
}

// forEach
mixedArray.forEach((element, index) => {
  console.log(`Inside the forEach at index ${index}: ${element}`);
});

const cities = ['Lisbon', 'Porto', 'Amadora'];

// for of
for (city of cities) {
  console.log(`Welcome to ${city}`);
}

// Split
const reallyLongText = `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.`;

const wordArray = reallyLongText.split(' ');
console.log(wordArray.length);
