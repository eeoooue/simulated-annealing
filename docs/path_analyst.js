export class PathAnalyst {
    constructor() {
    }
    getPathLength(points) {
        const n = points.length;
        var total = 0;
        for (let i = 0; i < n; i++) {
            const j = (i + 1) % n;
            const a = points[i];
            const b = points[j];
            const distance = this.getDistanceBetweenPoints(a, b);
            total += distance;
        }
        return total;
    }
    getDistanceBetweenPoints(a, b) {
        const x1 = a.x;
        const y1 = a.y;
        const x2 = b.x;
        const y2 = b.y;
        const abs_x = Math.abs(x1 - x2);
        const abs_y = Math.abs(y1 - y2);
        const hypotenuse = (abs_x * abs_x) + (abs_y * abs_y);
        return Math.sqrt(hypotenuse);
    }
}
