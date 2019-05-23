// var player ;
// var gameState;
// var winningCombinations;
// var countOfturns;
// var resetButton = document.querySelector('#reset');
// var startButton = document.querySelector('#start');
let player = 'X';
let winningCombinations = {
  row1: [0,1,2],
  row2: [3,4,5],
  row3: [6,7,8],
  col1: [0,3,6],
  col2: [1,4,7],
  col3: [2,5,8],
  diagL : [0,4,8],
  diagR :[2,4,6]
};
let countOfturns = 0;
var boardSize = 3;
var boardSquares = new Array(boardSize ** 2 );
var gameState =  Array(boardSquares).fill(0);
var arrayX = [];
var arrayO = [];
let resetState = function() {
  player = 'X';
  gameState = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  countOfturns = 0;
  arrayX = [];
  arrayO = [];
  $board = document.getElementById('table');
  for (var i = 0; i < $board.children.length; i++) {
    $board.children[i].innerHTML = `<button  style="height: 100px; width : 100px"onClick="clickHandler(${i})"></button>`
  }
  document.getElementById('winDiv').innerHTML = "";
};
// function to check for win

function checkWinner(player) {
  for (var i = 0; i < gameState.length; i++) {
    if (player === 'X' && gameState[i] === 'X') {
      arrayX.push(i);
    } else if (player === 'O' && gameState[i] === 'O') {
      arrayO.push(i);
    }
  }
  if (player === 'X') {
    for (var key in winningCombinations) {
      if (arrayX.includes(winningCombinations[key][0]) && arrayX.includes(winningCombinations[key][1]) && arrayX.includes(winningCombinations[key][2])) {
        return true;
      }
    }
  }
  if (player === 'O') {
    for (var key in winningCombinations) {
      if (arrayO.includes(winningCombinations[key][0]) && arrayO.includes(winningCombinations[key][1]) && arrayO.includes(winningCombinations[key][2])) {
        return true;
      }
    }
  }
  return false;
}

var swapTurns = function() {
  if(player === 'X') {
    player = 'O';
  } else {
    player = 'X';
  }
};
document.getElementById('turn').innerHTML = 'Player ' + player + ' turn';
var clickHandler = function(id) {
  //change the player name to active player
  //document.getElementById('turn').innerHTML = 'Player ' + player + ' turn';
  // place x or o on the square with id
  document.getElementById(id).innerHTML = player;
  document.getElementById(id).style.fontSize = '100px';
  document.getElementById(id).style.fontWeight = 'bold'
  swapTurns();
  document.getElementById('turn').innerHTML = 'Player ' + player + ' turn';
  swapTurns();
  // keep track of total turns played
  countOfturns++;
  // Add the marker placed on board into the gamestate
  gameState[id] = player;
  // checkWinner will check for winning combinations and return a boolean
  var hasWon = checkWinner(player);

  if (hasWon) {
    var winDiv = document.createElement("span");
    winDiv.innerHTML = "Player " + player + " won";
    var $div = document.getElementById('winDiv');
    $div.appendChild(winDiv);
  } else if (countOfturns === 9) {
    var winDiv = document.createElement("span");
    winDiv.innerHTML = "Tie Game !";
    var $div = document.getElementById('winDiv');
    $div.appendChild(winDiv);
  } else {
    swapTurns();
    document.getElementById('turn').innerHTML = 'Player ' + player + ' turn';
  }
};

/*
if button clicked {
  if game is active && turn == X && gamestate of that button is blank {
    set that position in gamestate to X
    turn = O
  } else if game is active && turn == O && gamestate of that button is blank {
    set that position in gamestate to O
    turn = X
  }

}
check all combinations array to gamestate array
tell who has won

have replay button show up
reset all the variables
*/

