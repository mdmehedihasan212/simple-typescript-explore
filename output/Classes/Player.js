export class Player {
    constructor(name, age, isHonest) {
        this.name = name;
        this.age = age;
        this.isHonest = isHonest;
    }
    getAge() {
        return this.age;
    }
    paly() {
        console.log(`${this.name} is very ${this.isHonest}`);
    }
}
;
