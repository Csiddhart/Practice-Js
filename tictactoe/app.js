const gameBoard=document.getElementById("gameBoard");
const information=document.getElementById("info");
const startCells=["","","","","","","","",""];

let go="circle";
information.textContent="now "+go+" turn";


function createBoard(){
    startCells.forEach((_cells,index)=>{
        const cell=document.createElement("div");
        cell.classList.add("square");
        cell.id=index;
        cell.addEventListener("click",addGo);
        gameBoard.append(cell);
    });
};

function addGo(e){
 console.log("clicked",e.target);
 const goDisplay=document.createElement("div");
 goDisplay.classList.add(go);
 e.target.append(goDisplay);
 go=go==="circle"?"cross":"circle";
 information.textContent="now "+go+" turn";
//remove event listerner diye remove koro and checkscore koro
}

createBoard();