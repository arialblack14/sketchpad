$(document).ready(function() {
	var numOfGrids = prompt("Please provide desired dimensions of grid.");
	var container = $('.container');
	var td = $('<td class="square"></td>');
	var tr = $('<tr class="square"></tr>');

	console.log(numOfGrids);
	
	var tableWidth = Math.round(container.width()/numOfGrids);

	console.log(tableWidth);

/* 
	If we wanted the number of pixels to increase we would 
	append elements to some other parent element.
	2nd loop makes numOfGruds = 0, so 1st loop doesn't execute
	that is why we need trLoop outside of loop.
	Also in inner loop trLoop is set to 0, after 1st iteration of
	outer loop, so we need to set it to numOfGrids again.
*/

	var trLoop, loopGuard = numOfGrids;

	for (; numOfGrids>0; numOfGrids--) {
		
		$('<tr class="square"></tr>').appendTo($('table'));

		for ( ; trLoop>0; trLoop-- ) {
			$('<td class="square"></td>').appendTo($('tr'));
			console.log("in loop 2 " + trLoop);
		}
		trLoop = loopGuard;
		console.log("in loop" + numOfGrids);
	}
	
	// set width and height of td, tr elements
	$("td").css("width", tableWidth).css("height", tableWidth);
	
});