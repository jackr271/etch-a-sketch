let squareDimension = 16;
buildGrid(squareDimension);


function buildGrid (sideLength) {
    const grid = document.querySelector('.box-grid');

    for (let i = 0; i < sideLength; i++) {
        const column = buildColumn(sideLength);
        grid.appendChild(column);
    }

    return grid;
}

function buildColumn (length) {
    const column = document.createElement('div');
    column.className = 'column';

    for (let j = 0; j < length; j++) {
        const square = document.createElement('div');
        square.className = 'square';
        column.appendChild(square);
    }

    return column;
}