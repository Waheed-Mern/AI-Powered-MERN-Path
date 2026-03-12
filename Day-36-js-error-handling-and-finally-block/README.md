# Project: Error Handling & Deterministic Resource Management

### Objective
To implement robust error boundaries using `try-catch-finally` blocks and enforce data integrity through manual exception throwing (`throw`).

### Logic Flow
1. **Validation Layer:** Using `isNaN()` to check user input. If the input is invalid, the script deliberately breaks execution using `throw SyntaxError` to prevent silent failures.
2. **The Try Block:** Attempting to execute the core logic (summation and multiplication).
3. **The Catch Block:** Acting as a safety net that captures runtime errors without crashing the entire script.
4. **The Finally Block:** This is the "Deterministic" layer. It executes regardless of whether the `try` succeeded or the `catch` was triggered—even if a `return` statement is present in the previous blocks.

### The Foundation
In the MERN stack, especially in Node.js, you deal with database connections. If your code crashes during a query, you must close the connection to avoid memory leaks. The `finally` block is exactly where you put "cleanup" code (like `db.close()`) to ensure your server stays healthy.