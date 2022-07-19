/* concat() --> Joins two or more stirngs
            --> Does not change the existing string (returns a new one)
            --> Format:  nameOfString.concat(string1, string2, . . ., stringx)
                --> string1 = string to be joined (REQUIRED)            */

let s1 = "Hello ";
let s2 = "Javascript"
let result = s1.concat(s2);
console.log(result);


/* split() --> Convert a string into an array of substrings
           --> Returns the new array
           --> Does not change the original string
           --> Format:  nameOfString.split(separator, limit)
                --> separator = a string or regular expression to use for splitting  (OPTIONAL)
                --> limit = integer that limits the number of splits  (OPTIONAL)       */

let arr_result = result.split(" ");
console.log(arr_result);        // Outputs: ['Hello', 'Javascript']

let favoriteFruits = "strawberry,watermelon,grapefruit";
let arr_fruits = favoriteFruits.split(",");
console.log(arr_fruits);        // Outputs: ['strawberry', 'watermelon', 'grapefruit']


/* join() --> Converts an array to a string
          --> Does not change the original array
          --> Format:  nameOfArray.join(separator)
                --> separator = separator to use when joining (default is comma) (OPTIONAL)      */

let letters = ["a", "b", "c"];
let x = letters.join();
console.log(x);     // Outputs: a,b,c

let y =letters.join("-");
console.log(y);      // Outputs: a-b-c


/* indexOf() --> Returns the index of the first character of a substring in a string
             --> Returns -1 if nothing is found
             --> Method is case sensitive
             --> Format:  nameOfString.indexOf(searchValue, start)
                  --> searchValue = string to search for (REQUIRED)
                  --> start = position to start from (default is 0) (OPTIONAL)          */

let poem = "Roses are red, violets are blue, if I can do JS, then you             can too!";
let index_re = poem.indexOf("re");
console.log(index_re);          // Outputs: 7

let indexNotFound = poem.indexOf("python");
console.log(indexNotFound);     // Outputs: -1


/* lastIndexOf() --> Returns the last index of the occurrence of a specified value in a string
                 --> Returns -1 if nothing is found
                 --> Method is case sensitive
                 --> Format: nameOfString.lastIndexOf()     
                      --> searchValue = string to search for (REQUIRED)
                      --> start = position to start from (default is 0) (OPTIONAL)      */

let lastIndex_re = poem.lastIndexOf("re");
console.log(lastIndex_re);      // Outputs: 24 



/* charAt() --> Returns the value at the specified index in a string
            --> Retruns an empty string if the index is beyond the range of the string
            --> Format:  nameOfString.charAt(index)
                --> index = index position of the character (REQUIRED)          */

let pos1 = poem.charAt(10);
console.log(pos1);      // Outputs: r 


/* slice() --> Extracts part of a string
           --> Does not change the original string
           --> Returns the extracted part in a new string
           --> Format:  nameOfString.slice(start, end)
                --> start = start index (REQUIRED)
                --> end = end index (up to, but not including)  (OPTIONAL, default is the length)       */

let str = "Create a substring";
let substr1 = str.slice(5);
let substr2 = str.slice(0,3);
console.log("1:", substr1);     //Outputs: e a substring
console.log("2:", substr2);     //Outputs: Cre


/* replace() --> Replaces part of a string with a new specified value
             --> Does not change the original string
             --> Returns the string with the new replaced part
             --> Format:  nameOfString.replace(searchValue, newValue)
                  --> searchValue = The value, or regular expression, to search for
                  --> newValue = The new value to replace with          */

let hi = "Hi buddy";
let new_hi = hi.replace("buddy", "Pascal");
console.log(new_hi);        // Outputs: Hi Pascal

let s3 = "hello hello";
let new_s3 = s3.replace("hello", "oh");
console.log(new_s3);        // Outputs: oh hello

// replaceAll() is similar to replace() but replaces all occurences, not just the first
let s4 = s3.replaceAll("hello", "oh");
console.log(s4);        // Outputs: oh oh


/* toLowerCase() --> Converts all characters in a string to lowercase
                 --> Does not change the original string
                 --> Returns a new string
                 --> Format:  nameOfString.toLowerCase()        */

let caps = "HI HOW ARE YOU?";
let fixed_caps = caps.toLowerCase();
console.log(fixed_caps);        //Outputs: hi how are you?


/* toUpperCase() --> Converts all characters in a string to uppercase
                 --> Does not change the original string
                 --> Returns a new string
                 --> Format:  nameOfString.toUpperCase()        */

let low_bye = "bye!";
let up_bye = low_bye.toUpperCase();
console.log(up_bye);        //Outputs: BYE!

let caps2 = "HI HOW ARE YOU?";
let caps2_fixed = caps2.toLowerCase();
let caps2_final = caps2_fixed.charAt(0).toUpperCase().concat(caps2_fixed.slice(1));
console.log(caps2_final)    //Outputs: Hi how are you?


/* startsWith() --> Returns true if a string starts with a specified value
                --> Returns false otherwise
                --> Method is case sensitive
                --> Format:  nameOfString.startsWith(searchValue, start)
                     --> searchValue = string to search for (REQUIRED) 
                     --> start = starting index (OPTIONAL)          */

let encouragement = "You are doing great, keep up the good work!";
let bool_start = encouragement.startsWith("You");
console.log(bool_start);        //Outputs: true


/* endsWith() --> Returns true if a string end with a specified value
              --> Returns false otherwise
              --> Method is case sensitive
              --> Format:  nameOfString.endsWith(searchValue, length)
                   --> searchValue = string to search for (REQUIRED) 
                   --> length = length of the string to search  (OPTIONAL)          */

let bool_end = encouragement.endsWith("something else");
console.log(bool_end);      //Outputs: false


// Practice Exercise 8.4
let test = "thIs will be capiTalized for each word";

function capitalize(string) {
    let array = string.split(" ");

    let new_array = array.map((e) => e.charAt(0).toUpperCase().concat(e.slice(1).toLowerCase()));

    return new_array.join(" ");
}

console.log(capitalize(test));


// Practice Exercise 8.5
let test2 = "I love Javascript";
let vowels = ["a", "e", "i", "o", "u"];

function vowelReplacer(string) {
    let new_string = string.toLowerCase();

    for(let i = 0; i < vowels.length; i++) {
        new_string = new_string.replaceAll(vowels[i], i);
    }

   return new_string;
}

console.log(vowelReplacer(test2));









               










            
