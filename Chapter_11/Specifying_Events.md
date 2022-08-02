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

    → Cannot change the even dynamically


## Specifying events with JS

→ Syntax: document.getElementById("unique").onclick = function() { magic() ;};

fcf

