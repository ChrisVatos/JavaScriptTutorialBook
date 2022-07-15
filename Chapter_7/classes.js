/* Classes --> Are a blueprint for object creation
           --> Classes enable object-oriented programming    */

/* Object Oriented Programming (OOP) --> Code is structured into objects, leading to more maintanable and re-usable code
                                     --> Classes are blueprint for creating objects (Parent = Animal, Child = Dog) 
                                     --> In JS, we will use object, but they are not the star of our code so to speak   */
                                
/* Classes and Objects --> Objects are a collection of properties and methods
                       --> Classes in JS encapsulate data and functions that are part of that class 
                            --> If you create a class, you can create objects using that class
                            --> "this" keyword refers to the object it belongs to
                        
Format:     class ClassName {
                constructor(prop1, prop2) {
                    this.prop1 = prop1;
                    this.prop2 = prop2;
                }
            }
 
            let obj = new ClassName("arg1", "arg2");        */

class Dog {
    constructor(dogName, weight, age, breed) {
        this.dogName = dogName;
        this.weight = weight;
        this.age = age;
        this.breed = breed;
    }
}

let luna = new Dog("Luna", 50, 2, "Aussiedoodle");
console.log(`Hi, my name is ${luna.dogName}, a ${luna.age} year old ${luna.breed} that weighs ${luna.weight} pounds`);

// Classes are just special type of functions. We coudld create Dog objects by defining a function as done in the last chapter.


/* Classes --> Blueprints for object creation
           --> Use the "class" keyword to tell JS we want to create a class
           --> Convention to start class names with a capital letter
           --> Classes are useful because we need to do a lot less typing to create x amount of dog objects
               if we have a dog class
               --> Without a dog class, we will have to specify the propertie names each time, leaving room for errors  */


/* Constructors --> Constructor method is a special method we use to initialize objects with our class blueprint
                --> Only one constructor in a class
                --> Constructor contains properties we will set when initiating the class
                --> "new" keyword tells JS to look for the constructor in the desginated class and create a new object
                -->  The constructor gets called and returns an instance of the object with the specified properties 
                --> This returned object can be stored in a  variable

*/
        
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let person = new Person("Chris", "Vatos");  
console.log("Hi", person.firstName);    // Outputs: Hi Chris

let person2 = new Person("Valadi");
console.log("Hi", person2.firstName, person2.lastName);   // Outsputs: Hi Valadi udefined (Doesn't crash)

// Also possible to specify default values in constructors

