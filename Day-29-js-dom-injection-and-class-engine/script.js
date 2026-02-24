let div = document.createElement("div");
console.log(div);

div.innerHTML = "I have been inserted <b>by waheed</b>";
div.setAttribute("class", "created");
document.querySelector(".container").before(div);
let cont = document.querySelector(".container");
cont.insertAdjacentHTML(
  "beforeBegin",
  "<b> I am under the water. Please h elp me here too much raining.... iuuuuooooo</b>",
);
console.log(cont);
cont.classList.toggle("red")
