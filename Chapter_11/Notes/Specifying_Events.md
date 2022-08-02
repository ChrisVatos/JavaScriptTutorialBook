# Specifying Events

→ "Interactive Content" is content that responds to the actions of a user 

    → This "interactive content" is made possible by changing the DOM based on user interactions

→ There are three way to specify events: 

    → 1) Specifying events with HTML

    → 2) Specifying events with JS

    → 3) Specifying events with event listeners

## Specifying events with HTML

→ Syntax: ```<p id="unique" onclick="magic()">Click here for magic!</p>```

→ Advantages: 

    → Easy to read and predict what the code will do

→ Disadvantages:

    → We can only specify one even this way

    → Cannot change the event dynamically


## Specifying events with JS

→ Syntax: ``` document.getElementById("unique").onclick = function() { magic() ;}; ```

→ We select the p shown in the previous section by its attribute value unique, grabbing the onclick property, and assigning the magic() function to it by wrapping it in an anonymous function

→ We could also specify the exact function on the spot here

→ Advantages: 

     →  We can overwrite this with another function anytime, making the event that can be fired more dynamic


## Specifying events with Event Listeners

→ Involves using the addEventListener() method

    → Allows us to specify multiple events for a single element

→ Syntax: ```document.getElementById("unique").addEventListener("click", magic);```

→ When we use the addEventListener() method, we specify the event type within the event listener without the "on" prefix

→ Note: We leave out the parentheses after the magic function here. We cannot send in parameters like this. If that is something we need, we'd have to wrap the functionality in an anonymous function, like this:

    → ``` document.getElementById("unique").addEventListener("click", function() { magic(arg1, arg2) });```

    

 


    



