import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

export class Rocket {
    name: string;
    totaCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor (name: string, totalCapacityKg: number) {
        this.name = name;
        this.totaCapacityKg = totalCapacityKg;
    }


    sumMass( items: Payload[]): number {
    // https://www.typescriptlang.org/docs/handbook/interfaces.html
        let sum: number = 0;
        for (let i =0; i < items.length; i ++) {
            sum += items[i].massKg;
        }
        return sum;
    }


    currentMassKg(): number {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts); // Matt's answer
//     let newCargo=this.cargoItems;
//     let cargoMass: number = newCargo.sumMass();
//     let sum: number = 0;
//     for (let i =0; i < astronauts.length; i ++) {
//         let mass = astronauts[i].massKg;
//         sum += mass;
//     }
//        return cargoMass + sum;
    }

    canAdd(item: Payload): boolean {
        return (this.currentMassKg() + item.massKg) <= this.totaCapacityKg; // Matt's revision
        // if ( (this.currentMassKg() + item.massKg) <= this.totaCapacityKg) {
        //     return true
        // }
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo); // Matt's revision
            return true;
        } else {
            return false;
        }
        // if (this.canAdd()) {
        //     this.cargoItems += cargo;
        //     return true;
        // } else {
        //     return false;
        // }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut); // Matt's revision
            return true;
        } else {
            return false;
        }
        // if (this.canAdd()) {
        //     this.astronauts += astronaut;
        //     return true;
        // } else {
        //     return false;
        // }
    }
}


