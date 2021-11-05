	//Validtion Code For Inputs
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCflp6eWPNMpFO2n3C_QcLuEp50b2ARqMI",
	authDomain: "analyticschool-b82a8.firebaseapp.com",
	projectId: "analyticschool-b82a8",
	storageBucket: "analyticschool-b82a8.appspot.com",
	messagingSenderId: "845514303280",
	appId: "1:845514303280:web:cbcdc69337072f655a8af5",
	measurementId: "G-JX4E3HVYLY"
  };
  firebaseConfig.initializeApp(firebaseConfig);
  const auth = firebase.auth;
var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);

function validated(){
	if (email.value.length < 9) {
		email.style.border = "1px solid red";
		email_error.style.display = "block";
		email.focus();
		return false;
	}
	if (password.value.length < 6) {
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		password.focus();
		return false;
	}

}
function email_Verify(){
	if (email.value.length >= 8) {
		email.style.border = "1px solid silver";
		email_error.style.display = "none";
		return true;
	}
}
function pass_Verify(){
	if (password.value.length >= 5) {
		password.style.border = "1px solid silver";
		pass_error.style.display = "none";
		return true;
	}
}

