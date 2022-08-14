# JSON

→ Stands for JavaScript Object Notation which is simply a data format

→ JSON is a standard used to communicate with APIs, including APIs that aren't written in JavaScript! 

→ APIs can accept data:

    → Example: The data from a form on a website, in JSON format. 
    
    → Nowadays, APIs almost always send data back in JSON. This data gets converted to JSON and is sent back to the website

→ JSON Example:

    {
    "name" : "Malika",
    "age" : 50,
    "profession" : "programmer",
    "languages" : ["JavaScript", "C#", "Python"],
    "address" : {
        "street" : "Some street",
        "number" : 123,
        "zipcode" : "3850AA",
        "city" : "Utrecht",
        "country" : "The Netherlands"
        }
    }

    → Format is key-value pairs with the keys always between quotes

    → Values between quotes only if they are strings

    → Lists of values (or JavaScript arrays) are indicated with []

→ There are only a few flavours of JSON:

    1) Key-value pairs with values of the following types: string, number, Boolean, and null

    2) Key-value pairs with lists, which have [ ] that contain the items in the list

    3) Key-value pairs with other objects, which have { } that contain other JSON elements

## Parsing JSON

→ JSON strings can easily be converted to a JavaScript object:

    → JSON.parse(jsonString) converts a JSON string to JS object

    → Example:  let str = "{\"name\": \"Maaike\", \"age\": 30}";
                let obj = JSON.parse(str);
                console.log(obj.name, "is", obj.age);


→ Objects can be converted to a JSON string:

    → JSON.stringify(jsObject) converts a JS object into a JSON string

    → Example: let dog = {
                    "name": "wiesje",
                    "breed": "dachshund"
                };
                let strdog = JSON.stringify(dog);
                console.log(typeof strdog);   // string
                console.log(strdog);         // {"name":"wiesje","breed":"dachshund"}


    → This can be useful for storing JSON data directly in a database


