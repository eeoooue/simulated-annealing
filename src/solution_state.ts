
import { AnnealingDemo } from "./annealing_demo.js";
import { Statistician } from "./statistician.js";
import { MapData } from "./map_data.js";
import { MapPoint } from "./map_point.js";
import { PathAnalyst } from "./path_analyst.js";


export class SolutionState {

    public demo: AnnealingDemo;

    public currentScore = 1.0;
    public pathLength = 0; // metres
    public statesAccepted = 0;
    public statesRejected = 0;

    public statistician: Statistician = new Statistician();
    public state: MapPoint[] = [];
    public analyst: PathAnalyst = new PathAnalyst();

    constructor(demo: AnnealingDemo) {

        this.demo = demo;
        this.loadPoints();
        this.pathLength = this.analyst.getPathLength(this.state);
        this.currentScore = this.analyst.getScore(this.state);
        this.attemptMutation();
    }


    loadPoints() {

        const data: MapData = new MapData();
        const n = data.points.length;

        const seen = new Set<number>();

        for (let i = 0; i < n; i++) {

            let j = 0;
            while (seen.has(j)){
                j = this.getValueBetweenZeroAnd(n);
            }

            seen.add(j);
            const point: MapPoint = data.points[j];
            this.state.push(point);
        }
    }

    getValueBetweenZeroAnd(n: number){

        var i: number = n;
        while (i < 0 || i >= n){
            const roll: number = Math.random();
            i = Math.round(roll * n);
        }

        return i;
    }

    attemptMutation() {

        var suggestedState: MapPoint[] = this.getNewState();
        
        var newScore = this.analyst.getScore(suggestedState);
        var oldScore = this.currentScore;
        var energyChange = newScore - oldScore;

        if (this.acceptEnergyChange(energyChange)) {
            this.currentScore = newScore;
            this.state = suggestedState;
            this.statesAccepted += 1;
            this.pathLength = this.analyst.getPathLength(this.state);
            this.demo.refreshCanvas();
        }
        else {
            this.statesRejected += 1;
        }

        this.demo.refreshPanels();
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
}