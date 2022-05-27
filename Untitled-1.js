
   
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

//Diagonal winning cells

let array0= [row0[0], row1[1], row2[2], row3[3], row4[4], row5[5]];
let array1= [row1[0], row2[1], row3[2], row4[3], row5[4]];
let array2=[row2[0], row3[1], row4[2], row5[3]];
console.log(array1);

let array3= [row0[6],row1[5], row2[4], row3[3], row4[2],row5[1]];
let array4= [row1[6], row2[5], row3[4], row4[3], row5[2]];
let array5= [row2[6], row3[5], row4[4], row5[3]];
let array6= [row0[1], row1[2], row2[3],row3[4], row4[5], row5[6]];
let array7= [row0[2], row1[3], row2[4], row3[5], row4[6]];
let array8= [row0[3], row1[4], row2[5], row3[4]];
let array9=[row0[5], row1[4], row2[3],row3[2], row4[1], row5[0]];
let array10= [row0[4], row1[3], row2[2], row3[1], row4[0]];
let array11=[row0[3], row1[2], row2[1], row1[0]];


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
    // if (game= true)
    {coloredCellclasslist.add(addColor())};
    let coloredPosition= (cellRowAndCol(coloredCellclasslist));
    console.log(coloredPosition);
    
   
    // checkResult (array0, array1, array2, array3, array4, array5, array6, array7, array8, array9, array10, array11, currentColor, coloredPosition, rowsTopOut);
    checkForWinning(coloredPosition,rowsTopOut, currentColor);

    // yellowTurn=!yellowTurn           
        
}


