# Local Storage

→ A more modern way to store user data

→ With local storage, we can save key-value pairs in our web browser and use them again when the browser is opened later

→ The information is typically stored in a folder on the computer of the user, but this differs a bit by browser

→  Advantages:

    → Doesn't need to be passed around with every HTTP request, which is the case with cookies; local storage just lives there and waits to be accessed

→ The localStorage object is a property of the window object that we've seen

→ There are a few methods on the localStorage object that we need to know:

    → setItem(key, value) = Use whenever we want to save a key-value pair

    → getItem(key) = Use whenever we want to retrieve a value

→ Local storage doesn't expire, though it can be manually deleted

→ We can also retrieve a key using the index. This is useful whenever we need to loop through the key-value pairs and we don't know the names of the keys:

    window.localStorage.key(0);

→ We can emove key-value pairs like this:

    window.localStorage.removeItem("name");

→ We can remove all the key-value pairs from the local storage in one call:

    window.localStorage.clear();

→ Example:

    <!DOCTYPE html>
    <html>
    <body>
    <div id="stored"></div>
        <script>
        let message = "Hello storage!";
        localStorage.setItem("example", message);
        if (localStorage.getItem("example")) {
            document.getElementById("stored").innerHTML =
            localStorage.getItem("example");
        }
        </script>
    </body>
    </html>

    → This code snippet outputs Hello storage! on the page. You can add items to storage by specifying a key and a value with the setItem() method. 
    
    → You can access localStorage directly or via the window object. Here we specify example as the key and Hello storage! as the value and save it to local storage.
    
    → Then we check whether the example key is set in local storage and output the data by writing it to the innerHTML of the div with the ID stored.

    If you go back to your code and turn off the setItem() line before loading the page a second time, it still will output that value, since local storage doesn't expire, unless manually deleted


