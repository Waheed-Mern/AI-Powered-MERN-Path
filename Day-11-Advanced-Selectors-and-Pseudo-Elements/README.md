# Day 11: Advanced CSS Selectors & Layout Flow 🚀

Today was a deep dive into the "behind-the-scenes" of CSS styling, moving beyond simple classes to target elements like a pro.

### 🧠 Key Concepts Covered:

#### 1. Layout Control (Floats & Clear)
- **Floats:** Learned how to wrap text around images using `float: right`.
- **Flow-root:** Used `display: flow-root` on parent containers to prevent height collapse—the modern way to handle floats.
- **Clear Property:** Used `clear: both` and `clear: left` to force elements below floating items.

#### 2. Pseudo-Elements (The Ghost Content)
- **::before & ::after:** Injected content via CSS for decoration and labels without changing HTML.
- **::selection:** Customized the highlight color of text (Blue background/White text).
- **::first-letter & ::first-line:** Mastered typography controls for high-end text styling.

#### 3. Power Selectors (The Commented Gems)
- **Attribute Selector:** `[data-color="primary"]` targeting elements by custom data.
- **Positional Selectors:** - `:first-child`: Targeting the very first element.
    - `:nth-child(odd)`: Zebra-striping elements.
    - `:nth-last-child(2)`: Targeting elements from the bottom up.
- **Universal Child Selector:** `.boxes *` to style every single element inside a container at once.

### 📂 Project Structure:
- `index.html`: Contains complex nested cards and boxes with data attributes.
- `style.css`: Comprehensive styles covering all pseudo-states and layout fixes.