let canvas = document.querySelector("#canvas");
let colorPicker = document.querySelector("#colorPicker");
let pencilButton = document.querySelector("#pencilButton");
let eraserButton = document.querySelector("#eraserButton");
let rainbowButton = document.querySelector("#rainbowButton");
let shadowButton = document.querySelector("#shadowButton");
let rangeSizeSelector = document.querySelector("#rangeSizeSelector");
let rangeSizeSelectorButton = document.querySelector("#rangeSizeSelectorButton");
let rangeValue = document.querySelector("#rangeValue");

colorPicker.addEventListener("change", (event) => {currentColor = `${event.target.value}`; disableModes();});
pencilButton.addEventListener("click", () => {currentColor= colorPicker.value; disableModes();});
eraserButton.addEventListener("click", () => {currentColor = "#FFFFFF"; disableModes();});
rangeSizeSelectorButton.addEventListener("click", () => {createCanvas(rangeSizeSelector.value);});
rangeSizeSelector.addEventListener("input", () => {rangeValue.textContent = rangeSizeSelector.value});
rainbowButton.addEventListener("click", () => {rainbowMode = true});
shadowButton.addEventListener("click", () => {shadowMode = true});

let currentColor = colorPicker.value;
let shadowMode = false;
let rainbowMode = false;

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
    pixel.style.backgroundColor = "rgb(255,255,255)";

    pixel.addEventListener("mousedown", (event) => {paintPixel(event)});
    pixel.addEventListener("mouseenter", (event) => {paintPixel(event)});

    return pixel;
}

function paintPixel(event){
    if(event.buttons > 0){
        if(rainbowMode){
            event.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
        }else if(shadowMode){
            event.target.style.backgroundColor = shadowColor(event.target.style.backgroundColor);
        }else{
            event.target.style.backgroundColor = currentColor;
        }
    }
}

function shadowColor(color){
    color = color.slice(color.indexOf("(")+1, color.indexOf(")"));
    colors = color.split(",");
    colors = colors.map((x) => parseInt(x.trim(),10));
    colors = colors.map((x) => {x = x - 25; if(x < 0) x = 0; return x;});
    return `rgb(${colors[0]},${colors[1]},${colors[2]})`;
}

function disableModes(){
    rainbowMode = false;
    shadowMode = false;
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