const form = document.getElementById("subcription--form");
const emailError = document.getElementById("email--error");
const emailInput = document.getElementById("email");


form.addEventListener("submit", (event) => {
  emailInput.classList.remove("error");
  emailError.style.visibility = "hidden";

  if(!emailInput.checkValidity()) {
    event.preventDefault();
    emailInput.classList.add('error');
    emailError.style.visibility = "visible";
  }
});