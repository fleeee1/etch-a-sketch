document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('cellSizeSlider');
    const gridSizeDisplay = document.getElementById('grid-size');

    function updateGridSizeDisplay() {
        const gridSize = Math.floor(800 / slider.value); //calculates grid size
        gridSizeDisplay.textContent = `${gridSize}x${gridSize}`;
    }

    function updateGridSize(cellSize) {
        container.innerHTML = ''; //clear existing grid
        const gridSize = Math.floor(800 / cellSize)
        makeGrid(gridSize, gridSize, cellSize);
    }

    slider.addEventListener('input', () => {
        updateGridSizeDisplay();
        updateGridSize(slider.value);
    });

    // Initialize the grid with the default slider value
    updateGridSizeDisplay();
    updateGridSize(slider.value);
});

const container = document.getElementById('container');
let isMouseDown = false;








function makeGrid(rows, cols, cellSize) {
    container.innerHTML = '';

    for (let i = 0; i < rows; i++){
        const row = document.createElement('div');
        row.classList.add('row'); 
        container.appendChild(row);

        for (let j = 0; j < cols; j++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = cellSize + 'px'; // Set width
            cell.style.height = cellSize + 'px'; // Set height
            row.appendChild(cell);

            cell.addEventListener('mouseover', function() {
                if (!cell.classList.contains('clicked') && isMouseDown) {
                    cell.style.backgroundColor = 'black';
                    cell.classList.add('clicked');
                } else if (!cell.classList.contains('clicked')) {
                    cell.style.backgroundColor = 'rgb(187 207 240)'
                }
            });

            cell.addEventListener('mouseout', function() {
                if (!cell.classList.contains('clicked')) {
                    cell.style.backgroundColor = '';   
                }
            });
            
            cell.addEventListener('click', function() {
                cell.style.backgroundColor = 'black';
                cell.classList.add('clicked');
            });
        }
    }
}

document.addEventListener('mousedown', function() {
    isMouseDown = true;
});

document.addEventListener('mouseup', function() {
    isMouseDown = false;
});