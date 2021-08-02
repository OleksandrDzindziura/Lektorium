function validationEmail() {
    var form = document.getElementById("form")
    var email = document.getElementById("email").value;
    var text = document.getElementById("text")
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.match(pattern)) {
        form.classList.add("valid")
        form.classList.remove("invalid")
        text.innerHTML = "You Email Address in Valid"
        text.style.color = "#00ff00"
    }

    else {

        form.classList.remove("valid")
        form.classList.add("valid")
        text.innerHTML = "Please Enter Valid Email"
        text.style.color = "#ff0000"
    }

    if( email == "" ) {
        form.classList.remove("valid")
        form.classList.remove("invalid")
        text.innerHTML = ""
        text.style.color = "#ff0000"
    }
}

function validationPass() {
    var passForm = document.getElementById("passForm")
    var password = document.getElementById("password").value;
    var textPass = document.getElementById("textPass")
    var pattern = /^.{6,}$/;

    if(password.match(pattern)) {
        passForm.classList.add("valid")
        passForm.classList.remove("invalid")
        textPass.innerHTML = "You Email Password in Valid"
        textPass.style.color = "#00ff00"
    }

    else {

        passForm.classList.remove("valid")
        passForm.classList.add("valid")
        textPass.innerHTML = "Please Enter Valid Pass"
        textPass.style.color = "#ff0000"
    }

    if( password == "" ) {
        passForm.classList.remove("valid")
        passForm.classList.remove("invalid")
        textPass.innerHTML = ""
        textPass.style.color = "#ff0000"
    }
}
