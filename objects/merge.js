const obj1 = { a: { a: 1 } };
const obj2 = { a: { b: 1 } };
Object.assign(obj1, obj2);
// eslint-disable-next-line no-console
console.log(obj1);
