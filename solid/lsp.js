// wrong
//...
function AnimalLegCount(a: Array<Animal>) {
    for(int i = 0; i <= a.length; i++) {
        if(typeof a[i] == Lion)
            return LionLegCount(a[i]);
        if(typeof a[i] == Mouse)
            return MouseLegCount(a[i]);
        if(typeof a[i] == Snake)
            return SnakeLegCount(a[i]);
    }
}
AnimalLegCount(animals);

// solution
function AnimalLegCount(a: Array<Animal>) {
    for(let i = 0; i <= a.length; i++) {
        a[i].LegCount();
    }
}
AnimalLegCount(animals);