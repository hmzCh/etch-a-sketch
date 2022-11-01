const body = document.querySelector("body")
const squares = new Array(16)

createGrid(16)

const changGrideSizeButton = document.querySelector("#changGrideSizeButton")
changGrideSizeButton.addEventListener('click', () => {
    createGrid(prompt("Enter the number of squares you want per side"))
});

const clearButton = document.querySelector("#clearButton")
clearButton.addEventListener('click', () => {
    squares.forEach(square => {square.style.backgroundColor = "grey"});
});

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
        squares.push(square)
    }

}