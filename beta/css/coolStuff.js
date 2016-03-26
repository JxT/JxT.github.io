
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


	/* SVG colour changing */


		var changeMenuColor = {

		  //change these to elements to use at waypoints
		  toTrack: "section",
		  tracked: {},

		  // utility function to check if its within the tracked area
		  inObject: function(val){
		    var self = this;
		    var ret = false;
		    var keys= Object.keys(this.tracked);
		    keys.push(keys[keys.length-1]);
		    var index = 0;
		    $.each(this.tracked, function(k,v){
		      var next = self.tracked[keys[index+1]];
		      if (v<=val && val<=next){
		        ret =  k;
		      }
		       index++;
		    });
		    return ret;
		  },

		  //sets up tracked elements for events
		  init : function(){
		  var self = this;
		   //create a collecion of tracked offsets
		    $(this.toTrack).each(function(){
		       self.tracked[$(this).attr("id")] = $(this).offset().top;
		    });

		    //on scroll, we compare current position and tracked offsets,
		    // if they match we trigger the isOnElement.changeMenuColor event
		    // on the element
		    $(document).on("scroll", function(){
		        var currentPosition = $(this).scrollTop();
		        var trackFound = self.inObject(currentPosition);
		        if (trackFound){
		          $("#"+trackFound).trigger("isOnElement.changeMenuColor");
		        }
		    });
		  }
		}

		//on dom load we initalize the changeMenuColor operation
		//now we just need to listen for the evemt amd do whatrever
		$(function(){
			changeMenuColor.init();

			$("#welcome").on("isOnElement.changeMenuColor", function(){
			  $("header .logo path").css("fill", "rgb(83,87,96)");
			  $("header .links svg path").css("fill", "rgb(83,87,96)");
			});

			$("#projects").on("isOnElement.changeMenuColor", function(){
			  $("header .logo path").css("fill", "rgb(83,87,96)");
			  $("header .links svg path").css("fill", "rgb(83,87,96)");
			});

			$("#about").on("isOnElement.changeMenuColor", function(){
			  $("header .logo path").css("fill", "rgb(83,87,96)");
			  $("header .links svg path").css("fill", "rgb(83,87,96)");
			});

			$("#education").on("isOnElement.changeMenuColor", function(){
			  $("header .logo path").css("fill", "rgb(255,255,255)");
			  $("header .links svg path").css("fill", "rgb(255,255,255)");
			});

			$("#contact").on("isOnElement.changeMenuColor", function(){
			  $("header .logo path").css("fill", "rgb(83,87,96)");
			  $("header .links svg path").css("fill", "rgb(83,87,96)");
			});
		});