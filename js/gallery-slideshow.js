/* the magnific popup is a jQuery plugin for making responsive gallery slideshows 
	DOCUMENTATION FOR MAGNIFIC POPUP: 
	https://dimsemenov.com/plugins/magnific-popup/documentation.html */

//here, .gallery is our parent container.
$(".gallery").magnificPopup( {
	delegate: 'a', //selector for all child items, 'a' in this case since our images are setup within a tags.
	type: 'image',
	gallery: { //this enables the gallery and handles each item as a single popup.
		enabled: true
	}
});