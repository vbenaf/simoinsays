import { renderElement } from "./showScreen.js";

let currentScene = 1;

const showCurrentScene = () => {
  switch (currentScene) {
    case 0:
      renderElement("ChoosePlayers");
      break;
    case 1:
      renderElement("Game");
      break;
    case 2:
      renderElement("GameOver");
      break;
    case 3:
      renderElement("showRanking");
      break;
    default:
      break;
  }
};
const getCurrentScreen = () =>{
    return currentScene;
}

export { showCurrentScene, getCurrentScreen };
