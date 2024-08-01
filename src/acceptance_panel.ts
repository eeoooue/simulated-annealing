
import { AnnealingDemo } from "./annealing_demo.js";
import { SolutionState } from "./solution_state.js";

export class AcceptancePanel {

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
        const accepted = this.demo.solution.statesAccepted;
        const rejected = this.demo.solution.statesRejected;
        const percentage = Math.round(100.0 * accepted / (accepted+rejected));

        this.element.innerHTML = `States Accepted: ${accepted} <br> States Rejected: ${rejected} <br> Acceptance: (${percentage}%)`
    }
}