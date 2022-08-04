# Drag and Drop Elements

→ Drag and Drop Event Handlers:

    → ondragstart = User starts dragging an item

    → ondragover = A dragged item is being dragged over a valid drop target, every few hundred milliseconds

    → ondrop = Nn item is dropped on a valid drop target
    
→ Example:
```
<!doctype html>
<html>
  <head>
    <style>
      .box {
        height: 200px;
        width: 200px;
        padding: 20px;
        margin: 0 50px;
        display: inline-block;
        border: 1px solid black;
      }
      #dragme {
        background-color: red;
      }
    </style>
  </head>
  
  <body>
    <div class="box" ondrop="dDrop()" ondragover="nDrop()">
        1
        <div id="dragme" ondragstart="dStart()" draggable="true">
            Drag Me Please!
        </div>
    </div>
    <div class="box" ondrop="dDrop()" ondragover="nDrop()">
        2
        <div id="dragme" ondragstart="dStart()" draggable="true">
            Drag Me Please!
        </div>
    </div>
  </body>

  <script>
    let holderItem;
    function dStart() {
      holderItem = event.target;
    }
    function nDrop() {
      event.preventDefault();
    }
    function dDrop() {
      event.preventDefault();
      if (event.target.className == "box") {
        event.target.appendChild(holderItem);
      }
    }
  </script>
</html>
```

→ We need a starting point to be able to drag/drop elements:

    → See the above CSS and HTML for a dragging/dropping area (".box")

→ In order to mark an element as something that can be dragged, we need to add the attribute draggable:

    → See the above divs with id = "dragme" and draggavle = true and ondragstart="dStart()"

→ Then we decide what we are going to do when we drop the draggable element. We need to specify this within the element it can be dragged to:

    → See the above divs with class="box" ondrop="dDrop()" ondragover="nDrop()"

→ We start by specifying a variable in the script for the item that we want to hold when dragging:

    → holderItem
    
→ When the ondragstart event gets triggered, we are going to store the element that is being dragged in the holderItem variable

→ Normally, when you drag, dropping is not allowed by the design of HTML. In order to allow the drop, you'll have to prevent the default event that means the item you want to drop cannot be dropped. You can do this with:

    → event.preventDefault();

→ Usually, before you prevent the default behavior, you would do some checks to see whether the element that is being dropped can be accepted at that place. In the example above, we check whether the class name of the element that it is being dropped to is box. If that's the case, we append holderItem as a child to the box:

    ```
    if (event.target.className == "box") {
            event.target.appendChild(holderItem);
        }
        }
    ```

    