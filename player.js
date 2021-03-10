class Player {
  constructor(id, name, wins) {
    this.id = id;
    this.name = name;
    this.wins = wins || 0 ;
  };

  saveWinsToStorage() {
    var storage = window.localStorage;
    storage.clear();
    localStorage.setItem("playerData", JSON.stringify(game.playerData));
  };

  loadPlayerData() {
    var parsedPlayers = [];
    if (localStorage.length > 0) {
      var retrievedData = localStorage.getItem("playerData")
      parsedPlayers = JSON.parse(retrievedData);
      this.parsePlayer(parsedPlayers)
    }
  }

  parsePlayer(parsedPlayers) {
    game.playerData = [];
    for (var i = 0; i < parsedPlayers.length; i++) {
      if (parsedPlayers[i].id === this.id) {
        var parsedPlayer = new Player(parsedPlayers[i].id, parsedPlayers[i].name, parsedPlayers[i].wins);
        if (this.id === "1") {
          game.player1 = parsedPlayer;
        } else if (this.id === "2") {
          game.player2 = parsedPlayer;
        }
      }
    }
  }

};
