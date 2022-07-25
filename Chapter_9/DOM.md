# Document Object Model (DOM)

→ The DOM is a way of displaying the structure of an HTML document as a logical tree

        → Possible because of the very important rule that inner elements need to be closed before outer elements get closed

        → Elements are nodes within this tree

       → When a web page is loaded, the browser creates a Document Object Model of the page

→ The DOM is a child object of the BOM

Ex: 
```
<html>
  <head>
    <title>Tab in the browser</title>
  </head>
  <body>
    <h1>DOM</h1>
    <div>
      <p>Hello web!</p>
      <a href="https://google.com">Here's a link!</a>
    </div>
  </body>
</html>

```

<p align="center">
    <img width="750" height="500" src="DOM.jpg">
</p>

<p align="center">
   Figure 1: Tree structure of the DOM of a very basic web page
</p>

→ This type of logical tree and a bunch of extra properties make up a web page's DOM

## Additional DOM Properties

→ To inspect a web page's DOM:

    → console.dir(document)

→ The DOM contains all the HTML elements of a web page

→ These basics of DOM elements, combined with some knowledge of manipulating and exploring the DOM, will open up so many possibilities


## Selecting Page Elements

→ To select page elements to use within your JavaScript code:

    → document.querySelector(x): Returns the first element within the document that matches the specified selector

    → document.querySelectorAll(x): Returns all elements within the document that match the specified selector

        → Will return a static NodeList conataining a list of elements that match the specified group of selectors”

→ Both of these can be used to select page elements by x where x is tag name, ID, or class.
