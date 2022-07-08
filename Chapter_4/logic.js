/* Logical Statements 
--> Allow us to make multiple paths in our code
1) if and if else statements
2) else if statements
3) Conditional ternary operators
4) switch statements */

/* 1) IF AND IF ELSE STATEMENTS
--> Template: “if *some condition is true*, then *a certain action will happen*, else *another action will happen*"
--> Only one of these two blocks will be executed:
                            a) the if block when the expression is true
                            b) the else block when the expression is false */


let rain = true;
if(rain) {
    console.log("Taking my umbrella when I need to go outside!");
} else {
    console.log("I can leave my umbrella at home.");
}

let age = 17
if(age >= 18) {
    console.log("Entry granted");
} else {
    console.log('Entry denied');
}


let hobby = "dancing";  
if(hobby == "coding") {        // '==' checks for value being equal, not type (false in this case since dancing <> coding)
  console.log("I love coding too!");
} else {
  console.log("Can you teach me that?");
}

// Practice Exercise 4.1
let boolean = true;
console.log(boolean);

if(boolean) {
    console.log("My boolean variable is true");
}
if(!boolean) {
    console.log("My boolean variable is false");
}

if(boolean) {
    console.log("My boolean variable is true");
} else {
    console.log("My boolean variable is false");
}


/* 2) ELSE IF STATEMENTS
--> A variation of the if statement is an if statement with multiple 'else if' blocks
--> The code gets executed top to bottom, and only one of the blocks will be executed. As soon as a true 
    expression is encountered, the other ones will be ignored
--> Template: “If *a value falls into a certain category*, then *a certain action will happen*, 
               else if *the value falls into a different category than the previous statement*, then *a certain action will happen*, 
               else if *the value falls into a different category than either of the previous brackets*, then *a certain action will h */

let ticket = null;
let age1 = 65;
let message = null;

if(age1 < 3) {
    ticket = 0;
    message = "Ticket is free for kids under three.";
} else if (age1 >= 3 && age1 < 12) {
    ticket = 5;
    message = 'Ticket is 5 dollars with the child discount.';
} else if (age1 >= 12 && age1 < 65) {
    ticket = 10;
    message = "Ticket is at full cost of 10 dollars.";
} else {
    ticket = 7;
    message = "With the senior discount, the cost is 7 dollars.";
}

console.log(ticket);
console.log(message);


// Practice Exercise 4.2
let userAge = prompt("Please enter your age:");
userAge = Number(userAge);

let outputMessage  = null;

if(userAge >= 21) {
    outputMessage = "Entrance confirmed and can purchase alcohol.";
} else if(userAge >= 19) {
    outputMessage = "Entrance confirmed but cannot purchase alcohol."
} else {
    outputMessage = "Entrance denied."
}

console.log(outputMessage);


/* 3) CONDITIONAL TERNARY OPERATORS 
--> Template: “expression ? statement for true : statement associated with false"
              In your head, read as . . . “if *operand1*, then *operand2*, else *operand3*”
--> You can read the question mark as "then" and the colon as "false" */

let age2 = 8
let access = age2 < 18 ? "Denied" : "Allowed";   // A value is assinged to access ("Denied" in this case since age2 = 8 < 18)

// Can also specify an action in a ternary statement
age2 < 18 ? console.log("Denied") : console.log("Allowed");

//Practive Exercise 4.3
let isIDValid = false;
let idValidMessage = isIDValid ? "Access Granted" : "Access Denied";
console.log(idValidMessage);


/* 4) SWITCH STATEMENTS 
--> Switch statments are sometimes better than if else statements, especially when we are evaluating more than 4-5 values
--> "break" keyword necessary to only run one code block when a match is found
--> The "default" case acts like "else" and runs when no other cases match (we can omit this case if we want)
--> Switch statements use strict type checking (===) which checks that both value and data types match
--> Syntax: switch(expression) {
            case value1:
                // code to be executed
                break;
            case value2:
                // code to be executed
                break;
            case value-n:
                // code to be executed
                break;
            default:
                // code to be executed when no cases match
                break;
            }                                                           */

let activity = "Watch Netflix";     //Outputs: I cannot determine the current time.
switch(activity) {
    case "Get up":
        console.log("It is 6:30AM");
        break;
    case "Breakfast":
        console.log("It is 7:00AM");
        break;
    case "Drive to work":
        console.log("It is 8:00AM");
        break;
    case "Lunch":
        console.log("It is 12:00PM");
        break;  
    case "Drive home":
        console.log("It is 5:00PM");
        break;    
    case "Dinner":
        console.log("It is 6:30PM");
        break;
    default:
        console.log("I cannot determine the current time.");
        break;
    }

//Practice Exercise 4.4
let randomNumber =  Math.random();
randomNumber = Math.floor(randomNumber * 10);

let question = prompt("Please enter your question:");
let answer = null

switch(randomNumber) {
    case 1:
        answer = "Be yourself; everyone else is already taken.";
        break;
    case 2:
        answer = "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.";
        break;
    case 3:
        answer = "So many books, so little time.";
        break;
    case 4:
        answer = "A room without books is like a body without a soul.";
        break;
    case 5:
        answer = "You only live once, but if you do it right, once is enough.";
        break;
    case 6:
        answer = "Be the change that you wish to see in the world.";
        break;
    case 7:
        answer = "In three words I can sum up everything I've learned about life: it goes on.";
        break;
    case 8:
        answer = "f you tell the truth, you don't have to remember anything.";
        break;
    case 9:
        answer = "To live is the rarest thing in the world. Most people exist, that is all.";
        break;
    default:
        answer = "I am not wise enough for such a question.";
        break;
}

console.log(`My response to "${question}" is: ${answer}`);

// We can also combine cases by putting them on top of each other
let grade = "k";

switch(grade) {
    case "F":
    case "D":
        console.log("You've failed!");
        break;
    case "C":
    case "B":
        console.log("You've paseed!");
        break;
    case "A":
        console.log("NICE!");
        break;
    default:
        console.log("I do not know that grade!");
        break;
}

//Practice Exercise 4.5
let prize = prompt("Select a number from 0 to 10 to set the value of the prize.");
prize = Number(prize);
let output = "My Selection: ";

switch(prize) {
    case 0:
    case 1:
    case 2:
        output += "Rubber Duck";
        break;
    case 3:
    case 4:
    case 5:
    case 6:
        output += "Lamp";
        break;
    case 7:
    case 8:
    case 9:
        output += "IPhone";
        break;
    default:
        output += "No prize";
        break;
}

console.log(output);

            