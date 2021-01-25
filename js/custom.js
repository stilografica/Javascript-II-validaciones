/*Start custom Javascript*/
//Alert interaction
$(document).ready(function(){
    $(".closes").click(function(){
      $("#myAlert").alert("close");
    });
  });
//Modal Login
$(document).ready(function(){
    $("#myLogin").click(function(){
      $("#myModal").modal();
    });
  });
//Collapse in modal
  $(document).ready(function(){
    $("#login").click(function(){
      $(".collapse1").collapse('show');
      $(".collapse2").collapse('hide');
    });
    $("#registre").click(function(){
      $(".collapse2").collapse('show');
      $(".collapse1").collapse('hide');
    });
  });
//Dynamic Tabs inside Modal
$(document).ready(function(){
    $(".nav-tabs a").click(function(){
      $(this).tab('show');
    });
  });
//Popover "Regala una experiencia"
$(function () {
    $('[data-toggle="popover"]').popover()
})

//Tooltip product buttons
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

//Toast element in modal button "¿Eres nuevo?"
$(document).ready(function(){
    $("#myBtn").click(function(){
      $('.toast').toast('show');
    });
  });  

//NIVELL 1
//LOGIN VALIDATION
//Selecting the form
let loginForm = document.getElementById('loginForm');

//Selecting the email input
let inputEmail = document.forms["myLoginForm"]["emailLogin"];
//Selecting the password input 
let inputPassword = document.forms["myLoginForm"]["passwordLogin"];

//Selecting all event listeners
inputEmail.addEventListener("change", emailVerify);
inputPassword.addEventListener("change", passVerify);

//Expression that validates email
let regularExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//Nivell2: Expression that validates:password must contain min 1 number (0-9), min 1 uppercase letters, min 8 characters with no space
let passRegex = /^(?=.*\d)(?=.*[A-Z])(?!.*\s).{8,}$/;

//Validation after clicking on submit
function loginValidate() {
  //If form has class is-invalid, remove it
  loginForm.classList.remove('is-invalid');
  let validator = true;
  //Email
  if (inputEmail.value == "") {//Empty values ​​are not accepted
    inputEmail.classList.add("is-invalid");
    document.getElementById("errorEmail").textContent = "Campo obligatorio";
    validator = false;
  } else if (!regularExp.test(inputEmail.value)){ //Test user email with the regex
    //If you don't pass the test, add class is-invalid
		inputEmail.classList.add("is-invalid");
    //Error message
		document.getElementById("errorEmail").textContent = "Formato incorrecto";
		validator = false;
	} 
  //Password
  if (inputPassword.value == "") {//Empty values ​​are not accepted
    //If empty values add class is-invalid
		inputPassword.classList.add("is-invalid");
    //Error message
		document.getElementById("errorPassword").textContent = "Campo obligatorio";
		validator = false;
	} else if (!passRegex.test(inputPassword.value)) { //Test user password with the regex (NIVELL2)
    //If you don't pass the test, add class is-invalid
    inputPassword.classList.add("is-invalid");
    //Error message
		document.getElementById("errorPassword").textContent = "Mín 8 carácteres | mín 1 mayús. | mín 1 núm.";
    validator = false;
  }
  return validator;
}

//Event handler functions for better user experience

function emailVerify() {
  let handlerValidator = false;
  //Test input Email with regular expression
  if (regularExp.test(inputEmail.value)){
    inputEmail.classList.add("is-valid");
    //If input email has class is-invalid, remove it
    inputEmail.classList.remove("is-invalid");
    document.getElementById("errorEmail").textContent ="";
    handlerValidator = true;
    } else {
      inputEmail.classList.add("is-invalid");
		   document.getElementById("errorEmail").textContent = "Formato incorrecto";
  }
}

function passVerify() {
  let handlerValidator = false;
  //Test input Email with regular expression
  if (passRegex.test(inputPassword.value)) {
    inputPassword.classList.add("is-valid");
    //If input email has class is-invalid, remove it
    inputPassword.classList.remove("is-invalid");
    document.getElementById("errorPassword").textContent ="";
    handlerValidator = true;
  } else {
    inputPassword.classList.add("is-invalid");
    document.getElementById("errorPassword").textContent = "Mín. 8 caract. | mín 1 mayús. | mín 1 núm."; 
  }
  return handlerValidator;
}
/*/END LOGIN VALIDATION*/

//REGISTER VALIDATION
//Selecting the form
let registreForm = document.getElementById('registreForm');

//Selecting the email input
let emailRegistre = document.forms["myRegistreForm"]["emailRegistre"];
//Selecting the password input in a variable
let passwordRegistre = document.forms["myRegistreForm"]["passwordRegistre"];
//Selecting the repeat password input
let passwordRepeat = document.forms["myRegistreForm"]["passwordRepeat"];
//Selecting the provincia options
let provincia = document.forms["myRegistreForm"]["inputProvince"];


