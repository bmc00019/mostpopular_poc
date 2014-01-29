$(document).ready(function(){
	$win = $(window);

	$('.tab').click( function() {
		$('.popular-container').toggleClass('open');
		$('.tab').toggleClass('tab-open');
	});
	// $('.poc #top_right').click( function() {
	// 	$('.poc').toggleClass('shown');
	// });

});