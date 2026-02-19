let a = 6;
function factorial(numbers) {
    let factorial = 1;
    for (let index = 1; index <=numbers; index++) {
        factorial = factorial*index;
        
    }
    return factorial
};
function reduce(numbers) {
    let arr = Array.from(Array(numbers+1).keys())
let c = arr.slice(1,).reduce((a, b)=>a*b)
    return c
};
console.log(factorial(a));
console.log(reduce(a));