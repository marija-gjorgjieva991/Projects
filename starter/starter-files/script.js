var nameError = document.getElementById("name-error");
var surnameError = document.getElementById("surname-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
  var name = document.getElementById("txtName").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (name.length < 4) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = "Looks good";
  return true;
}

function validateSurname() {
  var surname = document.getElementById("surname").value;

  if (surname.length == 0) {
    surnameError.innerHTML = "Surname is required";
    return false;
  }
  if (surname.length < 5) {
    surnameError.innerHTML = "Write full surname";
    return false;
  }
  surnameError.innerHTML = "Looks good";
  return true;
}

function validatePhone() {
  var phone = document.getElementById("phone").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "Phone number is required";
    return false;
  }

  if (phone.length !== 9) {
    phoneError.innerHTML = "Should be 9 digits";
    return false;
  }

  if (phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Only digits please";
    return false;
  }

  phoneError.innerHTML = "Looks good";
  return true;
}

function validateEmail() {
  var email = document.getElementById("email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }

  if (!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Email invalid";
    return false;
  }

  emailError.innerHTML = "Looks good";
  return true;
}

function validateMessage() {
  var message = document.getElementById("message").value;
  var required = 30;
  var left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + "characters yet";
    return false;
  }

  messageError.innerHTML = "Looks good";
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validateSurname ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "PLEASE FIX ERROR TO SUBMIT";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
