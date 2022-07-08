/* Loops --> Execute a code block a certain number of times
    1) while loop
    2) do while loop 
    3) for loop 
    4) for of loop
    5) for in */

/* 1) while loops --> Executes a certain code block as long as an expression is true
 Format:    while(condition) {
            // code that gets executed as long as the condition is true
        }
*/

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
let notFound = true;
while(notFound && someArray.length > 0) {
    if(someArray[0] = "Louiza"){
        console.log("Found her");
        notFound = false;
    } else {
        someArray.shift();
    }
}

let nr1 = 0;
let nr2 = 1;
let tmp = null;
let fibonacciArray = [];
while(fibonacciArray.length < 25) {
    fibonacciArray.push(nr1);
    tmp = nr1 + nr2;
    nr1 = nr2;
    nr2 = tmp;
}
console.log(fibonacciArray);

// Practtice Exercise 5.1
// let maxNumber = 50;
// let solution = Math.floor(Math.random() * maxNumber) + 1;
// let isCorrect = false;
// let guess = null;
// console.log(solution);

// while(!isCorrect) {
//     guess = prompt("Please enter a value between 1 and " + maxNumber);
//     guess = Number(guess);

//     if(guess === solution) {
//         console.log("Congrats! You guessed the correct number. It was " + solution);
//         isCorrect = true;
//     } else if(guess < solution) {
//         console.log("Please guess a larger number.");
//     } else {
//         console.log('Please guess a smaller nubmer.')
//     }
// }


/* 2) do while loops --> Allows us to execute a code block at least once and as long we did not get the result we needed
Format:     do {
            // code to be executed if the condition is true
            } while (condition);

--> Executes what is within the "do" block once and then after evaluates the "while"
--> If the condition is true; "do" block will get executed again
--> Continue to do so until the condition changes to false 
--> Used for user input validation */

let number = null;
do {
    number = prompt("Please enter a number between 0 and 100.");
    number = Number(number);
} while(!(number >= 0 && number < 100))

//Practice Exercise 5.2
let counter = 0;
let step = 2;

do {
    console.log(counter);
    counter += step;
} while(!(counter >= 100));


/* 3) for loops --> Very useful and special loops
Format:     for (initialize variable; condition; statement) { 
                // code to be executed
            }      
            
--> Inside the parantheses, there are 3 parts, separated by semi-colons 
--> First one initializes the variable that can be used in the loop
--> The second is a condition that will alow the loop to keep running as long as it is true
--> The third is a statement that gets executed after every iteration
    1) Initialize the variables.
    2) Check the condition.
    3) If the condition is true, execute the code block. If the condition is false, the loop will end here.
    4) Perform the statement (the third part, for example, i++).
    5) Go back to step 2        */

for(let i = 0; i < 10; i++) {
    console.log(i);
}

let arr =[];    // Array with numbers from 0 - 99
for(let i = 0; i < 100; i++) {
    arr.push(i);
}

let arr1 =[];   // Array with even numbers from 0 - 99
for(let i = 0; i < 100; i += 2) {
    arr1.push(i);
}


//Practice Exercise 5.3
let myWork = [];
let classStatus = null;

for(let i = 1; i <= 10; i++) {

    if(i % 2 == 0){
        classStatus = true;
    } else {
        classStatus = false;
    }

    let lesson = {
                name: "Lesson " + i,
                status: classStatus
    } 

    myWork.push(lesson);
}
console.log(myWork);


/* Nested Loops --> Loops inside loops
Format (while loop):      while (condition 1) {
                            // code that gets executed as long as condition 1 is true
                            // this loop depends on condition 1 being true
                                while (condition 2) {
                                // code that gets executed as long as condition 2 is true
                                }
                            }
--> Can also be used with "for" loops or with a combination of "for" and "while" loops  */

let arrOfArrays = [];
for(let i = 0; i < 3; i++) {
    arrOfArrays.push([]);
    for(let j = 0; j < 7; j++){
        arrOfArrays[i].push(j);
    }
}

//Practice Exercise 5.4
let myTable = [];
let numberOfColumns = 4;
let numberOfRows  = 5;
let counter1 = 0;

