class Car {

    model: String

    constructor(model) {
        this.model = model;
    }

    displayMake() {
        console.log(`this is make ${this.model}`);
    }

}

{
    const Prius = new Car('Prius');
    Prius.displayMake(); // This car is Prius
}
