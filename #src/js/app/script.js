$(function() {
	//=========MENU===========

	$('.header__burger').on('click', function() {
		$(this).toggleClass('active');
		$('.menu__list').toggleClass('active');
   });
   
   $('.menu__list-link').on('click', function() {
		$('.header__burger').toggleClass('active');
		$('.menu__list').removeClass('active');
	});

	//=======================

	$('.product__slider').slick({
         infinite: false,
         arrows: true,
			dots: false,
			slidesToShow: 1,
         slidesToScroll: 1,
         appendArrows: $('.product__slider-arrow'),
         prevArrow: $('.slider-arrow__prev'),
         nextArrow: $('.slider-arrow__next'),
			/*responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true
					}
				},
				{
					breakpoint: 560,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true
					}
				}
			]*/
      });
   
      //===============================

      $(".questions__item-title").on('click', function(){
         $(this).toggleClass('active');
         var ansver = $(this).next();
         $(".questions__item-text:visible").not(ansver).slideUp(400);
         $(".questions__item-title").not($(this)).removeClass('active');
         ansver.slideToggle(400);         
      });
});
