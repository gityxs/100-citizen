const gameTitleFrame = document.querySelector('#game-title-frame');
const centerLeftFrame = document.querySelector('#center-frame-left-aligned');
const centerCenterFrame = document.querySelector('#center-frame-center-aligned');
const centerRightFrame = document.querySelector('#center-frame-right-aligned');
const razeBarFrame = document.querySelector('#raze-bar-frame');

let centerLeftDialogue = document.querySelector('#center-frame-left-aligned-game-dialogue');
let centerCenterDialogue = document.querySelector('#center-frame-center-aligned-game-dialogue');
let centerRightDialogue = document.querySelector('#center-frame-right-aligned-game-dialogue');
let razeBarDialogue = document.querySelector('#raze-bar-frame-dialogue');

const gameCashUI = document.querySelector('#game-cash');
const totalGamesPlayedUI = document.querySelector('#total-games-played');
const citizenEnergyUI = document.querySelector('#game-energy');

let localCash = parseInt(localStorage.getItem('total_game_cash'));

let citizenUsername;
let citizenIdentifier;
let citizenCallsign;
let sibling;
let siblingShort;

let gameStatus;
let citizenLocation;

window.onload = function () {
  gameStoryProgressTicker();
  initializeCharacterStats();
};

function gameStoryProgressTicker() {

  // After the first registration scene at the Border Patrol, load the Title Screen
  if (localStorage.getItem('family_reunited') == 'true' && gameStatus != 'Ongoing') {
    setTimeout(function () {
      fadeInSlow('#game-title-frame');
      fadeInSlow('#continue-playing-container');
    }, 500);
  }

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

  if (localStorage.getItem('family_reunited') == null && localStorage.getItem('show_identification_2') == 'true') {
    setTimeout(function () {
      fadeInSlow(centerLeftFrame);
      centerLeftDialogue.innerHTML = borderPatrolDialogue3;
    }, 500);
  }

  // From hereon, it should require gameStatus == 'Ongoing', because the title screen should be the one visible to the player on pageload
  if (gameStatus == 'Ongoing' && localStorage.getItem('family_reunited') == 'true') {
    setTimeout(function () {
      fadeInSlow('#citizen-stats-display');
    }, 500);
  }

  if (localStorage.getItem('raze_tutorial_complete') == null && localStorage.getItem('family_reunited') == 'true' && gameStatus == 'Ongoing') {
    setTimeout(function () {
      fadeInSlow('#raze-bar-frame');
      fadeInSlow('#raze-prologue-tutorial');
      razeBarDialogue.innerHTML = razeBarPrologueTutorial;
    }, 600);
  }

  if (localStorage.getItem('raze_tutorial_complete') == 'true' && gameStatus == 'Ongoing') {
    setTimeout(function () {
      fadeInSlow('#raze-bar-frame');
      fadeInSlow('#guessing-game-container');
      // razeBarDialogue.innerHTML = razeBarPrologueTutorial;
    }, 600);
  }

}

function titleScreenStartUpGame() {
  fadeOut('#game-title-frame')
  fadeOut('#continue-playing-container')
  fadeOut('#continue-playing-btn')
  updateGameStatus();
  initializeEnergyStat();
  updateCitizenLocation('Raze');
  gameStoryProgressTicker();
}

// Setting up citizen registration preferences
if (localStorage.getItem('citizen_username') == null) {
  localStorage.setItem('citizen_username', 'V');
} else { citizenUsername = localStorage.getItem('citizen_username'); }

if (localStorage.getItem('citizen_identifier') == null) {
  localStorage.setItem('citizen_identifier', 'He/Him');
} else {
  citizenIdentifier = localStorage.getItem('citizen_identifier');
  if (citizenIdentifier == 'He/Him') {
    sibling = 'Hamlet'
    siblingShort = 'Ham'
  } else if (citizenIdentifier == 'She/Her') {
    sibling = 'Freya'
    siblingShort = 'Frey'
  } else if (citizenIdentifier == 'They/Them') {
    sibling = 'Astrid'
    siblingShort = 'Ash'
  }
}

