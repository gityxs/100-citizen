const centerLeftFrame = document.querySelector('#center-frame-left-aligned');
const centerCenterFrame = document.querySelector('#center-frame-center-aligned');
const centerRightFrame = document.querySelector('#center-frame-right-aligned');

let centerLeftDialogue = document.querySelector('#center-frame-left-aligned-game-dialogue');
let centerCenterDialogue = document.querySelector('#center-frame-center-aligned-game-dialogue');
let centerRightDialogue = document.querySelector('#center-frame-right-aligned-game-dialogue');

window.onload = function () {
  gameStoryProgressTicker();
};

function gameStoryProgressTicker() {
  if (localStorage.getItem('welcome_done') == null) {
    fadeInSlow(centerCenterFrame);
    centerCenterDialogue.innerHTML = starterDialogue;
  }

  if (localStorage.getItem('show_identification') == null && localStorage.getItem('welcome_done') == 'true') {
    fadeInSlow(centerLeftFrame);
    centerLeftDialogue.innerHTML = borderPatrolDialogue1;
  }

  if (localStorage.getItem('show_identification_2') == null && localStorage.getItem('show_identification') == 'true') {
    fadeInSlow(centerLeftFrame);
    centerLeftDialogue.innerHTML = borderPatrolDialogue2;
  }

  if (localStorage.getItem('started') == null && localStorage.getItem('show_identification_2') == 'true') {
    fadeInSlow(centerCenterFrame);
    centerCenterDialogue.innerHTML = borderPatrolDialogue3;
  }

}

//CASH STAT
if (localStorage.getItem('total_game_cash') === null) {
  localStorage.setItem('total_game_cash', 0);
  // gameCashUI.innerHTML = `CASH: $0`
}
// else {
//   setInterval(updateGameCashTicker, 33);
//   function updateGameCashTicker() {
//     gameCashUI.innerHTML = `CASH: $${localStorage.getItem('total_game_cash').toLocaleString()}`
//   }
// }

// WINS STAT
if (localStorage.getItem('total_game_wins') === null) {
  localStorage.setItem('total_game_wins', 0);
  // totalWinsUI.innerHTML = `WINS: 0`
}
// else {
//   setInterval(updateGameWinsTicker, 33);
//   function updateGameWinsTicker() {
//     totalWinsUI.innerHTML = `WINS: ${localStorage.getItem('total_game_wins').toLocaleString()}`
//   }
// }

// LOSSES STAT
if (localStorage.getItem('total_game_losses') === null) {
  localStorage.setItem('total_game_losses', 0);
  // totalLossesUI.innerHTML = `LOSSES: 0`
}
// else {
//   setInterval(updateGameLossesTicker, 33);
//   function updateGameLossesTicker() {
//     totalLossesUI.innerHTML = `LOSSES: ${localStorage.getItem('total_game_losses').toLocaleString()}`
//   }
// }

function fadeOut(window) {
  $(window).fadeOut();
}

function fadeInNormalDelay(window) {
  setTimeout(function () {
    $(window).fadeIn();
  }, 500);
}

function fadeInSlow(window) {
  $(window).fadeIn(3000);
}

function setProgressLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

function saveUserInputValue(key, value) {
  localStorage.setItem(key, document.querySelector(value).value);
}

function refreshPage() {
  setTimeout(function () {
    window.location.reload();
  }, 1500);
}
