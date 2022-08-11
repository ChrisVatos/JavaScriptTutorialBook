# Cookies

→ Cookies are small data files that store information about the user of a website

→ Cookie are strings with a special pattern:

    → They contain key-value pairs and these key-value pairs are 
      separated by semi-colons

→ Here is how we create cookies:

    document.cookie = "key1=value1;key2=value2";

→ To get all the cookies, we use decodeURIComponent(document.cookie):

    let cookie = decodeURIComponent(document.cookie);

    → Variable cookie is now a string we can manipulate using the methods we learned

    → Use split(";") to split the cookies based on their key-value pairs

    → Trim the leading white space on each key-value pair

    → Perform any other computations as needed

 → If you are writing a new website, you probably should not be using this. However, whenever you need to work with older code, chances are you'll come across this. 
    

→ Example:

    <!DOCTYPE html>
    <html>
    <body>
        <input onchange="setCookie(this)" />
        <button onclick="sayHi('name')">Let's talk, cookie!</button>
        <p id="hi"></p>
        <script>
        function setCookie(e) {
            document.cookie = "name=" + e.value + ";";
        }

        function sayHi(key) {
            let name = getCookie(key);
            document.getElementById("hi").innerHTML = "Hi " + name;
        }
        function getCookie(key) {
            let cookie = decodeURIComponent(document.cookie);
            let cookieList = cookie.split(";");
            for (let i = 0; i < cookieList.length; i++) {
            let c = cookieList[i];
            if (c.charAt(0) == " ") {
                c = c.trim();
            }
            if (c.startsWith(key)) {
                console.log("hi" + c);
                return c.substring(key.length + 1, c.length);
            }
            }
        }
        </script>
    </body>
    </html>

