/* Recursive Functions --> Allows us to call the same functions from inside that function
                       --> What happens when we call a function recursively is that it goes one function deeper every time
                       --> The first function call is done last     */

function getRecursive(nr) {
    console.log(nr);
    if(nr > 0) {
        getRecursive(--nr);
    }
}
getRecursive(3);

function logRecursive(nr) {
    console.log("Started function:", nr);
    if (nr > 0) {
      logRecursive(nr - 1);
    } else {
        console.log("done with recursion");
    }
    console.log("Ended function:", nr);
  }
logRecursive(3);


// Practice Exercise 6.6

function factorial(nr) {
  if( nr === 0) {
    return 1;
  } else {
    return nr * factorial(nr - 1);
  }
}

let result = factorial(4);
console.log(result);


/* Nested Functions --> It is possible to have functions inside other functions
                    --> The nested function has access to the variables of the parent; not vice versa
                    --> Variables declared inside the inner function have function scope and are only available within 
                        the function they are defined, which in this case is the inner function   */
        
// Practice Exercise 6.7
let start = 10; 
function loop1(val) { 
    console.log(val); 
    if (val < 1) { 
        return; 
    } else {
        return loop1(val - 1); 
    }
} 
loop1(start); 

function loop2(val) { 
    console.log(val); 
    if (val > 0) { 
        val--; 
        return loop2(val); 
    } 
    return; 
} 
loop2(start);


/* Anonymous Functions --> Creating functions without names and storing them in variables
                       --> In order to call anonymous functions, we need to store them in variables
                       --> An anonymous function is called like this: variableName();
                       --> Allows us to pass functions as argumets to other functions       */

function doingStuffAnonymously() {
    console.log("Not so secret though.");
}

let functionVariable = function() {
    console.log("Not so secret though.");
};
functionVariable();

// Practice Exercise 6.8
let printName = function(x) {
    console.log(x);
}
printName("Hi my name is Valadi. Called with variable.");

function printNameAsFunction(x) {
    console.log(x);
}
printNameAsFunction("Hi my name is Valadi. Called with function.");


/* Function Callbacks --> Passing functions as arguments to other functions */

function doFlexibleStuff(x) {
    x();
    console.log("Inside doFlexibleStuffFunction.");
}

doFlexibleStuff(functionVariable);  //Outputs: Not so secrety though.
                                    //         Inside doFlexibleStuffFunction.

let anotherFunctionVariable = function() {
    console.log("Another anonymous function implementation.")
}

doFlexibleStuff(anotherFunctionVariable);   //Outputs: Another anonymous function implementation.
                                            //         Inside doFlexibleStuffFunction.

/* Anonymous functions allow us to create a function and store it in variables (anotherFunctionVariable). We can then send
   that in as a function argument to another function (doFlexibleStuff()). And this function is simply executing whatever
   function gets sent in.  */

//setTimeout(functionVariable, delay (ms)) --> It is going to wait delay (ms) first and then execute the functionVariable
setTimeout(functionVariable, 1000);

//setInterval(functionVariable, interval) --> Keeps executing the functionVariable at the specified interval
let youGotThis = function() {
    console.log("You got this!")
}
setInterval(youGotThis, 1000);

// Above examples are instances of function callbacks and functions being passed as arguments to other functions
