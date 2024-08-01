export class DemoDisplay {
    constructor(parent) {
        this.container = new HTMLElement();
        parent.appendChild(this.container);
        this.styleContainer();
        this.addChildren();
    }
    styleContainer() {
        this.container.classList.add("display-area");
    }
    addChildren() {
        // add canvas
        // add panels
    }
}