for(let i = 0; i < numberOfRows; i++) {
    let tmpTable = [];
    for(let j= 0; j< numberOfColumns;j++) {
        counter1++;
        tmpTable.push(counter1);
    }
    myTable.push(tmpTable);
}
console.table(myTable);


/* Loops and Arrays --> Can use the length property and the condition of "while" or "for" loops to loop over arrays very easily
--> When an array comes in somewhere in the application, data can be sent to the database per value; data can be modified per value or even filtered 
--> be careful to not get stuck in infinite loops; make sure conditions are logically though out  */

let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for(let i = 0; i < names.length; i++) {     // Index starts at 0 but the length does not; it starts at 1. Index is always one smaller than the length
    console.log(names[i]);
}

for(let i = 0; i < names.length; i++) {     // Index starts at 0 but the length does not; it starts at 1. Index is always one smaller than the length
    names[i] = "hello " + names[i];
}

//Practice Exercise 5.5
const grid = [];
const cells = 64;
let counter2 = 0;
let row;
for (let x = 0; x < cells + 1; x++) {
    if (counter2 % 8 == 0) {
        if (row != undefined) {        
            grid.push(row);
        }
        row = [];
    }
    counter2++;
    let temp = counter2;
    row.push(temp);
 
}
console.table(grid);


/* 4) for of loop --> Allows us to iterate over the elements of the array
Format:     let arr = [some array];
            for (let variableName of arr) {
                // code to be executed
                // value of variableName gets updated every iteration
                // all values of the array will be variableName once
            }

--> Cannot be used to change the value associated with the index
--> Used to process values as it is a very readalbe loop
--> Read as: "For every value of the array, call it variableName and do the following" 
--> Advantage: We won't accidentally get stuck in an infinite loop  */

for(let name of names) {
    console.log(name);
}


//Practice Exercise 5.6
let emptyArray = [];
let counter3 = null;

for(let i = 0; i < 10; i++) {
    counter3++;
    emptyArray.push(counter3);
}

console.log(emptyArray);

for(let i = 0; i < emptyArray.length; i++) {
    console.log(emptyArray[i]);
}

for(let number in emptyArray) {
    console.log(number);
}


/* Loops and Objects --> Allows us to loop over the properties of an object
--> Can use the "for in" loop or convert object to an array and loop over the array */

/* 5) for in loop --> Allows us to iterate over the properties of an oject 
Format:     for (let key in object) {
                // code block to be executed
            }
--> The "for in" loop iterates over an object
--> Each iteration returns a key (x)
--> The key is used to access the value of the key
--> The value of the key is accessed using: objectName[x]    */

let car = {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
  };

for(let properties in car) {
    console.log(car[properties]);
}

for(let properties in car) {
    console.log(properties);
}


// Practice Exercise 5.7
let student = {
        name: "Valadi",
        age: 20,
        school: "McGill"
}

for(let prop in student) {
    console.log(prop);
}

for(let prop in student){
    console.log(student[prop]);
}

let studentInArray = ["Valadi",20,"McGill"];

for(let prop in studentInArray){
    console.log(studentInArray[prop]);
}


/* Looping over Objectts by Converting to an Array --> Any object can be converted to an array 
    1) Convert the keys of the object to an array
    2) Convert the values of the object to an array
    3) Convert the key-value entries to an array (containing arrays with two elements: object key and object value)  */

let car2 = {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
   };

/* Object.keys(nameOfObject) 
--> Grabs all the properties of an object and converts them to an array */

let arrKeys = Object.keys(car2);
console.log(arrKeys);

for(let key of Object.keys(car2)) {
    console.log(key);
}

/* Object.values(nameOfObject)
--> Grabs all the values of an object and converts them to an array   */

for(let key of Object.values(car2)) {
    console.log(key);
}

for(let i = 0; i < arrKeys.length; i++) {
    console.log(arrKeys[i] + ": " + car[arrKeys[i]]);
}

/* Object.entries(nameOfObject) --> Returns a two-dimensional array containing key-value pairs that we can loop over */

let arrEntries = Object.entries(car2);
console.log(arrEntries);

for(let [key, value] of arrEntries) {   // Since a 2D array is returned, looping over each index returns an array: [key, value]
    console.log(key, ":", value);
}


