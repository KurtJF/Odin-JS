const gridContainer = document.getElementById("grid-container");
const btnReset = document.getElementById("reset");
const colorPicker = document.getElementById("color");

let gridSize = 16;
let isMouseDown = false;

const updateGridSize = (newGridSize) => {
  gridSize.innerHTML = newGridSize;
  sizeValue.innerHTML = `${newGridSize} x ${newGridSize}`;
};

colorPicker.addEventListener("input", (event) => {
  const selectedColor = event.target.value;
  document.querySelector(".grid").forEach((grid) => {
    grid.style.backgroundColor = selectedColor;
  });
});

// const rangeSize = () => {
//   sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
// sizeSlider.onchange = (e) => changeSize(e.target.value)
// }

// Reset Etch-A-Sketch
btnReset.addEventListener("click", () => {
  gridContainer.innerHTML = "";

  createGrid(gridSize);
});

const createGrid = () => {
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    gridContainer.appendChild(grid);

    grid.addEventListener("mousedown", () => {
      isMouseDown = true;
      grid.style.backgroundColor = colorPicker.value;
    });

    grid.addEventListener("mouseover", () => {
      isMouseDown = true;
      grid.style.backgroundColor = colorPicker.value;
    });
  }
};

createGrid();
