## 📌 Topic: CSS Positioning Mastery
Aaj maine seekha ke kaise elements ko screen par apni marzi se "Place" aur "Fix" kiya jata hai. Ye layout design ka sabse important din tha.

### 🧠 Concepts Learned:
1. **Position: Relative** 🏠
   - Ye parent element banta hai taake andar wale `absolute` elements ko control kar sake.
   
2. **Position: Absolute** 🥷
   - Element apni jagah chor kar hawa mein udta hai aur apne `relative` parent ke mutabiq set hota hai.
   - *Use Case:* Photo par "Sale" ya "New" ka tag lagana.

3. **Position: Fixed** 📌
   - Element screen (viewport) par chipak jata hai. Scroll karne se bhi nahi hilta.
   - *Use Case:* "Chat Buttons" ya "Navigation Bar".

4. **Position: Sticky** ⚡
   - Pehle normal rehta hai, lekin scroll hote hi top par ruk jata hai.
   - *Use Case:* Sticky Navbar jo scroll ke sath chalta hai.

### 🛠️ Tasks Completed:
- [x] Created a parent container with `position: relative`.
- [x] Applied `absolute` positioning to Box 1.
- [x] Fixed Box 2 at the center-right of the screen.
- [x] Made Box 3 `sticky` so it stays at the top during scroll.
- [x] Fixed the image overflow issue using `width: 90%` and `max-width`.

### 📱 Responsive Fix:
Maine seekha ke `image` tag ko target karne ke liye `img` likhna zaroori hai (sirf `.image` likhne se container chota hota hai, photo nahi). Is fix se meri site ab har mobile aur PC par fit hai!