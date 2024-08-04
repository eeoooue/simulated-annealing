
# Simulated Annealing


Simulated Annealing is a single-state method for combinatorial optimization.

Inspired by annealing in metallurgy, this metaheuristic strategy provides a dynamic temperature variable as a means of controlling the compromise between **exploration** and **exploitation** during the optimization process.

### Interactive Demo

While the cooling of the system is typically automated, you can try performing simulated annealing by hand using this [interactive demo](https://eeoooue.github.io/simulated-annealing/).

The static web app presents a typical **Travelling Salesman Problem** for a map featuring 50 locations.

To emulate the annealing process, first 'heat up' the system by raising the temperature until it appears 'melted'.

Then, gradually 'cool' the system at a steady rate to eventually arrive at a high quality solution.

![Image](./images/AnnealedExample.png)


### Possible Solutions

There are a staggering 608,281,864,034,267,560,872,252,163,321,295,376,887,552,831,379,210,240,000,000,000 possible solution states for the problem featured in this project.

**Monte Carlo Sampling** has been used to estimate the distribution of path lengths among these possible solutions. See plot below.



![Image](./images/SampledDistribution.png)