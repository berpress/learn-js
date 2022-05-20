const users = [
  { name: 'Igor', age: 19 },
  { name: 'Danil', age: 1 },
  { name: 'Vovan', age: 4 },
  { name: 'Matvey', age: 16 },
];

const names = users.map((user) => user.name);
// eslint-disable-next-line no-console
console.log(names);
