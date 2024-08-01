
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
        this.element.innerText = `Current Score: ${rounded}`;
    }
}