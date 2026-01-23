# Day 04: Mastering CSS Display & Visibility 🎨

Today was a deep dive into how elements sit in the document flow. I experimented with the four most important display values.

### Key Learnings:
1. **Block:** Takes full width (e.g., `.box`).
2. **Inline:** Only takes necessary space, ignores width/height (e.g., `span`).
3. **Inline-Block:** The best of both worlds! Stays in line but respects width, height, and padding (e.g., `.b`).
4. **Hiding Elements:** - `display: none`: Removed from layout (zero space).
   - `visibility: hidden`: Hidden but keeps its space.

### Why this matters for MERN:
Understanding these helps when building dynamic React components—like toggling a dropdown (display: none) or making a loading skeleton (visibility: hidden).