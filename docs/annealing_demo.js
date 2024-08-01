import { DemoControls } from "./demo_controls.js";
import { DemoDisplay } from "./demo_display.js";
export class AnnealingDemo {
    constructor(container) {
        this.temperature = 0.0;
        this.display = new DemoDisplay(this, container);
        this.controls = new DemoControls(this, container);
    }
    updateTemperature(temperature) {
        this.temperature = temperature;
        this.display.update();
    }
    setup() {
    }
}
