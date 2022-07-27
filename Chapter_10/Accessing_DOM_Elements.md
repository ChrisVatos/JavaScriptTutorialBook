# Accessing Elements in the DOM

→ There are multiple methods to select elements from the DOM. we will discuss how to get elements by their: 

    → ID

    → tag name

    → class name

    → CSS selector 
    
→ We are going to use built-in methods that can go through the DOM and return the elements that match the specifications

→ Use code below as an example

```
<!DOCTYPE html>
<html>
  <body>
    <h1>Just an example</h1>
    <div id="one" class="example">Hi!</div>
    <div id="two" class="example">Hi!</div>
    <div id="three" class="something">Hi!</div>
  </body>
</html>
```


## Accessing Elements by ID

→ We can grab elements by ID with the getElementById() method

    → Returns one full HTML element with the specified ID
    
→ IDs should be unique; only one result will be returned from the HTML document

→ Make Id names descriptive and avoid special characters

→ To select the element with Id of "two";

    → document.getElementById("two);

## Accessing Elements by Tag Name

→ We can grab elements by tag name with the getElementsByTagName() method

→ We get an array as a result because there could be more than one element with the same tag name
    
    → It will be a collection of HTML elements, or HTMLCollection, which is a special JavaScript object

→ To select all div elements:

    → document.getElementsByTagName("div"); 
    
→ Above returns:

    → HTMLCollection(3) [div#one.example, div#two.example, div#three.something, one: div#one.example,
    
     two: div#two.example, three: div#three.something]

→ # specifies the ID value and .  specifies the class name 

→ If there are multiple dots, there are multiple classes

→ item() method used to access the elements in the HTMLCollection by index

    → document.getElementsByTagName("div").item(1);

→ namedItem() method selects elements from HTMLCollection using their ID. Only elements with IDs are considered namedItems

    → document.getElementsByTagName("div").namedItem("one");


## Accessing Elements by Class Name

→ We can grab elements by class name using the getElementsByClassName() method

→ We get an array as a result because there could be more than one element with the same class name
    
    → It will be a collection of HTML elements, or HTMLCollection, which is a special JavaScript object

→ To select all elements with class name "example"

    → document.getElementsByClassName("example");

→ Above returns:

    → HTMLCollection(3) [div#one.example, div#two.example, one: div#one.example, two: div#two.example
    
## Accessing Elements with a CSS Selector

→ We can also access elements using a CSS selector using querySelector() and querySelectorAll(). We then give the CSS selector as an argument, and this will only return the ones that satisfy the CSS selector

→ For a comprehensive list of CSS selectors, see here. [Link text Here](https://www.w3schools.com/cssref/css_selectors.asp)

Ex: p.example → select all p elements with class = "example"
Ex: #green → select the element with the id = "green"
Ex: .outer .inner → select all elements with class = "inner" that are desendants of an element with class = "outer"

### Using querySelector()

→ Selects the first element that matches the query

→ To return the first div:

    → document.querySelector("div");    returns <div id="one" class="example">Hi!</div>

→ To return the first element with class = "something"

    → document.querySelector(".something");   returns <div id="three" class="something">Hi!</div>

→ With this method, you can only use valid CSS selectors: elements, classes, and IDs

### Using querySelectorAll()

→ Selects all the elements that match the query

    → Returns a NodeList object
    
→ Using the item() method we can get them by index

→ To select all the div elements;

    → document.querySelectorAll("div");     returns NodeList(3) [div#one.example, div#two.example, div#three.something]









   