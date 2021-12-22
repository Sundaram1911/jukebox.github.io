document.addEventListener("DOMContentLoaded", function(event) {

    function OTPInput() {
    const inputs = document.querySelectorAll('#otp > *[id]');
    for (let i = 0; i < inputs.length; i++) { 
        inputs[i].addEventListener('keydown', function(event)
    { 
        if (event.key==="Backspace" ) 
        { inputs[i].value='' ; if (i !==0) inputs[i - 1].focus(); } 
        else { if (i===inputs.length - 1 && inputs[i].value !=='' ) 
        { return true; } 
        else if (event.keyCode> 47 && event.keyCode < 58) 
        { 
        inputs[i].value=event.key; if (i !==inputs.length - 1) inputs[i + 1].focus(); 
        event.preventDefault(); 
        } 
        else if (event.keyCode> 64 && event.keyCode < 91) 
        { inputs[i].value=String.fromCharCode(event.keyCode); 
            if (i !==inputs.length - 1) 
            inputs[i + 1].focus(); 
            event.preventDefault(); } } }); 
        } 
    } 
    console.log(event);
    
   
    OTPInput(); 
});

var firebaseConfig = {
    apiKey: "AIzaSyA5Ovm8neQEmd0Z7l0KeH_CdAmPpo-R5Pg",
    authDomain: "jukebox-a0183.firebaseapp.com",
    projectId: "jukebox-a0183",
    storageBucket: "jukebox-a0183.appspot.com",
    messagingSenderId: "253777131804",
    appId: "1:253777131804:web:b40e3e7f3185c8a37122d9",
    measurementId: "G-TM532PVRDN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

firebase.auth().useDeviceLanguage();

function send_otp(){
    console.log("word");
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
   
  'size': 'normal',
  'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    document.getElementById('numberholder').style.display ="none";
    document.getElementById('otpholder').style.display = "block";
    console.log(response)
  
    // ...
  },
  'expired-callback': () => {
    // Response expired. Ask user to solve reCAPTCHA again.
    // ...
    console.log("reCAPTCHA expired")
  }

});

 const Number = document.getElementById('phoneno').value;
 const phoneNumber = '+91'+Number;

 console.log(phoneNumber);
const appVerifier = window.recaptchaVerifier;
firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      console.log(confirmationResult);
      console.log('getting responce');
     
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      console.log(error);
     
      // ...
    });

document.getElementById('collect').innerHTML = Number;


}

function otpvalid() {
console.log("wordking");
var code = document.getElementById('first').value;
var code1 = document.getElementById('second').value;
var code2 = document.getElementById('third').value;
var code3 = document.getElementById('fourth').value;
var code4 = document.getElementById('fifth').value;
var code5 = document.getElementById('sixth').value;
var final_otp = code + code1 + code2 + code3+code4+code5;
console.log(final_otp);
confirmationResult.confirm(final_otp).then((result) => {
  // User signed in successfully.
  const user = result.user;
  console.log("hey i am signed in")

  
  // ...
}).catch((error) => {
  console.log("User couldn't sign in (bad verification code?");
  alert("Wrong otp");
  // ...
});

}

auth.onAuthStateChanged(function(user){
		
  if(user){
    var contact = user.phoneNumber;
    alert('active user ' + contact);
    window.location ="frame.html";
    //Take user to a different or home page
    //is signed in 
  }else{
    alert('no active user');
    
    //no user is signed in
  }
  
  });