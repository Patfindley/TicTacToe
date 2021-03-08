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

//   RetrieveWinsFromStorage() {
//
// }

};
