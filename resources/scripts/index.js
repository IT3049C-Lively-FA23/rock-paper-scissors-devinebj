// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById(`game-screen`);
const startGameButton = document.getElementById(`start-game-button`);
const userName = document.getElementById(`username`);
const userSelection = document.getElementById(`user-selection`);
const goButton = document.getElementById(`go-button`);
const scoreParagraph = document.getElementById(`score`);
const gameHistoryParagraph = document.getElementById(`game-history`);

// instantiate the game object from the `RockPaperScissors` class.
let game = new RockPaperScissors(username);

// hide game screen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(){
  scoreParagraph.textContext = `${game.username}: ${game.score.user} v CPU: ${game.score.cpu}`;
}

// updateGameHistoryUI
function updateGameHistoryUI(){
  gameHistoryParagraph.textContext = '';
  game.gameHistoryLog.forEach(entry => {
    gameHistoryParagraph.textContext += entry + '\n'
  });
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function () {
  const username = userName.nodeValue;
  game = new RockPaperScissors(username);
  welcomeScreen.classList.add('d-none');
  gameScreen.classList.remove('d-none');
  // Complete
});

// go-button EventListener
goButton.addEventListener(`click`, function () {
  const userChoice = userSelection.nodeValue;
  game.play(userChoice);
  updateScoreTallyUI();
  updateGameHistoryUI();
});

// If you're doing the extra-credit, uncomment the below: reset-game-button
// resetGameButton.addEventListener(`click`, function(e) { 
  
// });