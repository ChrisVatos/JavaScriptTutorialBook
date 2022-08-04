# Key Event Handler

→ There are several key events: 

    → onkeypress: Triggered whenever a key gets pressed. Pressing means when the button is pressed and released
    
    → onkeydown: Triggered as soon as the button is pressed
    
    → onkeyup event: Triggered as soon as a key is released

→ We can get the key that triggered the event using:

    → event.key

→ Example:
```
<!doctype html>
<html>
  <body>
    <body>
      <div id="wrapper">JavaScript is fun!</div>
      <input type="text" name="myNum1" onkeypress="numCheck()">
      <input type="text" name="myNum2" onkeypress="numCheck2()">
      <script>
        function numCheck() {
            message("Number: " + !isNaN(event.key));
            return !isNaN(event.key);
        }
        function numCheck2() {
            message("Not a number: " + isNaN(event.key));
            return isNaN(event.key);
        }
        function message(m) {
            document.getElementById('wrapper').innerHTML = m;
        }
      </script>
  </body>
</html>
```

→ We can add a return statement to our onkeypress, onkeydown, onkeyup events, like this:

    → onkeypress/onkeydown/onkeyup = "return numCheck2()";

    → If true is returned, the key value gets added to the input box; if false is returned, the key value is not added