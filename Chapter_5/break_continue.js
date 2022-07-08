/* break and continue --> Two keywords used to control the flow of execution
    1) break --> will stop the loop and move on to the code below the loop
    2) continue --> will stop the current iteration and move back to the top of the loop, checking the condition  */

let cars = [
    {
        model: "Golf",
        make: "Volkswagen",
        year: 1999,
        color: "black",
    },

    {
        model: "Picanto",
        make: "Kia",
        year: 2020,
        color: "red",
    },

    {
        model: "Peugeot",
        make: "208",
        year: 2021,
        color: "black",
    },

    {
        model: "Fiat",
        make: "Punto",
        year: 2020,
        color: "black",
    }
]


/* break --> When the "break" statement is executed, the loop will end  */ 

for(let i = 0; i < 10; i++) {
    console.log(i);
    if(i === 4) {
        break;
    }
}

for(let i = 0; i < cars.length; i++) {
    if(cars[i].year >= 2020) {
        if(cars[i].color === "black") {
            console.log("I have found my new car:", cars[i]);
            break;
        }
    }
}

/* However, often it is not a best practice to use break. If you can manage to work with the 
condition of the loop to break out of the loop instead, this is a much better practice. It prevents
you getting stuck in an infinite loop, and the code is easier to read.  */


/* continue --> used to move on to the next iteration of the loop
    1) Quits the current iteration of the loop and moves back up to cehck the condition and start a new iteration  */

for (let car of cars){
    if(car.color !== "black"){
        continue;
    }

    if (car.year >= 2020) {
        console.log("we could get this one:", car);
    }
}


// Practice Exercise 5.8

let output = "";
let skip = 4;

for(let i = 0; i < 10; i++) {
    if(i === skip) {
        continue;
    } else {
        output += i
    }
}
console.log(output);


/* break, continue, and nested loops --> When we break/continue in a nested loop, the outer loop will not break */

let groups = [
    ["Martin", "Daniel", "Keith"],
    ["Margot", "Marina", "Ali"],
    ["Helen", "Jonah", "Sambikos"],
  ];

for(let i = 0; i < groups.length; i++) {
    let matches = 0;
    for(let j = 0; j < groups[i].length; j++) {
        if(groups[i][j].startsWith("M")) {
            matches++;
        } else {
            continue;
        }

        if(matches === 2) {
            console.log("The group with at least 2 members whose name starts with M:", groups[i]);
            break;
        }
    }
}

// Code below prints the first name in each group beginning with the letter "M"
for (let group of groups){
    for (let member of group){
      if (member.startsWith("M")){
        console.log("found one starting with M:", member);
        break;
      }
    }
  }


/* break, continue and labeled blocks --> We can break out of the outer loop from inside the inner loop, 
                                          but only if we give a label to our loop
--> We can give labels to code blocks which can be any word apart from JS reserved keywords 
--> Labels are useful when you want to be done as soon as you find one hit  */

outer:
for (let group of groups) {
    inner:
    for (let member of group) {
        if (member.startsWith("M")) {
            console.log("found one starting with M:", member);
            break outer;
        }
    }
}

// "outer" and "inner" are labels 
// The above code will output: found one starting with M: Martin
    //--> After finding "Martin" in groups[0][0] it will break out of the outer loop, meaning all loops end
                                     