/* let, var and const 
let --> can change its assigned value and has block scope (between { and })
var --> can change its assinged value and has global scope 
const --> cannot change its assigned value

- Use "let" in most cases
- Use camel case when naming variables
*/

/* Primitve Types

JavaScript has 7 primitive types: 1) String (use single/double quotes or backticks)
                                  2) Number
                                  3) BigInt
                                  4) Boolean
                                  5) Symbol
                                  6) undefined
                                  7) null
*/

// 1) String

let singleString = 'Hi there!';
let doubleString = "How are you?";

let language = "JavaScript";
let message = `Let's learn ${language}`; // Use ${nameOfvariable} to insert variable into template string
console.log(message);

// Escape Characters (\) 

let str = "Hello, what's your name? Is it \"Mike\"?";   // Use \" in a string to treat them as characters within the string and not the string end
console.log(str);

let str2 = 'Hello, what\'s your name? Is it "Mike"?';   // Use \' in a string to treat them as characters within the string and not the string end
console.log(str2);

let str3 = "New \nline."; // \n is a line break (goes to next line)
console.log(str3);

let str4 = "I'm containing a backslash: \\!"; // \\ allows us to insert a backslash into a string
console.log(str4);


/* 2) Numbers 
--> All JavaScript unmbers are 64 bit floating point numbers that can represent large numbers, both signed and unsigned 
--> All of the below are of the "number" data type */

let intNr = 1;
let decNr = 1.5;
let expNr = 1.4e15;
let octNr = 0o10;   // Decimal: 8
let hexNr = 0x3E8;  // Decimal: 1000
let binNr = 0b101;  // Decimal: 5  


/* 3) BigInt 
--> Limits of the "number" data type are 2e53 - 1 and -(2e53 - 1)
--> If bigger numbers are needed, use the BigInt data type 
--> A BigInt data type can be recognized by the postfix n
--> Can only operate on BigInt with other BigInts */

let bigNr = 397849595748947578593789585n;


/* 4) Boolean 
--> Holds true or false 
--> Useful to hold the state of objects in our code */

let bool1 = false;
let bool2 = true;


/* 5) Symbol 
--> Used when it is necessary for variables to not be equal 
--> Symbol data type is very useful as properties of objects*/

let string1 = "JavaScript is fun!"
let string2 = "JavaScript is fun!"
console.log("These two strings are the same:" , string1 == string2)

// string1 and string2 are of the same type and have the same value; therefore this outputs true

let symbol1 = Symbol("JavaScript is fun!");
let symbol2 = Symbol("JavaScript is fun!");
console.log("These two strings are the same:" , symbol1 == symbol2)

// symbol1 and symbol2 are each unique symbols; therefore this outputs false

/* 6) Undefined
--> Data type of a variable that has not been assigned a value yet 
--> Possbile to manually set a variable to undefined, but that is bad practice */

let unassinged;
console.log(unassinged);  // Output will be undefined

/* 7) null 
--> Used to say a variable is empty or has an unknown value 
--> Use lowercase for null 
--> Always better to assign null to a variable that we want to say is empty or unknown at first */


/* Analyzing and Modifying Data Types   
--> JavaScript has built-in methods that help deal with common problems related to primitives */

// typeof --> returns the type of the variable we're dealing with

let string = "Hello";
let nr = 7;
let bigNr1 = 1475483959386945n;
let bool = true;
let sym = Symbol("unique");
let undef = undefined;
let unknown = null;

console.log("string", typeof(string));
console.log("nr", typeof(nr));
console.log("bigNr1", typeof(bigNr1));
console.log("bool", typeof(bool));
console.log("sym", typeof(sym));
console.log("undef", typeof(undef));
console.log("unknown", typeof(unknown));    //Returns object even though null truly is a primitive type and not an object 

// Converting Data Types --> Variables can change types in JavaScript and sometimes JS does this automatically 

let nr1 = 2;
let nr2 = "2";
console.log(nr1 * nr2); // Outputs 4 (Converts nr2 to a number then multiplies)
console.log(nr1 + nr2); // Outputs 22 (Converts nr1 to a string then concatenates)

// String() --> Converts a variable to type String (takes any value, including undefined and null)
// Number() --> Converts a variable to type Number (if it cannot be done, it will change value to NaN)
// Boolean() --> Converts a variable to type Boolean (true for everything except: null, undefined, 0, empty string, NaN)

let nrToStr = 6;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof(nrToStr));  //Outputs: 6 string

let strToNr1 = "12";
strToNr1 = Number(strToNr1);
console.log(strToNr1, typeof(strToNr1));  //Outputs: 12 number

let strToBool = "any non-empty string will return true";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof(strToBool));  //Outputs: true boolean

let strToBool2 = "";
strToBool2 = Boolean(strToBool2);
console.log(strToBool2, typeof(strToBool2));  //Outputs: false boolean

// An empty string or null will both result in the number 0
let nullToNr = null;
nullToNr = Number(nullToNr);
console.log("null", nullToNr, typeof nullToNr);    //Outputs: null 0 number
 
let strToNr2 = "";
strToNr2 = Number(strToNr2);
console.log("empty string", strToNr2, typeof strToNr2);    //Outputs: empty string 0 number


// Anything that can't be interpreted as a number by removing the qotes will evaluate as NaN
let strToNr3 = "hello";
strToNr3 = Number(strToNr3);
console.log(strToNr3, typeof strToNr3); //Outputs: NaN number

//Practice Exercise 2.1

let str1 = 'Laurence';  //String
let str5 = "Svekis";    //String
let val1 = undefined;   //Undefined
let val2 = null;        //object
let myNum = 1000;       //Number

console.log(typeof(str1),typeof(str2),typeof(val1),typeof(val2),typeof(myNum))

