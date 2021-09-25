$(document).ready(function(){
	if($(window).width() <= 767){	
		var secondPos = $('#js-first-screen').height();		
		$(window).on('scroll', function(){
			var windowScrollTop = $(window).scrollTop();
			if( windowScrollTop > secondPos){
				$('.crypterium-link').addClass('white');
			} else{
				$('.crypterium-link').removeClass('white');
			}
		});
		
		$('.crypterium-link').click(function(e){
			e.preventDefault();
			var anchor = $(this).attr("href"),
				scroll_el = $(anchor);
			if ($(scroll_el).length != 0) { 
				$('html, body').animate({ scrollTop: $(scroll_el).offset().top}, 250); 
			}
		});
  
	}
});
