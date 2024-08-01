export class MapCanvas {
    constructor(demo, parent) {
        this.container = document.createElement("div");
        this.demo = demo;
        parent.appendChild(this.container);
        this.styleContainer();
    }
    styleContainer() {
        this.container.classList.add("map-canvas");
    }
}
