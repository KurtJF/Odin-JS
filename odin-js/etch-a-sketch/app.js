// DOM Elements
const gridContainer = document.getElementById("grid-container");
const sizeValue = document.getElementById("grid-size-label");
const sizeRange = document.getElementById("grid-size");
const btnReset = document.getElementById("reset");
const colorPicker = document.getElementById("color");
const btnRandom = document.getElementById("random-color");

const defaultSize = 16;

let gridSize = 16;
let isMouseDown = false;
let userRandomColor = false;

// GRID Size
const updateGridSize = (newGridSize) => {
  gridSize = newGridSize;
  sizeValue.innerHTML = `${gridSize} x ${gridSize}`;
};

sizeRange.addEventListener("input", (event) => {
  const newGridSize = event.target.value;
  clear();
  updateGridSize(newGridSize);
  createGrid();
});

// COLOR Update
const updateColor = (color) => {
  userRandomColor = false;

  if (color === "random") {
    userRandomColor = true;
    color = getRandomColor();
  }

  document.querySelectorAll("grid").forEach((grid) => {
    grid.style.backgroundColor = color;
  });
};

btnRandom.addEventListener("click", () => {
  updateColor("random");
});

colorPicker.addEventListener("input", (event) => {
  updateColor(event.target.value);
});

const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

// RESET Button
btnReset.addEventListener("click", () => {
  clear();
  createGrid(gridSize);
});

// CLEAR
const clear = () => (gridContainer.innerHTML = "");

document.addEventListener("mousedown", () => {
  isMouseDown = true;
});

document.addEventListener("mouseup", () => {
  isMouseDown = false;
});

// GRID
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
