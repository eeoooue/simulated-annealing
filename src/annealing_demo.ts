
import { DemoControls } from "./demo_controls.js";
import { DemoDisplay } from "./demo_display.js";

export class AnnealingDemo {

    public controls: DemoControls;
    public display: DemoDisplay;

    constructor(container: HTMLElement){

        this.display = new DemoDisplay(container);
        this.controls = new DemoControls(container);
    }

    setup() : void {

    }




}