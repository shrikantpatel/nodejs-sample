var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
    }
    Car.prototype.displayMake = function () {
        console.log("this is make " + this.model);
    };
    return Car;
}());
{
    var Prius = new Car('Prius');
    Prius.displayMake(); // This car is Prius
}
