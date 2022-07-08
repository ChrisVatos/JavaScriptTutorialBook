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


function addNumbers(x,y) {      // Here, x and y are the parameters
    console.log(x + y);
}

addNumbers(3,4);                //Outputs: 7
addNumbers(12,-90);             //Outputs: -78
addNumbers("Chris", "Vatos");   //Outputs: ChrisVatos

// Practice Exercise 6.3






