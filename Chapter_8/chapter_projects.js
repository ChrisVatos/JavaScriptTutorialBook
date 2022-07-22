// Word Scrambler

let word = "automobile";

function scramble(string) {
    let lengthOfString = string.length;
    let output = "";

    for(let i = 0; i < lengthOfString; i++) {
        let letter = string.charAt(Math.floor(Math.random() * string.length));
        console.log("Chosen Letter:", letter);
        output += letter;

        string = string.split("")
        string.splice(string.indexOf(letter),1);
        string = string.join("");
        console.log("New String:", string);
    }

    return output;
} 

console.log("Scrambled:", scramble(word));



// Countdown
let endDate = "December 26, 2022 19:00:00";

function countDown() {
    let currentDate = new Date();
    let milliInDay = 86400000;
    let milliInHour = 3600000;
    let milliInMinute = 60000;
    let milliInSecond = 1000;

    let timeRemaining = Date.parse(endDate) - currentDate;

    let days = Math.floor(timeRemaining / milliInDay);
    timeRemaining = timeRemaining - (days * milliInDay);

    let hours = Math.floor(timeRemaining / milliInHour);
    timeRemaining = timeRemaining - (hours * milliInHour);

    let minutes = Math.floor(timeRemaining / milliInMinute);
    timeRemaining = timeRemaining - (minutes * milliInMinute);

    let seconds = Math.floor(timeRemaining / milliInSecond);
    timeRemaining = timeRemaining - (seconds * milliInSecond );

    let countdown = { Days: days,
                      Hours: hours,
                      Minutes: minutes,
                      Seconds: seconds         
    }

    return countdown;
}


function update() {
    let time = countDown();
    let result = "";

    for(let x in time) {
        result += (` ${x}: ${time[x]}`);
    }

    console.log(result);
    setTimeout(update, 1000);
}

update();









