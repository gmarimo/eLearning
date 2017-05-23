

function validate_form(){
	password_field = document.getElementById('regPassword');
	retype_password = document.getElementById('regPassword_1');

	if(password_field.value === ''){
		document.getElementById('password_empty_error').innerHTML = "Password required";
		password_empty_error.style.color = "red";
		password_field.focus();
		return false;


	}

	if(password_field.value !== retype_password.value){
		document.getElementById('password_not_match').innerHTML = "Passwords don't match!";
		password_not_match.style.color = "red";
		password_field.focus();
		return false;
	}
}

