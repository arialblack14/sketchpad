$(document).ready(function(){
	numOfGrids = prompt("Please provide number of grids", "");

	for (;numOfGrids>=0;numOfGrids--) {
		$('#container').append('<div class="square">Hey</div>');
	}
});