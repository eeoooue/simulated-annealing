export class TemperaturePanel {
    constructor(parent) {
        this.element = document.createElement("div");
        parent.appendChild(this.element);
        this.styleContainer();
    }
    styleContainer() {
        this.element.classList.add("info-panel");
        this.element.innerHTML = "Temperature: 100";
    }
}
