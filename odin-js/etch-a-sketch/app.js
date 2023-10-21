const gridContainer = document.getElementById("grid-container");

let gridSize = 16;

const createGrid = () => {
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    gridContainer.appendChild(grid);
  }
};

createGrid();

// const colorChange = (event) => {};
