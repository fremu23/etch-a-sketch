const gridContainer = document.getElementById("grid-container");

let row = 16;
let col = 16;

for (i=0; i < row*col;i++){
    const cell = document.createElement("div");
    cell.textContent = i + 1;
    gridContainer.appendChild(cell);
}