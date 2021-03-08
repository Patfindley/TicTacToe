
class Game {
  constructor(player1, player2) {
    this.player1 = new Player("player1", "👹");
    this.player2 = new Player("player2", "🧞‍♂️");
    this.turn = this.player1;
    this.player1Moves = [];
    this.player2Moves = [];
    this.playerData = [];
    this.isWon = false
    this.playerData = [];
    // this.isDraw = false;
  }

  winningGameData() {};

  resetGame() {};

  changePlayer() {
    if (this.turn.id === "player1") {
    this.turn = this.player2;
    return console.log(`${this.turn.name}'s turn!'`);
  } else if (this.turn.id === "player2") {
    this.turn = this.player1;
    return console.log(`${this.turn.name}'s turn!'`);
    }
  };

  givePlayerSpot(move) {
  if (this.turn.id === this.player1.id) {
    this.player1Moves.push(move);
    } else if (this.turn === this.player2){
      this.player2Moves.push(move);
    }
  }

  checkWin() {
    if (this.player1Moves.includes("a1" && "a2" && "a3") ||
    this.player1Moves.includes("b1" && "b2" && "b3")) {
      setTimeout(function() {
      console.log("WINNER!"); }, 1000); // move to resetGame()
      this.isWon = true;
      this.player1.wins++
      console.log("check win log", this.player1.wins)
      this.turn.saveWinsToStorage();
    } else if (this.player2Moves.includes("a1" && "a2" && "a3") ||
    this.player2Moves.includes("b1" && "b2" && "b3")) {
      setTimeout(function() {
      console.log("WINNER!"); }, 1000); // move to resetGame()
      this.isWon = true;
      this.turn.wins++
      this.turn.saveWinsToStorage();
    }
  }

  loadPlayerData() {
    var parsedPlayerData = [];
    if (localStorage.length > 0) {
      var retrievedData = localStorage.getItem("playerData")
      parsedPlayerData = JSON.parse(retrievedData);
      console.log("parsedPlayerData >>>", parsedPlayerData);
      this.instantiatePlayerData(parsedPlayerData)
    }
  }

  instantiatePlayerData(parsedPlayerData) {
    var parsedPlayer;
    this.playerData = [];
    for (var i = 0; i < parsedPlayerData.length; i++) {
      if (parsedPlayerData[i].id === "player1") {
        console.log("P1 MATCH!!", parsedPlayerData[i].id, parsedPlayerData[i])
        var parsedPlayer1  = new Player(parsedPlayerData[i].id, parsedPlayerData[i].name, parsedPlayerData[i].wins);
        // parsedPlayer = parsedPlayerData[i]
        this.player1 = parsedPlayer1
        this.playerData.push(this.player1);
      } else if (parsedPlayerData[i].id === "player2") {
        console.log("P2 MATCH!!", parsedPlayerData[i].id, parsedPlayerData[i])
        var parsedPlayer2 = new Player(parsedPlayerData[i].id, parsedPlayerData[i].name, parsedPlayerData[i].wins);
        this.player2 = parsedPlayer2;
        this.playerData.push(this.player2);
      }
    }
  };


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
