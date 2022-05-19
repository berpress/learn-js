const user = { name: 'Vasya', married: true, age: 25 };
user.married = false;

// eslint-disable-next-line no-console
console.log(user.married);

const userTwo = { name: 'Maria' };
user.name = 'Igor';
// name
delete userTwo.name;

// Get error
// userTwo = { name: 'Mike' }; // Boom!
