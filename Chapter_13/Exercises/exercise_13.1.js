
function greet(fullNameArray) {
    for(let i = 0; i < fullNameArray.length; i++) {
        console.log(fullNameArray[i]);
    }
}


function sayName(fullNameString, callback) {
    let fullNameInArray = fullNameString.split(" ");
    callback(fullNameInArray);
}


sayName("Chris Vatos", greet);