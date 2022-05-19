/* eslint-disable no-console */
const person = { firstName: 'Rasmus', lastName: 'Lerdorf', manager: true };

const { firstName, manager } = person;

console.log(firstName); // => 'Rasmus'
console.log(manager); // => true

// default values
const personTwo = { firstName: 'Rasmus', lastName: 'Lerdorf' };

console.log(personTwo.manager); // undefined
const { managerTwo = false } = person;
console.log(managerTwo); // => false
