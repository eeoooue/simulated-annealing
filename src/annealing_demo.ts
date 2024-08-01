
import { DemoControls } from "./demo_controls.js";
import { DemoDisplay } from "./demo_display.js";
import { SolutionState } from "./solution_state.js";

export class AnnealingDemo {

    public controls: DemoControls;
    public display: DemoDisplay;
    public solution: SolutionState;

    public temperature: number = 0.0;


    constructor(container: HTMLElement) {

        this.solution = new SolutionState(this);
        this.display = new DemoDisplay(this, container);
        this.controls = new DemoControls(this, container);

        setInterval(async () => {
            // Ensure the task runs in the background without blocking the main thread
            await this.performBackgroundTask();
        }, 200);
    }

    updateTemperature(temperature: number) {

        this.temperature = temperature;
        this.refreshDisplay();
    }

    refreshDisplay(){

        if (this.display != null){
            this.display.update();
        }
    }

    setup(): void {

    }

    async performBackgroundTask(): Promise<void> {
        // await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
        console.log("Background task completed at", new Date().toLocaleTimeString());

        this.solution.attemptMutation();

    }



    




}