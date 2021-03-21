
class Game {
  constructor(player1, player2) {
    this.player1 = new Player("1", "👹");
    this.player2 = new Player("2", "🧞‍♂️");
    this.turn = this.player1;
    this.turnCounter = 0;
    this.player1Moves = [];
    this.player2Moves = [];
    this.playerData = [];
    this.isWon = false
  }

  resetGame() {
    setTimeout(function() {
    location.reload();  }, 2000);
  }

  changePlayer() {
    switch(this.turn.id) {
      case this.player1.id:
        this.turn = this.player2;
        break;
      case this.player2.id:
          this.turn = this.player1;
    }
  }

  givePlayerSpot(move) {
    switch(this.turn.id) {
      case this.player1.id:
        this.player1Moves.push(move);
        break;
      case this.player2.id:
        this.player2Moves.push(move);
    }
  }

  checkWin() {
    if (this.moveCheck(this.player1Moves)) {
      this.winSequence();
    } else if (this.moveCheck(this.player2Moves)) {
      this.winSequence();
    }
  }

  moveCheck(player) {
    if (player.includes("a1") && player.includes("a2") && player.includes("a3") ||
    player.includes("b1") && player.includes("b2") && player.includes("b3") ||
    player.includes("c1") && player.includes("c2") && player.includes("c3") ||
    player.includes("a1") && player.includes("b1") && player.includes("c1") ||
    player.includes("a2") && player.includes("b2") && player.includes("c2") ||
    player.includes("a3") && player.includes("b3") && player.includes("c3") ||
    player.includes("a1") && player.includes("b2") && player.includes("c3") ||
    player.includes("c3") && player.includes("b2") && player.includes("a1") ||
    player.includes("a3") && player.includes("b2") && player.includes("c1")) {
      return true;
    }
  }

  winSequence() {
    if (this.turnCounter >= 8) {
      this.resetGame();
    } else {
    this.isWon = true;
    this.turn.wins++;
    this.turn.saveWinsToStorage();
    this.resetGame();
    }
  }

}
