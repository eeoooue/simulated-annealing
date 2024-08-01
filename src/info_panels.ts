
import { AcceptancePanel } from "./acceptance_panel.js";
import { ScorePanel } from "./score_panel.js";
import { TemperaturePanel } from "./temperature_panel.js";

export class InfoPanels {

    public container: HTMLElement = document.createElement("div");

    public panel1: ScorePanel;
    public panel2: AcceptancePanel;
    public panel3: TemperaturePanel;

    constructor(parent: HTMLElement){

        parent.appendChild(this.container);
        this.styleContainer();
        this.panel1 = new ScorePanel(this.container);
        this.panel2 = new AcceptancePanel(this.container);
        this.panel3 = new TemperaturePanel(this.container);
    }
    
    styleContainer(){
        this.container.classList.add("panel-container")
    }
}