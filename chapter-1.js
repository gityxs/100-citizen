// setInterval(onTimerTick, 2500); // 33 milliseconds = ~ 30 frames per sec
// function onTimerTick() {
//     console.log('time')
//     let timer = Math.floor(Math.random() * 100);
//     document.querySelector('#debugging-interval-counter').innerHTML = timer;
//     localStorage.setItem('debug_timer', timer);
// }

if (localStorage.getItem('islander_name') == null) {
  $('#character-creation-dialog').fadeIn();
}

if (localStorage.getItem('islander_name') !== null) {
  $('#character-creation-dialog').hide();
}

$(document).on('keydown', function (e) {
  if (e.keyCode === 13) {
    confirmCharacterCreation()
  }
});

function confirmCharacterCreation() {
  const input = document.querySelector('#islander-name-input');
  if (input.value.length > 0) {
    localStorage.setItem('islander_name', input.value);
    $('#character-creation-dialog').fadeOut();

    setTimeout(function () {
      $('#refresh-page-dialog-1').fadeIn();
    }, 500);

  } else {
    $('#required-input-islander-name').fadeIn();
    document.querySelector('#required-input-islander-name').style.display = 'block';
  }
}

function drinksRefresher(type) {
  if (type == 'juice') {
    localStorage.setItem('selected_drink', 'apple_juice');
    localStorage.setItem('drink_drank', 'yes');
  } else if (type == 'beer') {
    localStorage.setItem('selected_drink', 'cold_beer');
    localStorage.setItem('drink_drank', 'yes');
  } else if (type == 'boba') {
    localStorage.setItem('selected_drink', 'magical_boba');
    localStorage.setItem('drink_drank', 'yes');
  }

  $('#refresh-page-dialog-1').fadeOut();

  setTimeout(function () {
    $('#refresh-page-dialog-2').fadeIn();
  }, 500);

  setTimeout(function () {
    window.location.reload();
  }, 2400);

}

if (localStorage.getItem('drink_drank') == 'yes') {
  document.querySelector('#refresh-page-dialog-1').style.display = 'none';
  $('#guessing-game-container').fadeIn();
}
if (localStorage.getItem('drink_drank') == null && localStorage.getItem('islander_name') !== null) {
  $('#refresh-page-dialog-1').fadeIn();
}