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

gameBoard.addEventListener("mouseover", function(event) {
  event.target.style.border = "5px orange solid";
  event.target.style.boxShadow = "inset 0 1px 3px orange"
  setTimeout(function() {
    event.target.style.border = "";
  }, 500);
}, false);
// })


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
  renderGame();
}

function renderGame() {
  player1WinCounter.innerText = `${game.player1.wins}`
  player2WinCounter.innerText = `${game.player2.wins}`
  if (game.turnCounter === 0) {
  displayPlayerTurnId.innerText = ` IT'S PLAYER ${game.turn.id}'S TURN!'`
  displayPlayerTurnToken.innerText = `${game.turn.name}`
  }
}

function showPlayerTurn() {
  if (game.turn.id === "1") {
  displayPlayerTurnId.innerText = `IT'S PLAYER ${game.player2.id}'S TURN!'`
  displayPlayerTurnToken.innerText = `${game.player2.name}`
  } else {
    displayPlayerTurnId.innerText = `IT'S PLAYER ${game.player1.id}'S TURN!'`
    displayPlayerTurnToken.innerText = `${game.player1.name}`
  }
}

function clickSquare(e) {
  var squareIds = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];
  var square = event.target;
  for (var i = 0; i < squareIds.length; i++) {
    if (event.target.classList.contains(squareIds[i])) {
      square.innerText = `${game.turn.name}`;
      game.givePlayerSpot(squareIds[i]);
      game.checkWin();
      }
    }
    if (game.turnCounter === 8) {
      console.log("draw")
      displayPlayerTurnId.innerText = `DRAW!`;
      displayPlayerTurnToken.innerText = `😢`;
    } else if (game.isWon === true) {
      console.log("WINNER")
      renderGame();
      winDisplay();
      disableAll();
    } else  {
      showPlayerTurn();
    }
    game.turnCounter++
    console.log(game.turnCounter);
  };

  function winDisplay() {
    console.log("I WORKED!");
    displayPlayerTurnId.innerText = ` PLAYER ${game.turn.id} WINS!'`;
    displayPlayerTurnToken.innerText = `${game.turn.name}`;
  }

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


// hover event listener add glow to box
// give players unique tokens;
// flip blue css gradient;
// add function to determine who goes first based on wins;
// div in a div for the token to grow
