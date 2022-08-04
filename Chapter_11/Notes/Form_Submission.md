# Form Submission

→ When a form is submitted, an event can be triggered

→ One way to do this is to add the "onsubmit" attribute to the form element: 

    → <form onsubmit = "doSomething()>

→ The function that is listed there will get triggered whenever input of type submit is submitted:

    → <input type="submit" value="send">

→ Example:
```
<!doctype html>
<html>
  <body>
    <div id="wrapper"></div>
    <form action="anotherpage.html" method="get" onsubmit="return valForm()">
      <input type="text" id="firstName" name="firstName" placeholder="First name" />
      <input type="text" id="lastName" name="lastName" placeholder="Last name" />
      <input type="text" id="age" name="age" placeholder="Age" />
      <input type="submit" value="submit" />
    </form>
    <script>
      function valForm() {
        var p = event.target.children;
        if (p.firstName.value == "") {
          message("Need a first name!!");
          return false;
        }
        if (p.lastName.value == "") {
          message("Need a last name!!");
          return false;
        }
        if (p.age.value == "") {
          message("Need an age!!");
          return false;
        }
        return true;
      }
      function message(m) {
        document.getElementById("wrapper").innerHTML = m;
      }
    </script>
  </body>
</html>
```

→ This form contains three input fields and one input button. The fields are for last name, first name, and age. When one of them is missing, the form will not submit, because the function will return false:

    → A message will also be added to the div above the form, explaining what went wrong

    → We added: onsubmit = "return valForm()" which returns true or false: if true the from will submit