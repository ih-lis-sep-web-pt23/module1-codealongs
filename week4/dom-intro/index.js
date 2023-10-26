// document is a special kind of object that contains all the properties of our page
// also has the methods that allow DOM manipulation
console.log(document);

// getting an HTML element by its id: id=cat
// gets the first element with the provided id
const catDiv = document.getElementById('cat');
console.log(catDiv);

// We can change the div to now hav some text inside
// we just manipulated the DOM!
catDiv.innerText = 'I am a cat!';

// we can also change the styles programmatically
// we always need to access the 'style' property and then
// the CSS property we want. Since its JS, its camelCase
catDiv.style.backgroundColor = 'red';

// getting elements by className
// it returns an array like object even if we only have one class with this name
// its PLURAL
const dogDivs = document.getElementsByClassName('dog');

// this returns an HTML collection
// seems like an array but it's not quite
// we can use the spread operator to convert the collection into an array
// and then use all the array methods we want
console.log(dogDivs);

// converting HTML collection into an array
const dogsArray = [...dogDivs];

const dogNames = ['Benji', 'Uva', 'Pantufa'];

dogsArray.forEach((dogDiv, index) => {
  dogDiv.innerText = `${dogNames[index]}`;
});

// HTML Collection with all the divs
const allDivs = document.getElementsByTagName('div');
console.log(allDivs);

// query selector
// will return the first element that matches the query
// in this case, we are using the dot . so we want a className
const firstDog = document.querySelector('.dog');
console.log(firstDog);

const firstCat = document.querySelector('#cat'); // using the # for id
console.log(firstCat);

const firstDiv = document.querySelector('div'); // simply pass the html tag for the tag
console.log(firstDiv);

const allDogs = document.querySelectorAll('.dog');

// this returns a node list
console.log(allDogs);

// by using query selector all, I don't need to convert to an array
// its already iterable
allDogs.forEach(dog => {
  dog.innerText += ' Great dog!';
});

const title = document.querySelector('h1');
console.log('The class name is:', title.className);
title.className = 'bigTitle';
console.log('The class name is:', title.className);
