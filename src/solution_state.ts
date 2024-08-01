
import { AnnealingDemo } from "./annealing_demo.js";
import { Statistician } from "./statistician.js";
import { MapData } from "./map_data.js";
import { MapPoint } from "./map_point.js";
import { PathAnalyst } from "./path_analyst.js";


export class SolutionState {

    public demo: AnnealingDemo;

    public currentScore = 1.0;
    public pathLength = 0; // pixels
    public statesAccepted = 0;
    public statesRejected = 0;

    public statistician: Statistician = new Statistician();
    public state: MapPoint[] = [];
    public analyst: PathAnalyst = new PathAnalyst();

    constructor(demo: AnnealingDemo) {

        this.demo = demo;
        this.loadPoints();
        this.pathLength = this.analyst.getPathLength(this.state);
        this.attemptMutation();
    }


    loadPoints() {

        const data: MapData = new MapData();
        const n = data.points.length;

        for (let i = 0; i < n; i++) {
            var point: MapPoint = data.points[i];
            this.state.push(point);
        }
    }

    attemptMutation() {

        var suggestion: number = this.getRandomState();
        var suggestedState: MapPoint[] = this.getNewState();
        var suggestedPathLength: number = this.analyst.getPathLength(suggestedState);
        console.log(`found path with length ${suggestedPathLength} px`)

        var newScore = suggestion;
        var oldScore = this.currentScore;
        var energyChange = newScore - oldScore;

        if (this.acceptEnergyChange(energyChange)) {
            this.currentScore = newScore;
            this.state = suggestedState;
            this.statesAccepted += 1;
        }
        else {
            this.statesRejected += 1;
        }

        this.demo.refreshDisplay();
        // console.log(this.state);
    }

    getNewState(): MapPoint[] {

        var result: MapPoint[] = this.getCurrentStateCopy();

        var i: number = 0;
        var j: number = 0;
        while (i == j){
            i = this.getRandomIndex();
            j = this.getRandomIndex();
        }

        var a: MapPoint = result[i];
        var b: MapPoint = result[j];
        result[j] = a;
        result[i] = b;

        return result;
    }

    getRandomIndex() : number {

        const n: number = this.state.length;
        var i: number = n;
        while (i < 0 || i >= n){
            const roll: number = Math.random();
            i = Math.round(roll * n);
        }

        return i;
    }

    getCurrentStateCopy(): MapPoint[] {

        var result: MapPoint[] = [];
        const n = this.state.length;

        for (let i = 0; i < n; i++) {
            var point: MapPoint = this.state[i];
            result.push(point);
        }

        return result;
    }

    acceptEnergyChange(change: number): boolean {

        if (this.statesAccepted == 0) {
            return true;
        }

        var celcius = this.demo.temperature;
        const verdict = this.statistician.acceptEnergyChangeAtTemperature(change, celcius);

        return verdict;
    }

    getRandomState(): number {
        return Math.random();
    }
}