$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__nav').toggleClass('active');
		$('body').toggleClass('.lock');
	});

	$('.Rew__all__slider').slick({

	});


	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPosition = $(window).scrollTop();

	$(window).on("scroll load", function () {
		scrollPosition = $(this).scrollTop();

		if(scrollPosition > introH) 
		{
			header.addClass("fixed");
		}
		else 
		{
			header.removeClass("fixed");
		}


		console.log(scrollPosition);
	});




	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elemetnID = $(this).data('scroll')
		let elemetnOffset = $(elemetnID).offset().top;
		
;

		$("html, body").animate({
			scrollTop:elemetnOffset -100
		}, 1000);
	});


});

