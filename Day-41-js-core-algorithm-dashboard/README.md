# Project: Core Algorithmic Logic & Data Sanitization

### Objective
To implement foundational computer science algorithms in a modern web interface, focusing on string reversal, modular arithmetic, and array filtration.

### Algorithmic Breakdown
1. **Palindrome Engine:** Uses string normalization (regex space removal) and the `split-reverse-join` pipeline to check for symmetry.
2. **FizzBuzz Logic:** Implements modular arithmetic (`%`) to solve the classic sequence problem. Note the order of operations: checking for both 3 and 5 first is critical.
3. **Linear Search (Max Value):** Manually iterates through a dataset to track the "King" (maximum value), demonstrating a basic $O(n)$ search algorithm.
4. **Array De-duplication:** Uses `forEach` and `.includes()` as a lookup check to build a unique collection from a redundant dataset.

### The Foundation
In the MERN stack, you will often receive "dirty" data from APIs. Knowing how to quickly find the largest price, remove duplicate entries from a database response, or format strings before saving them to MongoDB is what makes your backend code efficient and your frontend data reliable.