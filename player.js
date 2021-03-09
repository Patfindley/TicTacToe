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
    var parsedPlayerData = [];
    console.log("loadPlayerData", parsedPlayerData)
    if (localStorage.length > 0) {
      var retrievedData = localStorage.getItem("playerData")
      parsedPlayerData = JSON.parse(retrievedData);
      this.parsePlayer(parsedPlayerData)
    }
  }

  parsePlayer(parsedPlayerData) {
    game.playerData = [];
    for (var i = 0; i < parsedPlayerData.length; i++) {
      if (parsedPlayerData[i].id === this.id) {
        var parsedPlayer = new Player(parsedPlayerData[i].id, parsedPlayerData[i].name, parsedPlayerData[i].wins);
        if (this.id === "1") {
          game.player1 = parsedPlayer;
        } else if (this.id === "2") {
          game.player2 = parsedPlayer;
        }
      }
    }
  }

};
