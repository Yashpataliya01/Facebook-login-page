let loginvalidation = () => {
  let emailogin = document.querySelector(".email1").value.trim();
  let pass = document.querySelector(".pass").value.trim();
  
  if (!validateEmail(emailogin)) {
    alert("Please enter a valid email address");
    return false;
  }

  if (pass === "") {
    alert("Password field can't be empty for login");
    return false;
  } else if (pass.length < 6) {
    alert("Password must be at least 6 characters long");
    return false;
  }

  return true;
};

let login = document.querySelector(".btn");

login.addEventListener("click", () => {
  if (loginvalidation()) {
    alert("Login successfully");
  }
});

function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}


let signvalidation = () => {
  const name = document.getElementById("firstName").value.trim();
  const surname = document.getElementById("lastname").value.trim();
  const email = document.getElementById("email").value.trim();
  const reenterEmail = document.getElementById("reenter").value.trim();
  const password = document.querySelector(".newpass").value.trim();
  const gender = document.querySelector('input[name="gen"]:checked');

  if (name === "" || surname === "") {
    alert("Both name and last name fields can't be empty");
    return false;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  if (email !== reenterEmail) {
    alert("The re-entered email does not match with the original email");
    return false;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long");
    return false;
  }

  if (!gender) {
    alert("Please select your gender");
    return false;
  }

  if (!document.querySelector('.terms input[type="checkbox"]').checked) {
    alert("Please agree to the terms and conditions");
    return false;
  }

  return true;
};

let signup = document.querySelector("#signup");

signup.addEventListener("click", () => {
  if (signvalidation()) {
    alert("Form submitted successfully!");
    // Clear form fields after successful submission
    document.getElementById("firstName").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("reenter").value = "";
    document.querySelector(".newpass").value = "";
    // Clear radio button selection
    const genderOptions = document.querySelectorAll('input[name="gen"]');
    genderOptions.forEach(option => {
      option.checked = false;
    });
  }
});

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
