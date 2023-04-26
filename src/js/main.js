import $ from 'jquery';

$(function(){
  $('.benefit_list_mo .benefit_list').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow : $('.prevArrow-1'), 
    nextArrow : $('.nextArrow-1'),
  });

  $('.product_swiper').slick({
    autoplay:false,
    autoplaySpeed:1500,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow : $('.prevArrow-2'), 
    nextArrow : $('.nextArrow-2'),
  });
  $('.introduction_swiper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow : $('.prevArrow-3'), 
    nextArrow : $('.nextArrow-3'),
  });
  
  var accordion_tab = $('.accordion .accordion_btn'), accordion_content = $('.accordion .accordion_ctn');
	accordion_tab.on('click', function(e){
    e.preventDefault();
		accordion_tab.removeClass('active');
		accordion_content.slideUp('normal');
		if($(this).next().is(':hidden') === true) {
      $(this).addClass('active');
			$(this).next().slideDown('normal');
    } 			  
  });
  
  $('.slider_control .play').click(function(){
    $('.product_swiper').slick('slickPlay');
    $('.slider_control .play').removeClass('active');
    $('.slider_control .stop').addClass('active');
  });
  $('.slider_control .stop').click(function(){
    $('.product_swiper').slick('slickPause');
    $('.slider_control .stop').removeClass('active');
    $('.slider_control .play').addClass('active');
   });


});
