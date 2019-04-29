
$(document).ready(function($) {
	
	// 手机导航
	$('.menuBtn').append('<b></b><b></b><b></b>');
	$('.menuBtn').click(function(event) {
		$(this).toggleClass('open');
		var _winw = $(window).width();
		var _winh = $(window).height();
		if( $(this).hasClass('open') ){
			$('body').addClass('open');
			if( _winw<=767 ){
				$('#nv').stop().slideDown();
			}
		}else{
			$('body').removeClass('open');
			if( _winw<=767 ){
				$('#nv').stop().slideUp();
			}
		}
	});

	// 返回顶部
	$('.fix-share .top').click(function(){
		$('body,html').animate({
			'scrollTop':0
		}, 500);
	});
	$(window).scroll(function(){
		var _top = $(window).scrollTop();
		if( _top<100 ){
			$('.fix-share').stop().fadeOut();
		}else{
			$('.fix-share').stop().fadeIn();
		}
	});
	
	
});