import { Statistician } from "./statistician.js";
import { MapData } from "./map_data.js";
export class SolutionState {
    constructor(demo) {
        this.currentScore = 1.0;
        this.statesAccepted = 0;
        this.statesRejected = 0;
        this.statistician = new Statistician();
        this.state = [];
        this.demo = demo;
        this.loadPoints();
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
        var suggestion = this.getRandomState();
        var newScore = suggestion;
        var oldScore = this.currentScore;
        var energyChange = newScore - oldScore;
        if (this.acceptEnergyChange(energyChange)) {
            this.currentScore = newScore;
            this.statesAccepted += 1;
        }
        else {
            this.statesRejected += 1;
        }
        this.demo.refreshDisplay();
    }
    acceptEnergyChange(change) {
        if (this.statesAccepted == 0) {
            return true;
        }
        var celcius = this.demo.temperature;
        const verdict = this.statistician.acceptEnergyChangeAtTemperature(change, celcius);
        return verdict;
    }
    getRandomState() {
        return Math.random();
    }
}
