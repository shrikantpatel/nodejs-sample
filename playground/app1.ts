let x: number = 10;
let y: number = 20;
console.log(x + y);

function greeter (person : string) {
    return `hello ${person}`;
}

console.log(greeter('world'));

interface Person {
    firstName : string;
    lastName :string;
}

function greeter1 (person : Person) {
    return `hello ${person.firstName} ${person.lastName}`;
}

let user = { firstName: "Jane", lastName: "Doe" };
let user1 : Person = user;

console.log(greeter1(user));

class Student {
    fullName: string;
    
    /*
    This is what happens if firstname and lastname are public, the use of public on arguments 
    to the constructor is a shorthand that allows us to automatically create properties 
    with that name.

    
    app.ts:32:1 - error TS2322: Type 'Student' is not assignable to type '{ firstName: string; lastName: string; }'.
    Property 'firstName' is missing in type 'Student'.

    32 user = new Student("Jane", "M.", "Student");
    */
    constructor(public firstName: string, middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

user = new Student("Jane", "M.", "Student");

// greater take person as input, but will except student since if it atleast same element as person, more element don't hurt
console.log(greeter1(user));

enum Color {'Black'=1, 'Red'};

let color :  Color = Color.Black;
console.log(color);

//let numberArr :Array<number> = [1, 2, 3];
let numberArr : number[] = [1, 2, 3];

console.log(numberArr);