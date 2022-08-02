# Event Target Property

→ Whenever an event gets fired, an event variable with many properties becomes available 

→ Code below retrieves the properties of the element that triggered the event listener:
    
    → console.dir(event);   

→ One of the most interesting properties for now is the target property

    → The target is the HTML element that fired the event

→ Exampe:
```
<!doctype html>
<html>
  <body>
    <button type="button" onclick="triggerSomething()">Click</button>
    <script>
      function triggerSomething() {
        console.dir(event.target);
      }
    </script>
  </body>
</html>
```

→ In the above example, the event.target is the button element

