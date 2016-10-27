(function() {
	$('#arrow-btn').click(function() {
		$('body').animate({ scrollTop: $('#about').offset().top }, 'slow');
	});

	$(window).scroll(function() {
		var nav = $('#navbar');
		if ($(window).scrollTop() > $('#hero').height() - nav.height() ) {
			nav.addClass('shrink');
		} else {
			nav.removeClass('shrink');
		}
	});		

	$('.nav-link').click(function() {
		var text = $(this).text();
		if (text === 'About') {
			$('body').animate({ scrollTop: $('#about').offset().top }, 'slow');
		} else if (text === 'Portfolio') {
			$('body').animate({ scrollTop: $('#portfolio').offset().top }, 'slow');
		} else if (text === 'Contact') {
			$('body').animate({ scrollTop: $('#contact').offset().top }, 'slow');
		}
	});

	if (path !== '/index.html') {
		$('#navbar').addClass('shrink').removeClass('navbar-fixed-top');
	}
})();