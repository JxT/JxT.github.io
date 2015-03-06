/* Smooth scrolling JS code */
/* http://www.thisisjordan.co.uk */
/* Version: 13.1 */

$(document).ready(function(){
	$('a[href^="#"]').bind('click.smoothscroll',function (e) {
	    e.preventDefault();
	 
	    var target = this.hash,
	    $target = $(target);
	 
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 2500, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});