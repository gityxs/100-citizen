//Personalization
function changeNavColor(color) {
  if (color) window.localStorage.setItem('navColor', color);
  else if (!(color = window.localStorage.getItem('navColor'))) return;
  var elements = document.getElementsByClassName("navbar-bg")
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.background = color;
  }
}
window.addEventListener('DOMContentLoaded', () => changeNavColor());

function changeBgColor(color) {
  if (color) window.localStorage.setItem('bgColor', color);
  else if (!(color = window.localStorage.getItem('bgColor'))) return;
  var elements = document.getElementsByClassName("card-bg")
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.background = color;
  }
}
window.addEventListener('DOMContentLoaded', () => changeBgColor());

function changeBodyColor(color) {
  if (color) window.localStorage.setItem('bodyColor', color);
  else if (!(color = window.localStorage.getItem('bodyColor'))) return;
  var elements = document.getElementsByClassName("body-bg")
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.background = color;
  }
}
window.addEventListener('DOMContentLoaded', () => changeBodyColor());

function changeTextareaColor(color) {
  if (color) window.localStorage.setItem('txtareaColor', color);
  else if (!(color = window.localStorage.getItem('txtareaColor'))) return;
  var elements = document.getElementsByClassName("textarea-bg")
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.background = color;
  }
}
window.addEventListener('DOMContentLoaded', () => changeTextareaColor());

// Clear local storage
function deleteItems() {
  if (confirm(`Are you sure you want to reset all background-color?`) == true) {
    localStorage.removeItem('bodyColor');
    localStorage.removeItem('navColor');
    localStorage.removeItem('bgColor');
    localStorage.removeItem('txtareaColor');
  }
}