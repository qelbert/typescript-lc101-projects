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
    // ----- this code works too -----
    Rocket.prototype.sumMass = function (items) {
        // https://www.typescriptlang.org/docs/handbook/interfaces.html
        var sum = 0;
        for (var i = 0; i < items.length; i++) {
            var mass = items[i].massKg;
            sum += mass;
        }
        return sum;
    };
    // ^^----- this code works -----^^
    Rocket.prototype.currentMassKg = function () {
        var newCargo = this.cargoItems;
        var cargoMass = newCargo.sumMass();
        var sum = 0;
        for (var i = 0; i < astronauts.length; i++) {
            var mass = astronauts[i].massKg;
            sum += mass;
        }
        return cargoMass + sum;
    };
    Rocket.prototype.canAdd = function (item) {
        if ((this.currentMassKg() + item.massKg) <= this.totaCapacityKg) {
            return true;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd()) {
            this.cargoItems += cargo;
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd()) {
            this.astronauts += astronaut;
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
