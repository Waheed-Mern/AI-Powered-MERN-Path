function createcard(title, cName, views, duration, monthsOld, thumbnail) {
let viewStr;
if (views>=1000000) {
  viewStr = (views/1000000) .toFixed (1) + "M";
}
else if (views>=1000) {
  viewStr = (views/1000) .toFixed (1) + "K";
}
else{
  viewStr = views
};
let monthsDisplay;
if (monthsOld >= 12) {
        let years = Math.floor(monthsOld / 12);
        let remainingMonths = monthsOld % 12;
        if (remainingMonths === 0) {
          monthsDisplay=years + "years ago";
        }
        else {
          monthsDisplay = years + "years ago" + remainingMonths + "months ago";
        }
}
else{
  monthsDisplay = monthsOld + "months ago";
}
let html = `
<div class ="card">
<div class ="image">
<img src = "${thumbnail}">
<div class ="capsule">${duration}</div>
</div>
<div class ="text">
<h2>${title}</h2>
<p>${cName} . ${viewStr} views . ${monthsDisplay}</p>
</div>
</div>`;  
document.querySelector(".container").innerHTML += html;
};
createcard("Redux Tutorial - Learn Redux from Scratch", "Programming with Mosh", "1200000", "1:34:52", "60", "https://img.youtube.com/vi/poQXNp9ItL4/maxresdefault.jpg");
createcard("React Tutorial for Beginners", "Programming with Mosh", "5600000", "1:20:03", "24", "https://img.youtube.com/vi/SqcY0GlETPk/maxresdefault.jpg");
createcard("Top 5 Programming Languages to Learn in 2026 (to Actually Get Hired)", "Programming with Mosh", "232000", "11:30", "2", "https://img.youtube.com/vi/naNcmnKskUE/maxresdefault.jpg");
