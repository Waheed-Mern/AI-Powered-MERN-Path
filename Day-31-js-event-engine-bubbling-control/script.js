let button = document.getElementById("btn");
button.addEventListener("dblclick", () => {
  document.querySelector(".box").innerHTML =
    "<b>Yuyy you were clicked</b> Enjoy click!";
});
button.addEventListener("contextmenu", () => {
  alert("Dont hack us by Right click Please");
});
document.addEventListener("keydown", (e) => {
  console.log(e, e.key, e.keyCode);
});
document.querySelector(".child").addEventListener("click", (e) => {
  e.stopPropagation();
  alert("Child Was clicked");
});
document.querySelector(".childevent").addEventListener("click", (e) => {
  e.stopPropagation();
  alert("Childevent Was clicked");
});
document.querySelector(".event").addEventListener("click", (e) => {
  alert("event Was clicked");
});
function getRandomColor() {
  let val1 = Math.ceil(0 + Math.random() * 255);
  let val2 = Math.ceil(0 + Math.random() * 255);
  let val3 = Math.ceil(0 + Math.random() * 255);
  return `rgb(${val1}, ${val2}, ${val3})`;
}
// let a = setInterval(() => {
//   document.querySelector(".childevent").style.background = getRandomColor();
// }, 3000);
// console.log(a);
let a = setTimeout(() => {
  document.querySelector(".childevent").style.background = getRandomColor();
}, 3000);
console.log(a);





