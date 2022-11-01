const body = document.querySelector("body")

createGrid(16)

const setGridButton = document.createElement("button")
setGridButton.textContent = "Change grid size"
body.classList.add("setGridButton")
body.appendChild(setGridButton)
setGridButton.addEventListener('click', () => {createGrid(prompt("Enter the number of squares you want per side"))});

function createGrid(size){

    const grid = document.createElement("div")
    grid.id = "grid"
    body.classList.add("grid")
    body.appendChild(grid)

    squareSize = 50

    for (i=1; i<=size**2; i++) {
        const square = document.createElement("div")
        square.style.height = `${(squareSize)}px`
        square.style.width = `${(squareSize)}px`
        square.style.backgroundColor = "grey"
        square.style.margin = 0
        square.style.border = 0
        square.addEventListener('mouseover', () => {square.style.backgroundColor = "black"})
        grid.classList.add("square")
        grid.appendChild(square)
    }

}