# Javascript Hoisting

→ We have three different variable declarations: 1) const
                                                 2) let 
                                                 3) var

→ It is always better to use let rather than var because of their different scopes

→ Hoisting is the principle of moving declarations of variables to the top of the scope in which they are defined

→ Example below prints "5" to the console:

    var x;
    x = 5;
    console.log(x);

→ Thanks to hoisting, xample below also prints "5" to the console:

    x = 5;
    console.log(x);
    var x;

    → The reason this happens is that the JavaScript interpreter moves all the var declarations to the top of the file before processing the file. Only the declarations, not the initializations get moved to the top of the file. 

→ If you try to do this with let, you'll get a ReferenceError. This is why it is better to use let. Because clearly, this behavior is very hard to read, unpredictable, and you don't really need it

## Using Strict Mode

→ We can change the understanding and forgiving behavior of JavaScript to some extent using strict mode. 

→ We can switch on strict mode with the following command in your code. This needs to be the first command of your code:

    "use strict";

→ Using strict mode is a great way of getting used to using JavaScript in the setting of frameworks or even for writing TypeScript later. 

→ It is typically considered a good practice nowadays, so we would encourage you to use this in your own code when you have the chance. 

→ Here is something that works when we don't use strict mode:

    function sayHi() {
        greeting = "Hello!";
        console.log(greeting);
    }
    sayHi();

    → We forgot to declare greeting, so JS did it for us by adding a greeting variable at the top level

    

→ If we enable strict mode, however, this will give a "ReferenceError":

    "use strict";
    function sayHi() {
        greeting = "Hello!";
        console.log(greeting);
    }
    sayHi();

    


