$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 3000);
});

function show(target){
	//Remove all images before click
	document.getElementById("timemPicture").style.display = "none";
	document.getElementById("flappyBirdsPicture").style.display = "none";
	document.getElementById("froggerPicture").style.display = "none";
	document.getElementById("imageFilterPicture").style.display = "none";
	document.getElementById("spaceInvadersPicture").style.display = "none";
	//If user clicks...
	if (target == "TimeM") {
		document.getElementById("timemPicture").style.display = "";
	} else if (target == "flappyBirds") {
		document.getElementById("flappyBirdsPicture").style.display = "";
	} else if (target == "frogger") {
		document.getElementById("froggerPicture").style.display = "";
	} else if (target == "imageFilter") {
		document.getElementById("imageFilterPicture").style.display = "";
	} else if (target == "spaceInvaders") {
		document.getElementById("spaceInvadersPicture").style.display = "";
	} else { 
		//do nothing
	}
}

$(function() {
	$(".kineoworks-homepage-slides").responsiveSlides({
	  auto: false,             // Boolean: Animate automatically, true or false
	  pager: false,           // Boolean: Show pager, true or false
	  nav: true,              // Boolean: Show navigation, true or false
	  random: false,          // Boolean: Randomize the order of the slides, true or false
	  pause: false,           // Boolean: Pause on hover, true or false
	  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
	  prevText: "",           // String: Text for the "previous" button
	  nextText: "",           // String: Text for the "next" button
	  maxwidth: 518,      // Integer: Max-width of the slideshow, in pixels
	  navContainer: ".kineoworks-homepage-slides",       // Selector: Where controls should be appended to, default is after the 'ul'
	  manualControls: "",     // Selector: Declare custom pager navigation
	  namespace: "kineo",   // String: Change the default namespace used
	  before: function(){},   // Function: Before callback
	  after: function(){}     // Function: After callback
	});
});

$(function() {
	$(".kineoworks-testimonial-slides").responsiveSlides({
	  auto: true,             // Boolean: Animate automatically, true or false
	  speed: 500,             // Integer: Speed of the transition, in milliseconds
	  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
	  pager: false,           // Boolean: Show pager, true or false
	  nav: true,              // Boolean: Show navigation, true or false
	  random: false,          // Boolean: Randomize the order of the slides, true or false
	  pause: false,           // Boolean: Pause on hover, true or false
	  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
	  prevText: "",           // String: Text for the "previous" button
	  nextText: "",           // String: Text for the "next" button
	  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
	  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
	  manualControls: "",     // Selector: Declare custom pager navigation
	  namespace: "rslides",   // String: Change the default namespace used
	  before: function(){},   // Function: Before callback
	  after: function(){}     // Function: After callback
	});
});


