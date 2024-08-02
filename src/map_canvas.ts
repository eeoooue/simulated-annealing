
import { AnnealingDemo } from "./annealing_demo.js";
import { MapPainter } from "./map_painter.js";
import { SolutionState } from "./solution_state.js";
import { MapPoint } from "./map_point.js";

export class MapCanvas{

    public container: HTMLElement = document.createElement("div");

    public demo: AnnealingDemo;
    public painter: MapPainter;

    constructor(demo: AnnealingDemo, parent: HTMLElement){

        this.demo = demo;
        this.painter = new MapPainter(this.container);
        parent.appendChild(this.container);
        this.styleContainer();
        this.update();
    }

    update(){
        const solution: SolutionState = this.demo.solution;
        const points: MapPoint[] = solution.state;
        this.painter.paintPoints(points);
        this.painter.paintPaths(points);
    }
    
    styleContainer(){
        this.container.classList.add("map-area")
    }
}