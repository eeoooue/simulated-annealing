import { MapCanvas } from "./map_canvas.js";
import { InfoPanels } from "./info_panels.js";
export class DemoDisplay {
    constructor(demo, parent) {
        this.container = document.createElement("div");
        this.demo = demo;
        parent.appendChild(this.container);
        this.styleContainer();
        this.map = new MapCanvas(this.demo, this.container);
        this.panels = new InfoPanels(this.demo, this.container);
    }
    styleContainer() {
        this.container.classList.add("display-area");
    }
    refreshCanvas() {
        this.map.update();
    }
    refreshPanels() {
        this.panels.update();
    }
}
