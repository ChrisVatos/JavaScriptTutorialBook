# Manipulating Attributes

→ Attributes are parts in HTML elements that are followed by equal signs

    → Examples include id, class, href, style, src, etc

→ The setAttribute() method allows us to add or change attributes on an element

    → Syntax: setAttribute(attribute, value);

        → attrbiute = attribute to modify 

        → value = value to set attribute to 

→ The getAttribute() method retrieves the value of a certain attribute

    → Syntax: getAttribute(attributeName);

        → attributeName = name of attribute we want to retrieve value of

→ Example

```
<!DOCTYPE html>
<html>
  <body>
    <script>
      function changeAttr(){
        let el = document.getElementById("shape");
        el.setAttribute("style", "background-color:red;border:1px solid black");
        el.setAttribute("id", "new");
        el.setAttribute("class", "circle");
      
      }
    </script>
    <style>
      div {
        height: 100px;
        width: 100px;
        background-color: yellow;
      }
      .circle {
        border-radius: 50%;
      }
    </style>
    <div id="shape" class="square"></div>
    
    <button onclick="changeAttr()">Change attributes...</button>
  </body>
</html>
```

→ After the button is clicked the HTML of the div becomes: 

    ```<div id="new" class="circle" style="background-color:red;border:1px solid black"></div>```

→ Note: JS interacts with the DOM and not the HTML file directly; therefore, the DOM is the one that changes

