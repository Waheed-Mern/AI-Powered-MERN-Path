document.querySelector('.btn').onclick = function() {
    let confirmation = confirm("Are you sure you want to open the vault?");

    if (confirmation) {
        let secretKey = prompt("Enter the Secret Key:");
        if (secretKey === "Waheed123") {
            alert("Access Granted");
            document.body.style.backgroundColor = "green";
        } else {
            alert("Intruder Alert!");
            document.body.style.backgroundColor = "red";
        }
    } else {
        alert("Operation Cancelled.");
    }
};