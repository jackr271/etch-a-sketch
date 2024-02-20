let squareDimension = 16;
buildGrid(squareDimension);

const resizeButton = document.querySelector('#resize');
const clearButton = document.querySelector('#clear');
const boxGrid = document.querySelector('.box-grid');

let mouseDown = false;

/*boxGrid.addEventListener = ('mousedown', ()=> {
    console.log('down');
    mouseDown = true;
});
boxGrid.addEventListener = ('mouseup', ()=> {
    console.log('up');
    mouseDown = false;
});*/


resizeButton.addEventListener('click', ()=> {
    let number = -1;
    while (!Number.isInteger(+number) || !(1 <= +number && +number <= 100)) {
        number = prompt("Please enter a new grid dimension between 1 and 100");
    }
    buildGrid(number);
});

clearButton.addEventListener('click', ()=> {
    squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    });
})

document.addEventListener('mousedown', () => {
    mouseDown = true;
});

document.addEventListener('mouseup', () => {
    mouseDown = false;
});

boxGrid.addEventListener('mouseover', (Event) => {
    if (mouseDown) {
        let target = Event.target;
        if (target.classList.contains('square')) {
        darkenSquare(target);
        }
    }
});

function emptyGrid (grid) {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

function buildGrid (sideLength) {
    const grid = document.querySelector('.box-grid');

    emptyGrid(grid);

    for (let i = 0; i < sideLength; i++) {
        const column = buildColumn(sideLength);
        grid.appendChild(column);
    }
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

function darkenSquare (square) {
    const currentColor = getComputedStyle(square).getPropertyValue('background-color');
    if (currentColor.substring(0, 4) != 'rgba') {
        return;
    } 
    else if (currentColor.at(-2) === '0') {
        square.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    }
    else {
        square.style.backgroundColor = `rgba(0, 0, 0, ${+currentColor.at(-2)/10 + 0.1})`;
    }
}