class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.isDraw = false;
    this.turn = true;
    this.player1Moves = [];
    this.player2Moves = []
  }

  winningGameData() {};

  resetGame() {};

  changePlayer() {
  console.log("pre-click", this.turn);
  console.log("true = player1, false = player2");
  if (this.turn === true || this.turn === false) {
     this.turn = !this.turn;
    console.log("post click", this.turn);
    return;
  }
};

  givePlayerSpot(move) {
  if (this.turn) {
  this.player1Moves.push(move);
  } else {
   this.player2Moves.push(move);
 }
}

  checkWin() {
  if (this.player1Moves.includes("a1" && "a2" && "a3") ||
  this.player1Moves.includes("b1" && "b2" && "b3")) {
  console.log("WIN!");
  setTimeout(function() {
  console.log("WINNER!"); }, 1000);
    }
  }


}



// A game.js file that contains a Game class.
// A Game should include:
// Two Player instances
// A way to keep track of the data for the game board
// A way to keep track of which player’s turn it currently is
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to save a winning Game’s board data to the correct player’s wins array
// A way to reset the Game’s board to begin a new game
