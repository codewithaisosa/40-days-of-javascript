/* 1. Create a Book Class
--> Create a Book class with properties: title, author, pages.
--> Add a method describe() that logs: "Title: [title], Author: [author], Pages: [pages]"
--> Create at least two book objects and call the describe() method.
*/
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  describe() {
    console.log(`Title: [${this.title}], Author: [${this.author}], Pages: [${this.pages}]`);
  }
}


const firstBook = new Book('How To Train Your Dragon', 'Aisosa Evbagharu', 300);
const secondBook = new Book('Romeo & Juliet', 'Williams Shakespare', 3000);
firstBook.describe();
secondBook.describe();

/*2. Use Getters and Setters with a Temperature Class
--> Create a Temperature class with a private field _celsius.
--> Add a getter to return Fahrenheit value.
--> Add a setter to set Celsius temperature.
--> Test setting temperature and logging Fahrenheit.
*/

class Temperature {
  #_celsius = 0;
  constructor(celsius){
    this.#_celsius = celsius;
  }
  get toFahrenheit() {
    return this.#_celsius * 1.8 + 32;
  }
  set celsius(value) {
    this.#_celsius = value;
  }
}
const convert = new Temperature(100);
console.log(convert.toFahrenheit);


/*
3. Build a User Class with Public & Private Fields
--> Fields: name, #password
--> Add a method checkPassword(pw) that checks if it matches #password.
--> Show how private fields can’t be accessed directly outside the class.
*/

class User {
  name;
  #password = 83930938939;
  constructor(userName) {
    this.name = userName
  }
  checkPassword(pw) {
    console.log(this.#password === pw);
  }
}
const newUser = new User('Aisosa');
newUser.checkPassword(83930938939);

/*
4. Inheritance — Vehicle and Car
--> Vehicle class has fields: make, model, and method start()
--> Car extends Vehicle, adds fuelType
--> Override the start() method in Car to print: "Starting [fuelType] car: [make] [model]"
*/
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    console.log(`${this.model} started!`);
  }
}

class Car extends Vehicle {
  constructor(make, model, fuelType) {
    super(make, model);
    this.fuelType = fuelType;
  }
  start() {
    console.log(`Starting [${this.fuelType}] car: [${this.make}] [${this.model}]`);
  }
}

const car = new Car("Toyota", "Camry", "Gasoline");
car.start();

/*
5. Use a Static Method
--> Create a class MathUtils with static methods: add(a, b), subtract(a, b), randomInt(min, max)
--> Call the methods without creating an object.
*/
class MathUtils {
  static add(a, b) {
    return a + b;
  }
  static subtract(a, b) {
    return a - b;
  }
  static randomInt(min, max) {
    const a = min;
    const b = max;
    return a > b ? a : b;
  }
}
console.log(MathUtils.add(1, 1));
console.log(MathUtils.subtract(10, 1));
console.log(MathUtils.randomInt(10, 100));

/*6. Smart Light Bulb Class with Access Control

-->Create a SmartLightBulb class:
-------->Public method: turnOn(), turnOff()
-------->Private method: #connectToWiFi()
-------->turnOn() first calls #connectToWiFi() and then logs: "Light is ON"
-------->Static method: info() — logs "SmartLightBulb v1.0 supports remote control and scheduling."
-->Try accessing the private method directly and observe the error.
*/
class SmartLightBulb {
  #connectToWifi() {
    console.log('connected to WiFi');
  }
  static info() { console.log('SmartLightBulb v1.0 supports remote control and scheduling.') }

  turnOn() {
    this.#connectToWifi();
    console.log('Light is ON');
  }
  turnOff() {
    console.log("Light is OFF");
  }
}
const bulbOne = new SmartLightBulb();
bulbOne.turnOn();
bulbOne.turnOff();


/*7. Animal Class and Subclasses

--> Base Class: Animal(name, sound)
------->Method: makeSound() logs: "The [name] says [sound]"
--> Subclass 1: Dog(name) — inherits from Animal
------->Overrides makeSound() → "The Dog [name] barks!"
--> Subclass 2: Cat(name) — overrides makeSound() → "The Cat [name] meows!"
--> Call super() inside each subclass constructor
--> Add a shared method sleep() in Animal and test with both Dog and Cat instances.
*/
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
  sleep() {
    console.log(`The ${this.name} is sleeping...`);
  }
}
class Dog extends Animal {
  constructor(name, sound) {
    super(name, sound);
  }
  makeSound() {
    console.log(`The Dog ${this.name} barks!`);
  }
}
class Cat extends Animal {
  constructor(name, sound) {
    super(name, sound);
  }
  makeSound() {
    console.log(`The Cat ${this.name} meows!`);
  }
}

const cat = new Cat('persian cat');
const bingo = new Dog('bingo');
cat.makeSound();
bingo.makeSound();

cat.sleep();
bingo.sleep();
