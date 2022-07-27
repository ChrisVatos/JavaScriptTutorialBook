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

    → HTMLCollection(3) [div#one.example, div#two.example, div#three.something, one: div#one.example, two: div#two.example, three: div#three.something]

→ # specifies the ID value and .  specifies the class name 

→ If there are multiple dots, there are multiple classes

→ item() method used to access the elements in the HTMLCollection by index

    → document.getElementsByTagName("div").item(1);

→ namedItem() method selects elements from HTMLCollection using their ID. Only elements with IDs are considered namedItems

    → document.getElementsByTagName("div").namedItem("one");



   