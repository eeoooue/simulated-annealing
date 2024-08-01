export class ScorePanel {
    constructor(parent) {
        this.element = document.createElement("div");
        parent.appendChild(this.element);
        this.styleContainer();
    }
    styleContainer() {
        this.element.classList.add("info-panel");
        this.element.innerText = "Current Score: 0";
    }
}
