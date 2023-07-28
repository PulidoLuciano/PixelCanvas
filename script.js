let canvas = document.querySelector("#canvas");

function createColumn(){
    let column = document.createElement("div");
    column.classList.add("column");
    return column;
}

function createPixel(){
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
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

createCanvas(16);