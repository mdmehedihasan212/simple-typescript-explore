export class Player {
    constructor(
        private name: string,
        public age: number,
        readonly isHonest: boolean,
    ) { }

    paly() {
        console.log(`${this.name} is very ${this.isHonest}`);
    }
};