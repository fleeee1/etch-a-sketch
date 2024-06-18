document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const slider = document.getElementById('cellSizeSlider');
    const gridSizeDisplay = document.getElementById('grid-size');
    const colorOptions = document.getElementsByName('colorMode');
    let isMouseDown = false;
    let colorMode = 'black';

    function updateGridSizeDisplay() {
        const gridSize = parseInt(slider.value); // Use the slider value directly
        gridSizeDisplay.textContent = `${gridSize}x${gridSize}`;
    }

    function updateGridSize(gridSize) {
        container.innerHTML = ''; // Clear existing grid
        const cellSize = container.clientWidth / gridSize; // Calculate cell size based on grid size
        makeGrid(gridSize, gridSize, cellSize);
    }

    slider.addEventListener('input', () => {
        updateGridSizeDisplay();
        updateGridSize(slider.value);
    });

    colorOptions.forEach(option => {
        option.addEventListener('change', (event) => {
            colorMode = event.target.value;
        });
    });

    updateGridSizeDisplay();
    updateGridSize(slider.value);

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
                        cell.style.backgroundColor = colorMode === 'black' ? 'black' : getRandomColor();
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
                    cell.style.backgroundColor = colorMode === 'black' ? 'black' : getRandomColor();
                    cell.classList.add('clicked');
                });
            }
        }
    }

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    document.addEventListener('mousedown', function(event) {
        if (!container.contains(event.target)) {
            isMouseDown = false;
        } else {
            isMouseDown = true;
        }
    });

    document.addEventListener('mouseup', function() {
        isMouseDown = false;
    });

    container.addEventListener('mouseenter', function() {
        isMouseDown = false;
    });

    container.addEventListener('mouseleave', function() {
        isMouseDown = false;
    });

    window.addEventListener('resize', function() {
        isMouseDown = false;
    });
});
