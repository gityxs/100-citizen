const gameInput = document.querySelector('#guessing-game-input');
const guessesUI = document.querySelector('#number-of-guesses');
const systemMessageUI = document.querySelector('#system-message');
const totalWinsUI = document.querySelector('#total-number-of-wins');
const totalLossesUI = document.querySelector('#total-number-of-losses');
const gameCashUI = document.querySelector('#game-cash');

let localCash = parseInt(localStorage.getItem('total_game_cash'));
let localWins = parseInt(localStorage.getItem('total_game_wins'));
let localLosses = parseInt(localStorage.getItem('total_game_losses'));
let randomNumber = 0;
let guesses = 0;
let gameOngoing = false;

if (localStorage.getItem('total_game_wins') === null) {
  localStorage.setItem('total_game_wins', 0);
  totalWinsUI.innerHTML = `Wins: 0`
}
else {
  totalWinsUI.innerHTML = `Wins: ${(localWins).toLocaleString()}`
}

if (localStorage.getItem('total_game_losses') === null) {
  localStorage.setItem('total_game_losses', 0);
  totalLossesUI.innerHTML = `Losses: 0`
}
else {
  totalLossesUI.innerHTML = `Losses: ${(localLosses).toLocaleString()}`
}

if (localStorage.getItem('total_game_cash') === null) {
  localStorage.setItem('total_game_cash', 0);
  gameCashUI.innerHTML = `Cash: $0`
}
else {
  gameCashUI.innerHTML = `Cash: $${(localCash).toLocaleString()}`
}

function generateRandomNumber() {
  randomNumber = Math.floor(Math.random() * 100);
  guesses = 5;
}

function playAgain() {
  let guesses = 0;
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

  guessesUI.innerHTML = `Remaining Guesses: 5`;
  systemMessageUI.innerHTML = ``

  gameInput.addEventListener('keypress', function (e) {
    if (event.key === 'Enter' && gameInput.value.length > 0 && gameInput.value <= 100 && guesses > 0) {

      guessesUI.innerHTML = `Remaining Guesses: ${guesses}`;

      if (gameInput.value - randomNumber >= 30) {
        systemMessageUI.innerHTML = `[${gameInput.value.padStart(3, '0')}] Your guess is too high! <br> ${systemMessageUI.innerHTML}`;
        guessesUI.innerHTML = `Remaining Guesses: ${guesses -= 1}`;
      }
      else if (gameInput.value - randomNumber >= 16) {
        systemMessageUI.innerHTML = `[${gameInput.value.padStart(3, '0')}] Your guess is high. <br> ${systemMessageUI.innerHTML}`;
        guessesUI.innerHTML = `Remaining Guesses: ${guesses -= 1}`;
      }
      else if (gameInput.value - randomNumber >= 1 && gameInput.value - randomNumber < 16) {
        systemMessageUI.innerHTML = `[${gameInput.value.padStart(3, '0')}] Your guess is a bit higher. <br> ${systemMessageUI.innerHTML}`;
        guessesUI.innerHTML = `Remaining Guesses: ${guesses -= 1}`;
      }
      else if (gameInput.value - randomNumber <= -30) {
        systemMessageUI.innerHTML = `[${gameInput.value.padStart(3, '0')}] Your guess is too low! <br> ${systemMessageUI.innerHTML}`;
        guessesUI.innerHTML = `Remaining Guesses: ${guesses -= 1}`;
      }
      else if (gameInput.value - randomNumber <= -16) {
        systemMessageUI.innerHTML = `[${gameInput.value.padStart(3, '0')}] Your guess is low. <br> ${systemMessageUI.innerHTML}`;
        guessesUI.innerHTML = `Remaining Guesses: ${guesses -= 1}`;
      }
      else if (gameInput.value - randomNumber <= -1 && gameInput.value - randomNumber < 15) {
        systemMessageUI.innerHTML = `[${gameInput.value.padStart(3, '0')}] Your guess is a bit lower. <br> ${systemMessageUI.innerHTML}`;
        guessesUI.innerHTML = `Remaining Guesses: ${guesses -= 1}`;
      }

      // IF Won
      else if (gameInput.value == randomNumber) {
        gameInput.style.display = 'none';
        document.querySelector('#restart-btn').style.display = 'block';
        guessesUI.innerHTML = `Remaining Guesses: ${guesses -= 1}`;
        gameOngoing = false;

        if (guesses == 4) {
          localStorage.setItem('total_game_cash', (localCash + 1 + localWins) * 5);
          gameCashUI.innerHTML = `Cash: $${((localCash += 1 + localWins) * 5).toLocaleString()}`
          systemMessageUI.innerHTML = `You earned $${(localWins + 1) * 5}. <br> [${gameInput.value.padStart(3, '0')}] You won! 🎁 Great job! <br> ${systemMessageUI.innerHTML}`
          localStorage.setItem('total_game_wins', localWins + 1);
          totalWinsUI.innerHTML = `Wins: ${(localWins += 1).toLocaleString()}`
        }
        else if (guesses == 3) {
          localStorage.setItem('total_game_cash', (localCash + 1 + localWins) * 4);
          gameCashUI.innerHTML = `Cash: $${((localCash += 1 + localWins) * 4).toLocaleString()}`
          systemMessageUI.innerHTML = `You earned $${(localWins + 1) * 4}. <br> [${gameInput.value.padStart(3, '0')}] You won! 🎁 Great job! <br> ${systemMessageUI.innerHTML}`
          localStorage.setItem('total_game_wins', localWins + 1);
          totalWinsUI.innerHTML = `Wins: ${(localWins += 1).toLocaleString()}`
        }
        else if (guesses == 2) {
          localStorage.setItem('total_game_cash', (localCash + 1 + localWins) * 3);
          gameCashUI.innerHTML = `Cash: $${((localCash += 1 + localWins) * 3).toLocaleString()}`
          systemMessageUI.innerHTML = `You earned $${(localWins + 1) * 3}. <br> [${gameInput.value.padStart(3, '0')}] You won! 🎁 Great job! <br> ${systemMessageUI.innerHTML}`
          localStorage.setItem('total_game_wins', localWins + 1);
          totalWinsUI.innerHTML = `Wins: ${(localWins += 1).toLocaleString()}`
        }
        else {
          localStorage.setItem('total_game_cash', localCash + 1 + localWins);
          gameCashUI.innerHTML = `Cash: $${(localCash += 1 + localWins).toLocaleString()}`
          systemMessageUI.innerHTML = `You earned $${localWins + 1}. <br> [${gameInput.value.padStart(3, '0')}] You won! 🎁 Great job! <br> ${systemMessageUI.innerHTML}`
          localStorage.setItem('total_game_wins', localWins + 1);
          totalWinsUI.innerHTML = `Wins: ${(localWins += 1).toLocaleString()}`
        }
      }

      // IF Lost
      if (gameInput.value != randomNumber && guesses == 0) {
        systemMessageUI.innerHTML = `Game over. 😭 <br><br> Target: ${randomNumber} <br> ${systemMessageUI.innerHTML}`
        gameInput.style.display = 'none';
        document.querySelector('#restart-btn').style.display = 'block';
        guessesUI.innerHTML = `Remaining Guesses: ${guesses}`;
        gameOngoing = false;
        localStorage.setItem('total_game_losses', localLosses + 1);
        totalLossesUI.innerHTML = `Losses: ${(localLosses += 1).toLocaleString()}`
      }

      gameInput.value = '';

    }
  });

}