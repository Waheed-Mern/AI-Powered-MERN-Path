console.log("Hey I am a Waheed");
let a = 1;
console.log(a);
console.log(a + 1);
console.log(a + 2);
console.log(a + 3);
let b = 1;
/*for (let index = 0; index < array.length; index++) {
    const element = array[index];  
}*/
for (let i = 0; i < 10; i++) {
  console.log(b + i);
}
let obj = {
  Name: "Waheed",
  Role: "Programer",
  Company: "self",
};
/*for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];
    
    
}*/
for (const key in obj) {
    const element = obj[key];
  console.log(key);
  
}
for (const key in obj) {
    const element = obj[key];
    console.log(key, element);
}
/*for (const element of object) {
    
}*/
for (const c of "Waheed") {
    console.log(c); 
}
let d = 0;
/*while (condition) {
    
}*/
while (d<6) {
    console.log(d);
    d++;
}
let f = 10;
do {
    console.log(f);
    f++;
    
} while (f<5);
function Hi(Name) {
    console.log("Hey " + Name + " You are Nice");
    console.log("Hey " + Name + " You are code is good");
    console.log("Hey " + Name + " You are Beautiful");
    console.log("Hey " + Name + " You are good too");   
}
Hi("Waheed");
Hi("Waseem");
function sum1(a, b) {
    console.log(a+b);  
}
sum1(5, 6);
function sum(d, e, f=5){
    return d + e + f;
}
result1 = sum(4, 5);
result2 = sum(41, 50);
result3 = sum(14, 15);
result4 = sum(24, 55, 1);
console.log("The sum of these Numbers is: ",result1);
console.log("The sum of these Numbers is: ",result2);
console.log("The sum of these Numbers is: ",result3);
console.log("The sum of these Numbers is: ",result4);
function sum2(d, e, f=5){
    return d + e + f;
}
result1 = sum2(4);
result2 = sum2(41, 50);
result3 = sum2(14, 15);
result4 = sum2(24, 55, 1);
console.log("The sum of these Numbers is: ",result1);
console.log("The sum of these Numbers is: ",result2);
console.log("The sum of these Numbers is: ",result3);
console.log("The sum of these Numbers is: ",result4);
function sum3(d, e, f=5){
    console.log(d, e, f);
    
    return d + e + f;
}
result1 = sum3(4);
result2 = sum3(41, 50);
result3 = sum3(14, 15);
result4 = sum3(24, 55, 1);
console.log("The sum of these Numbers is: ",result1);
console.log("The sum of these Numbers is: ",result2);
console.log("The sum of these Numbers is: ",result3);
console.log("The sum of these Numbers is: ",result4);
const func1 = (x)=>{
    console.log("I am a arrow function", x);
}
func1(34);
func1(66);
func1(84);