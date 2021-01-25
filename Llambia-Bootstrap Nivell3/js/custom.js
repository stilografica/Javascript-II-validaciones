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

//LOGIN VALIDATION WITH JQUERY VALIDATION
$( document ).ready( function () {
  $( "#loginForm" ).validate( {
          rules: {
            password: {
              required: true,
              minlength: 8
            },
            email: {
              required: true,
              email: true
            },
            agree: "Campo obligatorio"
          },
          messages: {
            password: {
              required: "Campo obligatorio",
              minlength: "Tu password debe tener mínimo 8 caracteres"
            },
            email: "Escribe una dirección de email válida",
            agree: "Please accept our policy"
          },
          errorElement: "em",
          errorPlacement: function ( error, element ) {
            // Add the `invalid-feedback` class to the error element
            error.addClass( "invalid-feedback" );

            if ( element.prop( "type" ) === "checkbox" ) {
              error.insertAfter( element.next( "label" ) );
            } else {
              error.insertAfter( element );
            }
          },
          highlight: function ( element, errorClass, validClass ) {
            $( element ).addClass( "is-invalid" ).removeClass( "is-valid" );
          },
          unhighlight: function (element, errorClass, validClass) {
            $( element ).addClass( "is-valid" ).removeClass( "is-invalid" );
          }
        });			
		} );


//REGISTER VALIDATION

//Expression that validates email
let regularExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//Expression that validates:password must contain min 1 number (0-9), min 1 uppercase letters, min 8 characters with no space
let passRegex = /^(?=.*\d)(?=.*[A-Z])(?!.*\s).{8,}$/;

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

//Regular Expressions declared at Nivell 1

//Validation after clicking on submit
function registreValidate() {
  registreForm.classList.remove('is-invalid');
  let validator = true;
  //Empty values ​​are not accepted
  if (emailRegistre.value == "") {
    emailRegistre.classList.add("is-invalid");
    document.getElementById("erroremailRegistre").textContent = "Campo obligatorio";
    validator = false;
  } else if (!regularExp.test(emailRegistre.value)){ //Test user email with the regex
		emailRegistre.classList.add("is-invalid");
		document.getElementById("erroremailRegistre").textContent = "Formato incorrecto";
		validator = false;
	} 
  //Empty values ​​are not accepted
  if (passwordRegistre.value == "") {
		passwordRegistre.classList.add("is-invalid");
		document.getElementById("errorpasswordRegistre").textContent = "Campo obligatorio";
		validator = false;
	} else if (!passRegex.test(passwordRegistre.value)) { //Test user password with the regex (NIVELL2)
    passwordRegistre.classList.add("is-invalid");
		document.getElementById("errorpasswordRegistre").textContent = "Mín 8 carácteres | mín 1 mayús. | mín 1 núm.";
    validator = false;
  }

  if ((passwordRegistre.value)!=(passwordRepeat.value) || passwordRepeat.value == "" ) {
    passwordRepeat.classList.add("is-invalid");
		document.getElementById("errorpasswordRepeat").textContent = "Campo obligatorio - No coincide";
		validator = false;

  }

  //Empty values ​​are not accepted
  if (provincia.value == "") {
		provincia.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "Selecciona una opción";
		validator = false;
  } 

  return validator;
}

//Event handler functions for better user experience

function emailRegistreVerify() {
  let handlerValidator = false;
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
   if (!provincia.value == "") {
	  provincia.classList.add("is-valid");
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
  if (search.value == "") {
    search.classList.add("is-invalid");
    document.getElementById("errorSearch").textContent = "Campo obligatorio"; 
    validator = false;
  }

  if ((search.value.length >= 1) && (search.value.length <= 3)) {
    //let handlerValidator = false;
    search.classList.add("is-invalid");
    document.getElementById("errorSearch").textContent = "Más de 3 letras"; 
    validator = false;
  }
  return validator
}

/*/END SEARCH FORM NIVELL 1*/

/*/End custom Javascript*/
