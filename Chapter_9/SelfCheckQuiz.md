1) You should see an object representing the list of elements contained within body object of the HTML page

2) document.body.textContent = "Hello World";

3) for (const property in document) {
    console.log(`${property}: ${document[property]}`);


4) for (const property in window) {
    console.log(`${property}: ${document[window]}`);
}

5) ```
<!doctype html>
<html>
<head>
    <title>JS Tester</title>
</head>
<body>
    <h1>Test</h1>
 
    <script>
        const output = document.querySelector('h1');
        output.textContent = "Hello World";
    </script>
</body>
</html>

```



