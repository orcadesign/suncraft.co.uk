$(document).ready(function(){
	var ww = $(window).width();
	var limit = 415;

	function refresh() {
	   ww = $(window).width();
	   var w =  ww<limit ? (location.reload(true)) :  ( ww>limit ? (location.reload(true)) : ww=limit );
	}
	var tOut;
	$(window).resize(function() {
		var resW = $(window).width();
		clearTimeout(tOut);
		if ( (ww>limit && resW<limit) || (ww<limit && resW>limit) ) {        
			tOut = setTimeout(refresh, 100);
		}
	});
	
	$('.burger').click(function () {
		$(this).toggleClass('open');
		$("nav.main-menu").toggleClass("open");
		$("body, html").toggleClass("noScroll");
	});
	$('.nav_button').click(function () {
		$(".nav_button .burger").delay(200).removeClass("init")
	});
	$(function () {
		$("section.blog-listings .list .cards").slice(0, 6).show();
		$("#loadMore").on('click', function (e) {
			e.preventDefault();
			$("div:hidden").slice(0, 6).slideDown();
			if ($("div:hidden").length === 0) {
				$("#load").fadeOut('slow');
			}
			$('html,body').animate({
				scrollTop: $(this).offset().top
			}, 1500);
		});
	});
	
	
	/* slick slider */
	$('.partners-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
	});	
	$('.on-the-go').slick({
		slidesToShow: 2,
		infinite: true,
		slidesToScroll: 1,
		dots: true,
		 responsive: [
			{
			  breakpoint: 641,
			  settings: {
				slidesToShow: 1
			  }
			}
		]
	});
	
	// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
	
	
	
	$("section:not(.pre_footer):not(.blog-listings) article *, section article > div:not(.partner-list), section img.absolute, section article div.list div.cards").addClass("transition");
	
	$("section article div.partner-list, section article div.partner-list *:not(.cards), section article div.list, section#menu article .meal-background, section#menu article .meal-background *, section.posts .content_area, section.posts .content_area .inner, .wrapper, .slick-slider, [class^='slick'], div.site section:nth-of-type(1) article > img:nth-of-type(1), div.site section:nth-of-type(1) img.featured").delay(200).removeClass("transition");
	
	$("section article .chopstick.transition.left").addClass("transLeft");
	$("section article .chopstick.transition.right").addClass("transRight");

	function isScrolledIntoView(elem) {
		var docViewTop = $(window).scrollTop();
		var docViewBottom = docViewTop + $(window).height();

		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();

		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}
	$(window).scroll(function () {
		$('section article .transition').each(function () {
			if (isScrolledIntoView(this) === true) {
				$(this).addClass('visible');
			}
		});
	});
	
	
	$(window).scroll(function() {    
		// find the id with class 'active' and remove it
		$("#backtotop").removeClass("show");
		// get the amount the window has scrolled
		var scroll = $(window).scrollTop();
		// add the 'active' class to the correct id based on the scroll amount
		if (scroll >= 100) {
			$("#backtotop").addClass("show");
		}
	});
	
	
});



