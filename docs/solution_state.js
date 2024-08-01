import { Statistician } from "./statistician.js";
import { MapData } from "./map_data.js";
import { PathAnalyst } from "./path_analyst.js";
export class SolutionState {
    constructor(demo) {
        this.currentScore = 1.0;
        this.pathLength = 0; // pixels
        this.statesAccepted = 0;
        this.statesRejected = 0;
        this.statistician = new Statistician();
        this.state = [];
        this.analyst = new PathAnalyst();
        this.demo = demo;
        this.loadPoints();
        this.pathLength = this.analyst.getPathLength(this.state);
        this.currentScore = this.analyst.getScore(this.state);
        this.attemptMutation();
    }
    loadPoints() {
        const data = new MapData();
        const n = data.points.length;
        for (let i = 0; i < n; i++) {
            var point = data.points[i];
            this.state.push(point);
        }
    }
    attemptMutation() {
        var suggestedState = this.getNewState();
        var suggestedPathLength = this.analyst.getPathLength(suggestedState);
        // console.log(`found path with length ${suggestedPathLength} px`)
        var newScore = this.analyst.getScore(suggestedState);
        var oldScore = this.currentScore;
        var energyChange = newScore - oldScore;
        if (this.acceptEnergyChange(energyChange)) {
            this.currentScore = newScore;
            this.state = suggestedState;
            this.statesAccepted += 1;
            this.pathLength = this.analyst.getPathLength(this.state);
        }
        else {
            this.statesRejected += 1;
        }
        this.demo.refreshDisplay();
        // console.log(this.state);
    }
    getNewState() {
        var result = this.getCurrentStateCopy();
        var i = 0;
        var j = 0;
        while (i == j) {
            i = this.getRandomIndex();
            j = this.getRandomIndex();
        }
        var a = result[i];
        var b = result[j];
        result[j] = a;
        result[i] = b;
        return result;
    }
    getRandomIndex() {
        const n = this.state.length;
        var i = n;
        while (i < 0 || i >= n) {
            const roll = Math.random();
            i = Math.round(roll * n);
        }
        return i;
    }
    getCurrentStateCopy() {
        var result = [];
        const n = this.state.length;
        for (let i = 0; i < n; i++) {
            var point = this.state[i];
            result.push(point);
        }
        return result;
    }
    acceptEnergyChange(change) {
        if (this.statesAccepted == 0) {
            return true;
        }
        var celcius = this.demo.temperature;
        const verdict = this.statistician.acceptEnergyChangeAtTemperature(change, celcius);
        return verdict;
    }
}
