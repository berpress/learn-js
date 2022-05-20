/* eslint-disable no-console */
class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}

// use:
const user = new User('Maxim');
user.sayHi();
