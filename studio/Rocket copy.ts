import { Payload } from './Payload';
import { Cargo } from './Cargo';

export class Rocket {
    name: string;
    totaCapacityKg: number;
    cargoItems: string[] = [];
    astronauts: string[] = [];
    constructor (name: string, totalCapacityKg: number) {
        this.name = name;
        this.totaCapacityKg = totalCapacityKg;
    }

// ----- this code works too -----

// sumMass( items: Payload[]): number {
//     // https://www.typescriptlang.org/docs/handbook/interfaces.html
//     let sum: number = 0
//     for (let i =0; i < this.cargoItems.length; i ++) {
//         let mass = items[i].massKg;
//         console.log (mass)
//         sum += mass;
//     }
//     return sum
// }



// ^^----- this code works -----^^


    // currentMassKg(): number {
    //    return this.sumMass
    // }

    // canAdd(item: Payload): boolean {

    // }

    // addCargo(cargo: Cargo): boolean {

    // }

    // addAstronaut(astronaut: Astronaut): boolean {

    // }


}

// ----- this code works -----

function sumMass2(items: Payload) {
    console.log (items.massKg);
}

let myObj = {name: "yellow", massKg: 9};
sumMass2(myObj);

// ^^----- this code works -----^^

function sumMass3( items: Payload[]): number {
    return items[0].massKg;
}

//---------

function sumMass( items: Payload[]): number {
    // https://www.typescriptlang.org/docs/handbook/interfaces.html
    let sum: number = 0;
    for (let i =0; i < items.length; i ++) {
        let mass = items[i].massKg;
        console.log (mass);
        sum += mass;
    }
    return sum;
}

//---------
let cargo: Cargo[] = [
    new Cargo(3107.39, "Satellite"),
    new Cargo(1000.39, "Space Probe"),
    new Cargo(753, "Water"),
    new Cargo(541, "Food"),
    new Cargo(2107.39, "Tesla Roadster"),
 ];

console.log ("First Mass: " , sumMass3(cargo));
console.log ("List of mass and Sum:", sumMass(cargo));

// ^^----- this code works too -----^^

