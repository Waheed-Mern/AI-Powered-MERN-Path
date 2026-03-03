// Function to print name after a 2-second delay
function Name() {
  setTimeout(() => {
    let prob1 = document.getElementById("one")
    prob1.innerHTML = "Waheed";
  }, 1000);
}
Name();
// Function to simulate fetching data with a callback
function processData(value) {
  let prob2 = document.getElementById("two")
  prob2.innerHTML = "Processing:" + value;
}
function getData(callback) {
  console.log("Fetching data please wait 3 seconds");
  setTimeout(() => {
    let data = "Softwear Enginer"; 
    callback(data);  
  }, 2000);
}
getData(processData);
// Create a new Promise to handle the pizza delivery process
let prom =new Promise((resolve, reject)=>{
  let isShopOpen = true;
  setTimeout(() => {
    if (isShopOpen === true) {
      resolve("Pizza Delivered")
    }
    else{
      reject("Shop Closed")
    }
  }, 3000);
})
prom.then((resolve) => {
  console.log("Sucess : " + resolve);
  document.getElementById("three").innerHTML = resolve;
}).catch((reject) => {
  console.log("Error : " + reject);
  document.getElementById("three").innerHTML = reject;
});
// Nested setTimeouts add extra delay to the rejection path
let prom1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let a = Math.random();
    if (a < 0.5) {
      resolve("1");
    } else {
      setTimeout(() => reject("2"), 4000); 
    }
  }, 4000); 
});
let prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let a = Math.random();
    if (a < 0.5) {
      resolve("3");
    } else {
      setTimeout(() => reject("4"), 5000);
    }
  }, 5000);
});
  let p3 = Promise.race([prom1, prom2])
  p3.then((resolve)=>{
    console.log("Sucess : " + resolve);
    document.getElementById("four").innerHTML = resolve;
  })
  .catch((reject)=>{
    console.log("Error : " + reject);
    document.getElementById("four").innerHTML = reject;
  })
// Function to simulate a secure login process
  let password = new Promise((resolve, reject)=>{
    setTimeout(() => {
      let password = 12345
      if (password === 12345) {
        resolve("LogIn Sucessfull")
      }
      else{
        reject("Failed LogIn")
      }
    }, 6000);
  })
  password.then((resolve)=>{
    console.log("LogIn : " + resolve);
    document.getElementById("five").innerHTML = resolve;
  })
  .catch((reject)=>{
    console.log("Failed : " + reject);
    document.getElementById("five").innerHTML = reject
  })
// Creating three separate promises with different resolution times
  let pizza =new Promise((resolve, reject)=>{
  let shopOpen = true;
  setTimeout(() => {
    if (shopOpen === true) {
      resolve("Pizza Delivered")
    }
    else{
      reject("Shop Closed")
    }
  }, 7000);
})
  let burger =new Promise((resolve, reject)=>{
  let shopOpen = true;
  setTimeout(() => {
    if (shopOpen === true) {
      resolve("Burger Delivered")
    }
    else{
      reject("Shop Closed")
    }
  }, 8000);
})
  let coke =new Promise((resolve, reject)=>{
  let shopOpen = true;
  setTimeout(() => {
    if (shopOpen === true) {
      resolve("Coke Delivered")
    }
    else{
      reject("Shop Closed")
    }
  }, 9000);
})
let order = Promise.all([pizza, burger, coke])
order.then((resolve)=>{
  console.log("Sucessful : " + resolve);
  document.getElementById("six").innerHTML = resolve;
})
.catch((reject)=>{
  console.log("Error : " + reject);
  document.getElementById("six").innerHTML = reject;
})
// Passing error as the first argument in the callback
function checkAge(age, callback) {
    setTimeout(() => {
        if (age < 18) {
            callback("Error: You are too young! 🔞", null);
        } else {
            callback(null, "Welcome to the Club! 🎟️✅");
        }
    }, 10000);
}
checkAge(15, (err, data) => {
    let output = document.getElementById("seven");
    if (err) {
        output.style.color = "red";
        output.innerHTML = err;
        console.log("Logged Error: " + err);
    } else {
        output.style.color = "green";
        output.innerHTML = data;
        console.log("Logged Data: " + data);
    }
});
// Simulating two API calls with different response times
document.getElementById("eight").innerHTML = "Racing servers... 🏎️💨";
const api1 = new Promise((resolve) => 
    setTimeout(() => resolve("Server A (Fast) 🏆"), 11000)
);
const api2 = new Promise((resolve) => 
    setTimeout(() => resolve("Server B (Slow) 🐢"), 12000)
);
Promise.race([api1, api2])
    .then((winner) => {
        console.log("Winner is: " + winner);
        document.getElementById("seven").innerHTML = "Result: " + winner;
    })
    .catch((error) => {
        document.getElementById("seven").innerHTML = "Race Failed: " + error;
    });
// Checking the current day using the Date object
let checkSunday = new Promise((resolve, reject) => {
    let today = new Date().getDay();
    if (today !== 0) {
        resolve("Working Day! Let's code. 💻");
    } else {
        reject("It's Sunday! Go rest. 😴");
    }
});
checkSunday
    .then((res) => {
        console.log("Success: " + res);
        document.getElementById("nine").innerHTML = res;
    })
    .catch((err) => {
        console.log("Error: " + err);
        document.getElementById("nine").innerHTML = err;
        document.getElementById("nine").style.color = "red";
    });
// Returning a value from the first .then() to pass it to the next
let promiseChain = new Promise((resolve) => {
    resolve(10); 
});
promiseChain
    .then((num) => {
        console.log("Step 1 (Received): " + num);
        return num + 10; 
    })
    .then((finalResult) => {
        console.log("Step 2 (Final): " + finalResult);
        let display = document.getElementById("ten");
        if (display) {
            display.innerHTML = "Final Calculated Result: **" + finalResult + "**";
            display.style.fontWeight = "bold";
            display.style.color = "#2ecc71";
        }
    })
    .catch((error) => {
        console.error("Chain broken:", error);
    });