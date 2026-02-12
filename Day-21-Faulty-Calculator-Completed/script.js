let random= Math.random();
console.log(random);
let a =prompt("Enter first number");
let b =prompt("Enter operation");
let c =prompt("Enter second number");
let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
};
if (random>0.1) {
    //perform correct calculation
    console.log(`The result is ${a} ${b} ${c}`);
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}
else {
    // Perform wrong calculation
    b = obj[b];
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
};
