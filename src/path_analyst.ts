
import { MapPoint } from "./map_point.js";

export class PathAnalyst {

    public metresPerPixel = 0.778;

    constructor(){

    }

    getPathLength(points: MapPoint[]) : number {

        const n: number = points.length;
        var total: number = 0;
        for(let i=0; i<n; i++){
            const j = (i+1) % n
            const a: MapPoint = points[i];
            const b: MapPoint = points[j];
            const distance = this.getDistanceBetweenPoints(a, b);
            total += distance;
        }

        return total * this.metresPerPixel;
    }

    getScore(points: MapPoint[]) {

        const pathLength = this.getPathLength(points);
        return pathLength / 300;
    }

    getDistanceBetweenPoints(a: MapPoint, b: MapPoint) : number {

        const x1: number = a.x;
        const y1: number = a.y;
        
        const x2: number = b.x;
        const y2: number = b.y;
        
        const abs_x = Math.abs(x1 - x2);
        const abs_y = Math.abs(y1 - y2);
        const hypotenuse = (abs_x * abs_x) + (abs_y * abs_y)

        return Math.sqrt(hypotenuse);
    }
}