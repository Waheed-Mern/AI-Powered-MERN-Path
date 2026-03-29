const userInput  = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const resultDisplay = document.getElementById("resultDisplay");
function checker() {
    const orignal = userInput.value.trim().toLowerCase().replace(/\s/g, '');
    if (orignal === "") {
        alert("Please Put Something");
        return;
    }
    const reversed = orignal.split('').reverse().join('');
    if (orignal === reversed) {
        resultDisplay.innerText = orignal + " is Palindrome ✅";
        resultDisplay.style.color = "green";
    }
    else {
        resultDisplay.innerText = orignal + " is not Palindrome ❌"
        resultDisplay.style.color = "red";
    }
    userInput.value = "";
    userInput.focus();
}
checkBtn.addEventListener("click", checker);
userInput.addEventListener("keydown", (e)=>{
    if(e.key === "Enter") checker();
});
const startBtn = document.getElementById("startBtn");
const displayArea = document.getElementById("displayArea");
startBtn.addEventListener("click", ()=>{
    displayArea.innerHTML = "";
for (let counting = 1; counting <= 100; counting++) {
    if (counting % 3 === 0 && counting % 5 === 0) {
        displayArea.innerHTML += "<strong>FizzBuzz</strong><br>";
    }
    else if (counting % 3 === 0) {
        displayArea.innerHTML += "Fizz<br>";
    }
    else if (counting % 5 === 0) {
        displayArea.innerHTML += "Buzz<br>";
    }
    else {
        displayArea.innerHTML += counting + "<br>";
    }
}
});
const numbers = [23, 54, 12, 89, 43, 9, 77];;
const findBtn = document.getElementById("findBtn");
const resultText = document.getElementById("resultText");
findBtn.addEventListener("click", ()=>{
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i]>largest) {
            largest = numbers[i];
        }
    }
    resultText.innerText = "The King (Largest) is: " + largest;
});
const myNumbers = [1, 2, 2, 3, 4, 4, 5];
const cleanBtn = document.getElementById("cleanBtn");
const cleanDisplay = document.getElementById("finalResult");
cleanBtn.addEventListener("click", ()=>{
    let uniqueList = [];
    myNumbers.forEach(num => {
        if (!uniqueList.includes(num)) {
           uniqueList.push(num);
        }
    });
    cleanDisplay.innerHTML =  `[ ${uniqueList.join(", ")} ]`
    console.log("Unique Numbers:", uniqueList);
});