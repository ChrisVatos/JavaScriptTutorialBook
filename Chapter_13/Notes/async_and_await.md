# async and await

→ With the "async" keyword, we can make a function return a Promise. We can use this Promise just like we learned in the previous section, or we can use the more powerful "await" keyword to wait until the Promise is done

→ "await" only works in an "async" function

→ The argument to the resolve function is what gets returned



→ Example:

    function saySomething(x) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve("something" + x);   // What gets returned
            }, 2000);
        });
    }

    async function talk(x) {
        const words = await saySomething(x);
        console.log(words);
    }

    talk(2);
    talk(4);
    talk(8);
