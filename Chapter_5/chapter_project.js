// Math Multiplication Table

let multiplicationTable = [];
let valueToMultiply = 9;
let currentResult = null;

for(let i = 0; i <= valueToMultiply; i++) {
    let intermediateArray = [];
    for(let j = 0; j <= valueToMultiply; j++) {
        currentResult = i * j;
        intermediateArray.push(currentResult);
    }
    multiplicationTable.push(intermediateArray);
}

console.table(multiplicationTable);