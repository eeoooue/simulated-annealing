
import { AnnealingDemo } from "./annealing_demo.js";
import { Statistician } from "./statistician.js";

export class SolutionState {

    public demo: AnnealingDemo;

    public currentScore = 1.0;
    public statesAccepted = 0;
    public statesRejected = 0;

    public statistician: Statistician = new Statistician();

    constructor(demo: AnnealingDemo) {

        this.demo = demo;
        this.attemptMutation();
    }

    attemptMutation(){

        var suggestion: number = this.getRandomState();
        
        var newScore = suggestion;
        var oldScore = this.currentScore;
        var energyChange = newScore - oldScore;

        if (this.acceptEnergyChange(energyChange)){
            this.currentScore = newScore;
            this.statesAccepted += 1;
        }
        else {
            this.statesRejected += 1;
        }

        this.demo.refreshDisplay();

    }

    acceptEnergyChange(change: number): boolean {

        if (this.statesAccepted == 0){
            return true;
        }

        var celcius = this.demo.temperature;
        const verdict = this.statistician.acceptEnergyChangeAtTemperature(change, celcius);

        return verdict;
    }

    getRandomState() : number {
        return Math.random();
    }
}