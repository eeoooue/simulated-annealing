
export class MapCanvas{

    public container: HTMLElement = document.createElement("div");

    constructor(parent: HTMLElement){
        parent.appendChild(this.container);
        this.styleContainer();
    }
    
    styleContainer(){
        this.container.classList.add("map-canvas")
    }
}