


export class Statistician {

    acceptEnergyChangeAtTemperature(energyChange: number, celcius: number) : boolean {

        const kelvin = this.getKelvinFromCelcius(celcius);
        const probability = this.getProbabilityOfAccepting(energyChange, kelvin);
        const roll = Math.random();
        return roll <= probability;
    }

    getKelvinFromCelcius(celcius: number) : number {

        return celcius + 273;
    }

    getProbabilityOfAccepting(energyChange: number, kelvin: number) : number {

        if (kelvin == 0){
            return 0;
        }

        console.log(`Evaluating change of ${energyChange} @ ${kelvin}K`)

        // const topHalf = -energyChange * (10 ** 23);
        const topHalf = -energyChange * 1000;
        const k = 1.380649;
        const bottomHalf = k * kelvin;
        const valueOut = Math.exp(topHalf/bottomHalf);

        console.log(`probability of accepting change of ${energyChange} is ${valueOut}`)
        return valueOut;
    }
}