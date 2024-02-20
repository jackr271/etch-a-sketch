let squareDimension = 16;
buildGrid(squareDimension);

const resizeButton = document.querySelector('#resize');
const clearButton = document.querySelector('#clear');

resizeButton.addEventListener('click', ()=> {
    let number = -1;
    while (!Number.isInteger(+number) || !(1 <= +number && +number <= 100)) {
        number = prompt("Please enter a new grid dimension between 1 and 100");
    }
    buildGrid(number);
});

function clearGrid (grid) {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

function buildGrid (sideLength) {
    const grid = document.querySelector('.box-grid');

    clearGrid(grid);

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

