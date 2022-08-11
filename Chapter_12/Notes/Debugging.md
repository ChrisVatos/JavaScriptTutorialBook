# Debugging

→ Using console.log() during development is a rather common practice 

## Breakpoints

→ "Breakpoints" can be used from most web browsers or IDEs

→ "Breakpoints" give us the oppurtunity to inspect the values of the variables and walk through our code line by line 

### Using Breakpoints in Chrome

→ In Chrome, go to the Sources tab of the Inspect panel. Select the file you want to set a breakpoint in. Then you just click on the line number and it sets the breakpoint.

→ One the right of the screen, when the code gets executed, you can examine your code with a fine toothed comb.

    → The play icon resumes script execution until it hits the next breakpoint or runs into the same breakpoint again

    → The round arrow icon at the top goes to the next line and inspects the values 

## Error Handling

 → When we are dealing with code that depends on some sort of outside input, such as an API, user input, or a file we will need to deal with the errors that this input can cause

 → If we expect a certain piece of code to throw an error, we can surround this code with a "catch" block:
 
    → The error it might throw will be caught in this block

 → Don't use "catch" blocks too much; instead write better code to avoid the error in the first place

→ Example: Catching Specific Error Types

    try {
        somethingVeryDangerous();
        } catch (e) {
        if (e instanceof TypeError) {
            // deal with TypeError exceptions
        } else if (e instanceof RangeError) {
            // deal with RangeError exceptions
        } else if (e instanceof EvalError) {
            // deal with EvalError exceptions
        } else {
            //deal with all other exceptions
            throw e; //rethrow
        }
    }

→ You can do one more thing with a try catch block, and that is add a "finally" block. This finally block 
  gets executed irrespective of whether errors are thrown:

    try {
        trySomething();
            } catch (e) {
                console.log("Oh oh");
            } finally {
                console.log("Error or no error, I will be logged!");
    }

    → We don't know the output of this code, since trySomething() is not defined. If it were to throw an error, it would log Oh oh to the console and then Error or no error, I will be logged!. If trySomething() didn't throw an error, it would only log the last part.

→ Lastly, if, for whatever reason, you need to throw an error, you can do so with the "throw" keyword, like this:

    function somethingVeryDangerous() {
        throw RangeError();
    }

→ This can be of great use whenever you need to deal with things out of your control:

    → API response

    → User input

    → Input from reading a file

→ Use console.error(e) to throw a custom error

→ Example: 1) try{} throws an error if there is one
           2) catch{} logs the error 
           3) finally{} runs no matter what (error or not
           
    function test(val) {
            try {
                if(isNaN(val)){
                    throw "Not a number";
                } else {
                    console.log("Got number");
                } 
            }
            
            catch(e) {
                console.log(e);
            } finally {
                console.log("Done " + val);
                input.value = "";
                input.placeholder = "Enter number"
            }
            
            }






