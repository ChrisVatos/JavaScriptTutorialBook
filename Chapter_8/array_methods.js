/* forEach() --> Calls a function for each element in the array   
             --> Format:   arrayName.forEach(myFunction)  
                  --> myFunction(currentValue, index, arr) (REQUIRED)
                      --> currentValue = value of the current element (REQUIRED)
                      --> index = index of the current element (OPTIONAL)
                      --> arr = array of the current element (OPTIONAL)  */ 
                  
          
let arr = ["grapefruit", 4, "hello", 5.6, true];
function printStuff(element, index) {
  console.log("Printing stuff:", element, "on array position:", index);
}

arr.forEach(printStuff);


/* filter() --> Creates a new array filled with elements that pass a test provided by a function
            --> Takes a function as an argument that returns a boolean 
                --> If true: element in new array
                --> If false: element not in new array 
            --> Format:   arrayName.filter(myFunction)  
                  --> myFunction(currentValue, index, arr) (REQUIRED)
                      --> currentValue = value of the current element (REQUIRED)
                      --> index = index of the current element (OPTIONAL)
                      --> arr = array of the current element (OPTIONAL)
            --> Does not alter the original array; returns a new array with the updated values   */

let arr2 = ["squirrel", 5, "Tjed", new Date(), true];
function checkString(element) {
  return typeof element === "string";     // Returns true if element is a string
}
 
let filterArr = arr2.filter(checkString)
console.log(filterArr);   // Outputs: ['squirrel', 'Tjed']


/* every() --> Calls a function that returns a boolean for each element in the array  
           --> Format:   arrayName.every(myFunction)  
                  --> myFunction(currentValue, index, arr) (REQUIRED)
                      --> currentValue = value of the current element (REQUIRED)
                      --> index = index of the current element (OPTIONAL)
                      --> arr = array of the current element (OPTIONAL)
              --> Returns true if myFunction returns true for all elements 
              --> Returns false if myFunction returns false for one element */

console.log(arr2.every(checkString));


/* copyWithin() --> Used to replace a part of the array with another part of the array
                --> Overwrites the exsiting array values
                --> Does not add new elements to ther array (length does not change)  
                --> Format:  arrayName.copyWithin(target, start, end)
                    --> target = index to copy elements to (REQUIRED)
                    --> start = start index to copy from (default is 0) (OPTIONAL)
                    --> end = end index to copy from (default is array length) (OPTIONAL) 
                    --> "Copy (end - start) elements after start (included) to the target"    */

let arr3 = ["grapefruit", 4, "hello", 5.6, true];
console.log(arr3.copyWithin(0, 3, 4));    // Outputs: [5.6, 4, 'hello', 5.6, true]

let arr4 = ["grapefruit", 4, "hello", 5.6, true];
console.log(arr4.copyWithin(0, 3, 5));    // Outputs: [5.6, true, 'hello', 5.6, true]


/* map() --> Creates a new array by calling a function on every array element
         --> Does not change the original array; it returns a new one   
         --> Format:   arrayName.map(myFunction)  
                  --> myFunction(currentValue, index, arr) (REQUIRED)
                      --> currentValue = value of the current element (REQUIRED)
                      --> index = index of the current element (OPTIONAL)
                      --> arr = array of the current element (OPTIONAL)    
         --> Can also use arrow function notation  */

let arr5 = [1, 2, 3, 4, 5];
let mapped_arr = arr5.map(x => x + 1);
console.log(mapped_arr);


/* lastIndexOf() --> Returns the last index of a specified value
                 --> Returns -1 if not found
                 --> Format:  arrayName.lastIndexOf(value, start)
                      --> value = value to search for (REQUIRED)
                      --> start = start index to begin looking from (OPTIONAL)    */
                      
let bb = ["so", "bye", "bye", "love"];
console.log(bb.lastIndexOf("bye"));   // Outputs: 2


// Practice Exercise 8.2 
let exerciseArray = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike", "Laurence", "Mike", "Laurence", "Mike"];

function checkDuplicates(element, index, array) {
  let lastIndex = array.lastIndexOf(element);

  if(index === lastIndex) {
    return true;
  }
}

let exerciseArrayNoDuplicates = exerciseArray.filter(checkDuplicates);
console.log(exerciseArrayNoDuplicates);


// Practcie Exercise 8.3
let arr7 = [2,4,6,8,10];
let newArray = arr7.map(x => x * 2);
console.log(newArray);

let newArray2 = arr7.map(function(x) {
  return x *2
})

console.log(newArray2);




