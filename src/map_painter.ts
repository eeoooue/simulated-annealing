import { MapPoint } from "./map_point.js";

export class MapPainter {

    public container: HTMLElement;

    public mapSize: number = 650;

    constructor(container: HTMLElement){
        this.container = container;
    }

    paintPoints(points: MapPoint[]){

        this.container.replaceChildren();
        const n: number = points.length;

        for(let i=0; i<n; i++){

            const point: MapPoint = points[i];
            const element: HTMLElement = this.createPointElement(point);
            this.container.appendChild(element);
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

        const x: number = point.getScaledX(this.mapSize);
        const y: number = point.getScaledY(this.mapSize);

        element.style.marginLeft = `${x}px`;
        element.style.marginTop = `${y}px`;

        return element;
    }

    createPathElement(a: MapPoint, b: MapPoint) : HTMLElement {

        var element = document.createElement("div");
        element.classList.add("map-path-container");

        const x1: number = a.getScaledX(this.mapSize) + 5;
        const y1: number = a.getScaledY(this.mapSize) + 5;

        const x2: number = b.getScaledX(this.mapSize) + 5;
        const y2: number = b.getScaledY(this.mapSize) + 5;

        element.innerHTML = `
            <svg width="100%" height="100%" style="position:absolute;top:0;left:0;">
            <line x1="${x1}px" y1="${y1}px" x2="${x2}px" y2="${y2}px" style="stroke:black;stroke-width:1"/>
            </svg>
        `;

        return element;
    }
}
