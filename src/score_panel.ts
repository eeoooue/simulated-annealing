
import { AnnealingDemo } from "./annealing_demo.js";
import { SolutionState } from "./solution_state.js";

export class ScorePanel {

    public element: HTMLElement = document.createElement("div")
    public demo: AnnealingDemo;

    constructor(demo: AnnealingDemo, parent: HTMLElement){

        this.demo = demo;
        parent.appendChild(this.element)
        this.styleContainer();
        this.update();
    }

    styleContainer(){
        this.element.classList.add("info-panel")
    }

    update(){
        const value = this.demo.solution.currentScore;
        const rounded = Math.round(value * 1000) / 1000;

        const distance = Math.round(this.demo.solution.pathLength);
        // this.element.innerHTML = `Current Score: ${rounded} <br> Path Length: ${distance}m`;
        this.element.innerHTML = `Path Length: ${distance}m`;
    }
}