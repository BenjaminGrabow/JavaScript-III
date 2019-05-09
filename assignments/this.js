/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.Window Binding: in the global scope, "this" will refer to the window object (we can use "use strict" tp prevent it).

* 2.Implicit Binding: when a method is called as a property of a object then "this" refers to the parent object of that method.

* 3.New Binding: when a function is called with "new" keyword it is a constrctor function. "this" refers to that newly created instance.

* 4.Explicit Binding: when a function is called through the call() or apply() or bind() method we are using explicit binding. "this" refers to the value passed as first argument of call() or apply() or bind() method.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const myWindowExample = function () {
    console.log(this);
};

myWindowExample(); // window

// Principle 2

// code example for Implicit Binding
const example = {
    age: 100,
    implicitExample: function example() {
        console.log(this.age);
    }
};

example.implicitExample(); //100


// Principle 3

// code example for New Binding
function NewBindingExample(name) {

    this.name = name;
    this.greeting = function () {
        return `Hello I am ${this.name}.`;
    };

}

const name = 'Wolfgang';
const example = new NewBindingExample("Hans");
console.log(example.greeting());  //Hello I am Hans.
console.log(example.name); //Hans

// Principle 4

// code example for Explicit Binding
function greeting() {
    console.log(`Hello my name is ${this.name}.`);
};

const explicitExample = {
    name: 'Hans'
}

greeting.call(explicitExample); //Hello my name is Hans
