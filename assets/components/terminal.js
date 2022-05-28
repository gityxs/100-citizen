const commandTerminal = document.querySelector('#gorilla-os-terminal');
const commandInput = document.querySelector('#command-input');
const commandOutput = document.querySelector('#command-output');
const user = localStorage.getItem('mUALK9nMxj29jUagswfC');

/*****************************************************************************************/

window.onload = function () {
  commandOutput.innerHTML = `GorillaOS [Version 0.0.1.2022] [${new Date(Date.now()).toLocaleString()}]<br><br>${user}~<br><br>`;
};

function clearTerminal() {
  commandOutput.innerHTML = `GorillaOS [Version 0.0.1.2022] [${new Date(Date.now()).toLocaleString()}]<br><br>${user}~<br><br>`;
}

document.addEventListener('keydown', function (e) {
  if (e.keyCode === 192 || e.keyCode === 17 || e.keyCode === 27) {
    return;
  } else {
    document.querySelector('#command-input').focus();
  }
});

/*****************************************************************************************/

commandInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter' && commandInput.value.length > 0) {

    if (commandInput.value == 'clear') {
      clearTerminal();
    }

    else if (commandInput.value == 'export') {
      exportCommandLogs();
      commandOutput.innerHTML += `<span class="cli-success">exporting logs...</span><br>`;
    }

    else if (commandInput.value == 'closeLoader()') {
      document.querySelector('.se-pre-con').style.display = "none";
      commandOutput.innerHTML += `<span class="cli-success">forced closed loading screen.</span><br>`;
    }

    else if (commandInput.value == 'login') {
      openNewTab('https://secure.hrteamware.com/login/index.htm');
      commandOutput.innerHTML += `<span class="cli-success">opened HR Teamware in a new tab.</span><br>`;
    }

    else if (commandInput.value == 'logout') {
      openNewTab('https://secure.hrteamware.com/login/index.htm');
      openNewTab('https://rephchrono.legal.regn.net/home');
      openNewTab('https://tasks.office.com/ReedElsevier.onmicrosoft.com/en-US/Home/Planner/#/plantaskboard?groupId=71dde2dc-291a-41e1-9c74-34c803406431&planId=yiOsnPHVGkiu6aohfTk0_WQACioH');
      commandOutput.innerHTML += `<span class="cli-success">opened HR Teamware in a new tab.</span><br>`;
      commandOutput.innerHTML += `<span class="cli-success">opened Chrono in a new tab.</span><br>`;
      commandOutput.innerHTML += `<span class="cli-success">opened EDEN Kanban in a new tab.</span><br>`;
    }

    else if (commandInput.value == 'storage') {
      let i;
      commandOutput.innerHTML += `[localStorage]<br>`;
      for (i = 0; i < localStorage.length; i++) {
        commandOutput.innerHTML += `${localStorage.key(i)} = [<span class="cli-success">${localStorage.getItem(localStorage.key(i))}</span>]<br>`;
      }
      commandOutput.innerHTML += `<br>[sessionStorage]<br>`;
      for (i = 0; i < sessionStorage.length; i++) {
        commandOutput.innerHTML += `${sessionStorage.key(i)} = [<span class="cli-success">${sessionStorage.getItem(sessionStorage.key(i))}</span>]<br>`
      }
    }

    else if (commandInput.value.includes('!g') || commandInput.value.includes('!G')) {
      const query = commandInput.value.replace('!g ', '').replace('!G ', '').replace('!google ', '').replace('!Google ', '');
      commandOutput.innerHTML += `${commandInput.value}<br>`;
      window.open('https://www.google.com/search?q=' + query);
      commandOutput.innerHTML += `<span class="cli-success">searched Google for "${query}"</span><br>`;
    }

    else if (commandInput.value.includes('!c') || commandInput.value.includes('!C')) {
      const equation = commandInput.value;
      const answer = eval((equation).replace('!c', '').replace('!C', '')).toLocaleString();
      commandOutput.innerHTML += `${commandInput.value}<br>`;
      commandOutput.innerHTML += `<span class="cli-success">=${answer}</span><br>`;
    }

    else {
      commandOutput.innerHTML += `<span class="cli-danger">${commandInput.value}</span><br>`;
    }

    commandInput.value = '';
    commandTerminal.scrollTop = commandTerminal.scrollHeight;
  }
});

function openNewTab(link) {
  setTimeout(function () {
    window.open(link, '_blank', 'noopener', 'noreferrer');
  }, 500);
}

function downloadCommandLogs(elId, mimeType) {
  const elHtml = document.getElementById(elId).innerHTML
    .replaceAll('<br>', '\n')
    .replaceAll('<span class="cli-success">', '')
    .replaceAll('<span class="cli-danger">', '')
    .replaceAll('</span>', '');
  const link = document.createElement('a');
  mimeType = mimeType || 'text/plain';

  link.setAttribute('download', 'logs');
  link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(elHtml));
  link.click();
}

function exportCommandLogs() {
  downloadCommandLogs('command-output', 'text');
}