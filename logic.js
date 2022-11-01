const body = document.querySelector("body")

const theGrid = document.createElement("div")
body.classList.add("theGrid")
body.appendChild(theGrid)

const squares = new Array(16)

for (i=1; i<=16; i++) {
    const square = document.createElement("div")
    theGrid.classList.add("square")
    theGrid.appendChild(square)
    squares.push(square)
}