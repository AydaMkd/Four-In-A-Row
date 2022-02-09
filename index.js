const cells = document.querySelectorAll('.cell:not(.topRow)');
const topCells = document.querySelectorAll('.cell.topRow');
let turn1 = "yellow";
let turn2= "red";
let yellowTurn = true; 


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
    cells[i].addEventListener("click", cellClick);
    
    }


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
        if (!cellClass.includes('yellow') && !cellClass.includes('red'))

       {return cell}
    }}

  

    let cell= cellChoice();
    let coloredCellclasslist= cell.classList;
    coloredCellclasslist.add(addColor());
    let coloredPosition= (cellRowAndCol(coloredCellclasslist));
    
    checkResult (array0, array1, array2, array3, array4, array5, array6, array7, array8, array9, array10, array11, currentColor, rowsTopOut,coloredPosition);
    
    
    
    
    yellowTurn=!yellowTurn;
           
        
}




function checkResult(array0, array1, array2, array3, array4, array5,array6, array7, array8, array9, array10, array11, currentColor,rowsTopOut,coloredPosition){
    
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

let vertically= checkHorisontally(rowsTopOut,coloredPosition,currentColor);


let horisontally= checkVertically(coloredPosition,currentColor);

  
let table= [number0 , number1, number2, number3, number4, number5,number6 , number7, number8, number9, number10, number11,vertically,horisontally ]  ;
console.log(table);

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
    
    return winningCells
}

  
function checkForWinner(table,currentColor){


    for (let number of table){
        console.log(number);
        if (number.length>=4){
        let textToPut= currentColor+ 
        "           has won!";
         let text=  document.querySelector(".winner");
         text.innerHTML= textToPut;
         for (let colors of number){
             let colorClasslist= colors.classList;
             console.log(colorClasslist);
             colorClasslist.add("win");
             var myAudio = new Audio('victoryff.swf.mp3');
             myAudio.play();
             console.log(colorClasslist);
         }

        for (let i= 0 ; i<= table.length; i++)
        {
          for (let numbers of cells){
              let numberClasslist= numbers.classList;
              let numbersArray= Array.from(numberClasslist);

              if (numbersArray.includes("yellow")|| numbersArray.includes("red")) {
                  if (table[i<4])
                  {
                    let textToPut= 
                    "           It's a tie!";
                     let text=  document.querySelector(".winner");
                     text.innerHTML= textToPut;
                  }
              }
          }
        }
         return number
        }
    }
}  

function checkHorisontally(rowsTopOut,coloredPosition,currentColor){
    
  let tableHorisontal=[];
    let cellToCheckCol= coloredPosition[0];
    let cellToCheckRow= coloredPosition[1];
    let rowToCheck= rowsTopOut[cellToCheckRow];
    console.log(rowToCheck);
    
   for (let row of rowToCheck)

   {let arrayRow= Array.from(row.classList);
    if (arrayRow.includes(currentColor)){
        tableHorisontal.push(row);}}
  return tableHorisontal;
}

function checkVertically(coloredPosition,currentColor){
    
    let tableVertical=[];
      let cellToCheckCol= coloredPosition[0];
      let cellToCheckRow= coloredPosition[1];
      let colToCheck= columns[cellToCheckCol];
      
      
     for (let col of colToCheck)
  
     {let arrayCol= Array.from(col.classList);
      if (arrayCol.includes(currentColor)){
          tableVertical.push(col);}}

    console.log(tableVertical);
    return tableVertical;
    

  }

 
setTopRowEventListener();
cellClickEventListener();

function renewGame(){
    for ( let row of rows) {
      for (let cell of row) {
        cell.classList.remove('red');
        cell.classList.remove('yellow');
        cell.classList.remove('win');
      }}} 
      const restart= document.querySelector(".restart");  
      restart.addEventListener("click", renewGame);     