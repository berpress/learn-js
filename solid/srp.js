// wrong

class Animal {
    constructor(name){ }
    getAnimalName() { }
    saveAnimal(a: Animal) { }
}

// solution 
class Animal {
    constructor(name){ }
    getAnimalName() { }
}
class AnimalDB {
    getAnimal(a: Animal) { }
    saveAnimal(a: Animal) { }
}