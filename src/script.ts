// const userDetails=(
//     id:string|number,
//     user:{name:string,age:number}
// )=>{
// console.log(`hello user id is ${id} and her name ${user.name} and age ${user.age}`);

// }

// const sayHello=(
//     user:{name:string,age:number}
// )=>{
// console.log(`Say hello name ${user.name} and age ${user.age}`);

// }

// let myFunc:()=>void;
// let myFunc2:()=>void;

class Player {
    name: string;
    age: number;
    isHonest: boolean;

    constructor(n: string, a: number, i: boolean) {
        this.name = n,
            this.age = a,
            this.isHonest = i
    }

    paly() {
        console.log(`${this.name} is very ${this.isHonest}`);
    }
}

const masrafi = new Player('Masrafi', 43, true)
const masrafi = new Player('Masrafi', 43, true)