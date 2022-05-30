"use strict";
class Player {
    constructor(name, age, isHonest) {
        this.name = name;
        this.age = age;
        this.isHonest = isHonest;
    }
    paly() {
        console.log(`${this.name} is very ${this.isHonest}`);
    }
}
const Masrafi = new Player('Masrafi', 43, true);
const Sakib = new Player('Sakib', 40, false);
// console.log(Sakib.age);
// Sakib.name='Masrafi'
const Players = [];
Players.push(Masrafi);
