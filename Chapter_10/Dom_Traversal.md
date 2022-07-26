# Basic Dom Traversing 

→ We can traverse the DOM using the document object 

→ This document object contains all the HTML and is a representation of the web page

→ Traversing over these elements can get you to the element you need in order to manipulate it  

→ We will use the below code as an example to demonstrate DOM traversal

```
<!DOCTYPE html>
<html>
    <body>
        <h1>Let's find the treasure</h1>
        <div id="forest">
            <div id="tree1">
                <div id="squirrel"></div>
                <div id="flower"></div>
            </div>
            <div id="tree2">
                <div id="shrubbery">
                    <div id="treasure"></div>
                </div>
                <div id="mushroom">
                    <div id="bug"></div>
                </div>
            </div>
        </div>
    </body>
</html>
```


## children and childNodes Property 

→ childNodes is more a complete term than children

    → They contain text nodes and comments

→ children just contain all the HTML elements, so are really the nodes

    → With children, however, you can use the ID, and therefore they are easier to use    

→ To traverse the DOM using children property: 

    → document.body.children.forest.children.tree2.children.shrubbery.children.treasure;
    → Note: On every element we select, we have to select the children again (.children)

→ To traverse the DOM using childNodes property: 

    → document.body.childNodes[3].childNodes[3].childNodes[1].childNodes[1];

→ We can use the parentElement property to move back up and return the parent HTML element

    → document.body.children.forest.children.tree2.parentElement;

→ We can use previousElementSibling and nextElementSibling to move sideways and return the next/previous HTML element

    → We can select tree2 likewise:     document.body.children.forest.children.tree2;
    → We can get to tree1 likewise:     document.body.childreen.forest.children.tree2.previousElementSibling;
    → We can go back to tree2:          document.body.childreen.forest.children.tree1.nextElementSibling;

→ previousSibling/nextSibling properties will return the next node of any type


## Selecting Elements as Objects

→ Use code below as an example

```
<!DOCTYPE html>
<html>
    <body>
        <h1>Welcome page</h1>
        <p id="greeting">
            Hi!
        </p>
    </body>
</html>
```

→ Instead of using console.dir(), we can just type in the path to the element we want to change

→ To access the p element: 

    → document.body.children.greeting;

    → We can now manipulate the properties of the element, and the element itself


### Changing innerText (Only plain text b/w open and closing tags)

→ The innerText property focuses on the text between the opening and closing of the element: ``` <element>here</element>```

→ To change the innerText between the opening and closing tags: 

    → document.body.children.greeting.innerText = "Bye";

→ However, if there is any HTML inside the element you need to select, or if you want to add HTML, you cannot use this method

    → document.body.children.greeting.innerText = "<p>Bye!</p>";     will yield <p>Bye!</p>


### Changing innerHTML (Can interpret HTML elements)

→ This property doesn't just process be plain text, but can also interpret other inner HTML elements

    → document.body.children.greeting.innerHTML = "<b>Bye!</b>";     will yield Bye! in bold 