function checkResult(array0, array1, array2, array3, array4, array5,array6, array7, array8, array9, array10, array11, currentColor, coloredPosition, rowsTopOut){

  
      
let number0=  checkDiagonalArrays(array0,currentColor);
let number1=  checkDiagonalArrays(array1,currentColor);
let number2=   checkDiagonalArrays(array2,currentColor);
let number3=   checkDiagonalArrays(array3,currentColor);
let number4=   checkDiagonalArrays(array4, currentColor);
let number5=  checkDiagonalArrays(array5, currentColor);
let number6=  checkDiagonalArrays(array6,currentColor);
let number7=  checkDiagonalArrays(array7,currentColor);
let number8=   checkDiagonalArrays(array8,currentColor);
let number9=   checkDiagonalArrays(array9,currentColor);
let number10=   checkDiagonalArrays(array10, currentColor);
let number11=  checkDiagonalArrays(array11, currentColor);

//let number12= checkDiagonalArrays(horisontally,currentColor);




//let vertically= checkDiagonalArrays(colToCheck, currentColor);

  
let table= [number0 , number1, number2, number3, number4, number5,number6 , number7, number8, number9, number10, number11];


 
checkForWinner(table,currentColor);


 
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
function checkDiagonalArrays(array,currentColor){
let winningCells= [];
    for (let cases of array)
    {
        let caseClasslist= cases.classList;
        console.log(caseClasslist);
        let arrayCases= Array.from(caseClasslist);
        
        for (let cellToCheck of arrayCases)
        {
            if (cellToCheck.includes(currentColor))
            {
                winningCells.push(cases);
            }
        }
    }

    let storeVar= grabArrayClasslist(array);
    console.log(storeVar);
    let counting = 0;
    for (let store of storeVar)
    { 
        if (store.includes(currentColor))
        {
          counting = counting+1;
        }

        else {
            counting =0
        }
    }
    console.log(counting);
    return [winningCells, counting];
}

function checkForWinner(table,currentColor){


    for (let number of table){
        console.log(number);
        if (number[0].length>=4 && number[1]>=4){
        let textToPut= currentColor+ 
        "           has won!";
         let text=  document.querySelector(".winner");
         text.innerHTML= textToPut;
        //  game= !game;
         for (let colors of number[0]){
             let colorClasslist= colors.classList;
             console.log(colorClasslist);
             colorClasslist.add("win");
             var myAudio = new Audio('victoryff.swf.mp3');
             myAudio.play();
             console.log(colorClasslist); } 
        }
    }
     }


 function checkforTie(){

    let tieArray= [];

    let text=  document.querySelector(".winner");

    for (let pos of cells){
        if (Array.from(pos.classList).includes(turn1)||Array.from(pos.classList).includes(turn2))
    {
        tieArray.push(pos);
    }

 }
 if (text.innerHTML= null && tieArray.length== cells.length){
     text.innerHTML= "it's a tie!"
 }
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

   
    



setTopRowEventListener();
cellClickEventListener();


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
     
        for (const cell of cells) {
          cell.classList.add('win');
        }

        let textToPut= currentColor+ 
        "           has won!";
         let text=  document.querySelector(".winner");
         text.innerHTML= textToPut;

         var myAudio = new Audio('victoryff.swf.mp3');
         myAudio.play();
       
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
          
      } 
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
          
      }
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
      } 
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
    }
    let isWinning1 = checkWinningCells(winningCells,currentColor);
    if (isWinning1) return;
  }

  function checkDiagonally(coloredPosition,rowsTopOut, currentColor){
    let cellToCheckCol= coloredPosition[0];
    console.log(cellToCheckCol)
    let cellToCheckRow= coloredPosition[1];
    let cellToadd= rowsTopOut[cellToCheckRow][cellToCheckCol]
    console.log(cellToadd);
    let winningCells = [cellToadd];
    // let rowToCheck= rowsTopOut[cellToCheckRow][cellToCheckCol];
    // console.log(rowToCheck);
   for ( let i =cellToCheckRow-1; i>=0; i--) {
       console.log(i)
        let j=cellToCheckRow-i
        console.log(j)
        console.log(cellToCheckCol+j)
        if (cellToCheckCol+j<=6){
        let cellToCheck = rowsTopOut[i][cellToCheckCol+j];
        console.log(cellToCheck);
        let getColorOfCellArray= Array.from(cellToCheck.classList)
        console.log(getColorOfCellArray);
        let getColorOfCell= getColorOfCellArray[3]
        console.log(getColorOfCell);
        if (getColorOfCell === currentColor) {
          winningCells.push(cellToCheck);  
          console.log(winningCells)
      }
      
    }}
   for ( let i =cellToCheckRow+1; i<=5; i++) {
       let j= i-cellToCheckRow
       console.log(j);
       if (cellToCheckCol-j>=0){
        let cellToCheck = rowsTopOut[i][cellToCheckCol-j];
        let getColorOfCellArray= Array.from(cellToCheck.classList)
        console.log(getColorOfCellArray);
        let getColorOfCell= getColorOfCellArray[3]
        console.log(getColorOfCell);
        if (getColorOfCell === currentColor) {
          winningCells.push(cellToCheck);  
          console.log(winningCells)
      }
    }}
    for ( let i =cellToCheckRow-1; i>=0; i--) {
        console.log(i)
         let j=cellToCheckRow-i
         console.log(j)
         console.log(cellToCheckCol+j)
         if (cellToCheckCol+j<=6){
         let cellToCheck = rowsTopOut[i][cellToCheckCol+j];
         console.log(cellToCheck);
         let getColorOfCellArray= Array.from(cellToCheck.classList)
         console.log(getColorOfCellArray);
         let getColorOfCell= getColorOfCellArray[3]
         console.log(getColorOfCell);
         if (getColorOfCell === currentColor) {
           winningCells.push(cellToCheck);  
           console.log(winningCells)
       }
       
     }}
    for ( let i =cellToCheckRow+1; i<=5; i++) {
        let j= i-cellToCheckRow
        console.log(j);
        if (cellToCheckCol-j>=0){
         let cellToCheck = rowsTopOut[i][cellToCheckCol-j];
         let getColorOfCellArray= Array.from(cellToCheck.classList)
         console.log(getColorOfCellArray);
         let getColorOfCell= getColorOfCellArray[3]
         console.log(getColorOfCell);
         if (getColorOfCell === currentColor) {
           winningCells.push(cellToCheck);  
           console.log(winningCells)
       }
     }}
   
    let isWinning1 = checkWinningCells(winningCells,currentColor);
    if (isWinning1) return;
  
  }
  checkHorisontally(coloredPosition,rowsTopOut, currentColor);
  checkVertically(coloredPosition,rowsTopOut, currentColor);
  checkDiagonally(coloredPosition,rowsTopOut, currentColor)
  }
    
