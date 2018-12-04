var wins = 0;
var playersOnline = 0;

var cols = 10;
var rows = 10;
var gameBoardContainer = document.getElementById("gameboard");
var squareSize = 50;

for (i = 0; i < cols; i++) {
	for (j = 0; j < rows; j++) {
		
		// create a new div HTML element for each grid square and make it the right size
		var square = document.createElement("div");
		gameBoardContainer.appendChild(square);

    // give each div element a unique id based on its row and column, like "s00"
		square.id = 's' + j + i;			
		
		// set each grid square's coordinates: multiples of the current row or column number
		var topPosition = j * squareSize;
		var leftPosition = i * squareSize;			
		
		// use CSS absolute positioning to place each grid square on the page
		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';						
	}
}

var gameBoard = [
    [0,0,0,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,1,0,0,0],
    [1,0,0,0,0,0,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0],
    [1,0,0,1,0,0,0,0,0,0],
    [1,0,0,1,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0]
    ]

    gameBoardContainer.addEventListener("click", fireTorpedo, false);

    // initial code via http://www.kirupa.com/html5/handling_events_for_many_elements.htm:
    function fireTorpedo(e) {
        // if item clicked (e.target) is not the parent element on which the event listener was set (e.currentTarget)
        if (e.target !== e.currentTarget) {
            // extract row and column # from the HTML element's id
            var row = e.target.id.substring(1,2);
            var col = e.target.id.substring(2,3);
            //alert("Clicked on row " + row + ", col " + col);
                    
            // if player clicks a square with no ship, change the color and change square's value
            if (gameBoard[row][col] == 0) {
                e.target.style.background = '#bbb';
                // set this square's value to 3 to indicate that they fired and missed
                gameBoard[row][col] = 3;
                
            // if player clicks a square with a ship, change the color and change square's value
            } else if (gameBoard[row][col] == 1) {
                e.target.style.background = 'red';
                // set this square's value to 2 to indicate the ship has been hit
                gameBoard[row][col] = 2;
                

                hitCount++;

                if (hitCount == 17) {
                    alert("All enemy battleships have been defeated! You win!");
                }
                
            // if player clicks a square that's been previously hit, let them know
            } else if (gameBoard[row][col] > 1) {
                alert("Stop wasting your torpedos! You already fired at this location.");
            }		
        }
        e.stopPropagation();
    }