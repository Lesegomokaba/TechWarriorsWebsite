function showMessage(event) {
    event.preventDefault();

    let msg = document.getElementById("submit-message");
    msg.innerText = "Submitted successfully! We will contact you soon.";

    msg.style.color = "green";
    msg.style.opacity = "0";

    setTimeout(() => {
        msg.style.opacity = "1";
    }, 100);
}