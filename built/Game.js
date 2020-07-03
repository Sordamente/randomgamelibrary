"use strict";
exports.__esModule = true;
var p5 = require("p5");
var Game = /** @class */ (function () {
    function Game(config) {
        var p5instance = new p5(function (sketch) {
            sketch.setup = function () {
                sketch.createCanvas(config.width, config.height, WEBGL);
            };
            sketch.draw = function () {
                sketch.background(config.background);
            };
        });
    }
    return Game;
}());
//# sourceMappingURL=Game.js.map