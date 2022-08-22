const promise = new Promise((resolve, reject) => {
    resolve("Start Counting");
})
    .then(value => {
        console.log(value);
        return "One"
    })
    .then(value => {
        console.log(value);
        return "Two"
    })
    .then(value => {
        console.log(value);
        return "Three"
    })
    .then(value => {
        console.log(value);
    })
    .catch(value => {
        console.log(value);
    })