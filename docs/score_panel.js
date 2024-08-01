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
        this.element.innerText = `Current Score: ${this.demo.solution.currentScore}`;
    }
}
