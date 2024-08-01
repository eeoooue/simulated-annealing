export class AcceptancePanel {
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
        const accepted = this.demo.solution.statesAccepted;
        const rejected = this.demo.solution.statesRejected;
        const percentage = Math.round(100.0 * accepted / (accepted + rejected));
        this.element.innerHTML = `States Accepted: ${accepted} <br> States Rejected: ${rejected} <br> Acceptance: (${percentage}%)`;
    }
}
