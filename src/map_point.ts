
export class MapPoint {

    public identifer: number;
    public x: number;
    public y: number;

    public scaled_x: number;
    public scaled_y: number;

    constructor(identifier: number, x: number, y: number){

        this.identifer = identifier;

        this.x = x;
        this.scaled_x = x;

        this.y = y;
        this.scaled_y = y;
    }
}
