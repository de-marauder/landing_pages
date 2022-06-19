const overlaySignInBtn = document.getElementById("sign-in-btn");
const overlaySignUpBtn = document.getElementById("sign-up-btn");

const formContainer = document.getElementById("form-container");
const overlayContainer = document.getElementById("overlay-container");

overlaySignInBtn.addEventListener("click", () => {
  formContainer.classList.remove("active-form");

  overlayContainer.classList.remove("overlay-active");
});

overlaySignUpBtn.addEventListener("click", () => {
  formContainer.classList.add("active-form");

  overlayContainer.classList.add("overlay-active");
});
