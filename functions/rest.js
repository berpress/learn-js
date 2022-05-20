/* eslint-disable no-restricted-syntax */
const sum = (...numbers) => {
  let result = 0;
  for (const num of numbers) {
    result += num;
  }
  return result;
};

sum(); // 0
sum(10); // 10
sum(10, 4); // 14
sum(8, 10, 4); // 22
