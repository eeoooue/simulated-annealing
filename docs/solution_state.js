export class SolutionState {
    constructor(demo) {
        this.currentScore = 1.0;
        this.statesAccepted = 0;
        this.statesRejected = 0;
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
        if (change < 0) {
            return true;
        }
        return false;
    }
    getRandomState() {
        return Math.random();
    }
}
