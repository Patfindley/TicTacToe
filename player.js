class Player {
  constructor(name, wins) {
    this.name = name;
    this.wins = 0 || wins;
  }

  saveWinsToStorage() {
    this.data = [this.name, this.wins];
    localStorage.setItem("playerData", JSON.stringify(this.data));
  }

  RetrieveWinsFromStorage() {

  }

}
