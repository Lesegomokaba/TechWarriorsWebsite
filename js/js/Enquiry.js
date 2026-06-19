document.getElementById("enquiryForm").addEventListener("submit", function(event) {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    let errorMessage = "";

    // Required Fields
    if (name === "" || email === "" || phone === "" || message === "") {
        errorMessage += "All fields are required.\n";
    }

    // Email Format Validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage += "Please enter a valid email address.\n";
    }

    // Phone Number Validation (10 digits)
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        errorMessage += "Phone number must be 10 digits.\n";
    }

    // Minimum Character Length for Message
    if (message.length < 20) {
        errorMessage += "Message must be at least 20 characters long.\n";
    }

    if (errorMessage !== "") {
        event.preventDefault();
        alert(errorMessage);
    }
});
document.getElementById("enquiryForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    let errorMessage = "";

    // Required Fields
    if (name === "" || email === "" || phone === "" || message === "") {
        errorMessage += "All fields are required.\n";
    }

    // Email Validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage += "Please enter a valid email address.\n";
    }

    // Phone Validation
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        errorMessage += "Phone number must be 10 digits.\n";
    }

    // Message Length Validation
    if (message.length < 20) {
        errorMessage += "Message must be at least 20 characters long.\n";
    }

    if (errorMessage !== "") {
        alert(errorMessage);
    } else {
        document.getElementById("responseMessage").innerHTML =
            "Thank you, " + name +
            "! Your enquiry has been submitted successfully. Our team will contact you shortly.";

        document.getElementById("enquiryForm").reset();
    }
});