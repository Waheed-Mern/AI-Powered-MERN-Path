const randomDelay = () => {
  time =(Math.random() * 6000)+1000;
  return new Promise(resolve => setTimeout(resolve, time));
};
async function main() {
    const messages = [
        "Initializing Hacking",
        "Reading your Files",
        "Password files Detected",
        "Sending all passwords and personal files to server",
        "Cleaning up"
    ];
    const terminal = document.getElementById("terminal");
    for (const msg of messages) {
        await randomDelay();
        let div = document.createElement("div")
        div.innerHTML =`${msg}<span class='blink'>...</span>`
        terminal.appendChild(div);
    }
};
main();