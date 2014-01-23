$(document).ready(function(){
	$win = $(window);

	$('.poc #top').click( function() {
		$('.poc').toggleClass('shown');
	});
	$('.poc #top_right').click( function() {
		$('.poc').toggleClass('shown');
	});


	$win.scroll(function() {
		scrollTop = $(this).scrollTop();
		console.log(scrollTop);
		
		if ((scrollTop > 780) && (scrollTop < 830)) {
			$('.poc').addClass('shown');
			setTimeout( function() {
				console.log("close it!");
				$('.poc').removeClass('shown');
			}, 2500 );

		} else {

		}
	});

});