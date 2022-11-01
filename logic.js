const body = document.querySelector("body")

const grid = document.createElement("div")
grid.id = "grid"
body.classList.add("grid")
body.appendChild(grid)

for (i=1; i<=256; i++) {
    const square = document.createElement("div")
    square.style.height = "50px"
    square.style.width = "50px"
    square.style.backgroundColor = "grey"
    square.style.margin = 0
    square.style.border = 0
    square.addEventListener('mouseover', () => {square.style.backgroundColor = "black"})
    grid.classList.add("square")
    grid.appendChild(square)
}

const setGridButton = document.createElement("button")
setGridButton.textContent = "Change grid size"
body.classList.add("setGridButton")
body.appendChild(setGridButton)
setGridButton.addEventListener('click', () => {changeGridSize()});

function changeGridSize() {
    const size = prompt("Enter the number of squares you want per side");
    
}