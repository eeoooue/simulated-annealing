import { AcceptancePanel } from "./acceptance_panel.js";
import { ScorePanel } from "./score_panel.js";
import { TemperaturePanel } from "./temperature_panel.js";
export class InfoPanels {
    constructor(demo, parent) {
        this.container = document.createElement("div");
        this.demo = demo;
        parent.appendChild(this.container);
        this.styleContainer();
        this.panel1 = new ScorePanel(this.demo, this.container);
        this.panel2 = new AcceptancePanel(this.demo, this.container);
        this.panel3 = new TemperaturePanel(this.demo, this.container);
    }
    styleContainer() {
        this.container.classList.add("panel-container");
    }
    update() {
        this.panel1.update();
        this.panel2.update();
        this.panel3.update();
    }
}
