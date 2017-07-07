//general lightbox
$(document).ready(function(){
	//when "contact" link is clicked, toggle the contact dropdown
	$('#contact-link').click( function(){ //must use live, as the lightbox element is inserted into the DOM
		$('.contact-info-dropdown').slideToggle();
		$('#dropdown-buffer').slideToggle();
	});
});