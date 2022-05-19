/* eslint-disable no-console */
const user = { name: 'Tirion', email: 'support@hexlet.io', age: 44 };

const { name, ...rest } = user;

console.log(rest);
// => { email: 'support@hexlet.io', age: 44 }
