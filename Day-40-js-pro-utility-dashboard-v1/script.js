document.getElementById("sumBtn").addEventListener("click", () => {
  const input = document.getElementById("numbersInputSum").value.trim();
  if (!input) return alert("Please enter some numbers!");
  const nums = input.split(",").map((n) => Number(n.trim()));
  let sum = 0;
  for (let n of nums) {
    if (isNaN(n)) continue;
    if (n < 0) break;
    sum += n;
  }
  document.getElementById("originalList").innerText = nums
    .filter((n) => !isNaN(n))
    .join(", ");
  document.getElementById("totalSum").innerText = sum;
});
document.getElementById("countBtn").addEventListener("click", () => {
  const text = document.getElementById("stringInput").value;
  const vowels = text.match(/[aeiou]/gi) || [];
  document.getElementById("vowelCount").innerText = vowels.length;
  document.getElementById("detailsMsg").innerText =
    vowels.length > 0
      ? "Found: " + [...new Set(vowels)].join(", ")
      : "None found.";
});
let storage = JSON.parse(localStorage.getItem("alldata")) || [];
const renderNotes = () => {
  const list = document.getElementById("notesList");
  if (storage.length === 0) {
    list.innerHTML = "<li>No notes saved.</li>";
    return;
  }
  list.innerHTML = storage
    .map((n) => `<li><b>${n.title}</b>: ${n.content}</li>`)
    .join("");
};
document.getElementById("saveBtn").addEventListener("click", () => {
  const title = document.getElementById("noteTitle").value.trim();
  const content = document.getElementById("noteContent").value.trim();
  if (title && content) {
    storage.push({ title, content });
    localStorage.setItem("alldata", JSON.stringify(storage));
    document.getElementById("noteTitle").value = "";
    document.getElementById("noteContent").value = "";
    renderNotes();
  } else {
    alert("Both fields are required!");
  }
});
document.getElementById("clearBtn").addEventListener("click", () => {
  if (confirm("Delete all notes?")) {
    storage = [];
    localStorage.removeItem("alldata");
    renderNotes();
  }
});
document.getElementById("processBtn").addEventListener("click", async () => {
  const btn = document.getElementById("processBtn");
  const val = document.getElementById("numbersInputAsync").value.trim();
  const display = document.getElementById("finalResult");
  if (!val) return alert("Enter numbers!");
  btn.disabled = true;
  display.innerText = "Processing...";
  const nums = val
    .split(",")
    .map((n) => Number(n.trim()))
    .filter((n) => !isNaN(n));

  try {
    const results = await Promise.all(
      nums.map((n) => new Promise((r) => setTimeout(() => r(n * 2), 600))),
    );
    display.innerText = results.join(", ");
  } catch (err) {
    display.innerText = "Error!";
  } finally {
    btn.disabled = false;
  }
});
const handleUIState = async (btnId, statusId, loaderId, finalMsg, delay) => {
  const btn = document.getElementById(btnId);
  const loader = document.getElementById(loaderId);
  const status = document.getElementById(statusId);
  btn.disabled = true;
  loader.style.display = "block";
  status.innerText = "Wait...";
  await new Promise((r) => setTimeout(r, delay));
  status.innerText = finalMsg;
  status.style.color = "var(--success)";
  loader.style.display = "none";
  btn.disabled = false;
};
document
  .getElementById("orderBtn")
  .addEventListener("click", () =>
    handleUIState(
      "orderBtn",
      "orderStatus",
      "loader",
      "🎉 Order Confirmed!",
      2000,
    ),
  );
document.getElementById("brewBtn").addEventListener("click", () => {
  const type = document.getElementById("coffeeType").value;
  handleUIState(
    "brewBtn",
    "machineStatus",
    "loadingPulse",
    `☕ ${type} is Ready!`,
    2500,
  );
});
renderNotes();
