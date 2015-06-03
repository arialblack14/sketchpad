function makeGrid() {

	var numOfGrids = document.getElementById("numOfGrids").value;
	var container = document.getElementById('#container');
	
	
	console.log(numOfGrids);

	for (;numOfGrids>=0;numOfGrids--) {
		var elemDiv = document.createElement('div');
		elemDiv.setAttribute("class","square");

		document.container.appendChild(elemDiv);
	}
}