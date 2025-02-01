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

