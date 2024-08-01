
import { DemoControls } from "./demo_controls.js";
import { DemoDisplay } from "./demo_display.js";

export class AnnealingDemo {

    public controls: DemoControls;
    public display: DemoDisplay;

    public temperature: number = 0.0;

    constructor(container: HTMLElement){

        this.display = new DemoDisplay(this, container);
        this.controls = new DemoControls(this, container);
    }

    updateTemperature(temperature: number){

        this.temperature = temperature;
        this.display.update();
    }

    setup() : void {

    }




}