class PersonUnknown {
    constructor(firstName, lastName = "Doe") {   // If no lastName argument passed in, lastName property of object is "Doe"
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let person3 = new PersonUnknown("George");
console.log("Hi", person3.firstName, person3.lastName);


// Practice Exercise 7.1

class PersonExercise {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let Sadek = new PersonExercise("Sadek", "Mahmodd");
let Nicolas = new PersonExercise("Nicolas", "Paccico");

console.log("Hello", Sadek.firstName, Sadek.lastName)
console.log("Hello", Nicolas.firstName, Nicolas.lastName)


/* Methods --> In a class, we can specify functions that make the object do certain things using 
               the object's own properties  (Syntax: this.propertyName)
           --> Functions on a class are called methods
           --> When defining these methods, we don't use the function keyword. We start directly with the name 
           --> Methods can take parameters and return results     */

class PersonWithMethod {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet() {
        console.log("Hi there, I'm ", this.firstName);
    }

    compliment(object, name) {
        return ("That's a wonderful " + object + " " + name)
    }
}

let lambro = new PersonWithMethod("Lambro", "Vatos");
lambro.greet();
let compliment = lambro.compliment("Scooter", "Paul");
console.log(compliment);


// Practice Exercise 7.2
class PersonExercise2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName() {
        return (this.firstName + this.lastName);
    }
}

let Dimitri = new PersonExercise2("Dimitri", "Walter");
let Theo = new PersonExercise2("Theo", "Tsinas");

console.log(Dimitri.fullName());
console.log(Theo.fullName());


/* Properties --> Also called fields
              --> Hold the data of the class
              --> Not desirable to provide direct access to our class' properties
              --> To add properties to a class that aren't accessible from the outside, prefix them with #  */ 

class Person5 {
    #firstname;
    #lastname;
        constructor(firstname, lastname) {
        this.#firstname = firstname;
        this.#lastname = lastname;
    }
}

let p = new Person5("Maria", "Saga");
console.log(p.firstName);       // Outputs: undefined


/* Getters and Setters --> Used to get data fields from the class and set data fields on the class
                       --> Often called "accessors"
                       --> They look like functins because of the () but they are not
                       --> They start with the "get" and "set" keywords
                       --> Good practice to make properties as private as possible and provide access to them 
                           using getters and setters
                       --> Getter returns the value of the property
                       --> Setter takes a parameter and assigns the new value tot he property   */

 class Person6 {
  #firstname;   // Use # before property
  #lastname;    // Use # before property
  constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
  }
  get firstname() {
    return this.#firstname;
  }
  set firstname(firstname) {
    this.#firstname = firstname;
  }
  get lastname() {
    return this.#lastname;
  }
  set lastname(lastname) {
    this.#lastname = lastname;
  }
}

let p2 = new Person6("Maria", "Saga");

// Using Getter
console.log(p2.firstname);      // Do not put () after the getter or else an error will be raised. Getter is not a function

//Using Setter
p2.firstname = "Adnane";        // Adnane is like the parameter here
console.log(p2.firstname);      // Outputs: Adnana


/* Inheritance --> One of the key concepts in OOP
               --> Concept that classes can have child classes that inherit properties and methods from the parent class
               --> The "extends" keyword specifies that a certain class is a child class of some other class
               --> The "super" keyword calls the constructor from the parent and makes sure that the fields 
                   from the parent are set as well and that the methods are available without having to do 
                   anything else: they are automatically inherited
               --> Calling super() is mandatory if you are in a class that is inherting from another class 
               --> Getters and setter are also inherited in the child class    */

class Vehicle {
  constructor(color, currentSpeed, maxSpeed) {
    this.color = color;
    this.currentSpeed = currentSpeed;
    this.maxSpeed = maxSpeed;
  }
  move() {
    console.log("moving at", this.currentSpeed);
  }
  accelerate(amount) {
    this.currentSpeed += amount;
  }
}

class Motorcycle extends Vehicle {
    constructor(color, currentSpeed, maxSpeed, fuel) {
      super(color, currentSpeed, maxSpeed);     // Calls the constructor from the parent
      this.fuel = fuel;
    }
    doWheelie() {
      console.log("Driving on one wheel!");
     }
}

let motor = new Motorcycle("Black", 0, 250, "gasoline");
console.log(motor.color);   // Outputs: Black
motor.accelerate(50);       // Vehicle method
motor.move();               // Vehicle method


/* Prototypes --> Mechanism that makes it possible to have objects in JS
              --> When nothing is specified when creating a class, the objects inherit from the Object.prototype prototype
                   --> Object.prototype prototype is the base object that is always on top of the inheritance tree and 
                   therefore always present in our objects
              --> There is a "prototype" property available on all classes and it is always: className.prototype
                   --> The "prototype" property holds all the properties and methods of an object    */

let p9 = new Person("George", "Vatos");

// Adding a method to a class using the prototype property
Person.prototype.introduce =  function() {      // Use className.prototype to add method
    console.log("Hi, I'm " + this.firstName);
}
p9.introduce();     //Outputs: Hi, I'm George


// Adding a property to a class using the prototype proeprty
Person.prototype.favoriteColor = "green";       // Use className.prototype to add fields as well
console.log(p9.favoriteColor);


// Practice Exercise 7.3
class Animal {
    constructor(species, sound) {
        this.species = species;
        this.sound = sound;
    }

    makeNoise() {
        console.log(`The ${this.species} goes ${this.sound}`);
    }
}

let pig = new Animal("pig", "oink");
let cow = new Animal("cow", "moooo");

Animal.prototype.giveBirth = function() {
    console.log("Looks like I'm having a baby " + this.species);
}

console.log(pig);
console.log(cow);
pig.makeNoise();
cow.makeNoise();
pig.giveBirth();
cow.giveBirth();





















