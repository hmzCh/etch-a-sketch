const body = document.querySelector("body")

const grid = document.createElement("div")
grid.id = "grid"
body.classList.add("grid")
body.appendChild(grid)

const squares = new Array(16)

for (i=1; i<=256; i++) {
    const square = document.createElement("div")
    square.style.height = "50px"
    square.style.width = "50px"
    square.style.backgroundColor = "grey"
    square.style.margin = 0
    square.style.border = 0
    grid.classList.add("square")
    grid.appendChild(square)
    squares.push(square)
}