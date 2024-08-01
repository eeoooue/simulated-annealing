export class MapCanvas {
    constructor(parent) {
        this.container = document.createElement("div");
        parent.appendChild(this.container);
        this.styleContainer();
    }
    styleContainer() {
        this.container.classList.add("map-container");
    }
}
