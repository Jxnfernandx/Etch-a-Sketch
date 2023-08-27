const sketchBox = document.getElementById("sketch-container");
let isDrawing = false;

function createDivs() {
    for (let i = 0; i < 130; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("sketch-cell");
        sketchBox.appendChild(newDiv);
    }
}

sketchBox.addEventListener("mousedown", () => {
    isDrawing = true;
});

sketchBox.addEventListener("click", (event) => {
    if (event.target.classList.contains("sketch-cell")) {
        event.target.style.backgroundColor = "black";
    }
});


sketchBox.addEventListener("mouseup", () => {
    isDrawing = false;
});

sketchBox.addEventListener("mousemove", (event) => {
    if (isDrawing) {
        if (event.target.classList.contains("sketch-cell")) {
            event.target.style.backgroundColor = "black";
        }
    }
});

createDivs();

// Reset button functionality
const resetButton = document.querySelector(".controls input[type='button']");
resetButton.addEventListener("click", () => {
    const sketchCells = document.querySelectorAll(".sketch-cell");
    sketchCells.forEach(cell => {
        cell.style.backgroundColor = "transparent";
    });
});

