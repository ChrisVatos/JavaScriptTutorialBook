## Element Click Handler

→ HTML elements can do something when they are clicked
    
    → This is because a JavaScript function can be connected to an HTML element

→ Example:
```
<!DOCTYPE html>
<html>
  <body>
    <script>
        function stop() {
            alert("Ouch! Stop it.")
        }
    </script>
    <div id="one" onclick = "stop()">Don't click here!</div>
  </body>
</html>”
```
→ HTML pages can: 

    1) Have script tags and contain JS code directly
    2) Refer to scripts that get loaded into the page
    Note: When calling the stop() function,it must be surrounded by " "

