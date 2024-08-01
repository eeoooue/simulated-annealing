
import { MapCanvas } from "./map_canvas.js";
import { InfoPanels } from "./info_panels.js";


export class DemoDisplay {

    public container: HTMLElement = document.createElement("div");

    public map: MapCanvas;
    public panels: InfoPanels;

    constructor(parent: HTMLElement){

        parent.appendChild(this.container);
        this.styleContainer();
        this.addChildren();

        this.map = new MapCanvas(this.container);
        this.panels = new InfoPanels(this.container);
    }

    styleContainer(){
        this.container.classList.add("display-area")
    }

    addChildren(){
        // add canvas
        // add panels
    }

}

