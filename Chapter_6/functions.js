/* Functions --> Allow us to write nicely structured, reusable, and low-maintenance code
--> Functions are a group of statements, variables, loops and so on that are bundled together
--> Calling a function means an entire group of statements will get executed
--> We can recognize functions by the parantheses at the end */

/* Writing Functions --> Use the "function" keyword
Format:     function nameOfTheFunction() {
                // content of the function
            }           */

function greet(){
    let name = prompt("Name?");
    console.log("Hello " + name + ", nice to meet you!");
}
greet();

/* Naming Functions
--> Use camelCase for your functions
--> Make sure that the name describes what the function is doing
--> Use a verb to describe what the function is doing:  */

// Practice Exercise 6.1
function addTwoNUmbers(a,b) {
    a = Number(a)
    b = Number(b);
    return (a + b);
}

const var1 = 20;
const var2 = 40;
console.log(addTwoNUmbers(var1, var2));
console.log(addTwoNUmbers(20, 20));


// Practice Exercise 6.2
let descriptiveWords = ["magical", "tall", "cute", "funny", "artistic", "short", "athletic"];

function describeName() {
    let name = prompt("Name: ");
    let index = Math.floor(Math.random() * descriptiveWords.length);
    console.log(descriptiveWords[index] + " " + name);
}
describeName();


/* Parameters and Arguments --> Used to describe the information that is passed into a function
                            --> Parameter defined as the variable listed inside the parentheses of the function definition
                            --> Argument is whatever gets passed in 

--> Depending on the arguments called within the function, the outcome of the function can change. This makes functions
    very powerful building blocks  */


function addNumbers(x = 2,y = 3) {      // Here, x and y are the parameters
    console.log(x + y);
}

addNumbers(3,4);                //Outputs: 7
addNumbers(12,-90);             //Outputs: -78
addNumbers("Chris", "Vatos");   //Outputs: ChrisVatos

// Practice Exercise 6.3
let value1 = 10;
let value2 = 20;
let operator = "-"

function calculator(a, b, operator) {
    if(operator === "-") {
        return a - b;
    } else {
        return a + b;
    }

}

console.log(calculator(value1, value2, operator));


/* Default or Unsuitable Parameters --> We can tell JS to take default paramters to 
                                        functions if no arguments are passed to it          */

addNumbers();               //Outputs: 5    (Defualt is 2 and 3)
addNumbers(10,5);           //Outputs: 15
addNumbers(10);             //Outputs: 13   (Defualt is 2 and 3)
addNumbers(1, 2, 3, 4);     //Outputs: 3    (Since the fnc has two parameters, it takes the first two arguments passed to it)


/* Special Functions and Operators
    1) Arrow Function
    2) Spread Operator
    3) Rest parameter  */

/* 1) Arrow Function --> Often used for functions that contain a single statement
--> To write/use arrow functions you will have to: a) Store it in a variable 
                                                   b) Send it in as an argument 

Format:  a) With Parameters:        (param1, param2) => body of the function;   
         b) No Parameters:          () => body of the function; 
         c) One Parameter:          param => body of the function;
         d) Multi-Line Function;    (param1, param2) => {
                                        // line 1;
                                        // any number of lines;
                                    };
*/

function doingStuff(x) {
    console.log(x);
}

// To re-write above as an arrow function we need to store it in a variable and use the notation for arrow functions

let doingArrowStuff = x => console.log(x);
doingArrowStuff("Great");

let addTwoNumbers = (x,y) => console.log(x + y);
addTwoNumbers(5,3);

let sayHi = () => console.log("Hi!");
sayHi();

const arr = ["squirrel", "alpaca", "buddy"];
arr.forEach(e => console.log(e));


/* 2) Spread Operator --> Spreads out the elements of an array into individual elements that can be passed as arguments
Format:  Three dots before a referenced expression or string  */

let spread = ["so", "much", "fun"];
let message = ["JavaScript", "is", ...spread, "and", "very","powerful"];
console.log(message);   //Outputs: ['JavaScript', 'is', 'so', 'much', 'fun', 'and', 'very', 'powerful']

let arr2 = [5,9];
addTwoNumbers(...arr2);

function addFourNumbers(x,y,z,a) {
    console.log(x + y + z + a);
}
let arr3 = [3, 4, 5, 6];
addFourNumbers(...arr3);


/* 3) Rest Parameter --> Allows us to send any number of arguments to a function and 
                         translate them into a parameter array if # of arguments > # of parameters
Format:  Three dots before a function parameter   */ 

