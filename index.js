// Getting the container element
const container  = document.querySelector('.container');
const numberOfGrid = document.querySelector(".number-of-grid");

const CONTAINER_SIZE = 500;

// Creating the grid
function createGrid()
{
    // Setting the count of the grid
    let gridCount = 16;

    // Setting the size of the grid
    const gridSize = CONTAINER_SIZE / gridCount;

    // For the rows
    for ( let i = 0; i < gridCount * gridCount; i ++)
    {
        // Ok creating an element for each grid size
        let gridElement = document.createElement('div');

        // Adding class to it
        gridElement.classList.add('grid-element');

        // Ok so first we need to set the custom width and height of the grid element
        gridElement.style.width = `${gridSize - 5}px`;
        gridElement.style.height = `${gridSize - 5}px`;

        // Adding a hover property to the element
        gridElement.addEventListener("mouseover", () => {
            gridElement.style.backgroundColor = "blue";
        })

        // Now appending the child to the container
        container.appendChild(gridElement);
    }
}

createGrid();