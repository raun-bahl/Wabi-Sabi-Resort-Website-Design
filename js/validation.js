/* This js file handles the functionality for the popups used during booking*/

/* This function conducts validation for the contact page. 
   It checks the information entered by the uyser, such as the 
   name, email, subject, message and raises an error message on the 
   screen if any information is invalid. This validation functionality
   has been inspired by a YT tutorial which has been appropriately referenced
   in the reference list. */
function validation() {

	//get the necessary information from the document
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var subject = document.getElementById("subject").value;
	var message =  document.getElementById("message").value;
	var error_message = document.getElementById("error");
	// variable which will hold the error message
	var text;

	/* check if the name's length is more than 5 characters. if not,
	   show an error message by changing the padding of the previously
	   invisible error message label and displaying the error message
	   on top of it */	
	if (name.length < 5) {
		error_message.style.padding = "20px";
		text = "Please enter a valid name";
		error_message.innerHTML = text;
		return false;
	}

	/* check if the email's length is more than 5 characters and
	   contains an '@' symbol. if any of these conditions do not match,
	   show an error message by changing the padding of the previously
	   invisible error message label and displaying the error message
	   on top of it */	
	if (email.indexOf("@") == -1 || email.length < 5) {
		error_message.style.padding = "20px";
		text = "Please enter a valid email address"
		error_message.innerHTML = text;
		return false;
	}

	/* check if the message's length is more than 25 characters. if not,
	   show an error message by changing the padding of the previously
	   invisible error message label and displaying the error message
	   on top of it */	
	if (message.length <= 25) {
		error_message.style.padding = "20px";
		text = "Please enter more than 25 characters"
		error_message.innerHTML = text;
		return false;
	} 

	//once all checks are done, raise a JS alert and return true
	alert ("Submitted successfully");
	return true;
}

/* This function conducts validation for the newsletter. 
   It checks the email similar to the validation function, 
   but also gives validation to the user which says email
   has been successfully sent. The backend for sending the email
   is out of scope for this course. */
function newsletterCheck() {
	var email = document.getElementById("email").value;
	var error_message = document.getElementById("error");

	var text;

	/* check if the email's length is more than 5 characters and
	   contains an '@' symbol. if any of these conditions do not match,
	   show an error message by changing the padding of the previously
	   invisible error message label and displaying the error message
	   on top of it */
	if (email.indexOf("@") == -1 || email.length < 5) {
		error_message.style.padding = "20px";
		text = "Please enter a valid email address"
		error_message.innerHTML = text;
	} else {
		//change the background colour to green and say Email Sent
		error_message.style.background = "#56bc8a";
		text = "Email sent!"
		error_message.innerHTML = text;
	}
	return false;

}
