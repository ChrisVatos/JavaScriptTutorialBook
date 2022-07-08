1) const q = '1';
    switch (q) {
        case '1':
            answer = "one";
            break;
        case 1:
            answer = 1;
            break;
        case 2:
            answer = "this is the one";
            break;
        default:
            answer = "not working";
    }
    console.log(answer);

    --> ONE

2) const q = 1;
    switch (q) {
        case '1':
            answer = "one";
        case 1:
            answer = 1;
        case 2:
            answer = "this is the one";
            break;
        default:
            answer = "not working";
    }
    console.log(answer);

    --> 1

3)  let login = false;
    let outputHolder = "";
    let userOkay = login ? outputHolder = "logout" : outputHolder = "login";
    console.log(userOkay);

    --> login

4) const userNames = ["Mike", "John", "Larry"];
    const userInput = "John";
    let htmlOutput = "";
    if (userNames.indexOf(userInput) > -1) {
        htmlOutput = "Welcome, that is a user";
    } else {
        htmlOutput = "Denied, not a user ";
    }
    console.log(htmlOutput + ": " + userInput);

    --> Welcome, that is a user: John

5)  let myTime = 9;
    let output;
    if (myTime >= 8 && myTime < 12) {
        output = "Wake up, it's morning";
    } else if (myTime >= 12 && myTime < 13) {
        output = "Go to lunch";
    } else if (myTime >= 13 && myTime <= 16) {
        output = "Go to work";
    } else if (myTime > 16 && myTime < 20) {
        output = "Dinner time";
    } else if (myTime >= 22) {
        output = "Time to go to sleep";
    } else {
        output = "You should be sleeping";
    }
    console.log(output);

    --> Wake up, it's morning

6)  let a = 5;
    let b = 10;
    let c = 20;
    let d = 30;
    console.log(a > b || b > a);
    console.log(a > b && b > a);
    console.log(d > b || b > a);
    console.log(d > b && b > a);

    --> True, False, True, True

7)  let val = 100;
    let message = (val > 100) ? `${val} was greater than 100` : `${val} was LESS or Equal to 100`;
    console.log(message);
    let check = (val % 2) ? `Odd` : `Even`;
    check = `${val} is ${check}`;
    console.log(check);

    --> 100 was LESS or Equal to 100
        100 is Even
