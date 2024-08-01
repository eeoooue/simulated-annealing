
import { AnnealingDemo } from "./annealing_demo";

const container: HTMLElement | null = document.querySelector(".demo-container")

if (container){
    new AnnealingDemo(container);
}
