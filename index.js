const form = document.getElementById("subcription--form");
const emailError = document.getElementById("email--error");
const emailInput = document.getElementById("email");
const dismissBtn = document.getElementById("dismiss--btn");
const successState = document.getElementById("success--state");
const container = document.getElementById("container");
const email = document.getElementById("success--email");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  if(!emailInput.checkValidity()) {
    event.preventDefault();
    emailInput.classList.add('error');
    emailError.style.visibility = "visible";
  }
  else {
    emailInput.classList.remove("error");
    emailError.style.visibility = "hidden";
    successState.style.display = "block";
    container.style.display = "none";
    email.textContent = emailInput.value;
    emailInput.value = "";
  }
});


dismissBtn.addEventListener("click", (event) => {
  event.preventDefault();

  successState.style.display = "none";
  container.style.display = "";
  email.textContent = "";
})