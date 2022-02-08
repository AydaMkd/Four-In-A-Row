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

console.log(cells[35]);
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
        topCells[i].addEventListener("click" , dropToken);
    }
}
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

    let cellCol= cellColRow[0];

    let tableCol = columns[cellCol];
    let topRowOut= tableCol.slice(0,6);

    function cellChoice(){
    for (let cell of topRowOut){
        let cellClasslist= cell.classList;
        let cellClass= Array.from(cellClasslist);
        if (!cellClass.includes('yellow') && !cellClass.includes('red'))

       {return cell.classList}
    }}

  

    let cell= cellChoice();
    cell.add(addColor());
   
    checkDiagonally(e,cellColRow);
    
  
       

yellowTurn=!yellowTurn;
       


        
      

        
}


function dropToken(e){
    console.log(e);
    let columnNumber= e.target.classList.toString().substring(15,16);
}

function checkDiagonally(e,cellColRow){

let sameColorCells= [e.target];

let color = addColor();
let rowstoCheck= rows.slice(1);
console.log(rowstoCheck);


let nextRowtoCheck= cellColRow[1]+1;
let nextColtoCheck= cellColRow[0]+1;
console.log(nextColtoCheck);
console.log(nextRowtoCheck);


while (nextRowtoCheck<=5 && nextColtoCheck<=6){

let nextCheckedCell= rowstoCheck[nextRowtoCheck][nextColtoCheck];

let arrayClasslist= Array.from(nextCheckedCell.classList);


    if (arrayClasslist.includes(color)){
        sameColorCells.push(nextCheckedCell)
        nextColtoCheck= nextRowtoCheck++;
        nextColtoCheck= nextColtoCheck++

    }
 
  else { break;}
  
}
console.log(sameColorCells);



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



setTopRowEventListener();
cellClickEventListener();


