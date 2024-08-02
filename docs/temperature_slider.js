export class TemperatureSlider {
    constructor(demo, parent) {
        this.element = document.createElement("input");
        this.demo = demo;
        parent.appendChild(this.element);
        this.setupSlider();
        this.styleElement();
        this.element.addEventListener("input", () => { this.notify(); });
        this.notify();
    }
    notify() {
        const temperature = parseInt(this.element.value) - 273;
        this.demo.updateTemperature(temperature);
    }
    styleElement() {
        this.element.classList.add("temperature-slider");
    }
    setupSlider() {
        this.element.type = "range";
        this.element.min = "0";
        this.element.max = "1273";
        this.element.value = "292";
    }
}
