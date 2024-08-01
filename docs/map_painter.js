export class MapPainter {
    constructor(container) {
        this.mapSize = 650;
        this.container = container;
    }
    paintPoints(points) {
        this.container.replaceChildren();
        const n = points.length;
        for (let i = 0; i < n; i++) {
            const point = points[i];
            const element = this.createPointElement(point);
            this.container.appendChild(element);
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
        const x = point.getScaledX(this.mapSize);
        const y = point.getScaledY(this.mapSize);
        element.style.marginLeft = `${x}px`;
        element.style.marginTop = `${y}px`;
        return element;
    }
    createPathElement(a, b) {
        var element = document.createElement("div");
        element.classList.add("map-path-container");
        const x1 = a.getScaledX(this.mapSize) + 5;
        const y1 = a.getScaledY(this.mapSize) + 5;
        const x2 = b.getScaledX(this.mapSize) + 5;
        const y2 = b.getScaledY(this.mapSize) + 5;
        element.innerHTML = `
            <svg width="100%" height="100%" style="position:absolute;top:0;left:0;">
            <line x1="${x1}px" y1="${y1}px" x2="${x2}px" y2="${y2}px" style="stroke:black;stroke-width:1"/>
            </svg>
        `;
        return element;
    }
}
