var x = 10;
var y = 20;
console.log(x + y);
function greeter(person) {
    return "hello " + person;
}
console.log(greeter('world'));
function greeter1(person) {
    return "hello " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "Doe" };
var user1 = user;
console.log(greeter1(user));
var Student = /** @class */ (function () {
    /*
    This is what happens if firstname and lastname are public, the use of public on arguments
    to the constructor is a shorthand that allows us to automatically create properties
    with that name.

    
    app.ts:32:1 - error TS2322: Type 'Student' is not assignable to type '{ firstName: string; lastName: string; }'.
    Property 'firstName' is missing in type 'Student'.

    32 user = new Student("Jane", "M.", "Student");
    */
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
user = new Student("Jane", "M.", "Student");
// greater take person as input, but will except student since if it atleast same element as person, more element don't hurt
console.log(greeter1(user));
var Color;
(function (Color) {
    Color[Color["Black"] = 1] = "Black";
    Color[Color["Red"] = 2] = "Red";
})(Color || (Color = {}));
;
var color = Color.Black;
console.log(color);
//let numberArr :Array<number> = [1, 2, 3];
var numberArr = [1, 2, 3];
console.log(numberArr);
