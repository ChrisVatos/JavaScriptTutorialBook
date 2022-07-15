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









