

import { TemperatureSlider } from "./temperature_slider.js";

export class DemoControls {

    public container: HTMLElement = document.createElement("div");


    public coldLabel: HTMLElement = document.createElement("div");
    public slider: TemperatureSlider; 
    public hotLabel: HTMLElement = document.createElement("div");
    
    constructor(parent: HTMLElement){

        parent.appendChild(this.container);
        this.styleContainer();
        this.container.appendChild(this.coldLabel)
        this.slider = new TemperatureSlider(this.container);
        this.container.appendChild(this.hotLabel)
        this.styleLabels();
    }

    styleContainer(){
        this.container.classList.add("controls-area")
    }

    styleLabels(){
        this.coldLabel.innerText = "COLD";
        this.hotLabel.innerText = "HOT";
    }


}

