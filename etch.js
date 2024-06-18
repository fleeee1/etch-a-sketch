document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('cellSizeSlider');
    const gridSizeDisplay = document.getElementById('grid-size');
    const containerSize = 800; // Size of the container in pixels

    function updateGridSizeDisplay() {
        const gridSize = parseInt(slider.value); // Get slider value as integer
        gridSizeDisplay.textContent = `${gridSize}x${gridSize}`;
    }

    function updateGridSize(cellCount) {
        container.innerHTML = ''; // Clear existing grid
        const cellSize = containerSize / cellCount; // Calculate cell size based on the number of cells
        makeGrid(cellCount, cellCount, cellSize);
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
    container.innerHTML = ''; // Clear existing grid

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = cellSize + 'px'; // Set width
            cell.style.height = cellSize + 'px'; // Set height
            container.appendChild(cell);

            cell.addEventListener('mouseover', function () {
                if (!cell.classList.contains('clicked') && isMouseDown) {
                    cell.style.backgroundColor = 'black';
                    cell.classList.add('clicked');
                } else if (!cell.classList.contains('clicked')) {
                    cell.style.backgroundColor = 'rgb(187 207 240)';
                }
            });

            cell.addEventListener('mouseout', function () {
                if (!cell.classList.contains('clicked')) {
                    cell.style.backgroundColor = '';
                }
            });

            cell.addEventListener('click', function () {
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

window.addEventListener('resize', function() {
    isMouseDown = false;
});