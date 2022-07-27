# This and the DOM

→ In the DOM, the special "this" keyword refers to the element of the DOM it belongs to. 

    → If we specify an onclick to send "this" in as an argument, it will send in the element the onclick is on

→ Use code below as example: 

```
<!DOCTYPE html>
<html>
  <body>
    <script>
      function reveal(el){
        console.log(el);
      }
    </script>
    <button onclick="reveal(this)">Click here!</button>
  </body>
</html>
```

→ Whenever the button is clicked the output will be: ```<button onclick="reveal(this)">Click here!</button>```

→ Modified Code:

```
<!DOCTYPE html>
<html>
  <body>
    <script>
      function reveal(el){
        console.log(el.parentElement);
      }
    </script>
    <button onclick="reveal(this)">Click here!</button>
  </body>
</html>
```

→ Whenever the button is clicked the output will be: 

```
<body>
    <script>
      function reveal(el.parentElement){
        console.log(el);
      }
    </script>
    <button onclick="reveal(this)">Click here!</button>
</body>
```

→ We could output any other property of the element the same way as above

→ So, the "this" keyword is referring to the element, and from this element we can traverse the DOM like we learned



