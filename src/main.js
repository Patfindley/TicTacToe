// *****Identifiers*****
var gameBoard = document.getElementById("gameBoard");
var player1WinCounter = document.getElementById("player1WinCounter");
var player2WinCounter = document.getElementById("player2WinCounter")
// *****ROW A*****
var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");
// *****ROW B*****
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
// *****ROW C*****
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");

var game = new Game();
// *****EVENT LISTERS*****
window.addEventListener("load", gameStart() )

gameBoard.addEventListener("click", function(event) {
  game.changePlayer(event);
})




//******GAME BOARD******

a1.addEventListener("click", function(event) {
  clickSquare();
  disableSquare();
})

a2.addEventListener("click", function(event) {
  clickSquare();
  disableSquare();
})

a3.addEventListener("click", function(event) {
  clickSquare();
  disableSquare()
})

b1.addEventListener("click", function(event) {
  clickSquare();
  disableSquare();
})

b2.addEventListener("click", function(event) {
  clickSquare();
  disableSquare();
})

b3.addEventListener("click", function(event) {
  clickSquare();
  disableSquare();
})

c1.addEventListener("click", function(event) {
  clickSquare();
  disableSquare();
})

c2.addEventListener("click", function(event) {
  clickSquare();
  disableSquare();
})

c3.addEventListener("click", function(event) {
  clickSquare();
  disableSquare();
})



//****FUNCTIONS****

function gameStart() {
  var player1 = new Player("👹", 0);
  var player2 = new Player("🧞‍♂️", 0);
  loadPlayerData()
  game.player1 = player1;
  game.player2 = player2;
  game.turn = player1;
  game.playerData.push(player1);
  game.playerData.push(player2);
  renderGame();
  console.log(game.turn);
}

function renderGame() {
  player1WinCounter.innerText = `${game.player1.wins}`
  player2WinCounter.innerText = `${game.player2.wins}`
}

function loadPlayerData() {
  var parsedPlayerData = [];
  if (localStorage.length > 0) {
    var retrievedData = localStorage.getItem("playerData")
    parsedPlayerData = JSON.parse(retrievedData);
    console.log("parsedPlayerData >>>", parsedPlayerData[0]);
    instantiatePlayerData(parsedPlayerData)
  }
}

function instantiatePlayerData(parsedPlayerData) {
  for (var i = 0; i < parsedPlayerData.length; i++) {
    if (parsedPlayerData[i] === "player1") {
      player1 = new Player(parsedPlayerData[i].name, parsedPlayerData[i].wins);
    } else if (parsedPlayerData[i] === "player2") {
      player2 = new Player(parsedPlayerData[i].name, parsedPlayerData[i].wins);
    }
  }
};


function clickSquare(e) {
  var squareIds = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"]
  var square = event.target;
  for (var i = 0; i < squareIds.length; i++) {
    if (event.target.classList.contains(squareIds[i])) {
      console.log(">>>>>GOT IT!<<<<<<", event.target.classList);
      square.innerText = `${game.turn.name}`;
      game.givePlayerSpot(squareIds[i]);
      game.checkWin();
      }
    }
    if (game.isWon) {
      winTracker();
      disableAll();
    }
  };

  function disableSquare() {
    square = event.target;
    square.disabled = true;
  };

  function disableAll() {
    if (game.isWon) {
      console.log(">>BUTTONS DISABLED<<")
      a1.disabled = true;
      a2.disabled = true;
      a3.disabled = true;
      b1.disabled = true;
      b2.disabled = true;
      b3.disabled = true;
      c1.disabled = true;
      c2.disabled = true;
      c3.disabled = true;
    }
  };

  function winTracker() { ///// questionable
      console.log("WIN TRACKER()", `${game.turn.name} WINS!`)
      game.turn.wins++
      game.turn.saveWinsToStorage();
      // game.player2.saveWinsToStorage();
  };



// commit player objects to local storage;
// --- why won't game.data pull player 1 & player 2 data?
// parse win profiles from local storage;
// give players unique tokens;
// flip blue css gradient;
// add function to determine who goes first based on wins;
