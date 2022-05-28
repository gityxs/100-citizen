window.onload = function () {
  setTimeout(function () {
    $(".se-pre-con").fadeOut("slow");
  }, 2500);
  move();
  initDragElement();
  initResizeElement();
  startTime();
  startDate();
  commandOutput.innerHTML = `GorillaOS [Version 0.0.1.2022] [${new Date(Date.now()).toLocaleString()}]<br><br>${user}~<br><br>`;
};

// Desktop loading bar
let i = 0;
function move() {
  if (i == 0) {
    i = 1;
    let elem = document.getElementById("menu-loading-bar");
    let width = 1;
    let id = setInterval(frame, 130);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

// Detect user's prefer theme and change favicon
'use strict';
function setupIcons() {
  const lightSchemeIcon = document.querySelector('link#light-scheme-icon');
  const darkSchemeIcon = document.querySelector('link#dark-scheme-icon');
  function setLight() {
    document.head.append(lightSchemeIcon);
    darkSchemeIcon.remove();
  }
  function setDark() {
    lightSchemeIcon.remove();
    document.head.append(darkSchemeIcon);
  }
  const matcher = window.matchMedia('(prefers-color-scheme:dark)');
  function onUpdate() {
    if (matcher.matches) {
      setDark();
    } else {
      setLight();
    }
  }
  matcher.addListener(onUpdate);
  onUpdate();
}
setupIcons();

// Change wallpaper on page load
$(function () {
  const bgArray = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg'];
  const randomBackground = bgArray[Math.floor(Math.random() * bgArray.length)];
  const imageUrl = 'assets/wallpapers/' + randomBackground;
  $('body').css('background-image', 'url(' + imageUrl + ')');
});

// Main clock
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let ampm = '';
  m = checkTime(m);
  s = checkTime(s);
  if (h > 12) {
    h = h - 12;
    ampm = ' PM';
  } else if (h == 12) {
    h = 12;
    ampm = ' AM';
  } else if (h < 12) {
    ampm = ' AM';
  } else {
    ampm = 'PM';
  };
  if (h == 0) {
    h = 12;
  }
  $('#digital-clock').html(h + ':' + m + ':' + s + ampm);
  const t = setTimeout(function () { startTime() }, 500);
}
function checkTime(i) {
  if (i < 10) { i = '0' + i };  // add zero in front of numbers < 10
  return i;
}
function startDate() {
  const d = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  $('#date-calendar').html(days[d.getDay()] + ', ' + [d.getMonth() + 1] + '/' + d.getDate() + '/' + d.getFullYear());
}

// Links Filter
const searchLinksInput = document.getElementById('search-filter-cards');
searchLinksInput.addEventListener('input', searchFilterDivsMenu);
function searchFilterDivsMenu(e) {
  const filter = e.target.value.toUpperCase();
  const list = document.getElementById('links-list');
  const divs = list.querySelectorAll('.link-filterable');
  divs.forEach(div => {
    const a = div.querySelector('a');
    div.hidden = !a || (filter && a.textContent.toUpperCase().indexOf(filter) === -1);
  })
}

// Onclick outside 'outer-layer-card', close maincard
const outercard = document.querySelector('#outer-layer-card')
const maincard = document.querySelector('#anchor-cards-list')
document.addEventListener('click', (event) => {
  const withinBoundaries = event.composedPath().includes(outercard)
  if (!withinBoundaries) {
    $('#anchor-cards-list').slideUp('fast');
  }
})

// Toggle Menu by pressing Esc key
$(document).on('keydown', function (e) {
  if (e.keyCode === 27) {
    $('#anchor-cards-list').stop().slideToggle('fast');
    $('#search-filter-cards').val('');
    searchLinksInput.dispatchEvent(new Event('input'));
  }
});

// Toggle Dock by pressing F2 key
$(document).on('keydown', function (e) {
  if (e.keyCode === 113) {
    $('#anchor-icons-dock').stop().slideToggle('fast');
    $('#anchor-icons-dock-extension').stop().slideToggle('fast');
  }
});

// Toggle Terminal by pressing F9 key
$(document).on('keydown', function (e) {
  if (e.keyCode === 120) {
    $('#anchor-command-line-interface-container').stop().fadeToggle('fast');
    document.querySelector('#command-input').focus();
    $('#anchor-cards-list').slideUp('fast');
  }
});

// Show/Hide Main Card List Search Btn
$(function () {
  $('#search-links-app-icon').click(function () {
    $('#anchor-cards-list').stop().slideToggle('fast');
    $('#search-filter-cards').focus();
    document.getElementById('search-filter-cards').value = '';
    searchLinksInput.dispatchEvent(new Event('input'));
  });
});

// Hide Main Card List
function closeMainCardsList() {
  $('#anchor-cards-list').slideUp('fast');
}

// Show/Hide Dock
$(function () {
  $('#anchor-icons-dock-btn').click(function () {
    $('#anchor-icons-dock').stop().slideToggle('fast');
    $('#anchor-icons-dock-extension').stop().slideToggle('fast');
  });
});
// Show Dock
function openIconsDock() {
  $('#anchor-icons-dock').show('fast');
  $('#anchor-icons-dock-extension').stop().slideToggle('fast');
}
// Hide Dock
function closeIconsDock() {
  $('#anchor-icons-dock').stop().slideToggle('fast');
  $('#anchor-icons-dock-extension').stop().slideToggle('fast');
}

/*********************************************************************************************************************************************/

// Reusable Show App Icon Function
$(function () {
  $('.ai-btn').click(function (e) {
    $($(this).data('ai-show')).show('fast');
  });
});
// Reusable Hide App Icon Function
$(function () {
  $('.ai-btn').click(function (e) {
    $($(this).data('ai-hide')).hide('fast');
  });
});
// Reusable Toggle Container Function
$(function () {
  $('.ctn-btn').click(function (e) {
    $($(this).data('ctn-toggle')).stop().toggle('fast');
  });
});
// Reusable Show Container Function
$(function () {
  $('.ctn-btn').click(function (e) {
    $($(this).data('ctn-show')).show('fast');
  });
});
// Reusable Hide Container Function
$(function () {
  $('.ctn-btn').click(function (e) {
    $($(this).data('ctn-hide')).hide('fast');
  });
});
// Reusable Hide Iframe Container Function
$(function () {
  $('.ctn-btn').click(function (e) {
    $($(this).data('ifr-hide')).hide('fast');
  });
});

// Reusable Iframe Function
$(function () {
  $('.loader-btn').click(function (e) {
    const iframe = $($(this).data('ifr-src'));
    iframe.attr('src', iframe.data('src'));
  });
});

$(function () {
  $('.spinner-btn').click(function (e) {
    const window = $($(this).data('spin'));
    window.show();
    setTimeout(function () {
      window.fadeOut("slow");
    }, 4000);
  });
});

// ctn-btn ai-btn
// data-ctn-show="#" data-ai-show="#"
// data-ctn-hide="#" data-ai-hide="#"

// ctn-btn
// data-ctn-show="#"
// data-ctn-hide="#"
// data-ctn-toggle="#"


// ai-btn
// data-ai-show="#"
// data-ai-hide="#"

// loader-btn
// data-ifr-src="#"

// spinner-btn
// data-spin="#note-tracker-template-user-guide-loading-overlay"

/*********************************************************************************************************************************************/

// Assist Iframe Reload
function AssistIframeReload() {
  const list = document.getElementById('assist-select-menu');
  const assistIframeSrc = list.options[list.selectedIndex].value;
  document.getElementById('all-assist-iframe').src = assistIframeSrc;
}

// Highlighters Iframe Reload
function loadHighlightersIframe() {
  const list = document.getElementById('highlighters-select-menu');
  const HighlightersIframeSrc = list.options[list.selectedIndex].value;
  document.getElementById('all-highlighters-iframe').src = HighlightersIframeSrc;
}

// Focus on Notepad
$(function () {
  $('.notepad-focus').click(function () {
    $('#menu-notepad').focus();
  });
});

// Focus on Page Viewer & set cursor at the end of input value
$(function () {
  $('.page-viewer-focus').click(function () {
    const input = $('#page-viewer-input');
    const val = $('#page-viewer-input').val();
    input.val('');
    input.val(val);
    input.focus();
  });
});

// Page Viewer - Change Iframe Source on User Input
document.getElementById('page-viewer-input').addEventListener('input', reloadPDFViewer);
function reloadPDFViewer(event) {
  const iframe = document.getElementById('page-viewer-iframe');
  const input = event.target;
  const newUrl = input.value;
  iframe.src = newUrl;
}

// Show/Hide Ebooks Library Container
$(function () {
  $('#ebooks-library-loader-btn').click(function () {
    $('#anchor-ebooks-library-container').stop().toggle('fast');
  });
});
// Show Ebooks Library Container
function openEbooksLibraryContainer() {
  $('#anchor-ebooks-library-container').show('fast');
}
// Hide Ebooks Library Container
function closeEbooksLibraryContainer() {
  $('#anchor-ebooks-library-container').hide('fast');
}

// Show Ebooks Selection
function openEbooksSelectionContainer() {
  let window = document.getElementById('ebooks-selection');
  window.style.display = 'block';
}
// Hide Ebooks Selection
function closeEbooksSelectionContainer() {
  let window = document.getElementById('ebooks-selection');
  window.style.display = 'none';
}

// Show Ebooks Iframe
function openEbooksIframeContainer() {
  let window = document.getElementById('ebooks-iframe');
  window.style.display = 'block';
}
// Hide Ebooks Iframe
function closeEbooksIframeContainer() {
  let window = document.getElementById('ebooks-iframe');
  window.style.display = 'none';
}

// Store selected option in JX Select to localStorage
$(function () {
  $('#assist-select-menu').change(function () {
    localStorage.setItem('jx_selected', this.value);
  });
  if (localStorage.getItem('jx_selected')) {
    $('#assist-select-menu').val(localStorage.getItem('jx_selected'));
  }
});

// Store selected option in Higlighter Select to localStorage
$(function () {
  $('#highlighters-select-menu').change(function () {
    localStorage.setItem('highlighter_selected', this.value);
  });
  if (localStorage.getItem('highlighter_selected')) {
    $('#highlighters-select-menu').val(localStorage.getItem('highlighter_selected'));
  }
});

// Idle Mode Checkbox
function displayStatus() {
  if (document.getElementById('wakeLockCheckbox').checked == true && document.getElementById('reacquireCheckbox').checked == true) {
    $('#idle-mode-checkbox-container').hide('fast');
  }
  else {
    $('#idle-mode-checkbox-container').show('fast');
  }
}

//Toggle Full Screen
function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||
    (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}

// Toast for Copied to Clipboard
function toastToClipboard() {
  const x = document.getElementById('link-copied-to-clipboard-toast');
  x.className = 'show';
  setTimeout(function () { x.className = x.className.replace('show', ''); }, 3000);
}

//Prevent links from being dragged
$('a').mousedown(function (e) {
  e.preventDefault();
});

// Drag and Resize Function
function initDragElement() {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  var popups = document.getElementsByClassName('popup');
  var elmnt = null;
  var currentZIndex = 1;
  for (var i = 0; i < popups.length; i++) {
    var popup = popups[i];
    var header = getHeader(popup);
    popup.onmousedown = function () {
      this.style.zIndex = '' + ++currentZIndex;
    };
    if (header) {
      header.parentPopup = popup;
      header.onmousedown = dragMouseDown;
    }
  }
  function dragMouseDown(e) {
    elmnt = this.parentPopup;
    elmnt.style.zIndex = '' + ++currentZIndex;
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    if (!elmnt) {
      return;
    }
    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
    elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
  }
  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
  function getHeader(element) {
    var headerItems = element.getElementsByClassName('popup-header');

    if (headerItems.length === 1) {
      return headerItems[0];
    }
    return null;
  }
}
function initResizeElement() {
  var popups = document.getElementsByClassName('popup');
  var element = null;
  var startX, startY, startWidth, startHeight;
  for (var i = 0; i < popups.length; i++) {
    var p = popups[i];
    var right = document.createElement('div');
    right.className = 'resizer-right';
    p.appendChild(right);
    right.addEventListener('mousedown', initDrag, false);
    right.parentPopup = p;
    var bottom = document.createElement('div');
    bottom.className = 'resizer-bottom';
    p.appendChild(bottom);
    bottom.addEventListener('mousedown', initDrag, false);
    bottom.parentPopup = p;
    var both = document.createElement('div');
    both.className = 'resizer-both';
    p.appendChild(both);
    both.addEventListener('mousedown', initDrag, false);
    both.parentPopup = p;
  }
  function initDrag(e) {
    element = this.parentPopup;
    startX = e.clientX;
    startY = e.clientY;
    startWidth = parseInt(
      document.defaultView.getComputedStyle(element).width,
      10
    );
    startHeight = parseInt(
      document.defaultView.getComputedStyle(element).height,
      10
    );
    document.documentElement.addEventListener('mousemove', doDrag, false);
    document.documentElement.addEventListener('mouseup', stopDrag, false);
  }
  function doDrag(e) {
    element.style.width = startWidth + e.clientX - startX + 'px';
    element.style.height = startHeight + e.clientY - startY + 'px';
  }
  function stopDrag() {
    document.documentElement.removeEventListener('mousemove', doDrag, false);
    document.documentElement.removeEventListener('mouseup', stopDrag, false);
  }
}

// Clipboard JS
const clipboard = new ClipboardJS('.copybtn');
clipboard.on('success', function (e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
});
clipboard.on('error', function (e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
});

// Change Background Image to Uploade Image
const file = document.getElementById('select-bg-image');
const reader = new FileReader();
reader.addEventListener('load', function () {
  document.body.style.backgroundImage = `url(${reader.result})`;
}, false);
file.addEventListener('change', function () {
  const image = this.files[0];
  if (image) reader.readAsDataURL(image);
}, false)

// Type on search input even if not focused
$(document).on('keydown', function (e) {
  if (e.keyCode === 9 || e.keyCode === 13 || e.keyCode === 16 || e.keyCode === 32 || e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40) {
    return;
  } else {
    $('#search-filter-cards').focus();
  }
});

// Disable Bootup Loader
function disableBootupLoadingWindow() {
  if (document.getElementById('disable-bootup-loading-window-checkbox').checked == true && localStorage['mUALK9nMxj29jUagswfC'] == 'ivma') {
    localStorage.setItem('disable_bootup_loader', '1');
    document.querySelector('.se-pre-con').style.display = "none";
  } else {
    localStorage.setItem('disable_bootup_loader', '0');
  }
}
if (localStorage['disable_bootup_loader'] == '1' && localStorage['mUALK9nMxj29jUagswfC'] == 'ivma') {
  document.getElementById('disable-bootup-loading-window-checkbox').checked = true;
  disableBootupLoadingWindow()
}
document.getElementById('disable-bootup-loading-window-checkbox').addEventListener('input', function () { disableBootupLoadingWindow(); }, false)

// Prompt alert upon closing of browser
function closingWindowPrompt() {
  if (document.getElementById('closing-window-prompt-checkbox').checked == true) {
    localStorage.setItem('closing_prompt_checked', '1');
    window.onbeforeunload = function (evt) {
      let message = 'Changes you made may not be saved.';
      if (typeof evt == 'undefined') {
        evt = window.event;
      }
      if (evt) {
        evt.returnValue = message;
      }
      return message;
    }
  } else {
    localStorage.setItem('closing_prompt_checked', '0');
  }
}
if (localStorage['closing_prompt_checked'] == '1') {
  document.getElementById('closing-window-prompt-checkbox').checked = true;
  closingWindowPrompt()
}
document.getElementById('closing-window-prompt-checkbox').addEventListener('input', function () { closingWindowPrompt(); }, false)