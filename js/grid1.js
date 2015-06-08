$(document).ready(function() {
	var numOfGrids = prompt("Please provide desired dimensions of grid.");
	var container = $('.container');
	var outDiv = $('<div class="outDiv"></div>');
	var inDiv = $('<div class="inDiv"></div>');
	
	var boxWidth = 800/numOfGrids;

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
		$('<br>').appendTo(container);

		for ( ; divLoop>0; divLoop-- ) {
			$('<div class="inDiv"></div>').appendTo(container);
		}
		divLoop = loopGuard;
	}
	
	// set width and height of td, tr elements
	$(".inDiv").css("width", boxWidth).css("height", boxWidth);

	$(".inDiv").hover(function(){
		$(this).css("background-color", "orange");
	});

	$('#reset').on('click', function() {
		$('.inDiv').css("background-color", "lightblue");
		$('.inDiv').hover(function(){
			$(this).css("background-color", "orange");
		});
	});

	/*
		Read tutorial from : 
		http://buildinternet.com/2009/09/its-a-rainbow-color-changing-text-and-backgrounds/
	*/
	
	$('#gridColor').on('click', function() {
		var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

		$('.inDiv').css("background-color", hue);
	});

	$('#randomColor').on('click', function() {
		$('.inDiv').hover(function() {
			var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

			$(this).css("background-color", hue);
		});
	});
});
