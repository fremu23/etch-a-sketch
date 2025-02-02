const gridContainer = document.getElementById("grid-container");

const row = 16;
const col = 16;

const containerSize = 500; // 500px in width and height
const cellSize = containerSize / row;

for (i=0; i < row*col;i++){
    const cell = document.createElement("div");
    cell.classList.add("cell"); 
    cell.style.width = `${cellSize}px`;

    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "lightblue";
    })

    gridContainer.appendChild(cell);
}


function changeGrid(size){
    gridContainer.innerHTML = '';

    newCellSize = containerSize / size;

    for (i=0; i < size*size;i++){
        const cell = document.createElement("div");
        cell.classList.add("cell"); 
        cell.style.width = `${newCellSize}px`;
    
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "lightblue";
        })
    
        gridContainer.appendChild(cell);
    }
}

// Change Grid Size Handling
const changeGridSize = document.getElementById("grid-change-btn");

changeGridSize.addEventListener("click", () => {
    let numRows;
    
    while (true) {
        numRows = prompt("How many rows in the grid? (1-100)");

        if (numRows == null){
            return;
        }

        numRows = parseInt(numRows);

        if (numRows > 100 || numRows < 1){
            alert("Please enter a number between 1 and 100.");
        } else {
            break;       
        }
    }

    changeGrid(numRows)
})