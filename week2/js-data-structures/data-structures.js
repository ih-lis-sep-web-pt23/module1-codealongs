// Public Library Organization

// create 2 book objects with title, author and category
const book1 = {
  title: 'JavaScript for Dummies',
  author: 'Lúcia',
  category: 'Technical books'
};

const book2 = {
  title: 'My Life',
  author: 'me',
  category: 'Self-help'
};

// create 1 client object with fullName and id
const client = {
  fullName: 'Lúcia Duarte',
  id: 5
};

// connect the books to the client
client.basket = [book1, book2];

// create a empty library and add the client to it
const library = [];

library.push(client);

// create a new book and add it to the client.
// Don't forget the client is now inside the library

const book3 = {
  title: 'Harry Potter',
  author: 'J.K.Rowling',
  category: 'Fantasy'
};

library[0].basket.push(book3);

// iterate over the library and books and print it:
// End result shloud look like this:

// Lúcia Duarte's books:
// - JavaScript for Dummies, Lúcia
// - My Life, me
// - Harry Potter, J.K.Rowling

console.log(library[0]);

// using for loops
for (let i = 0; i < library.length; i++) {
  console.log(`${library[i].fullName}'s Books:`);

  for (let j = 0; j < library[i].basket.length; j++) {
    console.log(
      `- ${library[i].basket[j].title}, by ${library[i].basket[j].author}`
    );
  }
}

// using for.each
library.forEach(element => {
  console.log(`${element.fullName}'s Books:`);

  console.log(`- ${element.basket[0].title}, by ${element.basket[0].author}`);
  console.log(`- ${element.basket[1].title}, by ${element.basket[1].author}`);
  console.log(`- ${element.basket[2].title}, by ${element.basket[2].author}`);
});

// using for.each
library.forEach(client => {
  console.log(`${client.fullName}'s Books:`);

  client.basket.forEach(book => {
    console.log(`- ${book.title}, by ${book.author}`);
  });
});

// using for of
for (let client of library) {
  console.log(`${client.fullName}'s Books:`);

  for (let book of client.basket) {
    console.log(`- ${book.title}, by ${book.author}`);
  }
}
