# Animating Elements

→ We can animate using HTML, CSS and JS in order to:

    →  Draw the user's attention to a particular location

    → Play a game

    → Illustrate an explanation

    → etc.

→ Example: 

```
<!doctype html>
<html>
  <style>
    div {
      background-color: purple;
      width: 100px;
      height: 100px;
      position: absolute;
    }
  </style>

  <body>
    <button onclick="toTheRight()">Go right</button>
    <div id="block"></div>

    <script>
      function toTheRight() {
        let b = document.getElementById("block");
        let x = 0;
        setInterval(function () {
          if (x === 600) {
            clearInterval();
          } else {
            x++;
            b.style.left = x + "px";
          }
        }, 2);
        
      }
    </script>
  </body>
</html>
```

→ When we click the button, the function toTheRight() gets triggered. This function grabs block and stores it in b. It sets x to 0 

→  Then we use a very powerful built-in JavaScript function: setInterval(). This function keeps on evaluating an expression until clearInterval() gets called. This is done when x, the measure of how far we are to the left, reaches 600. It repeats it every 2 milliseconds, which gives it the sliding look
