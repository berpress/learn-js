const countFruits = (fruits) => {
  const result = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const name of fruits) {
    // property existence check
    if (Object.hasOwn(result, name)) {
      result[name] += 1;
    } else {
      result[name] = 1;
    }
  }

  return result;
};

const bag = [
  'apple', 'banana', 'pear',
  'apricot', 'apple', 'banana',
  'apple', 'orange', 'pear',
];

const res = countFruits(bag);
// eslint-disable-next-line no-console
console.log(res);

// Nullish coalescing operator

const foo = null ?? 'default string';
// eslint-disable-next-line no-console
console.log(foo);
// expected output: "default string"

const baz = 0 ?? 42;
// eslint-disable-next-line no-console
console.log(baz);
// expected output: 0