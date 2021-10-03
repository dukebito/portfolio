$(function(){
	$('.fvmaintext').addClass('animated');
	$('.slider').slick({
		autoplay:true,
		autoplaySpeed:1000,
		slidesToShow:3
		
		
	
	});
	
	$('.nav').click(function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
			$('.navi-content').removeClass('show');
			$('.navi-f').removeClass('open');
			$('.navi-s').removeClass('open');
			$('.navi-t').removeClass('open');
		}else{
			$(this).addClass('open');
			$('.navi-content').addClass('show');
			$('.navi-f').addClass('open');
			$('.navi-s').addClass('open');
			$('.navi-t').addClass('open');
		}
	});
	
	
$(window).on('load scroll', function (){

  var bar = $('.bar');
  var barclear =$('.barclear');
  var fix = 'fix';
  
  bar.each(function(){
  
    var barOffset = $(this).offset().top;
	var barclearOffset =$('.barclear').offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if(scrollPos >= barOffset ){
      $(this).addClass(fix);
    }else if(scrollPos < barclearOffset ){
		$(this).removeClass(fix);
	}
  });	
	
	bar.each(function(){
  
    var barOffset = $(this).offset().top;
	var barclearOffset =$('.barclear').offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

   if(scrollPos < barclearOffset ){
		$(this).removeClass(fix);
	}
  });
	


});
	
$(window).on('load scroll', function (){

  var move = $('.move');
  var animated = 'animated';
  
  move.each(function(){
  
    var moveOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if(scrollPos > moveOffset - wh + 150 ){
      $(this).addClass(animated);
    }
  });

});	
	
	
	
$(window).on('load scroll', function (){

  var box = $('.fadeIn');
  var animated = 'animated';
  
  box.each(function(){
  
    var boxOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if(scrollPos > boxOffset - wh + 250 ){
      $(this).addClass(animated);
    }
  });

});
	
/* パララックス */
$(window).on('scroll', function(){

  var scrollTop = $(window).scrollTop();
  var bgPosition = scrollTop / 1.1;  //相対速度調整

  if(bgPosition){
    $('#app').css('background-position', 'center top -'+ bgPosition + 'px');
  }
});
	
	
	
	$('#scroll').click(function(){
		$('html,body').animate({scrollTop:'0'},500);
	});
	
});