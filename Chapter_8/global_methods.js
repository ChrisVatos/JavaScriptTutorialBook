/* Global Methods --> Can be used without referring to the built-in object they are part of
                        --> Can use the method name as if it was a function defined within our scope, without the 
                            "object" name in front of it 
                  --> Most common global methods
                        1) Deconding and Encoding URI
                        2) Escaped and Unescaped
                        3) Parsing Numbers
                        4) Evaluate  */

let x = 7;
console.log(isNaN(x));  // Outputs: false


/* 1) Deconding and Encoding URI --> Encoding is simply converting from one shape to another
                                 --> URI = Uniform Resource Identifier
                                 --> URL = Uniform Resource Locator
                                 --> URL (uniform resource locator) is a subcategory of URI that is not only an identifier, 
                                     but also holds the information on how to access it (location)
                                 --> Need this when we send variables over the URL using the get method in a form
                                     These variables that you are sending via the URL are called query parameters  
                                 --> URI need to be in certain a format (no spaces/certian character allowed)    */

// encodeURI() & decodeURI() --> Fix/Format broken URI (containing spaces) and decode them back to a string

let uri = "https://www.example.com/submit?name=maaike van putten";

let encoded_uri = encodeURI(uri);  
console.log("Encoded:", encoded_uri);   //Outputs: Encoded: https://www.example.com/submit?name=maaike%20van%20putten

let decoded_uri = decodeURI(encoded_uri);
console.log("Decoded:", decoded_uri);    //Outputs: Decoded: https://www.example.com/submit?name=maaike van putten

// encodeURIComponent() & decodeURIComponent() --> Encode and decode a string that contains special characters (/ , ? : @ & = + $ #)


// Practice Exercise 8.1
let string1 = "How's%20it%20going%3F";
let string2 = "How's it going?"

console.log("Decoded:", decodeURIComponent(string1));
console.log("Encoded:", encodeURIComponent(string2));

let uri_3 = "http://www.basescripts.com?=Hello World";
let encoded_uri_3 = encodeURI(uri_3);
console.log("Encoded:", encoded_uri_3);

/* 2) Escaped and Unescaped --> Not really used and supported */


/* 3) Parsing Numbers --> Converting string to numbers */

// parseInt() --> Converts string to integer (Stops parsing when it runs into a non-numeric character)
let str_int = "6";
let int_int = parseInt(str_int);
console.log(typeof(int_int));   // Outputs: Number


// parseFloat() --> Converts string to a float (Stops parsing when it runs into a character it cannot interpret and doesn't append .0 to intgers)
let str_float = "7.66";
let float_float = parseInt(str_float);
console.log(typeof(float_float));   // Outputs: Number


/* 4) eval() --> Executes the arugment as a JS statement
             --> Bad for security reasons and has poor performance
             --> Avoid using this   */
             







