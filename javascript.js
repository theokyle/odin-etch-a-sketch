function createGrid(height, width) {
    const container = document.querySelector(".container");
    let row = document.createElement("div");
    container.appendChild(row);
    
    for (x=0; x<height; x++) {
        let row = document.createElement("div");
        container.appendChild(row);
        row.className = "row";

        for (y=0; y<width; y++){
            let box = document.createElement("div");
            row.appendChild(box);
            box.className = "box";
        }
    }    

}

createGrid(4,4);