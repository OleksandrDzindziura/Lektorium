'use strict'

const PASSWORD_REQUIRED = "Please enter your Pass";
const PASSWORD_INVALID = "Please Enter Valid Pass";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter valid email";


const form = document.querySelector("#signin");

const showMessage = (el, message, type) => {
	el.innerHTML = message;
	el.style.color = type ? "#00ff00" : "#ff0000";
	return type;
}

const showError = (el, message) => {
	return showMessage(el, message, false);
}

const showSuccess = el => {
	return showMessage(el, "", true);
}

const hasValue = (input, message, wrap) => {
	if (input.trim() === "") {
		return showError(wrap, message);
	}
	return showSuccess(wrap);		
}	

form.addEventListener("submit", function (event) {
	event.preventDefault();

	let passValid = validationPass(form.elements["password"], PASSWORD_REQUIRED, PASSWORD_INVALID);
	let emailValid = validationEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);

	if (passValid && emailValid) {
		alert("Submit Form");
	}
});

const validationEmail = (el, requiredMsg, invalidMsg) => {
    const form = document.getElementById("form");
    const email = document.getElementById("email").value;
    const text = document.getElementById("text");
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!hasValue(email, requiredMsg, text)) {
    	form.classList.remove("valid");
        form.classList.add("invalid");
		return false;
	}

	if (!email.match(pattern)) {
		form.classList.remove("valid");
        form.classList.add("invalid");
		return showError(text, invalidMsg);
	}	
 	form.classList.remove("valid");
 	form.classList.remove("invalid");

	return true;
}

const validationPass = (el, requiredMsg, invalidMsg) => {
    const passForm = document.getElementById("passForm")
    const password = document.getElementById("password").value;
    const textPass = document.getElementById("textPass")
    const pattern = /^.{6,}$/;

    if (!hasValue(password, requiredMsg, textPass)) {
    	passForm.classList.remove("valid");
        passForm.classList.add("invalid");
		return false;
	}

	if (!password.match(pattern)) {
		passForm.classList.remove("valid");
        passForm.classList.add("invalid");
		return showError(textPass, invalidMsg);
	}
 	passForm.classList.remove("valid");
 	passForm.classList.remove("invalid");

	return true;
}
