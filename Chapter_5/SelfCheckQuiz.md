1) What is the expected output for the following code?

    let step = 3;
    for (let i = 0; i < 1000; i += step) {
        if (i > 10) {
            break;
        }
        console.log(i);
    }

    --> 0, 3, 6, 9
      
2) What is the final value for myArray, and what is expected in the console?
    const myArray = [1,5,7];        
    for(let el in myArray){     // "for in" loop on arrays returns the index so  0,1,2, . . .etc
        console.log(Number(el));
        el = Number(el) + 5;
        console.log(el);
    }
    console.log(myArray);

   -->  0
        5
        1
        6
        2
        7
        [1, 5, 7]