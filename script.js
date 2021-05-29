
let size = 30;

const container = document.querySelector('.column');

const row = document.createElement('div');
row.classList.add('row');
container.appendChild(row);

const rowCont = document.querySelector('.row');



function createRow(){
    let square = document.createElement('div');
    square.classList.add('square');
    //square.textContent="hello";
    return square;

}

function duplicateRow(){
    const rowEl = document.querySelector('.row');
    let cln = rowEl.cloneNode(true);
    return cln;

}
let htest = (700/size);


function styleSquare(squareElement,size, htest){
    squareElement.setAttribute('style', `width: ${700/size}px; height: ${htest}px;`)
    return squareElement;
}


for (let i=0; i<=(size-1); ++i){
    let squareIn = createRow();
    squareIn = styleSquare(squareIn, size, htest);
    rowCont.appendChild(squareIn);

}

for(let i=0; i<(size-1); ++i){
    container.appendChild(duplicateRow());
}




const squares = document.querySelectorAll('.square');

squares.forEach( (square) =>{
    square.addEventListener("mouseenter", function( event ) {
        // highlight the mouseenter target
        event.target.style.backgroundColor = "black";
      });
});


let test = document.querySelector(".square");

// This handler will be executed only once when the cursor
// moves over the unordered list
test.addEventListener("mouseenter", function( event ) {
  // highlight the mouseenter target
  event.target.style.backgroundColor = "black";
});

