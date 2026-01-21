# Day 02: Deep Dive into CSS Specificity 🎨

### Overview
Today, I explored how browsers resolve CSS conflicts when multiple rules target the same element. This lab focused on the "Specificity Hierarchy."

### Key Concepts Tested:
- **Type Selectors vs. Classes:** Confirmed that Classes override Element selectors.
- **Attribute Selectors:** Experimented with `[data-x]` and its priority level.
- **Inline Styles:** Verified that styles defined in HTML tags override external CSS.
- **The !important Rule:** Learned how this "nuclear option" overrides everything, including inline styles.
- **Cascading Order:** Testing how the last declared class wins if specificity scores are tied.

### Learning Outcome:
I now understand why it's better to use specific classes rather than relying on `!important` for maintainable code in large-scale international projects.