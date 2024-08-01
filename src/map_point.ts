
export class MapPoint {

    public identifer: number;
    public x: number;
    public y: number;

    constructor(identifier: number, x: number, y: number){

        this.identifer = identifier;
        this.x = x;
        this.y = y;
    }

    getScaledX(mapSize: number){
        return mapSize * this.x / 1000;
    }

    getScaledY(mapSize: number){
        return mapSize * this.y / 1000;
    }
}
