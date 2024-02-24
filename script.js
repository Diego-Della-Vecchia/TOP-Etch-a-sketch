let changeGridSize = document.querySelector(".gridSize");

let grid = document.querySelector(".grid");
let currentGrid;

let showGridSize = document.querySelector(".currentGrid");

 let counter = 0; //how many times a grid has been created

function updateGrid() {

    currentGrid = changeGridSize.value;

    showGridSize.innerText = currentGrid + " x " + currentGrid;

    let gridElement;

   
    counter ++;
    console.log(counter+" times");
    let gridElementsList = document.querySelectorAll(".gridElement");

    if (counter > 1) {
        
         grid.innerHTML = "";
        
    }
    for (let i = 0; i < currentGrid * currentGrid; i++) {
        
        gridElement = document.createElement("div");
        gridElement.style.width = 500 / currentGrid + "px";
        gridElement.style.height = 500 / currentGrid + "px";
        gridElement.classList.add("gridElement");
        grid.appendChild(gridElement);
        gridElement.addEventListener("click", changeColor)
    }
}

updateGrid();

changeGridSize.addEventListener('input', updateGrid);

let colorMode = document.querySelector(".colorMode");

let rainbowMode = document.querySelector(".rainbowMode");

let mode;

colorMode.addEventListener("click", () => {
    mode = "color"
    colorMode.style.backgroundColor = "#ccc";
});

rainbowMode.addEventListener("click", () => {
    mode = "rainbow"
    
    rainbowMode.style.backgroundColor = "#ccc";
    console.log(mode);
});


let colorPicker = document.querySelector(".colorPicker");

let color = colorPicker.value;


function changeColor() {}