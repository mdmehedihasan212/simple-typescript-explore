import { Player } from "./Classes/Player.js";
const Masrafi = new Player('Masrafi', 43, true);
const Sakib = new Player('Sakib', 40, false);
console.log(Sakib.age);
// Sakib.name='Masrafi'
const Players = [];
Players.push(Masrafi);
Players.push(Sakib);
