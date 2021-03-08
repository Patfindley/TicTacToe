// *****Identifiers*****
var gameBoard = document.getElementById("gameBoard");
var player1WinCounter = document.getElementById("player1WinCounter");
var player2WinCounter = document.getElementById("player2WinCounter");
var displayPlayerTurnId = document.getElementById("displayPlayerTurnId");
var displayPlayerTurnToken = document.getElementById("displayPlayerTurnToken");
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

var game = new Game;
// *****EVENT LISTERS*****
window.addEventListener("load", function(event) {
  gameStart();
})

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
  game.loadPlayerData();
  if (game.playerData.length === 0) {
    game.playerData.push(game.player1);
    game.playerData.push(game.player2);
  }

  // var player1 = new Player(1, "👹");
  // var player2 = new Player(2, "🧞‍♂️");
  // game = new Game(player1, player2)
  // game.player1 = player1;
  // game.player2 = player2;
  // game.turn = player1;
  // game.playerData.push(game.player1);
  // game.playerData.push(game.player2);
  renderGame();
  console.log(game.turn);
}

function renderGame() {
  player1WinCounter.innerText = `${game.player1.wins}`
  player2WinCounter.innerText = `${game.player2.wins}`
  // showPlayerTurn();
  displayPlayerTurnId.innerText = ` IT'S PLAYER ${game.turn.id}'S ${game.turn.name} TURN!'`
  displayPlayerTurnToken.innerText = `${game.turn.name}`
}

function showPlayerTurn() {
  console.log("I WORKED")
  if (game.turn.id === "1") {
  displayPlayerTurnId.innerText = `IT'S PLAYER ${game.player2.id}'S TURN!'`
  displayPlayerTurnToken.innerText = `${game.player2.name}`
  } else {
    displayPlayerTurnId.innerText = `IT'S PLAYER ${game.player1.id}'S TURN!'`
    displayPlayerTurnToken.innerText = `${game.player1.name}`
  }
}

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
    if (game.isWon === true) {
      console.log("conditional main.js winner")
      // winTracker();
      renderGame()
      disableAll();
    } else {
      showPlayerTurn();
      // console.log("I WORKED")

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


// if statement in game start up, if parsedPlayerData > 1; instantiate
// commit player objects to local storage;
// --- why won't game.data pull player 1 & player 2 data?
// parse win profiles from local storage;
//event.target.disable for square disable
// give players unique tokens;
// flip blue css gradient;
// add function to determine who goes first based on wins;
// div in a div for the token to grow
