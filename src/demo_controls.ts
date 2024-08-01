


export class DemoControls {

    public container: HTMLElement = new HTMLElement();
    
    constructor(parent: HTMLElement){
        parent.appendChild(this.container);
        this.styleContainer();
        this.addChildren();
    }

    styleContainer(){
        this.container.classList.add("controls-area")
    }

    addChildren(){
        // add canvas
        // add panels
    }


}

