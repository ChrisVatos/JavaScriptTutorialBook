# DOM Event Flow

→ "Event Bubbling" moves from the inner element to the outer element (child to parent):

→ "Event Cappturing" moves from the outer element to the inner element (parent to child): 

    →  You can use the useCapture argument of addEventListener() (the third argument) and set it to true (false by default)

→ The event capturing and bubbling allows us to apply a principle called "event delegation": 

    → Event delegation is the concept where instead of adding event handlers to every element in a certain block of HTML, we define a wrapper and add the event to this wrapper element, and it then applies to all the child elements as well

→ Example:
```
<!DOCTYPE html>
<html>
    <body>

        <style>
        div {
            border: 1px solid black;
            margin-left: 5px;
        }
        </style>

        <div id="message">Bubbling events</div>
        <div id="output">
        1
        <div>
            2
            <div>
            3
            <div>
                4
                <div>5</div>
            </div>
            </div>
        </div>
        </div>
        <script>

        function bubble() {
            console.log(this.innerText);
        }
        let divs = document.getElementsByTagName("div");
        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener("click", bubble);
        }
        </script>
    </body>
 </html>
```

→ If the 3 is clicked, it will log:

    → 345,2345,12345

→ If the 3 is clicked, and a third argument of "true" is added to addEventListener() method it will log:

    → 12345,2345,345
