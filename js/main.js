$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 3000);

	//remove page loader after 2 seconds
 	// setTimeout(function(){
 	// 	console.log("check");
 	// 	var element = document.getElementById("demo-content");
		// element.outerHTML = "";
		// delete element;
  //   }, 3250);
});