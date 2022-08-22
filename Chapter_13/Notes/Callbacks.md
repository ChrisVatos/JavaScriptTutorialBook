# Callbacks

→ It is just a function that takes another function as an argument, which is then called when the rest of the initial function has finished. In other words, it's just a function calling a function

→ Example:

    function doSomething(callback) {  
        callback();
    }

    function sayHi() {
        console.log("Hi!");
    }

    doSomething(sayHi);

    → sayHi replaces callback() in doSomething()

→ When passing a function as a parameter, we exclude the parantheses

→ Callbacks become really valuable in an asynchronous context, for example, when one function is still waiting for the results of a call to the database before calling the callback function that is going to process the data

→ Some JS built-in functions work with this callback principle; the setTimeOut() and setInterval() functions:

    setInterval(encourage, 500);
    function encourage() {
        console.log("You're doing great, keep going!");
    }

    → The functions that are inserted as arguments are called callbacks here 
    
    → Understanding concurrency really starts with callbacks

→ Callbacks are a great concept, but they can create ugly code very fast. There is a better solution