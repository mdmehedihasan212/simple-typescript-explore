class Player {
    constructor(
        private name: string,
        public age: number,
        readonly isHonest: boolean,
    ) { }

    paly() {
        console.log(`${this.name} is very ${this.isHonest}`);
    }
}

const Masrafi = new Player('Masrafi', 43, true)
const Sakib = new Player('Sakib', 40, false)

// console.log(Sakib.age);
// Sakib.name='Masrafi'


const Players: Player[] = []

Players.push(Masrafi);