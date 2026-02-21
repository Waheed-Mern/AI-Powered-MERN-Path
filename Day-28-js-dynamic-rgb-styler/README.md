# Project: Dynamic RGB Color Injection Engine

### Objective
To build a functional utility that calculates random RGB values and injects them into the DOM to create a dynamic, unique UI on every page load.

### Logic Flow
1. **Selection:** Accessing the `.container` element and retrieving its live HTMLCollection via `.children`.
2. **Algorithm:** Defining a `getRandomColors()` function that generates integers between 0-255 using `Math.random` and `Math.ceil`.
3. **Type Conversion:** Converting the `HTMLCollection` into a standard Array using `Array.from()` to enable high-order iteration.
4. **Execution:** Iterating through each node and applying independent random values for both `backgroundColor` and `color` (text) properties.

### The Foundation
Mastering runtime style manipulation is a core skill for MERN developers. This logic is the basis for data visualization (charts that change color based on value) and generative UI components. Understanding how to wrap non-array objects into arrays (`Array.from`) is a common pattern when working with legacy DOM APIs before moving to React's state-based rendering.