//Selecting all event listeners
emailRegistre.addEventListener("change", emailRegistreVerify);
passwordRegistre.addEventListener("change", passRegistreVerify);
passwordRepeat.addEventListener("change", passRepeatVerify);
provincia.addEventListener("change", provinciaVerify);

//Regular Expressions declared at Login validation

//Validation after clicking on submit
function registreValidate() {
  //If form has class is-invalid, remove it
  registreForm.classList.remove('is-invalid');
  let validator = true;
  //Email
  if (emailRegistre.value == "") {//Empty values ​​are not accepted
    emailRegistre.classList.add("is-invalid");
    document.getElementById("erroremailRegistre").textContent = "Campo obligatorio";
    validator = false;
  } else if (!regularExp.test(emailRegistre.value)){ //Test user email with the regex
		emailRegistre.classList.add("is-invalid");
		document.getElementById("erroremailRegistre").textContent = "Formato incorrecto";
		validator = false;
	} 
  //Password
  if (passwordRegistre.value == "") {//Empty values ​​are not accepted
		passwordRegistre.classList.add("is-invalid");
		document.getElementById("errorpasswordRegistre").textContent = "Campo obligatorio";
		validator = false;
	} else if (!passRegex.test(passwordRegistre.value)) { //Test user password with the regex (NIVELL2)
    passwordRegistre.classList.add("is-invalid");
		document.getElementById("errorpasswordRegistre").textContent = "Mín 8 carácteres | mín 1 mayús. | mín 1 núm.";
    validator = false;
  }
  //Repeat password
  if ((passwordRegistre.value)!=(passwordRepeat.value) || passwordRepeat.value == "" ) {
    passwordRepeat.classList.add("is-invalid");
		document.getElementById("errorpasswordRepeat").textContent = "Campo obligatorio - No coincide";
		validator = false;

  }
  //Province options
  if (provincia.value == "") {//Empty value ​​are not accepted
		provincia.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "Selecciona una opción";
		validator = false;
  } 
  return validator;
}

//Event handler functions for better user experience

function emailRegistreVerify() {
  let handlerValidator = false;
  //Test input Email with regular expression
  if (regularExp.test(emailRegistre.value)){
    emailRegistre.classList.add("is-valid");
    emailRegistre.classList.remove("is-invalid");
    document.getElementById("erroremailRegistre").textContent ="";
    handlerValidator = true;
    } else {
      emailRegistre.classList.add("is-invalid");
		  document.getElementById("erroremailRegistre").textContent = "Formato incorrecto";
  }
}

function passRegistreVerify() {
  let handlerValidator = false;
  //Test input Email with regular expression
  if (passRegex.test(passwordRegistre.value)) {
    passwordRegistre.classList.add("is-valid");
    passwordRegistre.classList.remove("is-invalid");
    document.getElementById("errorpasswordRegistre").textContent ="";
    handlerValidator = true;
  } else {
    passwordRegistre.classList.add("is-invalid");
    document.getElementById("errorpasswordRegistre").textContent = "Mín. 8 caract. | mín 1 mayús. | mín 1 núm."; 
  }
  return handlerValidator;
}

function passRepeatVerify() {
  let handlerValidator = false;
  //Compare first password with repeat password
  if ((passwordRegistre.value)==(passwordRepeat.value)) {
    passwordRepeat.classList.add("is-valid");
    passwordRepeat.classList.remove("is-invalid");
    document.getElementById("errorpasswordRepeat").textContent ="";
    handlerValidator = true;
  } else {
    passwordRepeat.classList.add("is-invalid");
    document.getElementById("errorpasswordRepeat").textContent = "Campo obligatorio - No coincide"; 
  }
  return handlerValidator;
}

function provinciaVerify (){
  let handlerValidator = false;
   if (!provincia.value == "") {//Empty value ​​are not accepted
   //If Valid value, add is-valid class 
	  provincia.classList.add("is-valid");
    //If it has invalid class, remove 
    provincia.classList.remove("is-invalid");
    document.getElementById("errorProvince").textContent ="";
    handlerValidator = true;
  } else {
    provincia.classList.add("is-invalid");
    document.getElementById("errorProvince").textContent = "Selecciona una opción"; 
  }
}
/*/END REGISTER VALIDATION*/

//SEARCH FORM NIVELL 1

//Selecting search input
let search = document.forms["mySearchForm"]["search"];

function searchValidate() {
  let validator = true;
  if (search.value == "") { //Empty values are not allowed
    search.classList.add("is-invalid");
    document.getElementById("errorSearch").textContent = "Campo obligatorio"; 
    validator = false;
  }

  if ((search.value.length >= 1) && (search.value.length <= 3)) { //1,2 or 3 caracters are not allowed
    search.classList.add("is-invalid");
    document.getElementById("errorSearch").textContent = "Más de 3 letras"; 
    validator = false;
  }
  return validator
}

/*/END SEARCH FORM NIVELL 1*/

/*/End custom Javascript*/
