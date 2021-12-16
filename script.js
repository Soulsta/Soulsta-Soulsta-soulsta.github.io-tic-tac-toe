// 1 Functio to display message in the HTML 

function startGame() 
{ 
document.turn = "X"; 
setMessage(document.turn + " gets to start."); 
} 



/*2 this starts the game the tic tac toe and it will change to O*/
function setMessage(msg) 
{ 
document.getElementById("message").innerText = msg; } 
  //3 Function to play the game on click button


  function nextMove(square) 
  { 
    if(square.innerText ==""){
        square.innerText=document.turn
        switchTurn();
    }else{
        setMessage("That Square is already taken");
    }
    } 




    function switchTurn() { 
        if(checkForWinner(document.turn)){
            setMessage("Congratulations!" + document.turn + "'s turn!");  
        }
    else if (document.turn == "X") { 
    document.turn = "O"; 
    setMessage("It's "+ document.turn +"`s turn!");
    } else { 
    document.turn = "X"; 

    setMessage("It's " + document.turn + "'s turn!"); 
} 
    } 
    






//4 this is if the row meets the winning requirements. 
function checkRow(a, b, c, move) 
{ 
var result = false;
if (getBox(a) == move && getBox(b) == move && 
getBox(c) == move) { 
result = true; 
} 
return result; 
} 
//5 this checks for the winner
function checkForWinner(move) { 
    var result = false; 
    if (checkRow(1, 2, 3, move) || 
    checkRow(4, 5, 6, move) || 
    checkRow(7, 8, 9, move)  || 
    checkRow(1, 4, 7, move) || 
    checkRow(2, 5, 8, move) || 
    checkRow(3, 6, 9, move) || 
    checkRow(1, 5, 9, move) || 
    checkRow(3, 5, 7, move)) { 
    result = true; 
    } 
    return result; 
    }
    //6 this gives the button the value
    function getBox(number) { 
        return document.getElementById("s" + 
        number).innerText; 
        } 
//7this clears the box value to blank        
function clearBox(number) { 
    document.getElementById("s" + number).innerText = ""; 
    }
 
        
           