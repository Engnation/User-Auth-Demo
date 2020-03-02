
//These query selectors refer to the javascript references in the HTML file 
const modalSignUp = document.querySelector("#divSignUp");
const btnSignUp = document.querySelector("#btnSignUp");
const btnCloseSignUp = document.querySelector("#btnCloseSignUp");

const modalSignIn = document.querySelector("#divSignIn");
const btnSignIn = document.querySelector("#btnSignIn");
const btnCloseSignIn = document.querySelector("#btnCloseSignIn");


btnSignUp.addEventListener("click", () => {
    toggleModal(modalSignUp);
  });
  
  btnCloseSignUp.addEventListener("click", () => {
    toggleModal(modalSignUp);
  });

  btnCloseSignIn.addEventListener("click", () => {
    toggleModal(modalSignIn);
  });

  document.getElementById("btnSubmitSignUp").addEventListener("click", () => {
    signUp();
  });

  function signUp() {
    //Hard coding a username and password
    //let email = 'test@test.com';
    //let pswrd = 'test1234';

    let email = document.querySelector("input#signUpEmail").value;
    let pswrd = document.querySelector("input#signUpPwrd").value;
    //let pswrdConf = document.querySelector("input#signUpPwrdConf").value;
    //const 

    //if(pswrd====pswrdConf){
    firebase.auth().createUserWithEmailAndPassword(email, pswrd)
    //.then(function() {
        // Sign-out successful.
    //})
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        //alert(errorMessage);
        errSignUp.textContent = error.message;
      });
  }

  function toggleModal(modal) {
    modal.classList.toggle("show-modal");
  }