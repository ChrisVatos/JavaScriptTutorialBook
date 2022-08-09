# Functions and the Argument Object 

→ JavaScript deals with arguments in functions by adding them to a custom object called "arguments"

→ This object works a lot like an array, and we can use it instead of using the name of the parameter

→ Example:

    function test(a, b, c) {
        a = "nice";
        arguments[1] = "JavaScript";
        console.log("first:", a, arguments[0]);         // arguments[0] refers to argument a ("nice")
        console.log("second:", b, arguments[1]);        // arguments[1] refers to argument b ("JavaScript")
        console.log("third:", c, arguments[2]);         // arguments[2] refers to argument c ("secrets")
    }
    test("fun", "js", "secrets");

    Result:

        first: nice nice
        second: JavaScript JavaScript
        third: secrets secrets 

→ When you update one of the parameters, the argument gets changed accordingly. The same goes for the other way around (Seen above)