
export class ScorePanel {

    public element: HTMLElement = document.createElement("div")

    constructor(parent: HTMLElement){

        parent.appendChild(this.element)
        this.styleContainer();
    }

    styleContainer(){
        this.element.classList.add("info-panel")
        this.element.innerText = "Current Score: 0"
    }
}