import { MapPoint } from "./map_point.js";

export class MapPainter {

    public container: HTMLElement;

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
        element.style.marginLeft = `${point.x}px`;
        element.style.marginTop = `${point.y}px`;

        return element;
    }

    createPathElement(a: MapPoint, b: MapPoint) : HTMLElement {

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
