
import { AcceptancePanel } from "./acceptance_panel.js";
import { AnnealingDemo } from "./annealing_demo.js";
import { ScorePanel } from "./score_panel.js";
import { TemperaturePanel } from "./temperature_panel.js";

export class InfoPanels {

    public container: HTMLElement = document.createElement("div");

    public panel1: ScorePanel;
    public panel2: AcceptancePanel;
    public panel3: TemperaturePanel;
    public demo: AnnealingDemo;

    constructor(demo: AnnealingDemo, parent: HTMLElement){

        this.demo = demo;
        parent.appendChild(this.container);
        this.styleContainer();
        this.panel1 = new ScorePanel(this.demo, this.container);
        this.panel2 = new AcceptancePanel(this.demo, this.container);
        this.panel3 = new TemperaturePanel(this.demo, this.container);
    }
    
    styleContainer(){
        this.container.classList.add("panel-container")
    }

    update(){
        this.panel1.update();
        this.panel2.update();
        this.panel3.update();
    }
}