console.log('JS loaded!');

// getting the html elements button
const startButton = document.getElementById('start-game');
const gameDiv = document.querySelector('.game');
const matrixDiv = document.querySelector('.matrix');
const body = document.querySelector('body');
// getting all the buttons inside the matrix div
const matrixButtons = document.querySelectorAll('.matrix button');
const feedback = document.querySelector('.get-feedback');
const liArray = document.querySelectorAll('.get-feedback li');
const sendButton = document.getElementById('send-review');
const reviewsDiv = document.querySelector('.display-feedback');

// addEventListener lets us define what event we want to listen to
// we can then react when that event happens
startButton.addEventListener('click', () => {
  // when the button is clicked, we present a popup asking our user they name
  const userName = window.prompt('What is your name?');
  console.log(userName); // this holds whatever the user types

  // we can create new html elements by using the createElement method
  const welcomeParagraph = document.createElement('p');
  // assign the text to the paragraph we created
  welcomeParagraph.innerText = `Welcome to the Matrix, ${userName}`;

  // inject the paragraph into the game div
  gameDiv.appendChild(welcomeParagraph);

  // showing the matrix buttons
  matrixDiv.style.display = 'inline';
});

// adding an event listener for all the buttons
matrixButtons.forEach(button => {
  button.addEventListener('click', () => {
    // when a button is clicked, I want to get its class
    const attribute = button.getAttribute('class');
    console.log(attribute);

    // I then assign that class to the body
    body.setAttribute('class', attribute);

    if (attribute === 'white') {
      feedback.style.display = 'inline';
      matrixDiv.style.display = 'none';
    }
  });
});

liArray.forEach(item => {
  // we can have access to the event object to know where the user clicked
  item.addEventListener('click', event => {
    console.log(event.currentTarget.innerText);

    const userRate = document.getElementById('user-rate');
    userRate.innerText = `You rated: ${event.currentTarget.innerText}`;
  });
});

sendButton.addEventListener('click', () => {
  // getElements returns a HTML collection, we only want the first element
  // could also use query selector
  const input = document.getElementsByTagName('input')[0];
  // what the user wrote will be inside the input value
  console.log(input.value);

  // create an h3 and assign the inner text to what the user wrote
  const review = document.createElement('h3');
  review.innerText = input.value;

  reviewsDiv.appendChild(review);
  reviewsDiv.style.display = 'inline';

  const questionDiv = document.querySelector('.question');
  questionDiv.style.display = 'none';

  const form = document.querySelector('form');

  // stopping the default behaviour of submiting a form
  // which is reloading the page
  form.addEventListener('submit', event => {
    event.preventDefault();
  });
});
