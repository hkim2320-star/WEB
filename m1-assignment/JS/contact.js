let contactMethod = document.getElementById("contactMethod");
let emailBox = document.getElementById("emailBox");
let phoneBox = document.getElementById("phoneBox");


contactMethod.addEventListener("change", showContactInput);

showContactInput();

function showContactInput() {
    emailBox.style.display = "none";
    phoneBox.style.display = "none";

    if (contactMethod.value === "email") {
        emailBox.style.display = "block";
    } else if (contactMethod.value === "phone") {
        phoneBox.style.display = "block";
    }
}