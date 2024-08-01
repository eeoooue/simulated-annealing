
import { AnnealingDemo } from "./annealing_demo.js";

const container: HTMLElement | null = document.querySelector(".demo-container")

if (container){
    new AnnealingDemo(container);
}
