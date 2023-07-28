let canvas = document.querySelector("#canvas");
let colorPicker = document.querySelector("#colorPicker");
let pencilButton = document.querySelector("#pencilButton");
let eraserButton = document.querySelector("#eraserButton");
let rainbowButton = document.querySelector("#rainbowButton");
let shadowButton = document.querySelector("#shadowButton");
let rangeSizeSelector = document.querySelector("#rangeSizeSelector");
let rangeSizeSelectorButton = document.querySelector("#rangeSizeSelectorButton");
let rangeValue = document.querySelector("#rangeValue");

colorPicker.addEventListener("change", (event) => {currentColor = `${event.target.value}`});
pencilButton.addEventListener("click", () => {currentColor= colorPicker.value});
eraserButton.addEventListener("click", () => {currentColor = "#FFFFFF"});
rangeSizeSelectorButton.addEventListener("click", () => {createCanvas(rangeSizeSelector.value);});
rangeSizeSelector.addEventListener("input", () => {rangeValue.textContent = rangeSizeSelector.value})

let currentColor = colorPicker.value;

function createColumn(){
    let column = document.createElement("div");
    column.classList.add("column");
    return column;
}

function createPixel(size){
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");

    pixelSize = `${Math.floor(canvas.clientHeight / size)}px`

    pixel.style.height = pixelSize;
    pixel.style.width = pixelSize;

    pixel.addEventListener("mousedown", (event) => {if(event.buttons > 0) pixel.style.backgroundColor = currentColor});
    pixel.addEventListener("mouseenter", (event) => {if(event.buttons > 0) pixel.style.backgroundColor = currentColor});

    return pixel;
}

function createCanvas(size){
    let pixel = createPixel();

    canvas.innerHTML = "";

    for(let i = 0; i < size; i++){
        let column = createColumn();
        
        for(let j = 0; j < size; j++){
            let pixel = createPixel(size);
            
            column.appendChild(pixel);
        }

        canvas.appendChild(column);
    }
}

console.log(colorPicker);
createCanvas(16);