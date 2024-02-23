
(function ($) {
	"use strict";
	var $wrapper = $('.main-wrapper');


    
	// latest-slider
	if ($('.owl-carousel.banner-carousel').length > 0) {
		$('.owl-carousel.banner-carousel').owlCarousel({
			loop: true,
			margin: 24,
			nav: true,
			dots: true,
			smartSpeed: 2000,
			navText: ["<i class='fa-solid fa-angle-left'></i>","<i class='fa-solid fa-angle-right'></i>"],
			responsive: {
				0: {
					items: 1
				},

				550: {
					items: 1
				},
				700: {
					items: 1
				},
				1200: {
					items: 1
				},
				1400: {
					items: 1
				}
			}
		})
	}

    // latest-slider
	if ($('.owl-carousel.we-carousel').length > 0) {
		$('.owl-carousel.we-carousel').owlCarousel({
			loop: true,
			margin: 24,
			nav: true,
			dots: false,
			smartSpeed: 2000,
			navText: ["<i class='fa-solid fa-arrow-right-long'></i>"],
			responsive: {
				0: {
					items: 1
				},

				550: {
					items: 1
				},
				700: {
					items: 2
				},
				1200: {
					items: 4
				},
				1400: {
					items: 4
				}
			}
		})
	}

    // latest-slider
	if ($('.owl-carousel.testimonial-carouseltwo').length > 0) {
		$('.owl-carousel.testimonial-carouseltwo').owlCarousel({
			loop: true,
			margin: 24,
			nav: false,
			dots: false,
			smartSpeed: 2000,
			autoplay: true,
			navText: ["<i class='fa-solid fa-angle-up'></i>","<i class='fa-solid fa-angle-down'></i>"],
			responsive: {
				0: {
					items: 1
				},

				550: {
					items: 2
				},
				700: {
					items: 3
				},
				1200: {
					items: 5
				},
				1400: {
					items: 7
				}
			}
		})
	}

    	// Header Fixed

		if ($('#header').length > 0) {
			$(document).ready(function () {
				$(window).scroll(function () {
					var scroll = $(window).scrollTop();
					if (scroll > 35) {
						$("#header").addClass('header-space');
					}
	
					else {
						$("#header").removeClass('header-space');
					}
				})
			})
		}


})(jQuery);