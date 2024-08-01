
import { AnnealingDemo } from "./annealing_demo.js";

export class MapCanvas{

    public container: HTMLElement = document.createElement("div");

    public demo: AnnealingDemo;

    constructor(demo: AnnealingDemo, parent: HTMLElement){

        this.demo = demo;
        parent.appendChild(this.container);
        this.styleContainer();
    }
    
    styleContainer(){
        this.container.classList.add("map-canvas")
    }
}