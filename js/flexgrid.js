const parentElement = document.querySelector("#container");
const squareSize = 10;
const gap = 2;

// ---------------------------------------------- //

const flexGrid = document.createElement("div");
flexGrid.id = "flexgrid";
flexGrid.style.display = "grid";
flexGrid.style.gap = gap + "px";
flexGrid.style.alignItems = "stretch";
flexGrid.style.justifyItems = "stretch";
flexGrid.style.width = "min-content";
flexGrid.style.height = "min-content";
parentElement.appendChild(flexGrid);

genGrid = () => {
    let amountOfColumns = Math.floor(parseInt(getComputedStyle(parentElement).width) / (squareSize + gap));
    let amountOfRows = Math.floor(parseInt(getComputedStyle(parentElement).height) / (squareSize + gap));

    flexGrid.style.gridTemplateColumns = `repeat(${amountOfColumns}, ${squareSize}px)`;
    flexGrid.style.gridTemplateRows = `repeat(${amountOfRows}, ${squareSize}px)`;

    for (let y = 1; y <= amountOfRows; y++) {
        for (let x = 1; x <= amountOfColumns; x++) {
            let div = document.createElement("div");
            div.className = "square";
            div.id = `c${x}r${y}`;
            div.dataset.column = x;
            div.dataset.row = y;
            div.style.gridColumnStart = x;
            div.style.gridColumnEnd = x + 1;
            div.style.gridRowStart = y;
            div.style.gridRowEnd = y + 1;
            flexGrid.appendChild(div);
        }
    }

    flexGrid.style.position = "relative";
    flexGrid.style.left = "50%";
    flexGrid.style.top = "50%";
    flexGrid.style.transform = "translate(-50%, -50%)";
}

genGrid();
window.onresize = genGrid;