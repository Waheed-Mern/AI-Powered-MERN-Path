document.title = "Waheed";
console.log("Title set to:", document.title);
document.body.style.backgroundColor = "lightgrey";
console.log("Body Children:", document.body.children);
let container = document.body.firstElementChild;
console.log("Container Element:", container);
console.log("Container Children:", container.children);
console.log("Container Childnodes:", container.childNodes);
console.log("Container Parent:", container.parentElement);
console.log("Table (Next Sibling of Container):", container.nextElementSibling);
if (document.body.children[1] && document.body.children[1].rows) {
    console.log("Table Rows:", document.body.children[1].rows);
}
console.log("Waheed");
let boxes = document.getElementsByClassName("box");
console.log("All Boxes:", boxes);
document.querySelectorAll(".box").forEach(e => {
    if (e.id !== "red") {
        e.style.backgroundColor = "green";
    } else {
        e.style.backgroundColor = "red";
    }
});