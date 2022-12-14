const body = document.querySelector("body")

const grid = document.createElement("div")
grid.id = "grid"
body.classList.add("grid")
body.appendChild(grid)

let squares = new Array()

setGridSize(16)

const clearButton = document.querySelector("#clearButton")
clearButton.addEventListener('click', () => {
    squares.forEach(square => {square.style.backgroundColor = "white"});
});

const changeGridSizeButton = document.querySelector("#changeGridSizeButton")
changeGridSizeButton.addEventListener('click', () => {
    removeAllChildNodes(grid)
    let newSize = prompt("Enter the number of squares you want per side (between 1-100)")
    while (newSize < 1 || newSize > 100) {
        newSize = prompt("Enter the number of squares you want per side (between 1-100)")
    }
    setGridSize(newSize)
});

function setGridSize(size){

    const squareSize = 800/size

    for (i=1; i<=size**2; i++) {
        const square = document.createElement("div")
        square.style.height = `${(squareSize)}px`
        square.style.width = `${(squareSize)}px`
        square.style.backgroundColor = "white"
        square.style.margin = 0
        square.style.border = 0
        square.addEventListener('mouseover', () => {square.style.backgroundColor = "#3882F6"})
        grid.classList.add("square")
        grid.appendChild(square)
        squares.push(square)
    }

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}