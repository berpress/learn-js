/* eslint-disable no-console */
const company1 = { name: 'Hexlet', getName: function getName() { return this.name } };
const company2 = { name: 'Hexlet Plus' };

company1.getName(); // "Hexlet"

company2.getName = company1.getName;

// В обоих случаях одна и та же функция
company2.getName(); // "Hexlet Plus"
company1.getName(); // "Hexlet"

const companyTwo = {
  name: 'Hexlet',
  getName() {
    return this.name;
  },
};

console.log(companyTwo.getName());
