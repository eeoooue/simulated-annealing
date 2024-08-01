export class MapPainter {
    constructor(container) {
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
        element.style.marginLeft = `${point.x}px`;
        element.style.marginTop = `${point.y}px`;
        return element;
    }
    createPathElement(a, b) {
        var element = document.createElement("div");
        element.classList.add("map-path-container");
        element.innerHTML = `
            <svg width="100%" height="100%" style="position:absolute;top:0;left:0;">
            <line x1="${a.x + 5}px" y1="${a.y + 5}px" x2="${b.x + 5}px" y2="${b.y + 5}px" style="stroke:black;stroke-width:1"/>
            </svg>
        `;
        return element;
    }
}
