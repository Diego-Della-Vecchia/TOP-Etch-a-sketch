let changeGridSize = document.querySelector(".gridSize");

let grid = document.querySelector(".grid");
let currentGrid;

let showGridSize = document.querySelector(".currentGrid");

function updateGrid() {

    currentGrid = changeGridSize.value;

    showGridSize.innerText = currentGrid + " x " + currentGrid;

    let gridElement;

    for (let i = 0; i < currentGrid * currentGrid; i++) {
        gridElement = document.createElement("div");
        gridElement.classList.add("gridElement");
        gridElement.style.width = 100 / currentGrid + "%";
        gridElement.style.height = 100 / currentGrid + "%";
        grid.appendChild(gridElement);
    }
}

updateGrid();

changeGridSize.addEventListener('input', updateGrid);

console.log("hello")