const gameInput = document.querySelector('#guessing-game-input');
const triesUI = document.querySelector('#number-of-tries');
const systemMessageUI = document.querySelector('#system-message');
const totalWinsUI = document.querySelector('#total-number-of-wins');
const gameCashUI = document.querySelector('#game-cash');

let localCash = parseInt(localStorage.getItem('total_game_cash'));
let localWins = parseInt(localStorage.getItem('total_game_wins'));
let randomNumber = 0;
let tries = 0;
let gameOngoing = false;

if (localStorage.getItem('total_game_wins') === null) {
  localStorage.setItem('total_game_wins', 0);
  totalWinsUI.innerHTML = `Wins: 0`
}
else {
  totalWinsUI.innerHTML = `Wins: ${(localWins).toLocaleString()}`
}

if (localStorage.getItem('total_game_cash') === null) {
  localStorage.setItem('total_game_cash', 0);
  gameCashUI.innerHTML = `$0`
}
else {
  gameCashUI.innerHTML = `$${(localCash).toLocaleString()}`
}

function generateRandomNumber() {
  randomNumber = Math.floor(Math.random() * 100);
  tries = 5;
}

function playAgain() {
  let tries = 0;
  randomNumber = 0;
  startGuessingGame();
  document.querySelector('#restart-btn').style.display = 'none';
  gameInput.focus();
}
$(document).on('keydown', function (e) {
  if (e.keyCode === 82 && gameOngoing == false) {
    playAgain();
  }
});


/**************************************************************************************/

// Start the game
function startGuessingGame() {
  generateRandomNumber();
  gameOngoing = true;

  gameInput.style.display = 'block';
  document.querySelector('#start-btn').style.display = 'none';

  gameInput.focus();
  // document.querySelector('#debug-answer').innerHTML = `Debug Answer: ${randomNumber}`;

  triesUI.innerHTML = `Guesses: 5`;
  systemMessageUI.innerHTML = ``

  gameInput.addEventListener('keypress', function (e) {
    if (event.key === 'Enter' && gameInput.value.length > 0 && gameInput.value <= 100 && tries > 0) {

      triesUI.innerHTML = `Guesses: ${tries}`;

      if (gameInput.value - randomNumber >= 30) {
        systemMessageUI.innerHTML = `[${gameInput.value.padStart(3, '0')}] Your guess is too high! <br> ${systemMessageUI.innerHTML}`;
        triesUI.innerHTML = `Guesses: ${tries -= 1}`;
      }
      else if (gameInput.value - randomNumber >= 16) {
        systemMessageUI.innerHTML = `[${gameInput.value.padStart(3, '0')}] Your guess is high. <br> ${systemMessageUI.innerHTML}`;
        triesUI.innerHTML = `Guesses: ${tries -= 1}`;
      }
      else if (gameInput.value - randomNumber >= 1 && gameInput.value - randomNumber < 16) {
        systemMessageUI.innerHTML = `[${gameInput.value.padStart(3, '0')}] Your guess is a bit higher. <br> ${systemMessageUI.innerHTML}`;
        triesUI.innerHTML = `Guesses: ${tries -= 1}`;
      }
      else if (gameInput.value - randomNumber <= -30) {
        systemMessageUI.innerHTML = `[${gameInput.value.padStart(3, '0')}] Your guess is too low! <br> ${systemMessageUI.innerHTML}`;
        triesUI.innerHTML = `Guesses: ${tries -= 1}`;
      }
      else if (gameInput.value - randomNumber <= -16) {
        systemMessageUI.innerHTML = `[${gameInput.value.padStart(3, '0')}] Your guess is low. <br> ${systemMessageUI.innerHTML}`;
        triesUI.innerHTML = `Guesses: ${tries -= 1}`;
      }
      else if (gameInput.value - randomNumber <= -1 && gameInput.value - randomNumber < 15) {
        systemMessageUI.innerHTML = `[${gameInput.value.padStart(3, '0')}] Your guess is a bit lower. <br> ${systemMessageUI.innerHTML}`;
        triesUI.innerHTML = `Guesses: ${tries -= 1}`;
      }

      // IF Won
      else if (gameInput.value == randomNumber) {
        gameInput.style.display = 'none';
        document.querySelector('#restart-btn').style.display = 'block';
        triesUI.innerHTML = `Guesses: ${tries -= 1}`;
        gameOngoing = false;
        localStorage.setItem('total_game_wins', localWins + 1);
        totalWinsUI.innerHTML = `Wins: ${(localWins += 1).toLocaleString()}`
        localStorage.setItem('total_game_cash', localCash + 1);
        gameCashUI.innerHTML = `$${(localCash += 1).toLocaleString()}`
        systemMessageUI.innerHTML = `You earned $1. <br> [${gameInput.value.padStart(3, '0')}] You won! 🎁 Great job! <br> ${systemMessageUI.innerHTML}`
      }

      // IF Lost
      if (gameInput.value != randomNumber && tries == 0) {
        systemMessageUI.innerHTML = `Game over. 😭 <br><br> Target: ${randomNumber} <br> ${systemMessageUI.innerHTML}`
        gameInput.style.display = 'none';
        document.querySelector('#restart-btn').style.display = 'block';
        triesUI.innerHTML = `Guesses: ${tries}`;
        gameOngoing = false;
      }

      gameInput.value = '';

    }
  });

}