const gridContainer = document.getElementById("grid-container");
const sizeValue = document.getElementById("grid-size-label");
const sizeRange = document.getElementById("grid-size");
const btnReset = document.getElementById("reset");
const colorPicker = document.getElementById("color");
const btnRandom = document.getElementById("random-color");

let gridSize = 16;
let isMouseDown = false;
let userRandomColor = false;

const updateGridSize = (newGridSize) => {
  gridSize.innerHTML = newGridSize;
  sizeValue.innerHTML = `${newGridSize} x ${newGridSize}`;
};

btnRandom.addEventListener("click", () => {
  userRandomColor = !userRandomColor;
});

colorPicker.addEventListener("input", (event) => {
  userRandomColor = false;
});

const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

const applyColor = (color) => {
  document.querySelectorAll(".grid").forEach((grid) => {
    grid.style.backgroundColor = color;
  });
};

// Reset Etch-A-Sketch
btnReset.addEventListener("click", () => {
  gridContainer.innerHTML = "";

  createGrid(gridSize);
});

document.addEventListener("mousedown", () => {
  isMouseDown = true;
});

document.addEventListener("mouseup", () => {
  isMouseDown = false;
});

const createGrid = () => {
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    gridContainer.appendChild(grid);

    grid.addEventListener("mouseover", () => {
      if (isMouseDown) {
        const selectedColor = userRandomColor
          ? getRandomColor()
          : colorPicker.value;
        grid.style.backgroundColor = selectedColor;
      }
    });
  }
};

createGrid();
