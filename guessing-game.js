const gameInput = document.querySelector('#guessing-game-input');
const guessesUI = document.querySelector('#number-of-guesses');
const systemMessageUI = document.querySelector('#system-message');

const gameCashUI = document.querySelector('#game-cash');
const totalWinsUI = document.querySelector('#total-number-of-wins');
const totalLossesUI = document.querySelector('#total-number-of-losses');

let localCash = parseInt(localStorage.getItem('total_game_cash'));
let localWins = parseInt(localStorage.getItem('total_game_wins'));
let localLosses = parseInt(localStorage.getItem('total_game_losses'));

let randomNumber = 0;
let guesses = 0;
let gameOngoing = false;

//CASH STAT
if (localStorage.getItem('total_game_cash') === null) {
  localStorage.setItem('total_game_cash', 0);
  gameCashUI.innerHTML = `CASH: $0`
} else {
  setInterval(updateGameCashTicker, 33);
  function updateGameCashTicker() {
    gameCashUI.innerHTML = `CASH: $${localStorage.getItem('total_game_cash').toLocaleString()}`
  }
}

// WINS STAT
if (localStorage.getItem('total_game_wins') === null) {
  localStorage.setItem('total_game_wins', 0);
  totalWinsUI.innerHTML = `WINS: 0`
} else {
  setInterval(updateGameWinsTicker, 33);
  function updateGameWinsTicker() {
    totalWinsUI.innerHTML = `WINS: ${localStorage.getItem('total_game_wins').toLocaleString()}`
  }
}

// LOSSES STAT
if (localStorage.getItem('total_game_losses') === null) {
  localStorage.setItem('total_game_losses', 0);
  totalLossesUI.innerHTML = `LOSSES: 0`
} else {
  setInterval(updateGameLossesTicker, 33);
  function updateGameLossesTicker() {
    totalLossesUI.innerHTML = `LOSSES: ${localStorage.getItem('total_game_losses').toLocaleString()}`
  }
}

function generateRandomNumber() {
  randomNumber = Math.floor(Math.random() * 100);
  guesses = 5;
}

function playAgain() {
  let guesses = 0;
  randomNumber = 0;
  startGuessingGame();
  $('#restart-btn').fadeOut();
  gameInput.focus();
}
$(document).on('keydown', function (e) {
  if (e.keyCode === 82 && gameOngoing == false) {
    playAgain();
  }
});

function incrementGameWins() {
  localStorage.setItem('total_game_wins', localWins += 1);
}

function decrementGuessesTicker() {
  guessesUI.innerHTML = `Remaining Guesses: ${guesses}`
}

/**************************************************************************************/

