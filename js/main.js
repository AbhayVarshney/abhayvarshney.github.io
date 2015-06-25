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