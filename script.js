function createGrid() {
	//Create row container for block
	for (let i = 0; i < gridSize; i++) {
		horizontal = document.createElement('div');
		horizontal.classList.add('horizontal');
		//Create block
		for (let j = 0; j < gridSize; j++) {
			block = document.createElement('div');
			block.classList.add('block');
			horizontal.appendChild(block);
		}
		container.appendChild(horizontal);
	}
	//Hover and Touch Drag functionality
	const grid = document.querySelectorAll('.block');
	grid.forEach(block => {
		block.addEventListener('mouseover', () => {
			block.classList.add('block-hover');
		});
		block.addEventListener('touchmove', () => {
			block.classList.add('block-hover');
		});
	});
}

function deleteGrid() {
	const element = document.getElementsByClassName('horizontal');
	//Delete every block of existing rows
	while (element.length > 0)
		element[0].parentNode.removeChild(element[0]);
}

function restartGrid() {
	button.addEventListener('click', () => {
		// User inputted grid size
		gridSize = prompt('Enter the size of the new grid [1 - 100].');
		if (gridSize != null && gridSize > 0 && gridSize <= 100) {
			sizeDisplay.textContent = `${gridSize} x ${gridSize}`;
			deleteGrid();
			createGrid();
		}
	});
}
//MAIN
let button = document.querySelector('img');
let container = document.querySelector('.container');
let sizeDisplay = document.querySelector('.size');
let block; // Blocks on the grid.
let horizontal; // Row of block
let gridSize = 50; //Initial height and width of the grid

createGrid();
restartGrid();
//Restart functionality


