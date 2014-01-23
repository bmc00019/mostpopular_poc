$(document).ready(function(){
	$win = $(window);


	$('.poc #top').click( function() {
		$('.poc').toggleClass('shown');
		console.log('click');
	});


	$win.scroll(function() {
		scrollTop = $(this).scrollTop();		
		if ((scrollTop > 780) && (scrollTop < 830)) {
			$('.poc').addClass('shown');
		}
	});



});