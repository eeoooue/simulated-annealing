
export class TemperatureSlider {

    public element: HTMLInputElement = document.createElement("input");

    constructor(parent: HTMLElement){

        parent.appendChild(this.element);
        this.setupSlider();
        this.styleElement();
    }

    styleElement(){
        this.element.classList.add("temperature-slider")
    }

    setupSlider(){
        this.element.type = "range"
        this.element.min = "0"
        this.element.max = "1000"
        this.element.value = "196"
    }
}
