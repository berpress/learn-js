import _ from 'lodash';

const user = { name: 'Tirion', email: 'support@hexlet.io', age: 44 };
const copyOfUser = _.clone(user);
// eslint-disable-next-line no-console
console.log(copyOfUser);

// deep copy

const userDeep = { company: { name: 'Hexlet' } };
const copyOfUserDeep = _.cloneDeep(userDeep);

// eslint-disable-next-line no-unused-expressions
userDeep.company === copyOfUserDeep.company; // false
