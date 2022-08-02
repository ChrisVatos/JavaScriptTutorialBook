# Onload Event Handler

→ The "onload" event gets executed after a certain element is loaded. 

→ This event is most commonly used on the window object, but it can be used on any element. When you use it on window, this event gets started when the window object is done loading. Here is how to use it:

```
   window.onload = function() {
        // whatever needs to happen after the page loads goes here
    }
```
  
→ There is a special built-in event to handle the event of the DOM loading
   
    → DOMContentLoaded()

    → This event will get fired immediately after the DOM for the page has been constructed when the event is set

→ Example:

```
    document.addEventListener("DOMContentLoaded", (e) => {
        console.log(e);
    });
```


    
