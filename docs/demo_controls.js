export class DemoControls {
    constructor(parent) {
        this.container = new HTMLElement();
        parent.appendChild(this.container);
        this.styleContainer();
        this.addChildren();
    }
    styleContainer() {
        this.container.classList.add("controls-area");
    }
    addChildren() {
        // add canvas
        // add panels
    }
}
