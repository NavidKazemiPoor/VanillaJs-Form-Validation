let input_container = document.querySelectorAll(".input-container");
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let confirmPass = document.getElementById("confirmpass");
let userName = document.getElementById("username");

const handleSubmit = (e) => {
  e.preventDefault();
  checkInputLength(email, "ایمیل نمیتواند خالی باشد");
  checkInputLength(userName, "نام کاربری نمیتواند خالی باشد");
  checkPass(pass, confirmPass, "پسورد با تایید آن یکسان نیست");
  checkEmail(email, "ایمیل معتبر وارد کنید");
};

// checking Function
const checkInputLength = (input, message) => {
  if (input.value.length == 0) {
    isNotOk(input,message);
  
  } else {
    isOk(input,message);
  }
};
const checkPass = (pass, pass1, message) => {
  if (pass.value == pass1.value && pass.value) {
    isOk(pass,message);
    isOk(pass1,message);
   
  } else {
    isNotOk(pass,message);
    isNotOk(pass1,message);
  }
};
const checkEmail = (input, message) => {
  if (!validateEmail(input.value)) {
    isNotOk(input,message);
  } else {
   isOk(input,message);
  }
};

// style func 
const isNotOk = (input,message) =>{
    input.style.border = "1px solid  rgba(224, 46, 46, 0.781)";
    input.nextElementSibling.innerHTML = message;
}
const isOk = (input,message) =>{
    input.style.border = "1px solid #159300";
    input.nextElementSibling.innerHTML = "";
}
// Event Listener
userName.addEventListener("input", () =>
  checkInputLength(userName, "نام کاربری نباید خالی باشد")
);
pass.addEventListener("input", () =>
  checkInputLength(pass, " پسورد نباید خالی باشد")
);
confirmPass.addEventListener("input", () =>
  checkInputLength(confirmPass, "تایید پسورد نباید خالی باشد")
);
pass.addEventListener("input", () =>
  checkPass(pass, confirmPass, "پسورد با تایید آن یکسان نیست")
);
confirmPass.addEventListener("input", () =>
  checkPass(pass, confirmPass, "پسورد با تایید آن یکسان نیست")
);
email.addEventListener("input", () =>
  checkEmail(email, "ایمیل معتبر وارد کنید")
);
let form = document
  .querySelector("form")
  .addEventListener("submit", handleSubmit);

// regex email
const validateEmail = (em) => {
  
  const re =
    /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i;
  return em.match(re);
};
