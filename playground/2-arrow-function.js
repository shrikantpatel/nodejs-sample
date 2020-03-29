const square = function (x) {
    return x * x
}

const squareArrow = (x) => { return x * x }

const squareArrow1 = (x) => x * x

console.log(square(3))
console.log(squareArrow(3))
console.log(squareArrow1(3))

const event = {
    name: 'Family party',
    guestList: ['shri', 'bhumi', 'parth', 'krish'],
    // shorthand method to define function
    printList() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach(x => console.log(x + ' is attending ' + this.name))
    },
    // long hand method to define function
    printList1: function () {
        console.log('guest list for ' + this.name)
    },
    //guest list for undefined for below method, so should not use => to define the function that need "this"
    printList2: x => console.log('guest list for ' + this.name)
}

event.printList();
event.printList1();
event.printList2();