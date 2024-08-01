import { AnnealingDemo } from "./annealing_demo";

export class TemperaturePanel {

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
        this.element.innerHTML = `Temperature: ${this.demo.temperature}°C`;
    }
}