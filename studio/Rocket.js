"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totaCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        // https://www.typescriptlang.org/docs/handbook/interfaces.html
        var sum = 0;
        for (var i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts); // Matt's answer
        //     let newCargo=this.cargoItems;
        //     let cargoMass: number = newCargo.sumMass();
        //     let sum: number = 0;
        //     for (let i =0; i < astronauts.length; i ++) {
        //         let mass = astronauts[i].massKg;
        //         sum += mass;
        //     }
        //        return cargoMass + sum;
    };
    Rocket.prototype.canAdd = function (item) {
        return (this.currentMassKg() + item.massKg) <= this.totaCapacityKg; // Matt's revision
        // if ( (this.currentMassKg() + item.massKg) <= this.totaCapacityKg) {
        //     return true
        // }
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo); // Matt's revision
            return true;
        }
        else {
            return false;
        }
        // if (this.canAdd()) {
        //     this.cargoItems += cargo;
        //     return true;
        // } else {
        //     return false;
        // }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut); // Matt's revision
            return true;
        }
        else {
            return false;
        }
        // if (this.canAdd()) {
        //     this.astronauts += astronaut;
        //     return true;
        // } else {
        //     return false;
        // }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
