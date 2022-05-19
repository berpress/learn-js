const user = { name: 'Tirion', email: 'support@hexlet.io', age: 44 };
const copyOfUser = { ...user };
// eslint-disable-next-line no-console
console.log(copyOfUser);

const userTwo = { name: 'Vasya', age: 11 };

const newUser = { ...userTwo, married: true, age: 25 };
// age change
// eslint-disable-next-line no-console
console.log(newUser); // => { name: 'Vasya', married: true, age: 25 }
