// import { Player } from "./Classes/Player.js";
// import { IsPlayer } from "./interface/IsPlayer.js"

// const Masrafi = new Player('Masrafi', 43, true)

// let Sakib: IsPlayer;

// // Sakib = new Player('Sakib', 40, false)


// // console.log(Sakib.age);
// // Sakib.name='Masrafi'


// const Players: Player[] = []

// Players.push(Masrafi);
// // Players.push(Sakib);

// interface ReactAngle {
//     width: number,
//     length: number
// }

// function drawReactAngle(option: ReactAngle) {
//     let width = option.width;
//     let length = option.length;
// }

// // drawReactAngle({
// //     width:55,
// //     length:40,
// //     height:60
// // })

// let objectReactAngle = {
//     width: 55,
//     length: 40,
//     height: 60
// }

// drawReactAngle(objectReactAngle)

// Generic

// const addId=(obj:object)=>{
//     let id=Math.floor(Math.random()*100)
//     return {...obj,id}
// }

// let user=addId({
// name:"Mashrafi",
// age:40
// })

// user.not show name or age

// const addId=<T>(obj:T)=>{
//     let id=Math.floor(Math.random()*100)
//     return {...obj,id}
// }

// let user=addId({
// name:"Mashrafi",
// age:40
// })

// user.name

// const addId = <T extends {
//     name: string,
//     age: number
// }>(obj: T) => {
//     let id = Math.floor(Math.random() * 100)
//     return { ...obj, id }
// }

// let user = addId({
//     name: "Mashrafi",
//     age: 40,
//     isHonest: true
// })

// addId(user)

// Interface Generics

interface APIRespose<T> {
    status: number,
    type: string,
    data: T
}

const response1: APIRespose<object> = {
    status: 400,
    type: 'Bad request',
    data: {
        name: 'test'
    }
}

const response2: APIRespose<string> = {
    status: 400,
    type: 'Bad request',
    data: 'test'
}