/* eslint-disable no-restricted-syntax */
const sum = (...numbers) => {
  let result = 0;
  for (const num of numbers) {
    result += num;
  }
  return result;
};

const numbers = [1, 7, 4];
sum(...numbers); // 12
