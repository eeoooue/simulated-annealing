

export class DemoDisplay {

    public container: HTMLElement = new HTMLElement();

    constructor(parent: HTMLElement){
        parent.appendChild(this.container);
        this.styleContainer();
        this.addChildren();
    }

    styleContainer(){
        this.container.classList.add("display-area")
    }

    addChildren(){
        // add canvas
        // add panels
    }

}

