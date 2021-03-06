class Player {
  constructor(name, wins) {
    this.name = name;
    this.wins = 0 || wins;
    this.data = [this.name, this.wins];
  }

  saveWinsToStorage() {
    localStorage.setItem("playerData", JSON.stringify(this.data));
  }

  RetrieveWinsFromStorage() {

  }

}
