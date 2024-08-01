import { Statistician } from "./statistician.js";
export class SolutionState {
    constructor(demo) {
        this.currentScore = 1.0;
        this.statesAccepted = 0;
        this.statesRejected = 0;
        this.statistician = new Statistician();
        this.demo = demo;
        this.attemptMutation();
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
