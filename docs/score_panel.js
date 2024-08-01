export class ScorePanel {
    constructor(demo, parent) {
        this.element = document.createElement("div");
        this.demo = demo;
        parent.appendChild(this.element);
        this.styleContainer();
        this.update();
    }
    styleContainer() {
        this.element.classList.add("info-panel");
    }
    update() {
        const value = this.demo.solution.currentScore;
        const rounded = Math.round(value * 1000) / 1000;
        this.element.innerText = `Current Score: ${rounded}`;
    }
}
