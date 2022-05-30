const gameInput = document.querySelector('#guessing-game-input');
const guessesUI = document.querySelector('#number-of-guesses');
const systemMessageUI = document.querySelector('#system-message');


const totalWinsUI = document.querySelector('#total-number-of-wins');
const totalLossesUI = document.querySelector('#total-number-of-losses');

let localTotalGamesPlayed = parseInt(localStorage.getItem('total_games_played'));
let localWins = parseInt(localStorage.getItem('total_game_wins'));
let localLosses = parseInt(localStorage.getItem('total_game_losses'));

let randomNumber = 0;
let guesses = 0;
let gameOngoing = false;

function generateRandomNumber() {
  randomNumber = Math.floor(Math.random() * 100);
  guesses = 5;
}

function playAgain() {
  if (localCash > 0 && gameStatus == 'Ongoing') {
    let guesses = 0;
    randomNumber = 0;
    startGuessingGame();
    $('#restart-btn').fadeOut();
    gameInput.focus();
  }
}
$(document).on('keydown', function (e) {
  if (e.keyCode === 82 && gameOngoing == false) {
    playAgain();
  }
});

function incrementGameWins() {
  localStorage.setItem('total_game_wins', localWins += 1);
}

/**************************************************************************************/

// Start the game
function startGuessingGame() {
  localStorage.setItem('total_game_cash', localCash -= 1);
  generateRandomNumber();
  gameOngoing = true;
  $('#start-btn').fadeOut();
  setTimeout(function () {
    $('#guessing-game-input').fadeIn();
    setInterval(decrementGuessesTicker, 33);
    function decrementGuessesTicker() {
      guessesUI.innerHTML = `Remaining Guesses: ${guesses}`
    }
    gameInput.focus();
    // document.querySelector('#debug-answer').innerHTML = `Debug Answer: ${randomNumber}`;
    guesses = 5;
  }, 500);
  systemMessageUI.innerHTML = ``

  gameInput.addEventListener('keypress', function (e) {
    if (event.key === 'Enter' && gameInput.value.length > 0 && gameInput.value <= 100 && guesses > 0) {

      if (gameInput.value - randomNumber >= 30) {
        systemMessageUI.innerHTML = `<a>[${gameInput.value.padStart(3, '0')}]</a> Your guess is too high! <br> ${systemMessageUI.innerHTML}`;
        guesses -= 1;
      } else if (gameInput.value - randomNumber >= 16) {
        systemMessageUI.innerHTML = `<a>[${gameInput.value.padStart(3, '0')}]</a> Your guess is high. <br> ${systemMessageUI.innerHTML}`;
        guesses -= 1;
      } else if (gameInput.value - randomNumber >= 1 && gameInput.value - randomNumber < 16) {
        systemMessageUI.innerHTML = `<a>[${gameInput.value.padStart(3, '0')}]</a> Your guess is a bit higher. <br> ${systemMessageUI.innerHTML}`;
        guesses -= 1;
      } else if (gameInput.value - randomNumber <= -30) {
        systemMessageUI.innerHTML = `<a>[${gameInput.value.padStart(3, '0')}]</a> Your guess is too low! <br> ${systemMessageUI.innerHTML}`;
        guesses -= 1;
      } else if (gameInput.value - randomNumber <= -16) {
        systemMessageUI.innerHTML = `<a>[${gameInput.value.padStart(3, '0')}]</a> Your guess is low. <br> ${systemMessageUI.innerHTML}`;
        guesses -= 1;
      } else if (gameInput.value - randomNumber <= -1 && gameInput.value - randomNumber < 15) {
        systemMessageUI.innerHTML = `<a>[${gameInput.value.padStart(3, '0')}]</a> Your guess is a bit lower. <br> ${systemMessageUI.innerHTML}`;
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
          localStorage.setItem('total_games_played', localTotalGamesPlayed += 1);
          systemMessageUI.innerHTML = `You earned $<a>${(localWins + 1) * 5}</a>. <br> <a>[${gameInput.value.padStart(3, '0')}]</a> You won in first try! Unbelievable! 😱 <br> ${systemMessageUI.innerHTML}`
          incrementGameWins();
        } else if (guesses == 3) {
          localStorage.setItem('total_game_cash', localCash += (localWins + 1) * 4);
          localStorage.setItem('total_games_played', localTotalGamesPlayed += 1);
          systemMessageUI.innerHTML = `You earned $<a>${(localWins + 1) * 4}</a>. <br> <a>[${gameInput.value.padStart(3, '0')}]</a> You won in second try! Excellent! 🤩 <br> ${systemMessageUI.innerHTML}`
          incrementGameWins();
        } else if (guesses == 2) {
          localStorage.setItem('total_game_cash', localCash += (localWins + 1) * 3);
          localStorage.setItem('total_games_played', localTotalGamesPlayed += 1);
          systemMessageUI.innerHTML = `You earned $<a>${(localWins + 1) * 3}</a>. <br> <a>[${gameInput.value.padStart(3, '0')}]</a> You won in third try! Way to go! 🥳 <br> ${systemMessageUI.innerHTML}`
          incrementGameWins();
        } else if (guesses == 1) {
          localStorage.setItem('total_game_cash', localCash += 1 + localWins);
          localStorage.setItem('total_games_played', localTotalGamesPlayed += 1);
          systemMessageUI.innerHTML = `You earned $<a>${localWins + 1}</a>. <br> <a>[${gameInput.value.padStart(3, '0')}]</a> You won! 🎁 Great job! <br> ${systemMessageUI.innerHTML}`
          incrementGameWins();
        } else if (guesses == 0) {
          localStorage.setItem('total_game_cash', localCash += 1 + localWins);
          localStorage.setItem('total_games_played', localTotalGamesPlayed += 1);
          systemMessageUI.innerHTML = `You earned $<a>${localWins + 1}</a>. <br> <a>[${gameInput.value.padStart(3, '0')}]</a> You won! That's a close one! 😮‍💨 <br> ${systemMessageUI.innerHTML}`
          incrementGameWins();
        }
      }

      // IF Lost
      if (gameInput.value != randomNumber && guesses == 0) {
        $(gameInput).fadeOut();
        systemMessageUI.innerHTML = `Game over. 😭 <br><br> The secret number is <a>[${randomNumber.toString().padStart(3, '0')}].</a><br> ${systemMessageUI.innerHTML}`
        gameOngoing = false;
        localStorage.setItem('total_game_losses', localLosses += 1);
        localStorage.setItem('total_games_played', localTotalGamesPlayed += 1);
        setTimeout(function () {
          $('#restart-btn').fadeIn();
        }, 500);
      }

      gameInput.value = '';
    }

  });

}

function endGuessingGame() {
  if (gameOngoing == true && guesses < 5) {
    if (confirm('Ending a game will result in a loss. Are you sure you want to quit?') == true) {
      gameOngoing = false;
      localStorage.setItem('total_game_losses', localLosses += 1);
      $('#guessing-game-input').fadeOut();
      setTimeout(function () {
        $('#start-btn').fadeIn();
        systemMessageUI.innerHTML = ``
      }, 500);
    }
  } else {
    gameOngoing = false;
    $('#guessing-game-input').fadeOut();
    setTimeout(function () {
      $('#start-btn').fadeIn();
      systemMessageUI.innerHTML = ``
    }, 500);
  }
}