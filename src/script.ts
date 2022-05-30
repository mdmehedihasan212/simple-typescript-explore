import { Player } from "./Classes/Player.js";
import { IsPlayer } from "./interface/IsPlayer.js"

const Masrafi = new Player('Masrafi', 43, true)

let Sakib: IsPlayer;

// Sakib = new Player('Sakib', 40, false)


// console.log(Sakib.age);
// Sakib.name='Masrafi'


const Players: Player[] = []

Players.push(Masrafi);
// Players.push(Sakib);

interface ReactAngle {
    width: number,
    length: number
}

function drawReactAngle(option: ReactAngle) {
    let width = option.width;
    let length = option.length;
}

// drawReactAngle({
//     width:55,
//     length:40,
//     height:60
// })

let objectReactAngle = {
    width: 55,
    length: 40,
    height: 60
}

drawReactAngle(objectReactAngle)

