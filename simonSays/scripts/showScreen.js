const red = document.querySelector(".red");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");
const div__game = document.querySelector(".container");
const screns_container = document.querySelector(".current_scren");

//buttons start and repeat sequence
const start_btn = document.querySelector(".start");
//fail and success screens
const fail = document.querySelector(".fail");

//choose how many players in game
const playersNumber = document.querySelector(".numerSelector h1");
const buttonAddPlayer = document.querySelector(".plusPlayers");
const buttonSubstractPlayer = document.querySelector(".minusPlayers");
const div__players = document.querySelector(".howManyPlayers");

const renderElement = (element) => {
  switch (element) {
    case "ChoosePlayers":
      showPlayers();
      break;
    case "Game":
      showGame();
      break;
    case "GameOver":
      showGameOver();
      break;
    case "showRanking":
      showRanking();
      break;
    default:
      break;
  }
};

const showPlayers = () => {
  const element = `<div class="howManyPlayers">
    <h1>Set number of players</h1>
    <div class="numerSelector">
        <button class = "minusPlayers">-</button>
        <h1>1</h1>
        <button class = "plusPlayers">+</button>
    </div>
    <button class = "okeiPlayers">GO</button>
</div>`;
  screns_container.innerHTML = element;
};
const showGame = () => {
  const element = `<div class="container">
    <div class="square red"></div>
    <div class="square green"></div>
    <div class="square blue"></div>
    <div class="square yellow"></div>
</div><button class="start">START!</button> `;
  screns_container.innerHTML = element;
};
const showGameOver = () => {
  const h1 = document.createElement("h1");
  h1.textContent = "Show game over creen";
  screns_container.appendChild(h1);
};
const showRanking = () => {
  const h1 = document.createElement("h1");
  h1.textContent = "Show ranking creen";
  screns_container.appendChild(h1);
};

export { renderElement };
