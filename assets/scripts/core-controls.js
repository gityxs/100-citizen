const gameTitleFrame = document.querySelector('#game-title-frame');
const leftFrame = document.querySelector('#left-main-frame');
const centerFrame = document.querySelector('#center-main-frame');
const razeBarFrame = document.querySelector('#raze-bar-frame');

let leftDialogueBox = document.querySelector('#left-frame-dialogue');
let centerDialogueBox = document.querySelector('#center-frame-dialogue');
let razeBarDialogueBox = document.querySelector('#raze-bar-frame-dialogue');

let currentLocationUI = document.querySelector('#citizen-location-ui');

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

  if (localStorage.getItem('welcome_done') == null) {
    centerFrame.style = 'margin-top: 17vh'
    $(centerFrame).fadeIn(2000);
    centerDialogueBox.innerHTML = starterDialogue;
  }

  if (localStorage.getItem('show_identification') == null && localStorage.getItem('welcome_done') == 'true') {
    $('#center-main-frame').fadeOut(100);
    centerDialogueBox.innerHTML = ``;
    currentLocationUI.innerHTML = `<a style="color: #bcaaa4">SC Border Patrol</a>`;
    leftFrame.style = 'margin-top: 10vh'
    $(leftFrame).fadeIn(500);
    leftDialogueBox.innerHTML = borderPatrolDialogue1;
  }

  if (localStorage.getItem('show_identification_2') == null && localStorage.getItem('show_identification') == 'true') {
    currentLocationUI.innerHTML = `<a style="color: #bcaaa4">SC Border Patrol Office</a>`;
    leftFrame.style = 'margin-top: 10vh'
    $(leftFrame).fadeIn(500);
    leftDialogueBox.innerHTML = borderPatrolDialogue2;
  }

  if (localStorage.getItem('family_reunited') == null && localStorage.getItem('show_identification_2') == 'true') {
    setTimeout(function () {
      currentLocationUI.innerHTML = `<a style="color: #bcaaa4">Outside the SCBP Office</a>`;
      leftFrame.style = 'margin-top: 10vh'
      $(leftFrame).fadeIn(500);
      leftDialogueBox.innerHTML = borderPatrolDialogue3;
    }, 500);
  }

  // Title Screen
  if (localStorage.getItem('family_reunited') == 'true' && gameStatus != 'Ongoing') {
    leftDialogueBox.innerHTML = ``
    currentLocationUI.innerHTML = ``;
    $('#game-title-frame').fadeIn(3000);
    $('#continue-playing-container').fadeIn(3000);
  }

  // Show Citizen Stats
  if (gameStatus == 'Ongoing' && localStorage.getItem('family_reunited') == 'true') {
    setTimeout(function () {
      document.getElementById("citizen-stats-display").classList.remove("collapse");
    }, 500);
  }
  // RAZE bar
  if (localStorage.getItem('raze_tutorial_complete') == null && localStorage.getItem('family_reunited') == 'true' && gameStatus == 'Ongoing') {
    setTimeout(function () {
      currentLocationUI.innerHTML = `<a style="color: var(--bright-pink);">RAZE</a>`;
      $('#raze-bar-frame').fadeIn();
      $('#raze-prologue-tutorial').fadeIn();
      razeBarDialogueBox.innerHTML = razeBarPrologueTutorial;
    }, 600);
  }

  if (localStorage.getItem('raze_tutorial_complete') == 'true' && gameStatus == 'Ongoing') {
    setTimeout(function () {
      currentLocationUI.innerHTML = `<a style="color: var(--bright-pink);">RAZE</a>`;
      document.querySelector('#raze-bar-frame').classList.add("text-center");
      $('#raze-bar-frame').fadeIn();
      $('#guessing-game-container').fadeIn();
    }, 600);
  }

}

function titleScreenStartUpGame() {
  setTimeout(function () {
    document.querySelector('#game-title-frame').innerHTML = ``;
  }, 600);
  $('#game-title-frame').fadeOut(100);
  $('#continue-playing-container').fadeOut(100);
  $('.game-title').fadeOut(100);
  $('.author-title').fadeOut(100);
  $('#continue-playing-btn').fadeOut(100);
  $('#reset-game-data-btn').fadeOut(100);
  updateGameStatus();
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

if (localStorage.getItem('citizen_preferred_address') == null) {
  localStorage.setItem('citizen_preferred_address', 'Bro');
} else { citizenCallsign = localStorage.getItem('citizen_preferred_address').toLowerCase(); }

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
    gameCashUI.innerHTML = `💲0`
  }
  else {
    setInterval(updateGameCashTicker, 33);
    function updateGameCashTicker() {
      gameCashUI.innerHTML = `💲${parseInt(localStorage.getItem('total_game_cash')).toLocaleString()}`
    }
  }

  //ENERGY STAT
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

  // WINS STAT
  if (localStorage.getItem('total_game_wins') === null) {
    localStorage.setItem('total_game_wins', 0);
    totalWinsUI.innerHTML = `0 <br> WIN`
  }
  else {
    setInterval(updateGameWinsTicker, 33);
    function updateGameWinsTicker() {
      totalWinsUI.innerHTML = `${localStorage.getItem('total_game_wins').toLocaleString()} <br> WIN`
    }
  }

  // LOSSES STAT
  if (localStorage.getItem('total_game_losses') === null) {
    localStorage.setItem('total_game_losses', 0);
    totalLossesUI.innerHTML = `0 <br> LOSS`
  }
  else {
    setInterval(updateGameLossesTicker, 33);
    function updateGameLossesTicker() {
      totalLossesUI.innerHTML = `${localStorage.getItem('total_game_losses').toLocaleString()} <br> LOSS`
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