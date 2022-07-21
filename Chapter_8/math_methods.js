/* max() --> Returns the largest number among the input
         --> Returns NaN if done with non-numeric arguments
         --> Format:  Math.max(x)
                        --> x = list of nubmers   */

let highest = Math.max(2, 56, 12, 1, 233, 4);
console.log(highest);   // 233


/* min()) --> Returns the smallest number among the input
           --> Returns NaN if done with non-numeric arguments
           --> Format:  Math.min(x)
                        --> x = list of nubmers   */

let lowest = Math.min(2, 56, 12, 1, 233, 4);
console.log(lowest);    // 1


/* sqrt() --> Returns the sqaure root of a number
          --> Format:  Math.sqrt(x)
                        --> x = number to be rooted     */

let x1 = 91;
let x12 = Math.sqrt(x1);
console.log(x12);


/* pow() --> Raises a number to a specified exponent
         --> Format:  Math.pow(base, exponent)
                        --> base = number to be raised to specified power
                        --> exponent = number to raise base to          */
    
let power = Math.pow(2, 3);
console.log(power);


/* round() --> Rounds to the nearest integer
           --> Format:  Math.round(x)
                         --> x = number to be rounded       */

let x = 6.78;
let y = 5.34;
console.log("X:", x, "becomes", Math.round(x));     // 7
console.log("Y:", y, "becomes", Math.round(y));     // 5


/* ceil() --> Round a number up to the nearest integer
          --> Format:  Math.ceil(x)
                        --> x = number to be rounded up           */

console.log("X:", x, "becomes", Math.ceil(x));  // 7
console.log("Y:", y, "becomes", Math.ceil(y));  // 6

let negativeX = -x;
let negativeY = -y;
console.log("negativeX:", negativeX, "becomes", Math.ceil(negativeX));  // -6
console.log("negativeY:", negativeY, "becomes", Math.ceil(negativeY));  // -5


/* floor() --> Rounds a number down to the nearest integer
           --> Format:  Math.floor(x)
                        --> x = number to be rounded down         */

console.log("X:", x, "becomes", Math.floor(x));     // 6
console.log("Y:", y, "becomes", Math.floor(y));     // 5

console.log("negativeX:", negativeX, "becomes", Math.floor(negativeX));     // -7
console.log("negativeY:", negativeY, "becomes", Math.floor(negativeY));     // -6


/* trunc() --> Returns the integer part of the number
           --> Format:  Math.trunc(x)
                        --> x = number       */ 

console.log("X:", x, "becomes", Math.trunc(x));     // 6
console.log("Y:", y, "becomes", Math.trunc(y));     // 5

console.log("negativeX:", negativeX, "becomes", Math.trunc(negativeX));     // -6
console.log("negativeY:", negativeY, "becomes", Math.trunc(negativeY));     // -5


/* exp() --> Returns the value of e (Eulers number, approximately 2.7183) raised to a specified power    
         --> Format:  Math.exp(x)
                        --> x = value to raise e to         */

let exp = 2;
let power1 = Math.exp(exp);
console.log(`e raised to the power of ${exp} is equal to ${power1}`);


/* log() --> Returns the natural logarithm of a number
         --> Format:  Math.log(x)
                        --> x = value to find nautral logarithm of          */

let log = Math.log(power1);
console.log(`The natural logarithm of ${power1} is ${log}`);


// Practice Exercise 8.6
let pi = Math.PI;
console.log(pi);

let number = 5.7;
let ceil = Math.ceil(number);
let floor = Math.floor(number);
let round = Math.round(number);
console.log("Ceiling:", ceil, "Floor:", floor, "Round:", round);

let random = Math.floor(Math.random() * 11)
console.log(random);

let random1 = Math.floor(Math.random() * 10) + 1
console.log(random1);

let random100 = Math.floor(Math.random() * 100) + 1
console.log(random100);

function randomFunction(min, max) {
    return  Math.floor(Math.random() * (max - min + 1) ) + min;
}

for(let i = 0; i < 100; i ++) {
    console.log(randomFunction(5, 20));
}







