const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
async function safeFetch(url) {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Network issue");
        return await res.json();
    } catch (err) {
        throw new Error("Please check Your Internet");
    }
};
async function getUserData() {
    const user = await safeFetch("https://jsonplaceholder.typicode.com/users/1");
    const posts = await safeFetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
    document.getElementById("two").innerHTML = "Prob 2 (Posts): " + posts.slice(0, 3).map(p => `<li>${p.title}</li>`).join("");
};
async function startRace() {
    const timerPromise = delay(2000).then(() => "Timer Won!");
    const apiPromise = fetch("https://jsonplaceholder.typicode.com/users/1").then(() => "API Won!");
    const winner = await Promise.race([timerPromise, apiPromise]);
    document.getElementById("three").innerHTML = "Prob 3 (Race Winner): " + winner;
};
async function sourceData() {
    const [u, p, c] = await Promise.all([
        safeFetch("https://jsonplaceholder.typicode.com/users/1"),
        safeFetch("https://jsonplaceholder.typicode.com/posts?userId=1"),
        safeFetch("https://jsonplaceholder.typicode.com/comments?postId=1")
    ]);
    document.getElementById("four").innerHTML = `Prob 5: Loaded User: ${u.name}, Posts: ${p.length}, Comments: ${c.length}`;
};
function step1(callback) {
    setTimeout(() => callback("This is Programming (Step 1 Complete)"), 1000);
};
const step1Async = () => new Promise(resolve => step1(data => resolve(data)));
async function conditionalPost() {
    const data = await safeFetch('https://jsonplaceholder.typicode.com/posts?id=101');
    const display = document.getElementById("six");
    if (data.length === 0) {
        display.innerHTML = "Prob 7: Data nahi tha, POST bhej diya!";
    } else {
        display.innerHTML = "Prob 7: Data pehle se mojud hai.";
    }
};
async function slowWaiter() {
    const urls = ['https://jsonplaceholder.typicode.com/todos/1', 'https://jsonplaceholder.typicode.com/todos/2'];
    for (const url of urls) {
        const res = await safeFetch(url);
        console.log("Slow Waiter ID fetched:", res.id);
    }
    document.getElementById("seven").innerHTML = "Prob 8: All sequential fetches done (Check console).";
};
const checkPassword = (pass) => new Promise((res, rej) => {
    setTimeout(() => pass === "12345" ? res("Access Granted") : rej("Wrong"), 1000);
});
async function smartLogin() {
    try {
        const status = await checkPassword("12345");
        const secret = await safeFetch('https://jsonplaceholder.typicode.com/users/1');
        document.getElementById("eight").innerHTML = `Prob 9: ${status}. Secret User: ${secret.name}`;
    } catch (e) { 
        document.getElementById("eight").innerHTML = "Prob 9: Login Failed";
    }
};
const btn = document.getElementById("nine_btn");
if(btn) {
    btn.addEventListener("click", async () => {
        const list = document.getElementById("list");
        list.innerHTML = "<li>Loading...</li>";
        try {
            const posts = await safeFetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
            list.innerHTML = posts.map(p => `<li>${p.title}</li>`).join('');
        } catch (e) { list.innerHTML = `<li>${e.message}</li>`; }
    });
};
async function main() {
    try {
        console.log("--- Starting 10 Problems Sequence ---");
        await delay(2000);
        document.getElementById("one").innerHTML = "Waheed";
        await getUserData();
        await startRace();
        await sourceData();
        document.getElementById("five").innerHTML = "Prob 6: " + await step1Async();
        await conditionalPost();
        await slowWaiter();
        await smartLogin();
        console.log("--- All Tasks Completed ---");
    } catch (error) {
        console.error(Error("Please check Your Internet"));
    }
};
main();