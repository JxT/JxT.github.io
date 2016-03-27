
/* 
	Animations and other JS tricks 
	http://jordanthom.as 
	2016 Jordan Thomas
*/

/* Smooth scrolling */

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

/* Scroll effects */

$(window).scroll(function (event) {
    
    var scroll = $(window).scrollTop();

	if (scroll > 280) {
	  	$("header").css("padding-top", "20px");
	  	$("header .links #menu").css("top", "57px");
    }
    if (scroll < 280) {
	  	$("header").css("padding-top", "40px");
	  	$("header .links #menu").css("top", "80px");
    }

});


/* Animate on visible */

$(window).on('scroll', function(){

	if ($(".about").visible()){
		$(".about p").css("display", "block");
	}

	if ($(".education .container").visible()){
		$(".education .educard").css("display", "block");
	}

	if ($(".contact .container").visible()){
		$(".contact .contactcircle").css("display", "block");
	}

 });

