// JavaScript Document
$(function(){
	for (var i = 0; i < $('.banner-wrap').length; i++) {
		$('.banner-btn').append('<span></span>')
	};
	
	$('.banner-btn span').mousedown(function() {
		var i=$(this).index();
		$('.banner-wrap').eq(i).fadeIn('fast').siblings().fadeOut('fast')
		$(this).addClass('cur').siblings().removeClass('cur')
		clearInterval(timer)
	}).mouseleave(function(event) {
		autoPlay()
	});

	var i=0;
	var timer=null;
	$('.banner-btn span').eq(0).addClass('cur')
	function autoPlay()
	{		
			clearInterval(timer)
			timer=setInterval(function()
		{
			if(i>$('.banner-wrap').length-1)
			{
				i=0;
			}
			else
			{
				i++;
				$('.banner-wrap').eq(i-1).fadeIn('fast').siblings().fadeOut('fast')
				$('.banner-btn span').eq(i-1).addClass('cur').siblings().removeClass('cur')
			}
		}
	,2000)
	}

	autoPlay()
})