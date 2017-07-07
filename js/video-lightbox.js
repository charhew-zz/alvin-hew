//general lightbox
$(document).ready(function(){

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
			'<a href="http://youtube.com/watch?v=' + image_href +'">' +
			'<img class="icon" src="img/icon/link.png">' +
			'Watch On Youtube</a>'
		);

		// add description (will do nothing if it doesn't have one)
		$('#description-col').append('<br>' + extraLinks);
		

		//place href as img src value
		$('#image-col').html(
			'<div class="video-container"><iframe id="ytplayer" frameborder="0" src="http://www.youtube.com/embed/' + image_href + '?autoplay=1" ></iframe></div>'
			
		);
		
		//show lightbox window - you could use .show('fast') for a transition
		$('#lightbox').show();
		

	
	});
	
	//Click anywhere on the page to get rid of lightbox window
	$('#lightbox').live('click', function() { //must use live, as the lightbox element is inserted into the DOM
		$('#lightbox').hide();
		//stops the video from playing after pop up is closed
		$('#ytplayer').attr('src', '');
	});
});


