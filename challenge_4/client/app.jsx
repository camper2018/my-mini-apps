import React, { Component } from "react";
import ReactDOM from "react-dom";
import Row from "./components/Row.jsx";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      player1: "red",
      player2: "blue",
      currentPlayer: null,
      board: [],
      gameOver: false,
      message: ""
    };
    this.gameState = this.gameState.bind(this);
  }
  // create the empty board and reset state
  initBoard() {
    // Create 6 blank rows and 7 columns
    let board = [];
    for (let r = 0; r < 6; r++) {
      let row = [];
      for (let c = 0; c < 7; c++) {
        row.push(null)
      }
      board.push(row);
    }

    this.setState({
      board,
      currentPlayer: this.state.player1,
      gameOver: false,
      message: ''
    });
  }

  togglePlayer() {
    const {player1, player2, currentPlayer} = this.state;
    return (currentPlayer === player1) ? player2 : player1;
  }

  gameState(c) {
    const {gameOver, board, currentPlayer, player1, player2} = this.state;
    if (!gameOver) {
      // To place a piece on board check if that row in column c is null

      for (let r = 5; r >= 0; r--) {
        if (!board[r][c]) {
          board[r][c] = currentPlayer;
          break;
        }
      }
      // Check status of board
      let result = this.checkAll(board);
      if (result === player1) {
        this.setState({ board, gameOver: true, message: 'Red wins!' });
      } else if (result === player2) {
        this.setState({ board, gameOver: true, message: 'Blue wins!' });
      } else if (result === 'draw') {
        this.setState({ board, gameOver: true, message: 'Draw game.' });
      } else {
        this.setState({ board, currentPlayer: this.togglePlayer() });
      }

    }
  }
  checkVertical(board) {
    for (var r = 2; r >= 0; r--) {
      for (var c = 0; c < 7; c++){
        if(board[r][c]) {
          if (board[r][c] === board[r + 1][c] && board[r][c] === board[r + 2][c]&& board[r][c] === board[r + 3][c]) {
            return board[r][c];
          }
        }
      }
    }
  }

  checkHorizontal(board) {
    for (var r = 5; r >= 0; r-- ) {
      for (var c = 3; c < 7; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r][c - 1] && board[r][c] === board[r][c - 2] && board[r][c] === board[r][c - 3]) {
            return board[r][c];
          }

        }
      }
    }
  }

  checkDiagonalRight(board) {
    for (var r = 2; r >= 0; r--) {
      for (var c = 0; c < 4; c++ ) {
        if (board[r][c]) {
          if (board[r][c] === board[r + 1 ][c + 1] && board[r][c] === board[r + 2][c
          + 2] && board[r][c] === board[r + 3][c + 3]) {
            return board[r][c];
          }
        }
      }
    }
  }

  checkDiagonalLeft(board) {
    for (var r = 2; r >= 0; r--) {
      for (var c = 3; c < 7; c++ ) {
        if (board[r][c]) {
          if (board[r][c] === board[r + 1 ][c - 1] && board[r][c] === board[r + 2 ][c - 2] && board[r][c] === board[r + 3][c - 3]) {
              return board[r][c];
            }
        }
      }
    }
  }

  checkDraw(board) {
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c] === null) {
          return null;
        }
      }
    }
    return 'draw';
  }

  checkAll(board) {
    return this.checkVertical(board) || this.checkDiagonalRight(board) || this.checkDiagonalLeft(board) || this.checkHorizontal(board) || this.checkDraw(board);
  }

  componentWillMount() {
    this.initBoard();
  }

  render() {
    const {board, message} = this.state;
    return (
      <div>
        <div className="button" onClick={() => {this.initBoard()}}>Start New Game</div>

        <table>
          <thead>
          </thead>
          <tbody>
            {board.map((row, i) => (<Row key={i} row={row} gameState={this.gameState} />))}
          </tbody>
        </table>

        <p className="message">{message}</p>
      </div>
    );
  }
}




ReactDOM.render(<App/>, document.getElementById('App'));


