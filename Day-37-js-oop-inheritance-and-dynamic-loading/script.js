function first() {
  console.log("Function 'first' run!");
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
    script.onload = () => {
      console.log("First File is loaded!");
      resolve("Success");
    };
    script.onerror = () => {
      console.log("File failed to load!");
      reject("Error");
    };
    document.body.appendChild(script);
  })
  .then(() => alert("Success!"))
  .catch(() => alert("Failed!"));
}
console.log("Script are load!");
first();
const second=()=>{
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
    script.onload = () => {
      console.log("Second File is loaded!");
      resolve("Success");
    };
    script.onerror = () => {
      console.log("File failed to load!");
      reject("Error");
    };
    document.body.appendChild(script);
  });
};
async function main() {
  console.log("loading start");
  try {
    let result = await second();
    alert("File loaded successfully! Result: " + result);
  } catch (error) {
    alert("File failed to load");
  };
};
main();
const rejectedpromise=() =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Computer are crashed");
    }, 3000);
  });
};
async function handlePromise() {
 try {
  console.log("Wait");
  await rejectedpromise();
 } catch (error) {
  console.error("Critical Issue:", error);;
 };
};
handlePromise();
let p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Value 1");
  }, 1000);
});
let p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Value 2");
  }, 2000);
});
let p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Value 3");
  }, 3000);
});
async function handleAll() {
  try {
    console.time("Timer OneByOne");
    
    let res1 = await p1;
    let res2 = await p2;
    let res3 = await p3;
    console.log("Results One by One:", res1, res2, res3);
    console.timeEnd("Timer OneByOne");
    console.log("Loading all promises");
    let results = await Promise.all([p1,p2,p3])
    console.log("All Results are together: ", results);
  } catch (error) {
    console.error("Error")
  }
};
handleAll();
let pc = {
  ram: "8GB",
  isFast: true
};
let Laptop = {

}
Laptop.__proto__ = pc;
class Employee{
  constructor(name){
    this.name = name
  }
    work(){
      console.log("Work is started");
    }
}
class programer extends Employee {
  constructor(name) {
    super(name)
    this.language = "Javascript"
    }
    work(){
    super.work();
    console.log("coding is started");
    }
}
class Account {
  constructor(user) {
    this.user=user;
  }
  set pin(Value){
    if (Value.length<4) {
      console.log("Invalid Pin: Too short!");
      return;
    }
    this._pin = Value;
  }
  get pin(){
    return this._pin;;
  }
}
console.log("Laptop RAM from Prototype:", Laptop.ram);
let waheed = new programer("Waheed", "JavaScript");
waheed.work();
let myAcc = new Account("Waheed");
myAcc.pin = "123";
myAcc.pin = "12345";
console.log("Account PIN:", myAcc.pin);