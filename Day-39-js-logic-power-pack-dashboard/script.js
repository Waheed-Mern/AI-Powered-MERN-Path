const nameInput = document.getElementById("studentName");
const sortBtn = document.getElementById("sortBtn");
const resultArea = document.getElementById("houseResult");
function sortStudent() {
  const name = nameInput.value.trim();
  const len = name.length;
  if (name === "") {
    alert("Please enter a name, Wizard!");
    return;
  }
  let house = "";
  let houseColor = "";
  if (len < 6) {
    house = "Gryffindor 🦁";
    houseColor = "#740001";
  } else if (len < 8) {
    house = "Hufflepuff 🦡";
    houseColor = "#ecb939";
  } else if (len < 12) {
    house = "Ravenclaw 🦅";
    houseColor = "#0e1a40";
  } else {
    house = "Slytherin 🐍";
    houseColor = "#1a472a";
  }
  resultArea.innerHTML = `Congratulations! You belong to <b>${house}</b>`;
resultArea.style.color = houseColor;
  nameInput.value = "";
  nameInput.focus();
}
sortBtn.addEventListener("click", sortStudent);
nameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sortStudent();
});
const processBtn = document.getElementById("processBtn");
const resultDisplay = document.getElementById("resultArray");
const myNumbers = [2, 2, 5, 10, 10, 7];
processBtn.addEventListener("click", () => {
  const finalResult = [];
  for (let i = 0; i < myNumbers.length; i++) {
    if (i > 0 && myNumbers[i] === myNumbers[i - 1]) {
      finalResult.push(myNumbers[i]);
    } else {
      finalResult.push(myNumbers[i] * 2);
    }
  }
  resultDisplay.innerText = JSON.stringify(finalResult);
});
const mirrorUser = document.getElementById("userInput");
const createMirror = document.getElementById("mirrorBtn");
const mirrorImage = document.getElementById("mirrorResult");
function mirror() {
  const orignal = mirrorUser.value.trim().toLowerCase().replace(/\s+/g, '');
  const reversed = orignal.split('').reverse().join('');
  document.getElementById("originalText").innerHTML = orignal
  mirrorImage.innerHTML = orignal + reversed;
  mirrorUser.focus();
}
createMirror.addEventListener("click", mirror);
mirrorUser.addEventListener("keydown", (e)=>{
  if(e.key === "Enter") mirror()
})
const passwordInput = document.getElementById("passwordInput");
const validateBtn = document.getElementById("validateBtn");
const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";
    toggleBtn.textContent = isPassword ? "🕶️" : "👁️";
});
function checker() {
  const pwd = passwordInput.value.trim();
  document.getElementById("length").style.color = pwd.length >= 8 ? "green" : "red";
  document.getElementById("case").style.color = (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) ? "green" : "red";
  document.getElementById("digit").style.color = /\d/.test(pwd) ? "green" : "red";
  passwordInput.focus();
}
validateBtn.addEventListener("click", checker);
passwordInput.addEventListener("keydown", (e)=>{
  if(e.key === "Enter") checker()
})