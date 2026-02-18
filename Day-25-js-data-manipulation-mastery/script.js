let array = [1, 2, 3, 4, 5, 6]
console.log(array);
console.log(array, typeof array);
console.log(array.length);
array[0] = 223;
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array.toString());
console.log(array.join(" and "));
let numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.splice(1, 2));
console.log(numbers);
console.log(numbers.splice(1, 3));
console.log(numbers);
console.log(numbers.splice(1, 3, 222, 444));
console.log(numbers);
let a = [1, 93, 5, 6, 88];
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
};
a.forEach((value, index, array)=>{
    console.log(index, value, array);
    
});
let obj = {
    a : 1,
    b : 2,
    c : 3
};
for (const key in obj) {
    if (!Object.hasOwn(obj, key)) conte;
    
    const element = obj[key];
    console.log(key, element);
};
for (const value of Object.values(obj)) {
    console.log(value);
}
for (const [key, value] of Object.entries(obj)) {
    console.log(key, value);
}
let arr = [1, 13, 5 ,7, 11];
let newArr = arr.map((e, index, array)=>{
   return e**2
});
console.log(newArr);
const greaterThanseven = (e)=>{
    if (e>7) {
        return true
    }
    else{
        return false
    }
};
console.log(arr.filter(greaterThanseven));
let arr2 = [1,2,3,4,5,6];
const red = (d, f)=>{
    return d+f
}
console.log(arr2.reduce(red));