// Start the game
function startGuessingGame() {
  generateRandomNumber();
  gameOngoing = true;
  $('#start-btn').fadeOut();
  setTimeout(function () {
    $('#guessing-game-input').fadeIn();
    setInterval(decrementGuessesTicker, 33);
    gameInput.focus();
    // document.querySelector('#debug-answer').innerHTML = `Debug Answer: ${randomNumber}`;
    guesses = 5;
    systemMessageUI.innerHTML = ``
  }, 500);

  gameInput.addEventListener('keypress', function (e) {
    if (event.key === 'Enter' && gameInput.value.length > 0 && gameInput.value <= 100 && guesses > 0) {

      if (gameInput.value - randomNumber >= 30) {
        systemMessageUI.innerHTML = `[${gameInput.value.padStart(3, '0')}] Your guess is too high! <br> ${systemMessageUI.innerHTML}`;
        guesses -= 1;
      } else if (gameInput.value - randomNumber >= 16) {
        systemMessageUI.innerHTML = `[${gameInput.value.padStart(3, '0')}] Your guess is high. <br> ${systemMessageUI.innerHTML}`;
        guesses -= 1;
      } else if (gameInput.value - randomNumber >= 1 && gameInput.value - randomNumber < 16) {
        systemMessageUI.innerHTML = `[${gameInput.value.padStart(3, '0')}] Your guess is a bit higher. <br> ${systemMessageUI.innerHTML}`;
        guesses -= 1;
      } else if (gameInput.value - randomNumber <= -30) {
        systemMessageUI.innerHTML = `[${gameInput.value.padStart(3, '0')}] Your guess is too low! <br> ${systemMessageUI.innerHTML}`;
        guesses -= 1;
      } else if (gameInput.value - randomNumber <= -16) {
        systemMessageUI.innerHTML = `[${gameInput.value.padStart(3, '0')}] Your guess is low. <br> ${systemMessageUI.innerHTML}`;
        guesses -= 1;
      } else if (gameInput.value - randomNumber <= -1 && gameInput.value - randomNumber < 15) {
        systemMessageUI.innerHTML = `[${gameInput.value.padStart(3, '0')}] Your guess is a bit lower. <br> ${systemMessageUI.innerHTML}`;
        guesses -= 1;
      }

      // IF Won
      else if (gameInput.value == randomNumber) {
        $(gameInput).fadeOut();
        setTimeout(function () {
          $('#restart-btn').fadeIn();
        }, 500);
        guesses -= 1;
        gameOngoing = false;

        if (guesses == 4) {
          localStorage.setItem('total_game_cash', localCash += (localWins + 1) * 5);
          systemMessageUI.innerHTML = `You earned $${(localWins + 1) * 5}. <br> [${gameInput.value.padStart(3, '0')}] You won in first try! Unbelievable! 😱 <br> ${systemMessageUI.innerHTML}`
          incrementGameWins();
        } else if (guesses == 3) {
          localStorage.setItem('total_game_cash', localCash += (localWins + 1) * 4);
          systemMessageUI.innerHTML = `You earned $${(localWins + 1) * 4}. <br> [${gameInput.value.padStart(3, '0')}] You won in second try! Excellent! 🤩 <br> ${systemMessageUI.innerHTML}`
          incrementGameWins();
        } else if (guesses == 2) {
          localStorage.setItem('total_game_cash', localCash += (localWins + 1) * 3);
          systemMessageUI.innerHTML = `You earned $${(localWins + 1) * 3}. <br> [${gameInput.value.padStart(3, '0')}] You won in third try! Way to go! 🥳 <br> ${systemMessageUI.innerHTML}`
          incrementGameWins();
        } else if (guesses == 1) {
          localStorage.setItem('total_game_cash', localCash += 1 + localWins);
          systemMessageUI.innerHTML = `You earned $${localWins + 1}. <br> [${gameInput.value.padStart(3, '0')}] You won! 🎁 Great job! <br> ${systemMessageUI.innerHTML}`
          incrementGameWins();
        } else if (guesses == 0) {
          localStorage.setItem('total_game_cash', localCash += 1 + localWins);
          systemMessageUI.innerHTML = `You earned $${localWins + 1}. <br> [${gameInput.value.padStart(3, '0')}] You won! That's a close one! 😮‍💨 <br> ${systemMessageUI.innerHTML}`
          incrementGameWins();
        }
      }

      // IF Lost
      if (gameInput.value != randomNumber && guesses == 0) {
        $(gameInput).fadeOut();
        systemMessageUI.innerHTML = `Game over. 😭 <br><br> Secret Number: ${randomNumber} <br> ${systemMessageUI.innerHTML}`
        gameOngoing = false;
        localStorage.setItem('total_game_losses', localLosses += 1);
        setTimeout(function () {
          $('#restart-btn').fadeIn();
        }, 500);
      }

      gameInput.value = '';
      $('#greater-than-100-note').fadeOut();
    }

    if (gameInput.value > 100 && randomNumber < 100) {
      $('#greater-than-100-note').fadeIn();

    }
  });

}

function endGuessingGame() {
  gameOngoing = false;
  $('#guessing-game-input').fadeOut();
  setTimeout(function () {
    $('#start-btn').fadeIn();
    systemMessageUI.innerHTML = ``
  }, 500);
}