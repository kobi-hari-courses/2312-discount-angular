function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.log = function () {
    console.log('I am a person', this.firstName, this.lastName);
};


String.prototype.reverse = function() {
    var parts = this.split('');
    var reversed = parts.reverse();
    var result = reversed.join('');
    return result;
}


var p1 = new Person('John', 'Smith');
var p2 = new Person('Jane', 'Smith');

var f = p1.log;
var g = f.bind(p1);
g();