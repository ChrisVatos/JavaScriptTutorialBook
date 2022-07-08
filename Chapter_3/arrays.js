/* Arrays and their Properties 
--> One array can even contain different data types*/

//Creating Arrays --> Better to use square brackets [] when creating arrays
let arr1 = new Array("purple", "green", "yellow");
let arr2 = ["black", "orange", "pink"];

let arr3 = new Array(10);  //Creates array with 10 undefined values
let arr4 = [10];            //Creates array with one value, 10

console.log(arr3);
console.log(arr4);

let arr = ["hi there", 5, true];
console.log(typeof(arr[0]));
console.log(typeof(arr[1]));
console.log(typeof(arr[2]));

//If we decalre an array using "const", the values of the array can change but we cannot change the array itself
const arr5 = ["hi there"];
arr5[0] = "new value";  //Allowed since we are only changing the values stored within the arrays
console.log(arr5[0]);

// arr5 = ["nope, you are overwriting the array"];     //Raises error because we are trying to change what arr5 is assinged to


//Accessing Elements --> First value in array is assigned to position 0, the second 1, the third 2 and so on
let cars = ["Toyota", "Renualt", "Volkswagen"];
console.log(cars[0]);   //Outputs: Toyota
console.log(cars[3]);   //Outputs: undefined (JS does not throw an error)
console.log(cars[-1]);  //Outputs: undefined (JS does not throw an error)


//Overwriting Elements --> To overwrite elements in an array, access the element using the index and assign a new variable
cars[0] = "Tesla";
console.log(cars[0]);   //Outputs: Tesla
console.log(cars);      

cars[3] = "Kia";
cars[-1] = "Fiat";
console.log(cars[3]);   //Outputs: Kia
console.log(cars[-1]);  //Outputs: Fiat


//Length Property --> Returns the number of values the array stores (nameOfArray.length)
let colors = ["black", "orange", "pink"];
let booleans = [true, false, false, true];
let emptyArray = [];
console.log("Length of colors:", colors.length);
console.log("Length of booleans", booleans.length);
console.log("Length of empty array", emptyArray.length);

/* Quick Array Facts
--> The length of an array is one higher than the maximum index
--> The positional value of the last index is one less than the total number of elements */

let numbers = [12, 24, 36];
numbers[5] = 48;
console.log(numbers.length);        //Outputs: 6
console.log("numbers:", numbers)    //Outputs: [12, 24, 36, empty × 2, 48]

//Practice Exercise 3.1
let groceries = ["Milk", "Bread", "Apples"];
console.log("Length of groceris:", groceries.length);
groceries[1] = "Bananas";
console.log("groceries:", groceries);


/* Array Methods --> Functions we can perform on arrays
Examples: 1) Add new elements to the array
          2) Delete elements in an array
          3) Finding elements in an array
          4) Sort elements in an array 
          5) Reversing Elements in an array*/

// 1) Adding and Replacing Elements 
// a) push() --> Adds elements to the back of the array
let favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("tangerine");  
let lengthOfFavoriteFruits = favoriteFruits.push("lime");   //push() method returns the new length of the array
console.log(lengthOfFavoriteFruits);    //Outputs: 5
console.log(favoriteFruits);

// b) splice() --> Adds elements at a certain index
/* splice() takes multiple parameters: First Parameter (2) --> Index to start inserting new values
                                       Second Parameter (0) --> Number of elements we want to delete starting at our 
                                                                previously defined starting index (first parameter)
                                       Remaining Parameters --> What we want to insert into the array */

let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(2, 0, "square", "trapezoid");
console.log(arrOfShapes);   //Outputs: ['circle', 'triangle', 'square', 'trapezoid', 'rectangle', 'pentagon']

let arrOfShapes1 = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes1.splice(2, 2, "square", "trapezoid");
console.log(arrOfShapes1);  //Outputs: ['circle', 'triangle', 'square', 'trapezoid']

let arrOfShapes2 = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes2.splice(2, 12, "square", "trapezoid");
console.log(arrOfShapes2);  //Outputs: ['circle', 'triangle', 'square', 'trapezoid']
 
// c) concat() --> Concatenates two arrays or concatenates values to an array
let array5 = [1, 2, 3];
let array6 = [4, 5, 6];
let array7 = array5.concat(array6);
console.log(array7);    //Outputs: [1, 2, 3, 4, 5, 6]

let arr8 = array7.concat(7, 8, 9);
console.log(arr8);      //Outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9]


// 2) Deleting Elements
// a) pop() --> Removes the last element from the array
arr8.pop();
console.log(arr8);  //Outputs: [1, 2, 3, 4, 5, 6, 7, 8]

// b) shift() --> Removes the first element and shifts all other indices down by one
arr8.shift();
console.log(arr8);  //Outputs: [2, 3, 4, 5, 6, 7, 8]

// c) splice(a, b) --> removes b elements starting at index a (included) and shifts remaining elements down by one
arr8.splice(1, 3);
console.log(arr8);  //Outputs: [2, 6, 7, 8]

// d) delete operator --> Changes the value of a certain array index to undefined without affecting the rest of the array
delete arr8[0];
console.log(arr8);


// 3) Finding Elements
// a) find() --> Checks whether a value is present in the array (Uses functions which will be covered later)

/* b) indexOf() --> Returns the index on which the specified value is found 
                    If value occurs more than once; returns the first occurence
                    If value is not found; returns -1
                    Can put a second parameter in indexOf() to specify which position it should start searching */

let arr9 = [2, 6, 7, 8];
let findIndex = arr9.indexOf(6);
let findIndex2 = arr9.indexOf(10);
console.log(findIndex, findIndex2);

let findIndex3 = arr9.indexOf(6,findIndex + 1);     //Start searching at the index right after the first 6 was found
console.log(findIndex3);

// c) lastIndexOf() --> Returns the index of the last occurence of a specified value
let animals = ["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog");
console.log(lastDog);

// 4) Sorting Elements
// a) sort() --> Sorts numbers from small to big and strings A-Z
let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();
console.log(names);     //Outputs: ['Alicia', 'Bert', 'Fatiha', 'James', 'Maria']

let ages = [18, 72, 33, 56, 40];
ages.sort();
console.log(ages);      //Outputs: [18, 33, 40, 56, 72]


// 5) Reversing Elements
// a) reverse() --> Reverses the elements in the array
let names1 = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names1.reverse();
console.log(names1);    //Outputs: ['Bert', 'Maria', 'Fatiha', 'Alicia', 'James']


//Practice Exercise 3.2

let shoppingList = [];
shoppingList.push("Milk");
shoppingList.push("Bread");
shoppingList.push("Apples");
shoppingList.splice(1, 1, "Bananas", "Eggs");
console.log(shoppingList.pop());
shoppingList.sort();
let indexofMilk = shoppingList.indexOf("Milk");
console.log(indexofMilk);
shoppingList.splice(1,0, "Carrots", "Lettuce");
let newItems = ["Juice", "Pop"];
let newShoppingList = shoppingList.concat(newItems).concat(newItems);
console.log(newShoppingList.lastIndexOf("Pop"));
console.log(newShoppingList);

