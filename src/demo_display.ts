
import { MapCanvas } from "./map_canvas.js";
import { InfoPanels } from "./info_panels.js";
import { AnnealingDemo } from "./annealing_demo.js";

export class DemoDisplay {

    public container: HTMLElement = document.createElement("div");

    public map: MapCanvas;
    public panels: InfoPanels;
    public demo: AnnealingDemo;

    constructor(demo: AnnealingDemo, parent: HTMLElement){

        this.demo = demo;
        parent.appendChild(this.container);
        this.styleContainer();

        this.map = new MapCanvas(this.demo, this.container);
        this.panels = new InfoPanels(this.demo, this.container);
    }

    styleContainer(){
        this.container.classList.add("display-area")
    }

    refreshCanvas(){
        this.map.update();
    }
    
    refreshPanels(){
        this.panels.update();
    }
}
