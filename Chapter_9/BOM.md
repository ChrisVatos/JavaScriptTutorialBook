# Browser Object Model (BOM)

→ Also called the window browser object

→ Makes it possible for JS code to communicate with the browser

→ Contains all the properties required to represent the window of the browser

    → The size of the window 
    
    → The history of previously visited web pages
    
→ The window object has global variables and functions, and these can all be seen when we explore the window object

→ The exact implementation of the BOM depends on the browser and the version of the browser

→ Use console.dir(window) to get information (properties/objects) about the window object

    → Show a list of all the properties of the specified object

→ BOM contains many other objects; we access these the same way we access object properties (using . notation)

    → Ex: console.history.length to access the length of the history object of the current window

## Practice Execise 9.1

console.dir(window.document)


## Window History Object

→ The window browser object contains a history object 

→ It has been made globally available (Both syntax below work):

    → console.dir(window.history) 

    → console.dir(history) 

→ This object allows us to go back to a previous page

→ It has a built-in function for that called go()

    → window.history.go(-1) in the console brings us back to the previous visited web page


## Window Navigator Object

→ In the window object that we just saw, there is a navigator object

→ This object is particularly interesting because it contains information about the browser we are using

    → What browser?
    
    → What version? 
    
    → What operating system the browser is running on?

→ It has been made globally available (Both syntax below work):

    → console.dir(window.navigator) 

    → console.dir(navigator) 

→ This can be handy for customizing the website for certain operating systems


## Window Location Object

→ Another unique property of window is the location object

    → This contains the URL of the current web page

    → If you override (parts of) that property, you force the browser to go to a new page

→ It has been made globally available (Both syntax below work):

    → console.dir(window.location) 

    → console.dir(location)
    

## Practice Exercise 9.2

console.dir(window.location.protocol)
console.dir(window.location.href)



