

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.turn = this.player1;
    this.player1Moves = [];
    this.player2Moves = [];
    this.playerData = [player1, player2];
    this.isWon = false
    // this.isDraw = false;
  }

  winningGameData() {};

  resetGame() {};

  changePlayer() {
    console.log(`${this.turn.name} `);
    if (this.turn === this.player1) {
    this.turn = this.player2;
    return
    } else if (this.turn === this.player2) {
    this.turn = this.player1;
    return;
  }
};

  givePlayerSpot(move) {
  if (this.turn === this.player1) {
    this.player1Moves.push(move);
    } else if (this.turn === this.player2){
      this.player2Moves.push(move);
    }
  }

  checkWin() {
    if (this.player1Moves.includes("a1" && "a2" && "a3") ||
    this.player1Moves.includes("b1" && "b2" && "b3")) {
      // console.log("WIN!");
      setTimeout(function() {
      console.log("WINNER!"); }, 1000); // move to resetGame()
      this.isWon = true;
    } else if (this.player2Moves.includes("a1" && "a2" && "a3") ||
    this.player2Moves.includes("b1" && "b2" && "b3")) {
      // console.log("WIN!");
      setTimeout(function() {
      console.log("WINNER!"); }, 1000); // move to resetGame()
      this.isWon = true;
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
