/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window/Global Object Binding - Used for the global scope of a window or console object
 * 2. Implicit Binding - If a function is preceded by a dot, implicit binding is used on the object before it
 * 3. New Binding - Used for constructor functions, specifically when 
 * 4. Explicit Binding - Used for call and apply methods in JavaScript
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
function windowbinding() {
    console.log(this);
}
windowbinding();

// Principle 2

// code example for Implicit Binding
const me = {
    firstName: 'Asha',
    lastName: 'Franchi',
    fullName: function() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
};
me.fullName();

// Principle 3

// code example for New Binding
function SpiceGirls(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function() {
        console.log(`${this.firstName} ${this.lastName}`);
    };
}
let Scary = new SpiceGirls('Melanie', 'Brown');
let Sporty = new SpiceGirls('Melanie', 'Chisholm');
let Baby = new SpiceGirls('Emma', 'Bunton');
let Ginger = new SpiceGirls('Geri', 'Halliwell');
let Posh = new SpiceGirls('Vicotria', 'Beckham');

// Principle 4

// code example for Explicit Binding
Sporty.fullName.call(Scary);
Posh.fullName.apply(Ginger);