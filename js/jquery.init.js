$(document).ready(function(){
	if($(window).width() > 767){             
    	$('#js-full-page').slick({
    	  	slidesToShow: 1,
    	  	slidesToScroll: 1,
    	  	arrows: false,
    	  	dots: false,
			speed: 1000,
    	  	infinite: false
    	});
        $('#js-nav').slick({
        	slidesToShow: 5,
          	slidesToScroll: 2,
			arrows: false,
			dots: false,
			speed: 1000,
			infinite: false
        });
		
		$('.js-scroll-nav').click(function(){
			var slideNumb = ($(this).attr('data-numb')) - 1;
			$('#js-full-page').slick('slickGoTo', slideNumb);
		});
		$('#js-full-page').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			var navNumb = (nextSlide+1);
			$('#js-wrapper').removeClass().addClass('wrap-' + navNumb);
			
			if( (navNumb == 5) && (currentSlide < nextSlide)){
				console.log(navNumb);
				$('#js-nav').slick('slickNext');
			}
			if( (navNumb == 4) && (currentSlide > nextSlide)){
				console.log(navNumb);
				$('#js-nav').slick('slickPrev');
			}
		});
		$('#js-next').on('click', function(){
			$('#js-full-page').slick('slickNext');
		});
		$('.crypterium-link').on('click', function(e){
			e.preventDefault();
			$('#js-full-page').slick('slickGoTo', 0);
		});
		
		$('.scroll-bar').jScrollPane({
			showArrows: true
		});
	}	
});