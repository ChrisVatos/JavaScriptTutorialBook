// Employee Tracking App
class Employee {
    constructor(firstName, lastName, numYears) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.numYears = numYears;
    }
}

let employees = [];
let e1 = new Employee("George", "Geller", 6);
let e2 = new Employee("Zander", "Lowe", 3);
let e3 = new Employee("Chris", "Anast", 10);
employees.push(e1, e2, e3);

Employee.prototype.giveDetails= function() {
    return (`Hi my name is ${this.firstName} ${this.lastName} and I've been working here for ${this.numYears} years.`);
}

employees.forEach(element => console.log(element.giveDetails()));


// Menu Price Items Calculator
class offer {
    #item1 = 10;
    #item2 = 20;
    constructor(numOfItem1, numOfItem2) {
        this.numOfItem1 = numOfItem1;
        this.numOfItem2 = numOfItem2;
    }

    calculate() {
        return this.#item1 * this.numOfItem1 + this.#item2 * this.numOfItem2;
    }

    get cost() {
        return this.calculate();
    }
}

let combo1 = new offer(1,1);
let combo2 = new offer(2,3);
let combo3 = new offer(4,1);

console.log(combo1.cost);
console.log(combo2.cost);
console.log(combo3.cost);
