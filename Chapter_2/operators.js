/* Arithmetic Operators --> Used to perform operations with numbers */

//Addition with Numbers (+)
let nr1 =12;
let nr2 = 14;
let result1 = nr1 + nr2;
console.log(result1)    //Outputs: 26


//Addition for Concatenating Strings (+)
let str1 = "Hello ";
let str2 = "addition";
let result2 = str1 + str2;
console.log(result2)    //Outputs: Hello Addition


//Practice Exercise 2.2
let firstName = "Valadi";
let age = 20;
let canCodeJS = true;

console.log("Hello, my name is " + firstName + ", I am " + age + " years old and I can code JavaScript: " + canCodeJS + ".");
console.log(`Hello, my name is ${firstName}, I am ${age} years old and I can code JavaScript: ${canCodeJS}.`)


//Subtraction (-)
let number1 = 20;
let number2 = 4;
let string1 = "Hi";
let number3 = 3;
let result3 = number1 - number2;    
let result4 = string1 - number3;
console.log(result3, result4);  //Outputs: 16 NaN


//Multiplication (*)
let nr3 = 15;
let nr4 = 10;
let str3 = "Hi";
let nr5 = 3;
let result5 = nr3 * nr4;
let result6 = str3 * nr5;
console.log(result5, result6);  //Outputs: 150 NaN


//Division (/)
let nr6 = 30;
let nr7 = 9;
let result7 = nr6 / nr7;
console.log(result7);   //Outputs: 3.3333333


//Exponentiation (**)
let number8 = 2;
let number9 = 3;
let result8= number8 ** number9;
console.log(result8);   //Outputs: 8


//Modulus (%) --> Remainder after division 
let number10 = 10;
let number11 = 3;
let result9 = number10 % number11;
console.log(`${number10} % ${number11} = ${result9}`);


//Unary Operators: Increment and Decrement (One operand needed for these operators)
let number12 = 4;
number12++; 
console.log(number12);  //Outputs: 5

let number13 = 4;
number13--; 
console.log(number13);  //Outputs: 3


//Postfix Operators --> Increment gets executed after sending the variable through
let number14 = 2;
console.log(number14++);  //Outputs: 2
console.log(number14);  //Outputs: 3

//Prefix Operators --> Increment gets executed before sending the variable through
let number15 = 2;
console.log(++number15); //Outputs:3

//Practice Exercise 2.3
let adjacent = prompt("Please enter the value for the adjacent side:")
let opposite = prompt("Please enter the value for the opposite side:")
let hypotenuse = ((adjacent**2) + (opposite**2))**(1/2)
console.log(`The length of the hypotenuse is ${hypotenuse}.`)

/* Assignment Operators
--> Every binary arithmetic operator has a correspdonding assingment oeprator:
x += 5 --> x = x + 5
x *= 3 --> x = x * 3
x -= 2 --> x =x - 2
...
*/

//Practice Exercise 2.4
let a = 2;
let b = 3;
let c = 4;

a += b;
a /= c;
c %= b;

console.log(a,b,c);

/* Comparisopn Operators --> Always result in true or false */

//Equal --> equal value only (Loose, ==) or equal value and data type (Strict, ===) 
let x = 5;
let y = "5";
console.log(x == y);    //Outputs: true (Since both have values of 5, regardless of data type)
console.log(x === y);   //Outputs: false (Since they are different data types, regardless of whether they have the same value)


//Not Equal --> not equal value only (Loose, !=) and not equal value and data type (Strict, !==)
console.log(x != y);    //Outputs: false (Since they have the same value)
console.log(x !== y)    //Outputs: true (Since they are different data types)


//Greater Than (> ,>=) and Smaller Than (<, <=) --> Straightforward


/* Logical Operators --> And, Or, Not */

//AND (&&) --> Returns true if all expressions are true
let p = 1;
let q = 2;
let r = 3;
console.log(p < q && q < r);    //Outputs: true
console.log(p > q && q < r);    //Outputs: false   


//OR (||) --> Returns true if either expression is true 
console.log(p > q || q < r); //Outputs: true 
console.log(p > q || q > r); //Outputs: false


//Not (!) --> Used to negate a Boolean and make it the opposite value of
let u = false;
console.log(!u);    //Outputs: true 

let w = 1;
let t = 2;
console.log(!(w < t));  //Outputs: false

//Miles to Kilometres Converter 
let miles = prompt("Please enter range in miles:");
let kilometres = miles * 1.60934;
console.log(`The distance of ${kilometres} kms is equal to ${miles} miles.`)


//BMI Calculator
let height = 71;    //inches
height *= 2.54;     //centimetres     

let weight = 175;   //pounds
weight /= 2.2046    //kilos

console.log("Height (cm):", height);
console.log("Weight (kilos):", weight)

let BMI = (weight / (height / 100)**2);
console.log("BMI:", BMI);
