// Evaluating a Number Game

let dynamicNumber = 50
let userInput = prompt("Enter a number:");
userInput = Number(userInput);
let output = null;

if(dynamicNumber > userInput) {
    output = dynamicNumber + " was greater than " + userInput;
} else if(dynamicNumber < userInput) {
    output = dynamicNumber + " was less than " + userInput;
} else {
    output = dynamicNumber + " was equal to " + userInput;
}

console.log(output);




// Friend Checker Game

let inputFriend = prompt("Please enter a name:");
inputFriend = String(inputFriend);
let message = null;

switch(inputFriend) {
    case "Nicolas":
    case "Dimitri":
    case "Sadek":
    case "Theo":
    case "Zander":
    case "Harry":
        message = inputFriend + " is a friend!";
        break;
    case "Lauren":
        message = inputFriend + " is your girlfriend!";
        break;
    default:
        message = inputFriend + " is not a friend.";
        break;
}

// console.log(message);




// Rock Paper Scissors Game

let options = ["Rock", "Paper", "Scissors"];

let playerSelection = Math.floor(Math.random() * 3);
let computerSelection = Math.floor(Math.random() * 3);
let winningMessage = null;

if(playerSelection == computerSelection) {
    winningMessage = "Game is a tie";
} else if (playerSelection == 0 && computerSelection == 2) {
    winningMessage = "Player wins with " + options[playerSelection] + ", beating the computer's " + options[computerSelection]
} else if (playerSelection == 2 && computerSelection == 0) {
    winningMessage = "Computer wins with " + options[computerSelection] + ", beating the player's " + options[playerSelection]
} else if (playerSelection > computerSelection) {
    winningMessage = "Player wins with " + options[playerSelection] + ", beating the computer's " + options[computerSelection]
} else {
    winningMessage = "Computer wins with " + options[computerSelection] + ", beating the player's " + options[playerSelection]
}

console.log("Player: ", options[playerSelection]);
console.log("Computer: ", options[computerSelection])
console.log(winningMessage);


