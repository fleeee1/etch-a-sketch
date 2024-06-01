// create Div and refer to container //
const container = document.getElementById('container');

function makeGrid(rows, cols) {
    for (let i = 0; i < rows; i++){
        const row = document.createElement('div');
        row.classList.add('row'); 
        container.appendChild(row);

        for (let j = 0; j < cols; j++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);

            cell.addEventListener('mouseover', function() {
                if (!cell.classList.contains('clicked')) {
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

makeGrid(16, 16);