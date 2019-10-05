document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
	cells:[
		{row:0,col:0,isMine:0,hidden:true},
		{row:0,col:1,isMine:0,hidden:true},
		{row:0,col:2,isMine:0,hidden:true},

		{row:1,col:0,isMine:0,hidden:true},
		{row:1,col:1,isMine:0,hidden:true},
		{row:1,col:2,isMine:0,hidden:true},

		{row:2,col:0,isMine:1,hidden:true},
		{row:2,col:1,isMine:0,hidden:true},
		{row:2,col:2,isMine:1,hidden:true}
	]
};

// hidden true

function startGame () {
	for(let i=0;i<board.cells.length;i++){
		console.log(i)
		let cell = board.cells[i]
		cell.surroundingMines = countSurroundingMines(cell);
	}

  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

	const unmarkedMine = 0;
	const numOfHiddenCells = 0;
	board.cells.forEach(cell=>{
		// Check if any cells contains isMine && !isMarked
		// Check if any cells are still hidden
		if (cell.isMine && !isMarked ) unmarkedMine++;
		if (cell.hidden) numOfHiddenCells++;
	});

	if(unmarkedMine===0 && numOfHiddenCells===0){
		
	}
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
	console.log(cell);
	// Get surrounding cells
	var surrounding = lib.getSurroundingCells(cell.row, cell.col)

	// If cell has mine add to counter
	let numOfSurroundingMines = 0;
	surrounding.forEach(cell=>{
		if(cell.isMine) numOfSurroundingMines++;
	});
	return numOfSurroundingMines;
}




document.addEventListener('click',e=>{
	checkForWin();
	console.log(e)
});

document.addEventListener('contextmenu',e=>{
	e.preventDefault();
	checkForWin();
	console.log(e)
});