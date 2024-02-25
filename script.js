let changeGridSize = document.querySelector(".gridSize");

let grid = document.querySelector(".grid");
let currentGrid;

let showGridSize = document.querySelector(".currentGrid");

let colorPicker = document.querySelector(".colorPicker");

let color;

 let counter = 0; //how many times a grid has been created

function updateGrid() {

    currentGrid = changeGridSize.value;

    showGridSize.innerText = currentGrid + " x " + currentGrid;

    let gridElement;
  
    counter ++;

    if (counter > 1) {
        
         grid.innerHTML = "";
        
    }
    for (let i = 0; i < currentGrid * currentGrid; i++) {
        
        gridElement = document.createElement("div");
        gridElement.style.width = 500 / currentGrid + "px";
        gridElement.style.height = 500 / currentGrid + "px";
        gridElement.classList.add("gridElement");
        grid.appendChild(gridElement);
        gridElement.addEventListener("mousedown", changeColor)
        gridElement.addEventListener("mouseover", changeColor)
    }
}

updateGrid();

changeGridSize.addEventListener('input', updateGrid);

let colorMode = document.querySelector(".colorMode");

let rainbowMode = document.querySelector(".rainbowMode");

let eraser = document.querySelector(".eraser");

let hoverToggle = document.querySelector(".hover");

let clear = document.querySelector(".clear");

let gridElementsList = document.querySelectorAll(".gridElement");

let mode = "color";

let hover = true;

colorMode.addEventListener("click", () => {
    mode = "color"
    rainbowMode.style.backgroundColor = "#fff";
    colorMode.style.backgroundColor = "#ccc";
    eraser.style.backgroundColor = "#fff";
});

rainbowMode.addEventListener("click", () => {
    mode = "rainbow"
    
    colorMode.style.backgroundColor = "#fff";
    rainbowMode.style.backgroundColor = "#ccc";
    eraser.style.backgroundColor = "#fff";
    
});

eraser.addEventListener("click", () => {

    colorMode.style.backgroundColor = "#fff";
    rainbowMode.style.backgroundColor = "#fff";
    eraser.style.backgroundColor = "#ccc";
    mode = "eraser"
});

let i = 2;

hoverToggle.addEventListener("click", () => {

    if(i%2){
        hoverToggle.style.backgroundColor = "#ccc";
        hover = true;
    }
    else{
        hoverToggle.style.backgroundColor = "#fff";
        hover = false;
    }
    i++;
    });

clear.addEventListener("click", () => {
    grid.innerHTML = ""; 
    updateGrid();
    });



function changeColor(e) {
    
    if (hover == true) {
      
        color = colorPicker.value;
        
        if (mode == "color") {
        e.target.style.backgroundColor = color;
        }

        else if (mode == "rainbow") {
            e.target.style.backgroundColor = `rgb(${rainbow()}, ${rainbow()}, ${rainbow()})`;
        }

        else if (mode == "eraser") {
            e.target.style.backgroundColor = "#fff";
        }
    }

    if (hover == false && e.type == "mousedown") {
        
        color = colorPicker.value;
        
        if (mode == "color") {
        e.target.style.backgroundColor = color;
        }

        else if (mode == "rainbow") {
            e.target.style.backgroundColor = `rgb(${rainbow()}, ${rainbow()}, ${rainbow()})`;
        }

        else if (mode == "eraser") {
            e.target.style.backgroundColor = "#fff";
        }
    }

    
}


function rainbow() {
   return Math.floor(Math.random() * 255) + 1;
}