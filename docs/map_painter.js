export class MapPainter {
    constructor(container) {
        this.canvas = document.createElement("div");
        this.mapSize = 650;
        this.container = container;
        this.canvas.classList.add("map-canvas");
    }
    paintPoints(points) {
        this.container.replaceChildren();
        this.canvas.replaceChildren();
        this.container.appendChild(this.canvas);
        const n = points.length;
        // only needs doing once.
        for (let i = 0; i < n; i++) {
            const point = points[i];
            const element = this.createPointElement(point);
            this.canvas.appendChild(element);
        }
    }
    paintPaths(points) {
        const n = points.length;
        for (let i = 0; i < n; i++) {
            const j = (i + 1) % n;
            const a = points[i];
            const b = points[j];
            const element = this.createPathElement(a, b);
            this.container.appendChild(element);
        }
    }
    createPointElement(point) {
        var element = document.createElement("div");
        element.classList.add("map-point");
        const x = point.x / 10;
        const y = point.y / 10;
        element.style.marginLeft = `${x}%`;
        element.style.marginTop = `${y}%`;
        return element;
    }
    createPathElement(a, b) {
        var element = document.createElement("div");
        element.classList.add("map-path-container");
        const x1 = (a.x / 10) + 0.75;
        const y1 = (a.y / 10) + 0.75;
        const x2 = (b.x / 10) + 0.75;
        const y2 = (b.y / 10) + 0.75;
        element.innerHTML = `
            <svg width="100%" height="100%" style="position:absolute;top:0;left:0;">
            <line x1="${x1}%" y1="${y1}%" x2="${x2}%" y2="${y2}%" style="stroke:black;stroke-width:1"/>
            </svg>
        `;
        return element;
    }
}
