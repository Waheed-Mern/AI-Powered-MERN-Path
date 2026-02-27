# Project: Interactive Event Systems & Propagation Control

### Objective
To implement complex user interaction patterns, specifically focusing on event listeners, keyboard tracking, and managing the DOM event propagation lifecycle (Bubbling).

### Logic Flow
1. **Interaction Layer:** Utilizing `dblclick` for UI updates and `contextmenu` to hijack standard browser behavior (right-click).
2. **Keyboard Telemetry:** Implementing a global `keydown` listener to capture real-time user input data (`e.key`, `e.keyCode`).
3. **Propagation Strategy:** Managing "Event Bubbling" through nested elements (`child` -> `childevent` -> `event`) and selectively halting the flow using `e.stopPropagation()`.
4. **Temporal Styles:** Managing runtime style changes via `setInterval` and `setTimeout` for automated UI updates.

### The Foundation
In the MERN stack, managing how events move through nested React components (Prop Drilling vs. Bubbling) is vital. Understanding `e.stopPropagation()` is critical when building complex UIs like modal windows or nested dropdowns where a click on a child shouldn't trigger an action on the parent.