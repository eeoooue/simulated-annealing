
import { MapPoint } from "./map_point.js";

export class MapData {

    public points: MapPoint[] = [];

    constructor() {
        this.loadCampus();
    }

    addPoint(identifier: number, x: number, y: number) {
        const point: MapPoint = new MapPoint(identifier, x, y);
        this.points.push(point);
    }

    loadCampus() {
        this.addPoint(1, 453, 68);
        this.addPoint(2, 678, 108);
        this.addPoint(3, 556, 168);
        this.addPoint(4, 461, 205);
        this.addPoint(5, 836, 234);
        this.addPoint(6, 708, 349);
        this.addPoint(7, 423, 414);
        this.addPoint(8, 502, 437);
        this.addPoint(9, 627, 419);
        this.addPoint(10, 821, 435);

        this.addPoint(11, 899, 457);
        this.addPoint(12, 948, 426);
        this.addPoint(13, 460, 484);
        this.addPoint(14, 573, 470);
        this.addPoint(15, 654, 470);
        this.addPoint(16, 761, 468);
        this.addPoint(17, 190, 526);
        this.addPoint(18, 215, 560);
        this.addPoint(19, 259, 526);
        this.addPoint(20, 320, 501);

        this.addPoint(21, 551, 519);
        this.addPoint(22, 602, 543);
        this.addPoint(23, 630, 536);
        this.addPoint(24, 659, 537);
        this.addPoint(25, 734, 566);
        this.addPoint(26, 404, 608);
        this.addPoint(27, 530, 581);
        this.addPoint(28, 624, 598);
        this.addPoint(29, 730, 618);
        this.addPoint(30, 870, 636);

        this.addPoint(31, 229, 638);
        this.addPoint(32, 283, 630);
        this.addPoint(33, 251, 686);
        this.addPoint(34, 345, 660);
        this.addPoint(36, 405, 679);
        this.addPoint(37, 664, 642);
        this.addPoint(38, 569, 688);
        this.addPoint(39, 693, 711);
        this.addPoint(40, 282, 726);

        this.addPoint(41, 446, 715);
        this.addPoint(42, 550, 756);
        this.addPoint(43, 614, 767);
        this.addPoint(44, 675, 774);
        this.addPoint(45, 754, 768);
        this.addPoint(46, 313, 781);
        this.addPoint(47, 331, 817);
        this.addPoint(48, 461, 830);
        this.addPoint(49, 611, 930);
        this.addPoint(50, 725, 916);

        this.addPoint(51, 948, 703);
    }
}