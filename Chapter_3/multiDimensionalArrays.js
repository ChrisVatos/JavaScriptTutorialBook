/* Multidimensional Arrays
--> A mutlidimensional array is just an array of arrays
--> This is allowed becase arrays can contain any data type; i.e other arrays */

let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];
let arrOfArrays = [someValues1, someValues2, someValues3];

let value1 = arrOfArrays[0][1]; 
console.log(value1);    //Outputs: 2
let value2 = arrOfArrays[2][2];
console.log(value2);    //Outputs: 9

let arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
console.log(arrOfArraysOfArrays);

let middleValue = arrOfArraysOfArrays[1][1][1];
console.log(middleValue);


//Practice Exercise 3.3
let arrayOne = [1, 2, 3];
let newArray = [arrayOne, arrayOne, arrayOne];
console.log(newArray[1][1]);    //Outputs: 2