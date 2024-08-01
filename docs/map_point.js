export class MapPoint {
    constructor(identifier, x, y) {
        this.identifer = identifier;
        this.x = x;
        this.y = y;
    }
    getScaledX(mapSize) {
        return mapSize * this.x / 1000;
    }
    getScaledY(mapSize) {
        return mapSize * this.y / 1000;
    }
}
