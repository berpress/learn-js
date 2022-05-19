const user = {
  name: 'Vasya',
  married: true,
  age: 25,
  friends: ['Kolya', 'Petya'],
  children: [
    { name: 'Mila', age: 1 },
    { name: 'Petr', age: 10 },
  ],
  company: {
    name: 'Hexlet',
  },
};

// eslint-disable-next-line no-console
console.log(user.children[0].name);