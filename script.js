let canvas = document.querySelector("#canvas");

function createColumn(){
    let column = document.createElement("div");
    column.classList.add("column");
    return column;
}

function createPixel(){
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");

    pixel.addEventListener("mousedown", (event) => {if(event.buttons > 0) pixel.style.backgroundColor = currentColor});
    pixel.addEventListener("mouseenter", (event) => {if(event.buttons > 0) pixel.style.backgroundColor = currentColor});

    return pixel;
}

function createCanvas(size){
    let pixel = createPixel();

    for(let i = 0; i < size; i++){
        let column = createColumn();
        
        for(let j = 0; j < size; j++){
            let pixel = createPixel();
            
            column.appendChild(pixel);
        }

        canvas.appendChild(column);
    }
}

let currentColor = "#FF0000";

createCanvas(16);