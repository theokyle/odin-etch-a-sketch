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
            box.addEventListener("mouseover", () => {
                box.classList.add("fill");
            })
        }
    }    

}

const refreshButton = document.querySelector("button");
refreshButton.addEventListener("click", () =>{
    let container = document.querySelector(".container");
    container.remove();
    let newContainer = document.createElement("div");
    let body = document.querySelector("body");
    body.appendChild(newContainer);
    newContainer.className = "container";
    let height = prompt("What is the height of the new grid?");
    let width = prompt("What is the width of the new grid?");
    createGrid(height,width);
})

createGrid(4,4);