/* isNaN() --> Returns true if a value is "not a number" and false otherwise
           --> Possible to negate the function so it returns true if a value is a number 
           --> Does not to  be called with the Number object in front of it as it is a global variable
           --> Format:  isNaN(x)
                          --> x = value to be evaluated  */

let x = 34;
console.log(isNaN(x));      // false
console.log(!isNaN(x));     // true

let str = "hi";
console.log(isNaN(str));    // true

let str1 = "5";
console.log(isNaN(str1));   // false (because 5 is in quotes)


/*isFinite() --> Returns false for NaN, Infinity, and undefined, and true for all other values
             --> It is a global variable
             --> Format:  isFinite(x) 
                            --> x = value to be evaluated  */

let y = 3;
let str2 = "finite";
console.log(isFinite(y));           // true (Number)
console.log(isFinite(str2));        // false (String = NaN)
console.log(isFinite(Infinity));    // false (Infinity)
console.log(isFinite(10 / 0));      // false (10 / 0 returns Infinity not an error)


/* isInteger() --> Returns true if the value is an integer and false otherwise
               --> Not a global variable; needs to be called using Number class
               --> Format:  Number.isInteger(x);
                                --> x = value to be evaluated  */

let z = 3;
let str3 = "integer";
console.log(Number.isInteger(z));           // true
console.log(Number.isInteger(str3));        // false
console.log(Number.isInteger(Infinity));    // false
console.log(Number.isInteger(2.4));         // false


/* toFixed() --> Specifies how many decimals to keep and rounds normally
             --> Format:   nameOfNumber.toFixed(x);
                                --> x = number of decimal places to keep        */

let j = 1.23456
let j1 = j.toFixed(2); 
let j2 = j.toFixed(3);
console.log(j1);    // 1.23
console.log(j2);    // 1.235


/* toPrecision() --> Specifies how many digits to keep (includes digits before the dot) and roudns normally
                 --> Format:   nameOfNumber.toPrecision(x);
                                                --> x = number of digits to keep        */

let k = 1.23456  
let k2 = k.toPrecision(2);
let k4 = k.toPrecision(4);
console.log(k2);    // 1.2
console.log(k4);    // 1.235                                      







