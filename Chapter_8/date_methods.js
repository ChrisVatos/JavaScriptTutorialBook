/* Creating Dates --> Using the different constructors   */

let currentDate = new Date();   // new Date() creates an object with properties of the current date and time
console.log(currentDate);

let now2 = Date.now()
console.log(now2);              // Logs the current time, represented in seconds since January 1st 1970
                                // This is an arbitrary date representing the Unix epoch

let stringDate = new Date("Sat Jun 05 2021 12:40:12 GMT+0200");     // constructor can take string as argument
console.log(stringDate);

let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);          // constructor can also take detailed arguments 
console.log(specificDate);                                          // 0 is for January and 11 is for December



let d = new Date();
console.log("Day of Week:", d.getDay());
console.log("Day of Month:", d.getDate());
console.log("Month:", d.getMonth());
console.log("Year:", d.getFullYear());

d.setFullYear(2010);
console.log("Year:", d.getFullYear());

d.setMonth(9);
console.log("Month:", d.getMonth());

d.setDate(25);
console.log("Day of Month:", d.getDate());

d.setHours(6);
console.log("Hours", d.getHours());

console.log(d);


/* Parsing Dates --> We can parse epoch dates from string using parse()
                 --> parse() can take dates in many string formats and returns the time difference since January 1, 1970 
                 --> Be cautious with the format and the order of the month and days       */

let d1 = Date.parse("June 5, 2021");
console.log(d1);

let d2 = Date.parse("6/5/2021");
console.log(d2);
                 

/* toDateString() --> Rturns the date (not the time) of a date object as a string     
                  --> Format:  nameOfDate.toDateString()        */

console.log(d.toDateString());  // Mon Oct 25 2010


/* toLocaleDateString() --> Returns the date (not the time) of a date object as a string, using locale conventions
                        --> Format:  nameOfDate.toLocaleDateString()        */
                    
console.log(d.toLocaleDateString());   // 10/25/2010


// Practice Exercise 8.7

let d4 = new Date("December 26, 2001 08:40:00")
console.log(d4);

let months = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

let day = d4.getDate();
let month = d4.getMonth();
let year = d4.getFullYear();

console.log(`${months[month]} ${day}, ${year}`)     // December 26, 2001



                 


