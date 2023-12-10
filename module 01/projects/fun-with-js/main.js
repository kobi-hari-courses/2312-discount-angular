function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.log = function () {
        console.log('I am a person', this.firstName, this.lastName);
    };
}

var p1 = new Person('John', 'Smith');
var p2 = new Person('Jane', 'Smith');

var f = p1.log;
var g = f.bind(p1);
g();