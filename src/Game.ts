import * as p5 from 'p5'

class Game {
    constructor(config : config) {
        let p5instance = new p5((sketch : p5) =>{
            sketch.setup = () => {
                sketch.createCanvas(config.width, config.height, WEBGL);
            }
            sketch.draw = () => {
                sketch.background(config.background);
            }
        });
    }
}

interface config {
    width : number,
    height : number,
    gravity : number,
    friction: number,
    background? : number,
}