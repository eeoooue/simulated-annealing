
import { DemoControls } from "./demo_controls.js";
import { DemoDisplay } from "./demo_display.js";
import { SolutionState } from "./solution_state.js";

export class AnnealingDemo {

    public controls: DemoControls;
    public display: DemoDisplay;
    public solution: SolutionState;

    public temperature: number = 0.0;
    public iterationsPerSecond: number = 200;

    constructor(container: HTMLElement) {

        this.solution = new SolutionState(this);
        this.display = new DemoDisplay(this, container);
        this.controls = new DemoControls(this, container);

        setInterval(async () => {
            await this.performBackgroundTask();
        }, 1000 / this.iterationsPerSecond);
    }

    updateTemperature(temperature: number) {

        this.temperature = temperature * 1;
        this.refreshPanels();
    }

    refreshCanvas() {

        if (this.display != null) {
            this.display.refreshCanvas();
        }
    }

    refreshPanels() {

        if (this.display != null) {
            this.display.refreshPanels();
        }
    }

    async performBackgroundTask(): Promise<void> {
        this.solution.attemptMutation();
    }
}