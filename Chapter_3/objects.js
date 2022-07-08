/* Objects
--> Used to describe real-life objects or more complex abstract concepts 
--> Arrays are a special type of object 
--> Objects have properties and can perform actions 
--> An object is a chance to group multiple variables into one (recognized by {}) */

let arr = [1, 2, 3];
console.log(typeof(arr));   //Ouputs: object

// Below, we created a dog variable and gave this an object as a value
// Recognize this is an object by the curly brackets {}. Everything inside the {} are properties and their values
let dog = { dgoName: "JavaScript",
            weight: 2.4,
            color: "brown",
            breed: "aussiedoodle",
            age: 3,
            burglarBiter: true
          };

// Accessing Object Properties
let dogColor1 = dog["color"];
console.log(dogColor1);
let dogColor2 = dog.color;  // Similar to using methods. More intuitve and easier to comprehend
console.log(dogColor2);

//The difference between properties and methhods is a lack of parentheses for properties when calling them


// Updating Objects --> We can change the values of the properties of JS objects 
dog["color"] = "blue";
dog.weight = 2.3;
console.log(dog);

dog.age = "three";  // Allowed; JS will change the value and data type of this property
console.log(dog);


//Practice Exercise 3.4
let myCar = { make: "Lexus",
              model: "LFA",
              kilometers: 20000,
              range: 300,
              color: "black"
            }

let variable1 = "color";
myCar[variable1] = "white";

variable1 = "forSale";
myCar[variable1] = true;

console.log(myCar.make, myCar.model, myCar.color);
console.log(myCar.forSale);


/* Working with Objects and Arrays 
--> Often times, objects and arrays are combined when working with JS */

// Objects in Objects --> Objects can be nested within other objects
let company = { companyName: "Healthy Candy",
                activity: "food manufacturing",
                address: {
                    street: "2nd street",
                    number: "123",
                    zipcode: "33116",
                    city: "Miami",
                    state: "Florida"
                },
                yearOfEstablishment: 2021
}

company.address.zipcode = "33117";      //Both are valid ways of accessing/modifying object properties
company["address"]["number"] = "100";   //Both are valid ways of accessing/modifying object properties

// Arrays in Objects
company = { companyName: "Healthy Candy",
                activities: ["food manufacturing", "improving kids' health", "manufacturing toys"],
                address: {
                    street: "2nd street",
                    number: "123",
                    zipcode: "33116",
                    city: "Miami",
                    state: "Florida"
                },
                yearOfEstablishment: 2021
}

console.log(company.activities[1]);     //Outputs: improving kids' health

//Objects in Arrays --> Array is recongized by the square brackets [] and the objects by the curly brackets {}
let addresses = [{
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
  },
  {
    street: "1st West avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas"
  }];

console.log(addresses[0].street);    //Outputs: 2nd street

//Objects in Arrays in Objects
company = { companyName: "Healthy Candy",
                    activities: ["food manufacturing", "improving kids' health", "manufacturing toys"],
                    address: [{
                      street: "2nd street",
                      number: "123",
                      zipcode: "33116",
                      city: "Miami",
                      state: "Florida"
                    },
                    {
                      street: "1st West avenue",
                      number: "5",
                      zipcode: "75001",
                      city: "Addison",
                      state: "Texas"
                    }],
                    yearOfEstablishment: 2021 
                  };

console.log(company.address[0].street)  //Outputs: 2nd steet

/* Rule of Thumb
--> Whenever you need a list of something, use an array [] 
--> Whenever you want to represent something with properties that have descriptive names, use an object {} 
--> To access elements of increasingly nested objects and arrays, we simply extend the same logic seen above */


//Practice Exercise 3.5
let people = { friends: []           
            }

let friendOne = {firstName: "Sadek",
                 lastName: "Mahmood",
                 id: 118
}

let friendTwo = {firstName: "Nicolas",
                 lastName: "Pacicco",
                 id: 119
}

let friendThree = {firstName: "Dimitri",
                 lastName: "Walter",
                 id: 120
}

people.friends.push(friendOne, friendTwo, friendThree);
console.log(people);


// Manipulating an Array
const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];
theList.shift();    // Remove first element
theList.unshift("FIRST");   // Add "FIRST" to the start of the array
theList.splice(2, 6, "MIDDLE", "hello World", "LAST"); // Delete the 6 items to the right of index 2 (included) and add the rest 
console.log(theList);


// Company Product Catalog
let storeItems = [];

let itemOne = { name: "Tesla",
                model: "Model X",
                cost: 20000,
                quantity: 4
}

let itemTwo = { name: "Ford",
                model: "Focus",
                cost: 12500,
                quantity: 3
}

let itemThree = { name: "McLaren",
                model: "P1",
                cost: 200000,
                quantity: 1
}

storeItems.splice(0, 0, itemOne, itemTwo, itemThree);
console.log(storeItems);

console.log(storeItems[2].quantity);    //Outputs: 1 (quantity of third item)




