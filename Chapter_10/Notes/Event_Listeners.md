# Event Listeners

→ Events are classified as things that happen on a web page

    → Clicking on something

    → Scrolling

    → Moving the mouse over an element

    →  etc

→ We have already seen the "onclick()" event handler, but there many others

    → onchange()

    → onmousehver()

    → etc

→ One element can only have one event handler as an HTML attribute

→ To add event handlers as HTML attributes, see example below:

    ```<button onclick="addRandomNumber()">Add a number</button>```

→ To register event handlers using JS (often called event listeners), use the addEventListener("event", function) method

    1) Select element to add event listener to

    2) Use the addEventListener("event", function) syntax to add the event

        → function is passed simply as the function name without and parentheses ()


    → Using JS, we can add multiple events to one element

    → Note: When using event listeners, we remove the "on" prefix from the event type

            → "onclick" becomes "click"

            → "onchange" becomes "change"


→ It is common practice to add the even listeners on the loading of the webpage like so:

    window.onload = function() {
        // for example adding event listeners to elements
        // initializng the web page
    }

    
