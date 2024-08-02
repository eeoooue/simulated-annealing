import { MapPoint } from "./map_point.js";

export class MapPainter {

    public container: HTMLElement;
    public canvas: HTMLElement = document.createElement("div");

    public mapSize: number = 650;

    constructor(container: HTMLElement){
        this.container = container;
        this.canvas.classList.add("map-canvas");
    }

    paintPoints(points: MapPoint[]){

        this.container.replaceChildren();

        this.canvas.replaceChildren();
        this.container.appendChild(this.canvas);

        const n: number = points.length;

        // only needs doing once.

        for(let i=0; i<n; i++){

            const point: MapPoint = points[i];
            const element: HTMLElement = this.createPointElement(point);
            this.canvas.appendChild(element);
        }
    }

    paintPaths(points: MapPoint[]) {

        const n: number = points.length;

        for(let i=0; i<n; i++){
            const j = (i+1) % n
            const a: MapPoint = points[i];
            const b: MapPoint = points[j];
            const element: HTMLElement = this.createPathElement(a, b);
            this.container.appendChild(element);
        }
    }

    createPointElement(point: MapPoint) : HTMLElement {

        var element = document.createElement("div");
        element.classList.add("map-point");

        const x: number = point.x / 10;
        const y: number = point.y / 10;

        element.style.marginLeft = `${x}%`;
        element.style.marginTop = `${y}%`;

        return element;
    }

    createPathElement(a: MapPoint, b: MapPoint) : HTMLElement {

        var element = document.createElement("div");
        element.classList.add("map-path-container");

        const x1: number = (a.x / 10) + 0.75;
        const y1: number = (a.y / 10) + 0.75;

        const x2: number = (b.x / 10) + 0.75;
        const y2: number = (b.y / 10) + 0.75;

        element.innerHTML = `
            <svg width="100%" height="100%" style="position:absolute;top:0;left:0;">
            <line x1="${x1}%" y1="${y1}%" x2="${x2}%" y2="${y2}%" style="stroke:black;stroke-width:1"/>
            </svg>
        `;

        return element;
    }
}
