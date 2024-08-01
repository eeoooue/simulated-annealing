
export class AcceptancePanel {

    public element: HTMLElement = document.createElement("div")

    constructor(parent: HTMLElement){

        parent.appendChild(this.element)
        this.styleContainer();
    }

    styleContainer(){
        this.element.classList.add("info-panel")
        this.element.innerHTML = "States Accepted: 0 <br> States Rejected: 0 <br> %Acceptance: (0%)"
    }
}