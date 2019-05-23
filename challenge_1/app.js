// Model
let player = null;
let gameState = [];
let countOfturns = null;
const winningCombinations = {
  row1: [0,1,2],
  row2: [3,4,5],
  row3: [6,7,8],
  col1: [0,3,6],
  col2: [1,4,7],
  col3: [2,5,8],
  diagL : [0,4,8],
  diagR :[2,4,6]
};
let arrayX = [];
let arrayO = [];
let setState = function() {
  player = 'X';
  let boardSize = 3;
  gameState =  Array(boardSize ** 2 ).fill(0);
  countOfturns = 0;
  arrayX = [];
  arrayO = [];
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

let swapTurns = function() {
  if(player === 'X') {
    player = 'O';
  } else {
    player = 'X';
  }
};

// view
let startButton = document.querySelector('#start');
let resetButton = document.querySelector('#reset');

// controllers
startButton.addEventListener("click", function(){
  setState();
  document.getElementById('turn').innerHTML = 'Player ' + player + ' turn';
});

resetButton.addEventListener("click", function(){
  setState();
  document.getElementById('turn').innerHTML = 'Player ' + player + ' turn';
  $board = document.getElementById('table');
  for (var i = 0; i < $board.children.length; i++) {
    $board.children[i].innerHTML = `<button  style="height: 100px; width : 100px"onClick="clickHandler(${i})"></button>`
  }
  document.getElementById('winDiv').innerHTML = "";
});

let clickHandler = function(id) {
  //change the player name to active player
  document.getElementById(id).innerHTML = player;
  // place x or o on the square with id
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


