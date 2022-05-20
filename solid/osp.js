// wrong
class Animal {
    constructor(name: string){ }
    getAnimalName() { }
}

//...
const animals: Array<Animal> = [
    new Animal('lion'),
    new Animal('mouse')
];
function AnimalSound(a: Array<Animal>) {
    for(int i = 0; i <= a.length; i++) {
        if(a[i].name == 'lion')
            return 'roar';
        if(a[i].name == 'mouse')
            return 'squeak';
    }
}
AnimalSound(animals);

// solution 

class Animal {
    makeSound();
    //...
}
class Lion extends Animal {
makeSound() {
    return 'roar';
}
}
class Squirrel extends Animal {
makeSound() {
    return 'squeak';
}
}
class Snake extends Animal {
makeSound() {
    return 'hiss';
}
}
//...
function AnimalSound(a: Array<Animal>) {
for(int i = 0; i <= a.length; i++) {
    a[i].makeSound();
}
}
AnimalSound(animals);