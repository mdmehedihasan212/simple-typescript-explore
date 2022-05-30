import { IsPlayer } from '../interface/IsPlayer.js'

export class Player implements IsPlayer {
    constructor(
        public name: string,
        private age: number,
        readonly isHonest: boolean,
    ) { }

    getAge() {
        return this.age;
    }

    paly() {
        console.log(`${this.name} is very ${this.isHonest}`);
    }
};