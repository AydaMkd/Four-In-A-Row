const cells = document.querySelectorAll('.cell:not(.topRow)');
const topCells = document.querySelectorAll('.cell.topRow');
let turn1 = "yellow";
let turn2= "red";
let yellowTurn = true; 
let gameIsLive = true;



//Columns

const column0 = [cells[35], cells[28], cells[21], cells[14], cells[7], cells[0], topCells[0]];
const column1 = [cells[36], cells[29], cells[22], cells[15], cells[8], cells[1], topCells[1]];
const column2 = [cells[37], cells[30], cells[23], cells[16], cells[9], cells[2], topCells[2]];
const column3 = [cells[38], cells[31], cells[24], cells[17], cells[10], cells[3], topCells[3]];
const column4 = [cells[39], cells[32], cells[25], cells[18], cells[11], cells[4], topCells[4]];
const column5 = [cells[40], cells[33], cells[26], cells[19], cells[12], cells[5], topCells[5]];
const column6 = [cells[41], cells[34], cells[27], cells[20], cells[13], cells[6], topCells[6]];
const columns = [column0, column1, column2, column3, column4, column5, column6];

// Rows
const topRow = [topCells[0], topCells[1], topCells[2], topCells[3], topCells[4], topCells[5], topCells[6]];
const row0 = [cells[0], cells[1], cells[2], cells[3], cells[4], cells[5], cells[6]];
const row1 = [cells[7], cells[8], cells[9], cells[10], cells[11], cells[12], cells[13]];
const row2 = [cells[14], cells[15], cells[16], cells[17], cells[18], cells[19], cells[20]];
const row3 = [cells[21], cells[22], cells[23], cells[24], cells[25], cells[26], cells[27]];
const row4 = [cells[28], cells[29], cells[30], cells[31], cells[32], cells[33], cells[34]];
const row5 = [cells[35], cells[36], cells[37], cells[38], cells[39], cells[40], cells[41]];

const rows = [topRow,row0, row1, row2, row3, row4, row5];

function setTopRowEventListener(){
     
    for (let i =0; i<topCells.length; i++ ){
        topCells[i].addEventListener("mouseover", gridMouseover);
        topCells[i].addEventListener("mouseout", gridMouseout);
       
    }
}

const mySound = document.getElementById("sound");   
const myBoard = document.querySelector(".board");
console.log(mySound);

myBoard.addEventListener("click",function(){
    mySound.play()});
 
 function cellClickEventListener(){ 
    
    for (let i=0; i< cells.length; i++)
    { 
    cells[i].addEventListener("click", cellClick)};
    
    }

 function gridMouseout(e){
     e.target.classList.remove(turn1);
     e.target.classList.remove(turn2);

 }

 function addColor(){
     if (yellowTurn){ return turn1

     }

     else { return turn2}
 }

 function gridMouseover (e) {
   console.log(e);
    e.target.classList.add(addColor());

    }

function cellClick(e){
  
    
    let cellColRow= clickedCellPosition(e);
    let currentColor= addColor();
    

    let cellCol= cellColRow[0];
    let rowsTopOut= rows.slice(1);

    let tableCol = columns[cellCol];
    let topRowOut= tableCol.slice(0,6);

    function cellChoice(){
        
    for (let cell of topRowOut){
        let cellClasslist= cell.classList;
        let cellClass= Array.from(cellClasslist);
        console.log(cellClass)
        if (!cellClass.includes('yellow') && !cellClass.includes('red'))

       {return cell}
    }}
    let cell= cellChoice();
    let coloredCellclasslist= cell.classList;
    {coloredCellclasslist.add(addColor())};
    let coloredPosition= (cellRowAndCol(coloredCellclasslist));
    console.log(coloredPosition);
    checkForWinning(coloredPosition,rowsTopOut, currentColor);              
}

function cellRowAndCol(cell){
    let CellColumn= cell.toString().substring(13,14);
    let CellRow= cell.toString().substring(8,9);
    let parsedRow= parseInt(CellRow, 10);
    let parsedColumn= parseInt(CellColumn, 10);
    let cellPosition= [parsedColumn,parsedRow];
    return cellPosition;}

function clickedCellPosition(e){

    let cellTarget= e.target.classList;
    let cellColumnRow= cellRowAndCol(cellTarget);
    
    return cellColumnRow;
    }

function cellColor(cell){
    let colorClicked= cell.classList;
    return colorClicked;
}


function grabArrayClasslist(valueArray){

    let arrayValue= []
    for (let value  of valueArray)
    {
        let classlistValue= value.classList;
        arrayFromValue= Array.from(classlistValue);
        arrayValue.push(arrayFromValue);
    }

    return arrayValue
}

