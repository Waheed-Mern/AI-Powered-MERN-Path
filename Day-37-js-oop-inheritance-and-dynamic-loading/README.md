# Project: OOP Architecture & Asynchronous Resource Injection

### Objective
To implement structured software patterns using ES6 Classes, Prototype Inheritance, and managed asynchronous resource loading.

### Logic Flow
1. **Dynamic Dependency Loading:** Creating a script injector that returns a Promise. This ensures external libraries (like Bootstrap) are fully available before executing dependent logic.
2. **Prototype Chain:** Demonstrating `__proto__` to show how objects inherit properties from other objects without formal classes.
3. **Class Inheritance:**
   - **`super()` keyword:** Linking the child constructor and methods to the parent class.
   - **Method Overriding:** Extending the `work()` functionality from `Employee` to `Programmer`.
4. **Encapsulation (Getters/Setters):** Using `get` and `set` to validate data (PIN length) before it is committed to the object state.
5. **Performance Benchmarking:** Using `console.time` to compare sequential `await` vs. concurrent `Promise.all`.

### The Foundation
This is the "M" and "N" of MERN in action. In Node.js/Express, you will create classes for Controllers and Models. In React, understanding how one component or class "extends" another is vital. Prototypal inheritance is the secret sauce that makes JavaScript efficient—every array or object you use inherits methods from a hidden prototype.