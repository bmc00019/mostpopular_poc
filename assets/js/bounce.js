$(document).ready(function(){
	$win = $(window);


	$('.poc #top').click( function() {
		$('.poc').toggleClass('shown');
		$('.poc').toggleClass('hidden');
		console.log('click');
	});
	$('.poc #top_right').click( function() {
		$('.poc').toggleClass('shown');
		$('.poc').toggleClass('hidden');
		console.log('click');
	});
	// $win.scroll(function() {
	// 	scrollTop = $(this).scrollTop();		
	// 	if ((scrollTop > 780) && (scrollTop < 830)) {
	// 		$('.poc').stop().animate({
	// 			height : "80px"
	// 		}, 400, function() {
	// 			// $('.poc').stop().animate({
	// 			// 	height: "30px"
	// 			// }, 500);
	// 			$('.poc').addClass('hidden');
	// 		});
	// 	}
	// });

	$win.bind('mousewheel', function(event) {

		scrollTop = $(this).scrollTop();

		if(event.originalEvent.wheelDelta >= 0) {
			console.log('scroll up');
		} else {
			if ((scrollTop > 780) && (scrollTop < 830)) {
				$('.poc').stop().animate({
					height : "80px"
				}, 400, function() {
					// $('.poc').stop().animate({
					// 	height: "30px"
					// }, 500);
					$('.poc').addClass('hidden');
				});
			}
		}
	});
});