document.querySelector('.btn').onclick=function() {
    let userInput =document.querySelector('#text').value;
    let mainBox = document.querySelector('#mainBox');
    let resultDisplay = document.querySelector('#resultText');
    let backSide = document.querySelector('.back');
    mainBox.classList.add('is-flipped');
    if (userInput !=="") {
    backSide.classList.remove('bg-red');
    resultDisplay.innerText = "Result : " + userInput; 
}
else{
    backSide.classList.add('bg-red');
        resultDisplay.innerText = "Please Put Something!";
}
};
function resetCard(){
    document.querySelector('#mainBox').classList.remove('is-flipped');
}