if (localStorage.getItem('citizen_preferred_callsign') == null) {
  localStorage.setItem('citizen_preferred_callsign', 'Bro');
} else { citizenCallsign = localStorage.getItem('citizen_preferred_callsign').toLowerCase(); }

//ENERGY STAT
function initializeEnergyStat() {
  if (localStorage.getItem('citizen_energy') === null) {
    localStorage.setItem('citizen_energy', 50);
    citizenEnergyUI.innerHTML = `⚡50`
  }
  else {
    setInterval(updateGameEnergyTicker, 33);
    function updateGameEnergyTicker() {
      console.log(localStorage.getItem('citizen_energy'));
      citizenEnergyUI.innerHTML = `⚡${localStorage.getItem('citizen_energy')}`
    }
  }
}

function initializeCharacterStats() {
  //TOTAL NUMBER OF GUESSING GAMES PLAYED STAT
  if (localStorage.getItem('total_games_played') === null) {
    localStorage.setItem('total_games_played', 0);
    totalGamesPlayedUI.innerHTML = `Total Games Played: 0`
  }
  else {
    setInterval(updateTotalGamesPlayedTicker, 33);
    function updateTotalGamesPlayedTicker() {
      totalGamesPlayedUI.innerHTML = `Total Games Played: ${localStorage.getItem('total_games_played').toLocaleString()}`
    }
  }

  //CASH STAT
  if (localStorage.getItem('total_game_cash') === null) {
    localStorage.setItem('total_game_cash', 0);
    gameCashUI.innerHTML = `$ 0`
  }
  else {
    setInterval(updateGameCashTicker, 33);
    function updateGameCashTicker() {
      gameCashUI.innerHTML = `$ ${localStorage.getItem('total_game_cash').toLocaleString()}`
    }
  }

  // WINS STAT
  if (localStorage.getItem('total_game_wins') === null) {
    localStorage.setItem('total_game_wins', 0);
    totalWinsUI.innerHTML = `WINS: 0`
  }
  else {
    setInterval(updateGameWinsTicker, 33);
    function updateGameWinsTicker() {
      totalWinsUI.innerHTML = `WINS: ${localStorage.getItem('total_game_wins').toLocaleString()}`
    }
  }

  // LOSSES STAT
  if (localStorage.getItem('total_game_losses') === null) {
    localStorage.setItem('total_game_losses', 0);
    totalLossesUI.innerHTML = `LOSSES: 0`
  }
  else {
    setInterval(updateGameLossesTicker, 33);
    function updateGameLossesTicker() {
      totalLossesUI.innerHTML = `LOSSES: ${localStorage.getItem('total_game_losses').toLocaleString()}`
    }
  }

}

function icreaseCitizenCash(amount) {
  localStorage.setItem('total_game_cash', localCash += amount);
}

function refreshPage() {
  setTimeout(function () {
    window.location.reload();
  }, 1500);
}

function fadeOut(window) {
  $(window).fadeOut();
}

function fadeOutFast(window) {
  $(window).fadeOut(100);
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

function updateGameStatus() {
  gameStatus = 'Ongoing';
  console.log(gameStatus);
}

function updateCitizenLocation(location) {
  localStorage.setItem('citizen_location', location);
  citizenLocation = localStorage.getItem('citizen_location');
}

function deleteAllCitizenSavedData() {
  if (confirm('Are you sure you want to delete your saved game data?') == true) {
    localStorage.clear();
    refreshPage();
  }
}

function playBackgroundMusic(title) {
  let audio = new Audio(title);
  audio.play();
}


/**
 * Add Total Number of Games
 * Add Tax system
 * Add Energy system
 *  
 * 
 * 
 * 
 */ 