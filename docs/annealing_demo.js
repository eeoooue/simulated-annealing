var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { DemoControls } from "./demo_controls.js";
import { DemoDisplay } from "./demo_display.js";
import { SolutionState } from "./solution_state.js";
export class AnnealingDemo {
    constructor(container) {
        this.temperature = 0.0;
        this.iterationsPerSecond = 144;
        this.solution = new SolutionState(this);
        this.display = new DemoDisplay(this, container);
        this.controls = new DemoControls(this, container);
        setInterval(() => __awaiter(this, void 0, void 0, function* () {
            yield this.performBackgroundTask();
        }), 1000 / this.iterationsPerSecond);
    }
    updateTemperature(temperature) {
        this.temperature = temperature * 1;
        this.refreshDisplay();
    }
    refreshDisplay() {
        if (this.display != null) {
            this.display.update();
        }
    }
    refreshCanvas() {
        this.display.refreshCanvas();
    }
    refreshPanels() {
        this.display.refreshPanels();
    }
    performBackgroundTask() {
        return __awaiter(this, void 0, void 0, function* () {
            this.solution.attemptMutation();
        });
    }
}
