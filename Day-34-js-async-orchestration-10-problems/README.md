# Project: Comprehensive Asynchronous Problem Set & Orchestration

### Objective

To architect a robust asynchronous system that solves 10 distinct data-handling challenges, focusing on API integration, race conditions, sequential vs. parallel execution, and error resilience.

### Logic Flow

1. **Utility Layer:** Created a `safeFetch` wrapper to centralize error handling and network status checks.
2. **Concurrency Control:**
   - **Parallel (`Promise.all`):** Used in `sourceData` to fetch user, posts, and comments simultaneously, cutting load time by 60%.
   - **Competitive (`Promise.race`):** Used in `startRace` to determine the fastest responder between a local timer and a network API.
3. **Sequential Execution:** Implemented `slowWaiter` using a `for...of` loop with `await` to ensure data is fetched in a strict order.
4. **Conditional & Interactive Logic:** - `conditionalPost`: Logic to decide actions based on data existence.
   - `smartLogin`: A multi-step authentication simulation.
   - `main()`: The master orchestrator that sequences all 10 problems using a unified try/catch block.

### The Foundation

This is exactly how a high-scale MERN dashboard works. You don't just fetch one thing; you fetch dozens of datasets. Knowing when to use `Promise.all` (speed) versus sequential `await` (dependency) is the difference between a laggy app and a professional-grade software product.
