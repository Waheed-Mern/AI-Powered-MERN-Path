const sleep = async() =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(45)
    }, 1000);
  })
}
const sum = async(g, h,j) =>{
  return g+h+j;
}
var a1 = 6;
(async function main() {
  let a = await sleep();
  console.log(a);
let b = await sleep();
console.log(b);
let [x, y, ...rest] = [1,2,3,4,5,6]
console.log(x,y,rest);
let obj = {
  c: 1,
  d: 2,
  f: 3
}
let {c, d} =obj
console.log(c, d);
let arr = [1,4,6]
console.log(await sum(arr[0],arr[1],arr[2]));
console.log(await sum(...arr));
})();
console.log(a1);

