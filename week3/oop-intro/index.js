// OOP: Obejct Oriented Programming
// Programming paradigm where we structure our code around objects
// we can represent real life using object

// Object literal syntax to represent a dog
const dog1 = {
  name: 'Benji',
  age: 2
};

const dog2 = {
  name: 'Pantufa',
  age: 6
};

// factory function: returns the dog object
function dogFactory(name, age) {
  return {
    name: name,
    age: age,
    bark: function () {
      console.log('WOOF!');
    },
    growOlder: function () {
      this.age += 1; // to access the property age of this dog, we use the keyword 'this'
    }
  };
}

const dog3 = dogFactory('Snoopy', 8);

console.log(dog3);

dog3.bark();
dog3.growOlder();

console.log(dog3.age);

// Create a factory function for a person
// properties: firstName, lastName
// and a greet method that logs "Hi, my name is XXX YYYY, welcome to Ironhack"

function humanFactory(firstName, lastName) {
  return {
    // name: `${firstName} ${lastName}`,
    // name: firstName + ' ' + lastName,
    firstName: firstName,
    lastName: lastName,
    greet: function () {
      console.log(
        `Hi, my name is ${this.firstName} ${this.lastName}, welcome to Ironhack!`
      );
    }
  };
}

const lucia = humanFactory('Lúcia', 'Duarte');
lucia.greet();
lucia.firstName = 'Ana';
lucia.greet();

// Class
// A class is a blueprint for an object
// Class names should be PascalCase -> Uppercased

class Person {
  // constructor is a special method that creates the instance of the class
  // needs to be called constructor
  constructor(name, job) {
    this.name = name;
    this.job = job;
    this.energy = 100;
    this.age = 0;
  }

  greet() {
    console.log(`Hi, my name is ${this.name}`);
  }

  work() {
    this.energy -= 10;
  }

  sleep() {
    this.energy += 10;
  }
}

// creating a new instance from the class Person
const maik = new Person('Maik', 'Developer');

const nijat = new Person('Nijat', 'Student');

maik.work();
console.log(maik.energy);

// Inheritance
// One of the benefits of classes is that we can extend them
// meaning that we'll get everything the other class has
// this avoids repetition

class Baby extends Person {
  // because Person receives name and job,
  // I need to add them to the constructor
  // we pass it to the Person class by calling super()
  constructor(name) {
    super(name);
    this.gender = null;
  }

  greet() {
    super.greet();
    console.log('bababa');
    this.cry();
  }

  cry() {
    console.log('BUAHAHAH');
    this.energy -= 20;
  }

  birth() {
    if (true) {
      this.gender = 'boy';
    } else {
      this.gender = 'girl';
    }
  }
}

const carlos = new Baby('Carlos', 'baby', 'boy');
carlos.cry();
carlos.sleep();
// carlos.greet();
console.log(carlos);

const patricia = new Person('Patrícia');

// one downside of inheritance is that we get all the properties and
// methods from the extended class, even if it does not make sense
