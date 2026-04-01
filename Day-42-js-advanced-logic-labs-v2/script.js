const groupBtn = document.getElementById("group-btn");
const displayResult = document.getElementById("display-result");
const students = [
  { name: "Waheed", age: 20 },
  { name: "Ali", age: 22 },
  { name: "Sara", age: 20 },
  { name: "Hamza", age: 22 },
  { name: "Zain", age: 18 },
];
groupBtn.addEventListener("click", () => {
  const groupedByAge = students.reduce((groups, student) => {
    const age = student.age;
    if (!groups[age]) groups[age] = [];
    groups[age].push(student.name);
    return groups;
  }, {});
  displayResult.innerHTML = JSON.stringify(groupedByAge, null, 2);
});
const myCart = [
  { name: "Rice", price: 100, qty: 2 },
  { name: "Sugar", price: 50, qty: 3 },
  { name: "Milk", price: 200, qty: 1 },
];
const cartItems = document.getElementById("cart-items");
const finalbill = document.getElementById("final-bill");
function calculateTotal() {
  let subTotal = 0;
  let rowsHTML = "";
  myCart.forEach((item) => {
    let itemTotal = item.price * item.qty;
    subTotal += itemTotal;
    rowsHTML += `<tr>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.qty}</td>
            <td>${itemTotal}</td>
        </tr>`;
  });
  cartItems.innerHTML = rowsHTML;
  finalbill.innerHTML = subTotal;
}
calculateTotal();
const originalDisplay = document.getElementById("original-display");
const cloneDisplay = document.getElementById("clone-display");
const cloneBtn = document.getElementById("clone-btn");
const changeBtn = document.getElementById("change-btn");
const cloneMessage = document.getElementById("clone-message");
const original = { name: "Waheed", address: { city: "Kahror Pakka" } };
let clonedObject = null;
originalDisplay.innerHTML = "Original: " + JSON.stringify(original);
cloneBtn.addEventListener("click", () => {
  clonedObject = JSON.parse(JSON.stringify(original));
  cloneDisplay.innerHTML = "Clone: " + JSON.stringify(clonedObject);
  cloneMessage.innerHTML = "Object Cloned Successfully!";
});
changeBtn.addEventListener("click", () => {
  if (clonedObject) {
    clonedObject.address.city = "Multan";
    cloneDisplay.innerHTML = "Clone: " + JSON.stringify(clonedObject);
    originalDisplay.innerHTML = "Original: " + JSON.stringify(original);
    cloneMessage.innerHTML = "Notice: Original city stayed same!";
  }
});
const userInput = document.getElementById("user-input");
const countBtn = document.getElementById("count-btn");
const resultDisplay = document.getElementById("result-display");
function counter() {
  const text = userInput.value.trim().toLowerCase();
  if (text === "") {
    alert("Please type something!");
    return;
  }
  let count = {};
  for (const char of text) {
    if (char === " ") continue;
    count[char] = (count[char] || 0) + 1;
  }
  resultDisplay.innerHTML = JSON.stringify(count, null, 2);
  userInput.value = "";
  userInput.focus();
}
countBtn.addEventListener("click", counter);
const greetingStatus = document.getElementById("greeting-status");
const greetingText = document.getElementById("greeting-text");
const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", async () => {
  startBtn.disabled = true;
  greetingStatus.innerHTML = "Waiting 3 seconds... ⏳";
  greetingText.innerHTML = "";
  const msg = await new Promise((resolve) => {
    setTimeout(() => resolve("Hello! 👋"), 3000);
  });
  greetingText.innerHTML = msg;
  greetingStatus.innerHTML = "Done! ✅";
  startBtn.disabled = false;
});
const fetchBtn = document.getElementById("fetch-btn");
const londonStatus = document.getElementById("london-status");
const userList = document.getElementById("user-list");
fetchBtn.addEventListener("click", async () => {
  fetchBtn.disabled = true;
  userList.innerHTML = "";
  londonStatus.innerHTML = "Fetching... 🌐";
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    const londonUsers = users.filter((u) => u.address.city === "London");
    if (londonUsers.length > 0) {
      londonStatus.innerHTML = "Found users in London! ✅";
      londonUsers.forEach((u) => {
        let li = document.createElement("li");
        li.textContent = u.name;
        userList.appendChild(li);
      });
    } else {
      londonStatus.innerHTML = "London mein koi nahi mila. ❌";
    }
  } catch (e) {
    londonStatus.innerHTML = "Error fetching data.";
  } finally {
    fetchBtn.disabled = false;
  }
});
const retryBtn = document.getElementById("retry-btn");
const logContainer = document.getElementById("log-container");
function addLog(text) {
  logContainer.innerHTML += `<br>${text}`;
}
retryBtn.addEventListener("click", async () => {
  logContainer.innerHTML = "Starting... 🚀";
  for (let i = 1; i <= 3; i++) {
    try {
      const res = await fetch(
        "https://jsonplaceholdeeeer.typicode.com/posts/1",
      );
      if (!res.ok) throw new Error();
      addLog(`Attempt ${i}: Success! ✅`);
      break;
    } catch (err) {
      addLog(`Attempt ${i}: Failed! ❌`);
      if (i < 3) await new Promise((r) => setTimeout(r, 2000));
      else addLog("<b>All attempts failed!</b>");
    }
  }
});
const red = document.getElementById("red-light");
const yellow = document.getElementById("yellow-light");
const green = document.getElementById("green-light");
const signalText = document.getElementById("signal-text");
async function startSignal() {
  while (true) {
    red.style.background = "red";
    yellow.style.background = "gray";
    green.style.background = "gray";
    signalText.innerText = "STOP 🛑";
    await new Promise((r) => setTimeout(r, 2000));
    red.style.background = "gray";
    yellow.style.background = "yellow";
    green.style.background = "gray";
    signalText.innerText = "READY ⚠️";
    await new Promise((r) => setTimeout(r, 1000));
    red.style.background = "gray";
    yellow.style.background = "gray";
    green.style.background = "green";
    signalText.innerText = "GO 🟢";
    await new Promise((r) => setTimeout(r, 3000));
  }
}
startSignal();