function renewGame(){
    for ( let row of rows) {
      for (let cell of row) {
        cell.classList.remove('red');
        cell.classList.remove('yellow');
        cell.classList.remove('win');
        
      }}
      let text1=  document.querySelector(".winner");
                 text1.innerHTML= null;
              
     } 
      const restart= document.querySelector(".reload");  
      restart.addEventListener("click", renewGame); 

const checkWinningCells = (cells, currentColor) => {
        if (cells.length < 4)
         return false;
         let textToPut= currentColor+ 
         "           has won!";
          let text=  document.querySelector(".winner");
          text.innerHTML= textToPut;
        for (const cell of cells) {
          cell.classList.add('win');
        }

         var myAudio = new Audio('victoryff.swf.mp3');
         myAudio.play();
         setTimeout(() => {
           renewGame()
         }, 5000);
    
        return true;
      };
function checkForWinning(coloredPosition,rowsTopOut, currentColor){
    yellowTurn=!yellowTurn
    // console.log(coloredPosition)
    function checkHorisontally(coloredPosition,rowsTopOut, currentColor){
    let cellToCheckCol= coloredPosition[0];
    let cellToCheckRow= coloredPosition[1];
    let cellToadd= rowsTopOut[cellToCheckRow][cellToCheckCol]
    console.log(cellToadd);
    let winningCells = [cellToadd];
    let rowToCheck= rowsTopOut[cellToCheckRow][cellToCheckCol];
    console.log(rowToCheck);
   for ( let i =cellToCheckCol-1; i>=0 && i>=cellToCheckCol-4; i--) {
       
        let cellToCheck = rowsTopOut[cellToCheckRow][i];
        let getColorOfCellArray= Array.from(cellToCheck.classList)
        console.log(getColorOfCellArray);
        let getColorOfCell= getColorOfCellArray[3]
        console.log(getColorOfCell);
        if (getColorOfCell === currentColor) {
          winningCells.push(cellToCheck);  
          console.log(winningCells)
          
      } else {break};
    }
   for ( let i =cellToCheckCol+1; i<=6 && i<=cellToCheckCol+4; i++) {
        let cellToCheck = rowsTopOut[cellToCheckRow][i];
        let getColorOfCellArray= Array.from(cellToCheck.classList)
        console.log(getColorOfCellArray);
        let getColorOfCell= getColorOfCellArray[3]
        console.log(getColorOfCell);
        if (getColorOfCell === currentColor) {
          winningCells.push(cellToCheck);  
          console.log(winningCells)
          
      }else {break};
    }
    let isWinning = checkWinningCells(winningCells, currentColor);
    if (isWinning) return;
  }

  function checkVertically(coloredPosition,rowsTopOut, currentColor){
    let cellToCheckCol= coloredPosition[0];
    console.log(cellToCheckCol)
    let cellToCheckRow= coloredPosition[1];
    let cellToadd= rowsTopOut[cellToCheckRow][cellToCheckCol]
    console.log(cellToadd);
    let winningCells = [cellToadd];
    // let rowToCheck= rowsTopOut[cellToCheckRow][cellToCheckCol];
    // console.log(rowToCheck);
   for ( let i =cellToCheckRow-1; i>=0; i--) {
       
        let cellToCheck = rowsTopOut[i][cellToCheckCol];
        console.log(cellToCheck);
        let getColorOfCellArray= Array.from(cellToCheck.classList)
        console.log(getColorOfCellArray);
        let getColorOfCell= getColorOfCellArray[3]
        console.log(getColorOfCell);
        if (getColorOfCell === currentColor) {
          winningCells.push(cellToCheck);  
          console.log(winningCells)
      } else {break};
    }
   for ( let i =cellToCheckRow+1; i<=5; i++) {
        let cellToCheck = rowsTopOut[i][cellToCheckCol];
        let getColorOfCellArray= Array.from(cellToCheck.classList)
        console.log(getColorOfCellArray);
        let getColorOfCell= getColorOfCellArray[3]
        console.log(getColorOfCell);
        if (getColorOfCell === currentColor) {
          winningCells.push(cellToCheck);  
          console.log(winningCells)
      }
      else {break}
    }
    let isWinning = checkWinningCells(winningCells,currentColor);
    if (isWinning) return;
  }

  function checkDiagonally(coloredPosition,rowsTopOut, currentColor){
  cellToCheckCol= coloredPosition[0]-1;
  console.log(cellToCheckCol)
  cellToCheckRow= coloredPosition[1]-1;
  let cellToadd= rowsTopOut[coloredPosition[1]][coloredPosition[0]]
  console.log(cellToadd);
  let winningCells = [cellToadd];

 while (cellToCheckCol>=0 && cellToCheckRow>=0)
     {
      let cellToCheck = rowsTopOut[cellToCheckRow][cellToCheckCol];
      console.log(cellToCheck);
      let getColorOfCellArray= Array.from(cellToCheck.classList)
      console.log(getColorOfCellArray);
      let getColorOfCell= getColorOfCellArray[3]
      console.log(getColorOfCell);
      if (getColorOfCell === currentColor) {
        winningCells.push(cellToCheck);  
        cellToCheckRow--;
        cellToCheckCol--
        console.log(winningCells)
    } else {break};
  }
   cellToCheckCol= coloredPosition[0]+1;
  console.log(cellToCheckCol)
  cellToCheckRow= coloredPosition[1]+1;

 while (cellToCheckCol<=6 && cellToCheckRow<=5 ) {
      let cellToCheck = rowsTopOut[cellToCheckRow][cellToCheckCol];
      console.log(cellToCheck);
      let getColorOfCellArray= Array.from(cellToCheck.classList)
      console.log(getColorOfCellArray);
      let getColorOfCell= getColorOfCellArray[3]
      console.log(getColorOfCell);
      if (getColorOfCell === currentColor) {
        winningCells.push(cellToCheck);  
        console.log(winningCells)
        cellToCheckCol++
        cellToCheckRow++
      }
    else {break}
  }
  console.log(winningCells);
  let isWinning = checkWinningCells(winningCells,currentColor);
  if (isWinning) 
  return;}

function checkDiagonallyOtherside(coloredPosition,rowsTopOut, currentColor){
  cellToCheckCol= coloredPosition[0]-1;
  console.log(cellToCheckCol)
  cellToCheckRow= coloredPosition[1]+1;
  let cellToadd= rowsTopOut[coloredPosition[1]][coloredPosition[0]]
  console.log(cellToadd);
  let winningCells = [cellToadd];
 while (cellToCheckCol>=0 && cellToCheckRow<=5 ) {
      let cellToCheck = rowsTopOut[cellToCheckRow][cellToCheckCol];
      console.log(cellToCheck);
      let getColorOfCellArray= Array.from(cellToCheck.classList)
      console.log(getColorOfCellArray);
      let getColorOfCell= getColorOfCellArray[3]
      console.log(getColorOfCell);
      if (getColorOfCell === currentColor) {
        winningCells.push(cellToCheck);  
        console.log(winningCells)
        cellToCheckCol--
        cellToCheckRow++
      }
    else {break}
  }
  cellToCheckCol= coloredPosition[0]+1;
  console.log(cellToCheckCol)
  cellToCheckRow= coloredPosition[1]-1;
  console.log(cellToCheckRow)

 while (cellToCheckCol<=6 && cellToCheckRow>=0 ) {
      let cellToCheck = rowsTopOut[cellToCheckRow][cellToCheckCol];
      console.log(cellToCheck);
      let getColorOfCellArray= Array.from(cellToCheck.classList)
      console.log(getColorOfCellArray);
      let getColorOfCell= getColorOfCellArray[3]
      console.log(getColorOfCell);
      if (getColorOfCell === currentColor) {
        winningCells.push(cellToCheck);  
        console.log(winningCells)
        cellToCheckCol++
        cellToCheckRow--
      }
    else {break}
  }
 console.log(winningCells);
  let isWinning = checkWinningCells(winningCells,currentColor);
  if (isWinning) return;}

  function checkforTie(rowsTopOut){
    for (const row of rowsTopOut) {
      for (const cell of row) {
        let getColorOfCellArray= Array.from(cell.classList)
        console.log(getColorOfCellArray);
        let getColorOfCell= getColorOfCellArray[3]
        console.log(getColorOfCell);
        if (getColorOfCell!== turn1 && getColorOfCell!==turn2)
        {
          return;
        }
      }
    }
    let textToPut=
    " It's a tie!";
     let text=  document.querySelector(".winner");
     text.innerHTML= textToPut;
     setTimeout(() => {
      renewGame()
    }, 5000);

    
  }

  checkHorisontally(coloredPosition,rowsTopOut, currentColor);
  checkVertically(coloredPosition,rowsTopOut, currentColor);
  checkDiagonally(coloredPosition,rowsTopOut, currentColor);
  checkDiagonallyOtherside(coloredPosition,rowsTopOut, currentColor);
  checkforTie(rowsTopOut)
}

  setTopRowEventListener();
  cellClickEventListener();



