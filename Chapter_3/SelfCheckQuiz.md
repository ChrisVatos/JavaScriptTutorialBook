1) Can you use const and update values within an array?
    --> Yes, you can update values within the array but you can't overwrite the assignment of the array variable decalred as const


2) Which property in an array gives the number of items contained in the array?
    --> nameOfArray.length (the .length proeprty)

3) What is the output in the console?
    const myArr1 = [1,3,5,6,8,9,15];
    console.log(myArr1.indexOf(0));
    console.log(myArr1.indexOf(3));
    --> The output to the console is first -1
    --> The output to the console is then 1

4) How do you replace the second element in an array myArr = [1,3,5,6,8,9,15] with the value 4?
    --> myArr.splice(1, 1, 4)


5) What is the output in the console?
    const myArr2 = [];
    myArr2[10] = 'test'
    console.log(myArr2);
    console.log(myArr2[2]);
    --> [empty x 10, "test"]
    --> undefined


6) What is the output in the console?
    const myArr3 = [3,6,8,9,3,55,553,434];
    myArr3.sort();
    myArr3.length = 0;
    console.log(myArr3[0]);
    --> undefined