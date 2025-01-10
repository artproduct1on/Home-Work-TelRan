"use strict";
class People {
    constructor(n, a, w, h) {
        this.name = n;
        this.age = a;
        this._weight = w;
        this._height = h;
    }
    ;
    get weight() {
        return this._weight;
    }
    ;
    weightSet(a) {
        this._weight += a;
    }
    ;
}
const person = new People("Alex", 34, 82, 181);
person.weightSet(9);
console.log(person.weight);
