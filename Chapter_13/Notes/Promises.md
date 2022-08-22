# Promises

→ With Promises, we can organize the sequence of our code in a slightly easier-to-maintain way

→ A "Promise" is a special object that connects code that needs to produce a result and the code that needs to use this result in the next step

→ When we create a Promise, we give it a function. This function needs two parameters, and these parameters are callbacks. We have called them "resolve" and "reject"

→ When resolve() is called, the Promise is presumed to be successful and whatever is between the arrows is returned and used as input for the .then() method on the Promise object

→ If reject() is called, the Promise failed and the catch() method on the Promise object (if present) is executed with the argument of the reject() function

→ Example:

    let promise = new Promise(function (resolve, reject) {
        // do something that might take a while
        // let's just set x instead for this example  
        let x = 20;
        if (x > 10) {
            resolve(x); // on success
        } else {
            reject("Too low");  // on error
        }
    });

    promise.then(
        function (value) {
            console.log("Success:", value);
        },
        function (error) {
            console.log("Error:", error);
        }
    );

    1) We first create a Promise. When creating a Promise, we don't know what the value of the Promise is going to be. This value is whatever is sent as an argument to the resolve function. It is a sort of placeholder

    2) So when we call .then on the Promise, we basically say: figure out what the value of the Promise is, and when you know, execute one function if the Promise was resolved or a different function if it was rejected
    
    3) When a Promise is neither resolved nor rejected, we say that the Promise is pending

    4) then() is a Promise itself, so when it returns we can use the result for the next then() instance. This means we can chain the then() instances

→ Example: 

    const promise = new Promise((resolve, reject) => {
    reject("oops... ");
    })
    .then(value => {
        console.log(value);
        return "we";
    })
    .then(value => {
        console.log(value);
        return "can";
    })
    .then(value => {
        console.log(value);
        return "chain";
    })
    .then(value => {
        console.log(value);
        return "promises";
    })
    .then(value => {
        console.log(value);
    })
    .catch(value => {
        console.log(value);
    })

    1) The last block is a catch() function: if any of the functions were to result in a rejection and the Promise were therefore rejected, this catch() block would be executed and print whatever the reject() function sent to the catch() method

    2) This will log "oops..." because the first Promise was rejected 

→ We can try to do a certain set of actions and when something goes wrong, use a catch() method to deal with it, as seen above

