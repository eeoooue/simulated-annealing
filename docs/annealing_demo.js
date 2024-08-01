import { DemoControls } from "./demo_controls.js";
import { DemoDisplay } from "./demo_display.js";
export class AnnealingDemo {
    constructor(container) {
        this.display = new DemoDisplay(container);
        this.controls = new DemoControls(container);
    }
    setup() {
    }
}
