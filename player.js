class Player {
  constructor(name, wins) {
    this.name = name;
    this.wins = 0 || wins;
    this.data = [this.name];
  }

  saveWinsToStorage() {
    this.data = [this.name, this.wins];
    localStorage.setItem("playerData", JSON.stringify(game.playerData));
  }

  RetrieveWinsFromStorage() {

  }

}
