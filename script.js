
let size = 16;

const container = document.querySelector('.column');

const row = document.createElement('div');
row.classList.add('row');
container.appendChild(row);

const rowCont = document.querySelector('.row');



function createRow(){
    let square = document.createElement('div');
    square.classList.add('square');
    return square;

}

function duplicateRow(){
    const rowEl = document.querySelector('.row');
    let cln = rowEl.cloneNode(true);
    return cln;

}


function styleSquare(squareElement,size, htest){
    squareElement.setAttribute('style', `width: ${700/size}px; height: ${htest-2}px;`)
    return squareElement;
}


function createGrid(size){

    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);

    const rowCont = document.querySelector('.row');
    let htest = (700/size);

    for (let i=0; i<=(size-1); ++i){
        let squareIn = createRow();
        squareIn = styleSquare(squareIn, size, htest);
        rowCont.appendChild(squareIn);
    
    }
    
    for(let i=0; i<(size-1); ++i){
        container.appendChild(duplicateRow());
    }
}

function removeGrid(){
    const rows = document.querySelectorAll('.row');

    rows.forEach( (row) =>{
        row.remove();
    });
}





let htest = (700/size);

for (let i=0; i<=(size-1); ++i){
    let squareIn = createRow();
    squareIn = styleSquare(squareIn, size, htest);
    rowCont.appendChild(squareIn);

}

for(let i=0; i<(size-1); ++i){
    container.appendChild(duplicateRow());
}




function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


  let color="rainbow";

/*
    const selectElement = document.querySelector('#mySelect');

    selectElement.addEventListener('change', (event) => {
      color = event.target.value;
      alert(color);
    });
*/


  
let cnt=0;

const squares=document.querySelectorAll('.square');



function chooseColor(cnt){
    const blackBut = document.querySelector(".blackC");
    const rainBut = document.querySelector(".rainbowC");
    const transBut = document.querySelector(".transC");

    blackBut.addEventListener("click", () => { 
        let color = "black";
        const squares=document.querySelectorAll('.square');
        colorRGB(squares, color, cnt);
    });

    rainBut.addEventListener("click", () =>{
        let color = "rainbow";
        const squares=document.querySelectorAll('.square');
        colorRGB(squares, color, cnt);
    });

    transBut.addEventListener("click", () =>{
        let color = "transition";
        const squares=document.querySelectorAll('.square');
        colorRGB(squares, color, cnt);
    });
}


function colorRGB(squares, color, cnt){
    cnt=0;
    squares.forEach( (square) =>{
        square.addEventListener("mouseenter", function( event ) {
            // highlight the mouseenter target
            if (color=="rainbow"){
                event.target.style.backgroundColor = `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`;
            }
            else if(color=="black"){
                event.target.style.backgroundColor = 'grey';
            }
            else if(color=="transition"){
                if (cnt>10){
                    cnt=0;
                    event.target.style.backgroundColor = `rgba(0,0,0,${cnt/10})`;
                    ++cnt;
                }
                else{
                    event.target.style.backgroundColor = `rgba(0,0,0,${cnt/10})`;
                    ++cnt;
                }


            }
            
        });
    });

    
}




const selectNum = document.querySelector('.selectNum');
selectNum.addEventListener('click', ()=>{
    cnt=0;
    size=prompt("Please Select a Number Between 0 and 64");
    if(size>64||size<0){
        alert("The number you entered, was either greater than 64, or less than 0.");
    }
    else if(size==undefined){
        size=16;
        removeGrid();
        createGrid(size);
        cnt=0;
        const squares=document.querySelectorAll('.square');
        colorRGB(squares, color,cnt);
        const reset = document.querySelector('.reset');
        resetColor(reset, squares);
    }
    else{
        removeGrid();
        createGrid(size);
        cnt=0;
        const squares=document.querySelectorAll('.square');
        colorRGB(squares, color, cnt);
        const reset = document.querySelector('.reset');
        resetColor(reset, squares);
    }

    
});


const reset = document.querySelector('.reset');


function resetColor(reset, squares){
    reset.addEventListener('click', () =>{
        squares.forEach( (square) =>{
            square.style.backgroundColor = "white";
        });
    });
}



colorRGB(squares, color, cnt);
chooseColor(cnt);

resetColor(reset, squares);