function someFunction(param1, ...param2) {
    console.log(param1, param2);
  }
someFunction("hi", "there!", "How are you?");   //Outputs: hi ["there!", "How are you?"]



/* Returning Function Values --> Use the "return" statement in function bodies to be able to store 
                                 the function values into variables
                                
                             --> "return"  ends the function and sends back whatever value comes after it*/

function addTwoNumbersV2(x,y) {
    return x + y;
}
let result = addTwoNumbersV2(5,4);
console.log(result);

                                
// Practice Exercise 6.4
function calculatorV2(x, y, operator) {
    if(operator === "-") {
        return x - y;
    } else {
        return x + y;
    }
}

let output = [];
for(let i = 0; i < 10; i++) {
    let a = i * 5;
    let b = i * i;
    let result = calculatorV2(a, b, "+");
    output.push(result);
}
console.log(output);

/* Note: If we have a one-line arrow function, we can return without using the keyword "return"
         If it is a multi-line function, we need to specify the "return" keyword        */



/* Variable Scope in Functions --> Scope defines when you can access a certain variable 
                                  1) Local Variable
                                  2) Global Variable    */
                        
/* Local Variables in Functions --> Local variables are only in scope within the function they are defined (let and var)
                                --> Function parameters are local variables 
                                --> Variables defined within the function are not available outside the function*/

function testAvailability1(x) {
    console.log("Available here:", x);
}
testAvailability1("Hi!");
// console,log(x);          // x is out of scope; will result in an error

 // We can make values available outside the function using the "return" keyword

function testAvailability2() {
    let y = "I'll return";
    console.log("Available here:", y);
    return y;
} 
let z = testAvailability2();                  
console.log("Outside the function:", z);        // No error   
// console.log("Not available here:", y);       // Error


/* let vs. var variables
    var --> function scoped (available everywhere within the function)
    let --> block scoped    
        --> block is defined by two curly braces {}
        --> code within the block is where let is still available  
        
    --> Variables declared with "let" cannot be accessed before being defined (ReferenceError raised if so)
    --> Variables declared with "var" can be accessed (value is undefined, no error raised) 
        --> This phenomenon is called "hoisting"  */


function doingStuff1() {
    if (true) {
        var x = "local";
    }
console.log(x);
}
doingStuff1();   // Outputs: local


function doingStuff2() {
    if (true) {
        let x = "local";
    }
console.log(x);
}
// doingStuff2();   // Error: x is out of scope after the if block ends and can no longer be accessed
        

/* const scope --> const is block scoped (rules similar to "let") 
               --> Variables declared with "const" cannot be accessed before being defined (ReferenceError raised if so) */ 

function doingStuff3() {
    if (true) {
        const x = "local";
    }
console.log(x);
}
// doingStuff3(); // Error: x is out of scope after the if block ends and can no longer be accessed


/* Global Variables --> Declared outside a function and not in some other code block
                    --> Variables declared outside a function  are available within the 
                        function as well as inside any functions or other code blocks inside that function
                    --> Local variables ovveride global variables
                        a) If you create a variable with the same name as a global variable inside a function, that 
                           variable's value will be used whenever you refer to that variable name within the scope of that
                           particular function  
                        b) Same is true for parameter names. If a paramter has the same name as a global variable, 
                           the value of the parameter will e used
                    --> If you want to use a global variable, decalre it at the top of the JS file    */ 

let x = "global";
function doingStuff() {
    let x = "local";
    console.log(x);
}
doingStuff();       // Outputs: local
console.log(x);     // Outputs: global


/* Immediately Invoked Function Expression (IIFE) --> A way of expressing a function so that it gets invoked immediately
                                                  --> It is anonymous, it doesn't have a name, and it is self-executing  
                                                  --> Function is surrounded by parantheses
                                                  --> (); executes the unamed funciton and must be done immediately following
                                                      a function declaration
                                                  --> Possible to combine IIFE with arrow functions
                                           
Format:     (function () {
                console.log("IIFE!");
            })();                   */


// Practice Exercise 6.5
 let variable1 = "1000";

 (function () {
    let variable1 = "2000";
    console.log(variable1);
 })();                          // Outputs: 2000

 let result1 = (function () {
    let variable1 = "Valadi";
    return variable1;
 })(); 

 console.log(result1);
 console.log(variable1);

(function (variable1) {
    console.log(`My name is ${variable1}`);
})("Valadi");



