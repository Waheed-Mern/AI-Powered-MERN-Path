# Project: Algorithmic Logic - Factorial Multi-Approach

### Objective
To implement mathematical logic using two distinct programming paradigms: Iterative (Imperative) and Functional (Declarative).

### Logic Flow
The script calculates the factorial of a given number ($n!$) using two functions:
1. **Iterative Approach (`factorial`):** Uses a standard `for` loop to accumulate a product. This is memory-efficient and straightforward.
2. **Functional Approach (`reduce`):** - Generates an array of numbers from 0 to $n$ using `Array.from()`.
   - Slices the array to remove the leading zero.
   - Aggregates the product using the `.reduce()` high-order function.

### The Foundation
Algorithms like factorials are the building blocks of complex logic. Mastering how to transform a range of numbers into a single result is vital for AI-powered apps, specifically when dealing with probability, ranking algorithms, or data normalization in the MERN stack.