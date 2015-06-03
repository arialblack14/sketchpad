$(document).ready(function() {
	var numOfGrids = prompt("Please provide desired width of grid.");
	
	console.log(numOfGrids);
	//2nd loop makes numOfGruds = 0, so 1st loop doesn't execute
  var trLoop = numOfGrids;

	while (numOfGrids>=0) {
		
		$('<tr class="square"></tr>').appendTo($('table'));
		for ( ; trLoop>=0; trLoop-- ) {
			$('<td class="square"></td>').appendTo($('tr'));
		}
		numOfGrids--;
	}
});