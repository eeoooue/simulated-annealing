import { MapPainter } from "./map_painter.js";
export class MapCanvas {
    constructor(demo, parent) {
        this.container = document.createElement("div");
        this.demo = demo;
        this.painter = new MapPainter(this.container, this.demo.solution.state);
        parent.appendChild(this.container);
        this.styleContainer();
        this.update();
    }
    update() {
        const solution = this.demo.solution;
        const points = solution.state;
        this.painter.paintPaths(points);
    }
    styleContainer() {
        this.container.classList.add("map-area");
    }
}
