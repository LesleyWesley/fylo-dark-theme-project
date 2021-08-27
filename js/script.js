//Selects submit button

const button = document.querySelector("button");

//Selects "Must be valid email" message

const validateMessage = document.querySelector(".validate-message");
console.log(validateMessage);
//Selects email input

const emailInput = document.querySelector("input");

//Email Specifications

const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//================================================

//Adds validation of email when button is clicked

button.addEventListener("click", function () {
  validateEmail();
})

//===============================================

//Adds validation of email when "enter" is hit

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    validateEmail();
  }
})



//==============================================

 //Validates email

 const validateEmail = function () {
   const email = emailInput.value;

   if (email.match(mailformat)) {
     clearInput();
     validateMessage.classList.add("hide");
   } else {
     validateMessage.classList.remove("hide");
   }
 }

//==============================================

//Clears Input

const clearInput = function () {
  emailInput.value = "";
}

//================================================
