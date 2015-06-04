$(document).ready(function() {
	var numOfGrids = prompt("Please provide desired dimensions of grid.");
	var container = $('.container');
	var outDiv = $('<div class="outDiv"></div>');
	var inDiv = $('<div class="inDiv"></div>');

	console.log(numOfGrids);
	
	var boxWidth = Math.round(container.width()/numOfGrids);

	console.log(boxWidth);

/* 
	If we wanted the number of pixels to increase we would 
	append elements to some other parent element.
	2nd loop makes numOfGruds = 0, so 1st loop doesn't execute
	that is why we need divLoop outside of loop.
	Also in inner loop divLoop is set to 0, after 1st iteration of
	outer loop, so we need to set it to numOfGrids again.
*/

	var divLoop, loopGuard = numOfGrids;

	for (; numOfGrids>0; numOfGrids--) {
		
		$('<div class="outDiv"></div>').appendTo($(".container"));

		for ( ; divLoop>0; divLoop-- ) {
			$('<div class="inDiv"></div>').appendTo($('.outDiv'));
			console.log("in loop 2 " + divLoop);
		}
		divLoop = loopGuard;
		console.log("in loop" + numOfGrids);
	}
	
	// set width and height of td, tr elements
	$(".inDiv").css("width", boxWidth).css("height", boxWidth);
	$(".inDiv").hover(function(){
		$(this).css("background-color", "yellow");
	});
});