let squareDimension = 16;

const column = document.createElement('div');
column.className = 'column';

const square = document.createElement('div');
square.className = 'square';

const grid = document.querySelector('.box-grid');
for (let i = 0; i < squareDimension; i++) {
    const column = document.createElement('div');
    column.className = 'column';
    for (let j = 0; j < squareDimension; j++) {
        const square = document.createElement('div');
        square.className = 'square';
        column.appendChild(square);
    }
    grid.appendChild(column);
}