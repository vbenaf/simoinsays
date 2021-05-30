import { showCurrentScene, getCurrentScreen } from "./screens.js";

window.onload = function () {
  const goButton = document.querySelector(".okeiPlayers");
  let currentScreen = showCurrentScene();
  if (getCurrentScreen() == 0) {
    goButton.addEventListener("click", function () {});
  }
};
