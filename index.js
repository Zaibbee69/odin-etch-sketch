// Getting the container element
const container = document.querySelector('.container');
const numberOfGrid = document.querySelector(".number-of-grid");

const CONTAINER_SIZE = 500;

createGrid();

numberOfGrid.addEventListener("click", () => {
    let gridNumber = prompt("What's the Number Of Grid? Choose Between 1 to 100");
    if (gridNumber < 1 || gridNumber > 100 || isNaN(gridNumber)) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }
    container.innerHTML = "";
    createGrid(gridNumber);
});

// Creating the grid
function createGrid(gridCount = 16) {

    // Resetting the Grid playground
    container.innerHTML = "";

    // Setting the size of the grid
    const gridSize = CONTAINER_SIZE / gridCount;

    // Creating the grid elements
    for (let i = 0; i < gridCount * gridCount; i++) {
        
        // Creating an element for each grid size
        let gridElement = document.createElement('div');

        // Adding class to it
        gridElement.classList.add('grid-element');

        // Setting the custom width and height of the grid element
        gridElement.style.width = `${gridSize}px`;
        gridElement.style.height = `${gridSize}px`;

        // Adding a hover property to the element
        gridElement.addEventListener("mouseover", () => {
            gridElement.style.backgroundColor = "blue";
        });

        // Appending the element to the container
        container.appendChild(gridElement);
    }
}