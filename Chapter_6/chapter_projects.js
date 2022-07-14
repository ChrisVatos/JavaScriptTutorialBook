// Create a recursive function

function countToTen(nr) {
    if(nr > 10) {
        return;
    } else {
        console.log(nr);
        countToTen(++nr);
    }
}
countToTen(6);


// Set timeout order

let outputOne = () => console.log("One");
let outputTwo = () => console.log("Two");

let outputThree = () => {
    console.log("Three");
    outputOne();
    outputTwo();
}

let outputFour = () => {
    console.log("Four");
    setTimeout(outputOne, 0);
    outputThree();
}

outputFour();




