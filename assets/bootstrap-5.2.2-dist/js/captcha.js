// const captchaTextBox = document.querySelector(".captcha-box input");
// const refreshButton = document.querySelector(".refresh-button");
// const captchaInputBox = document.querySelector(".captcha-input input");
// const message = document.querySelector(".message");
// const submitButton = document.querySelector(".submit");
// let captchaText = null;

// const generatorCaptcha = () => {
//   const randomString = Math.random().toString(26).substring(2, 7);
//   const randomStringArray = randomString.split("");
//   const changeString = randomStringArray.map(
//     (char) => (Math.random(), 0.5 ? char.toUpperCase() : char)
//   );
//   captchaText = changeString.join("");
//   captchaTextBox.value = captchaText;
//   console.log(captchaText);
// };

// const refreshButtonClick = () => {
//   generatorCaptcha();
//   captchaInputBox.value = "";
// };

// const captchaValidate = () => {
//   submitButton.classList.toggle("disabled", !captchaInputBox.value);
//   if (!captchaInputBox.value) message.classList.remove("active");
// };

// const submitButtonClick = () => {
//   captchaText = captchaText
//     .split("")
//     .filter((char) => char !== "")
//     .join("");
//   message.classList.add("active");

//   if (captchaInputBox.value == captchaText) {
//     message.innerText = "Captcha yang dimasukan dengan benar";
//     message.style.color = "#826AFB";
//   } else {
//     message.innerText = "Masukan captcha dengan benar";
//     message.style.color = "#FF2525";
//   }
// };

// refreshButton.addEventListener("click", refreshButtonClick);
// captchaInputBox.addEventListener("keyup", captchaValidate);
// submitButton.addEventListener("click", submitButtonClick);
// generatorCaptcha();

// Generate a random CAPTCHA string
function generateCaptcha() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  document.getElementById("captcha-display").innerText = captcha;
}

// Validate the entered CAPTCHA
function validateCaptcha() {
  const generatedCaptcha = document.getElementById("captcha-display").innerText;
  const userCaptcha = document.getElementById("captcha-input").value;
  const resultMessage = document.getElementById("result-message");

  if (userCaptcha === generatedCaptcha) {
    resultMessage.innerText = "CAPTCHA verified successfully!";
    resultMessage.style.color = "green";
  } else {
    resultMessage.innerText = "Incorrect CAPTCHA. Please try again.";
    resultMessage.style.color = "red";
  }
}

// Generate a CAPTCHA when the page loads
window.onload = generateCaptcha;
