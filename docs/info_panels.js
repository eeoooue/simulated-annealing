import { AcceptancePanel } from "./acceptance_panel.js";
import { ScorePanel } from "./score_panel.js";
import { TemperaturePanel } from "./temperature_panel.js";
export class InfoPanels {
    constructor(parent) {
        this.container = document.createElement("div");
        parent.appendChild(this.container);
        this.styleContainer();
        this.panel1 = new ScorePanel(this.container);
        this.panel2 = new AcceptancePanel(this.container);
        this.panel3 = new TemperaturePanel(this.container);
    }
    styleContainer() {
        this.container.classList.add("panel-container");
    }
}
