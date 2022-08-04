# Onchange/Onblur/Onfocus

→ Onchange: Gets triggered when an element changes (text, style, class, etc) 

→ Onblur: Gets triggered when an object goes out of focus

→ Onfocus: Gets triggered when an object goes into focus

→ Example:

```
<!DOCTYPE html>
<html>
  <body>
    <div id="welcome">Hi there!</div>
    <form>
      <input type="text" name="firstname" placeholder="First name" onchange="logEvent()" />
      <input type="text" name="lastname" placeholder="Last name" onblur="logEvent()" />
      <input type="button" onclick="sendInfo()" value="Submit" />
    </form>
    <script>
      function logEvent() {
        let p = event.target;
        if (p.name == "firstname") {
          message("First Name Changed to  " + p.value);
        } else {
          message("Last Name Changed to  " + p.value);
        }
      }
      function sendInfo() {
        let p = event.target.parentElement;
        message("Welcome " + p.firstname.value + " " + p.lastname.value);
      }
      function message(m) {
        document.getElementById("welcome").innerHTML = m;
      }
    </script>
  </body>
</html>
```

→ The firstname input box has an onchange event. If the value of the data in the input box gets changed, this event gets triggered as soon as the input box loses focus. If the input box loses focus when the value has not changed, nothing happens for onchange

→ This is not true for onblur, which is assigned to the lastname input box. Even when the value hasn't changed, the event will get triggered