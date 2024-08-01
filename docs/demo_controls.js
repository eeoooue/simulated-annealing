import { TemperatureSlider } from "./temperature_slider.js";
export class DemoControls {
    constructor(parent) {
        this.container = document.createElement("div");
        this.coldLabel = document.createElement("div");
        this.hotLabel = document.createElement("div");
        parent.appendChild(this.container);
        this.styleContainer();
        this.container.appendChild(this.coldLabel);
        this.slider = new TemperatureSlider(this.container);
        this.container.appendChild(this.hotLabel);
        this.styleLabels();
    }
    styleContainer() {
        this.container.classList.add("controls-area");
    }
    styleLabels() {
        this.coldLabel.innerText = "COLD";
        this.hotLabel.innerText = "HOT";
    }
}
