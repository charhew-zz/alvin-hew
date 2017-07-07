//general lightbox
$(document).ready(function(){

	// //smooth scrolling
	// $('a[href*=#]').click(function() {
	// 	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	// 		&& location.hostname == this.hostname) {
	// 		var $target = $(this.hash);
	// 		$target = $target.length && $target
	// 		|| $('[name=' + this.hash.slice(1) +']');
	// 		if ($target.length) {
	// 			var targetOffset = $target.offset().top;
	// 			$('html,body')
	// 			.animate({scrollTop: targetOffset}, 1000);
	// 			return false;
	// 		}
	// 	}
	// });


	//light box
	$('.lightbox_trigger').click(function(e) {
		
		//prevent default action (hyperlink)
		e.preventDefault();
		
		//Get clicked link href
		var image_href = $(this).attr("href");
		var title = $(this).attr("data-title");
		var subtitle = $(this).attr("data-subtitle");
		var description = $(this).attr("data-description");
		var extraLinks = $(this).attr("data-links");

		//write the description
		$('#description-col').html(
			'<h1>' + title + '</h1>' +
			'<h2>' + subtitle + '</h2>' +
			'<p>' + description + '</p>' +
			'<a href="img/orig/' + image_href +'" target="_blank">' +
			'<img class="icon" src="img/icon/dl.png">' +
			'View Full Image</a>'
		);

		
		$('#description-col').append('<br>' + extraLinks);
		

		//place href as img src value
		$('#image-col').html('<img src="img/preview/' + image_href + '" />'
			
		);
		
		//show lightbox window - you could use .show('fast') for a transition
		$('#lightbox').show();
		

	
	});
	
	//Click anywhere on the page to get rid of lightbox window
	$('#lightbox').live('click', function() { //must use live, as the lightbox element is inserted into the DOM
		$('#lightbox').hide();
	});
});