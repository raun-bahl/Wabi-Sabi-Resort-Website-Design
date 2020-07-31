/* This js file handles the functionality for the popups used during booking
Inspired by a YT video which has been provided in the reference list*/

//select all popup buttons by selecting all the data attributes, data-popup-target
const openPopUpButtons = document.querySelectorAll('[data-popup-target]')
//select all popup buttons by selecting all the data attributes, data-close-button
const closePopUpButtons = document.querySelectorAll('[data-close-button]')
//get the overlay attribute 
const overlay = document.getElementById('overlay')

/* Loop over each open button and add a click
   eventListener for each button */
openPopUpButtons.forEach(button => {
	button.addEventListener('click', () => {
		/* get our popup which the eventListener is pointing to;
		   the querySelector selects the potential popupTargets */ 
		const popup = document.querySelector(button.dataset.popupTarget)
		//pass the opened popup into our openPopUp function, which opens
		// up the popup for us.
		openPopUp(popup)
	})
})

/* Loop over each open button and add a click
   eventListener for each button */
closePopUpButtons.forEach(button => {
	button.addEventListener('click', () => {
		//the closest function takes the closest parent element with '.popup'.
		const popup = button.closest('.popup')
		//pass the popup which is to be closed into our closePopUp function, which opens
		// up the popup for us.
		closePopUp(popup)
	})
})

/* Anytime a user clicks on the overlay, close it */
overlay.addEventListener('click', () => {
	/* get all the open popups (the ones which have an active class) */
	const popups = document.querySelectorAll('.popup.active')
	//for each open popup, close the up by calling the closePopUp function
	// on each popup from the variable above.
	popups.forEach(popup => {
		closePopUp(popup)
	})
})

/* Open the popup passed as a parameter */
function openPopUp(popup) {
	//do nothing if the popup is none
	if (popup == null) return
	//add the 'active' class to popup made in CSS, which
	// appropriately styles the active popUp
	popup.classList.add('active')
	//also add the 'active' class to overlay made in CSS, which
	// appropriately styles the overlay
	overlay.classList.add('active')
}

/* Close the popup passed as a parameter */
function closePopUp(popup) {
	//do nothing if the popup is none
	if (popup == null) return
	//remove the 'active' class from the popup made in CSS
	popup.classList.remove('active')
	//remove the 'active' class from the overlay made in CSS
	overlay.classList.remove('active')
}


/* raise a JS alert for the booking platform */
function success() {
	alert("Booking successfully made!");
	//once the booking has successfully been made, 
	//for each open popup, close the up by calling the closePopUp function
	// on each popup from the variable above.
	const popups = document.querySelectorAll('.popup.active')
	popups.forEach(popup => {
		closePopUp(popup)
	})
	return true;
}


