export class AcceptancePanel {
    constructor(parent) {
        this.element = document.createElement("div");
        parent.appendChild(this.element);
        this.styleContainer();
    }
    styleContainer() {
        this.element.classList.add("info-panel");
        this.element.innerHTML = "States Accepted: 0 <br> States Rejected: 0 <br> %Acceptance: (0%)";
    }
}
