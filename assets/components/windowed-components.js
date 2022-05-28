// Google Docs Windows
const allWindowedComponents =
  `<div class="collapse card google-docs-journal-container mdd-container donothighlight popup" id="anchor-google-docs-ivma-container">
  <nav class="navbar navbar-expand-md popup-header">
    <div class="container-fluid">
      <p class="md-container-title">Google Docs</p>
      <a class="utility-minimize-btn ctn-btn" data-ctn-hide="#anchor-google-docs-ivma-container"><i class="bi bi-dash-lg"></i></a>
      <a class="utility-close-btn ctn-btn ai-btn" data-ctn-hide="#anchor-google-docs-ivma-container" data-ai-hide="#google-docs-ivma-app-icon"><i class="bi bi-x-lg"></i></a>
    </div>
  </nav>
  <div class="card-body mdd-card-body p-0">
    <div class="loading-overlay" id="google-docs-ivma-loading-overlay"><div class="spinner-border text-spinner-blue loading-overlay-spinner" role="status"></div></div>
    <iframe id="google-docs-ivma-loader" data-src="https://docs.google.com/document/d/1QKbELvksMCl1mXNmkc2M8OqzVgF0z26aHrM_ESUqCq8/edit?usp=sharing" src="" referrerpolicy="no-referrer" frameborder="0" style="height:95%; width:100%"></iframe>
  </div>
</div>

<div class="collapse card google-docs-journal-container mdd-container donothighlight popup" id="anchor-google-sheets-ivma-container">
<nav class="navbar navbar-expand-md popup-header">
  <div class="container-fluid">
    <p class="md-container-title">Google Sheets</p>
    <a class="utility-minimize-btn ctn-btn" data-ctn-hide="#anchor-google-sheets-ivma-container"><i class="bi bi-dash-lg"></i></a>
    <a class="utility-close-btn ctn-btn ai-btn" data-ctn-hide="#anchor-google-sheets-ivma-container" data-ai-hide="#google-sheets-ivma-app-icon"><i class="bi bi-x-lg"></i></a>
  </div>
</nav>
<div class="card-body mdd-card-body p-0">
  <div class="loading-overlay" id="google-sheets-ivma-loading-overlay"><div class="spinner-border text-spinner-blue loading-overlay-spinner" role="status"></div></div>
  <iframe id="google-sheets-ivma-loader" data-src="https://docs.google.com/spreadsheets/d/1HN9cHq0U1Rw0pCE7yFMp5xW-XtPnPmwvR6Ail8DNZL0/edit?usp=sharing" src="" referrerpolicy="no-referrer" frameborder="0" style="height:95%; width:100%"></iframe>
</div>
</div>

<div class="collapse card google-docs-journal-container mdd-container donothighlight popup" id="anchor-google-docs-eury-container">
<nav class="navbar navbar-expand-md popup-header">
  <div class="container-fluid">
    <p class="md-container-title">Google Docs</p>
    <a class="utility-minimize-btn ctn-btn" data-ctn-hide="#anchor-google-docs-eury-container" data-ai-hide="#"><i class="bi bi-dash-lg"></i></a>
    <a class="utility-close-btn ctn-btn ai-btn" data-ctn-hide="#anchor-google-docs-eury-container" data-ai-hide="#google-docs-eury-app-icon"><i class="bi bi-x-lg"></i></a>
  </div>
</nav>
<div class="card-body mdd-card-body p-0">
  <iframe id="google-docs-eury-loader" data-src="https://docs.google.com/document/d/1wxn48gqPCogFtXj645Ev9N71YVNwTM-G1KoliOnastM/edit?usp=sharing" src="" referrerpolicy="no-referrer" frameborder="0" style="height:95%; width:100%"></iframe>
</div>
</div>

<div class="collapse card google-docs-journal-container mdd-container donothighlight popup" id="anchor-google-docs-chat-container">
<nav class="navbar navbar-expand-md popup-header">
  <div class="container-fluid">
    <p class="md-container-title">Messenger</p>
    <a class="utility-minimize-btn ctn-btn" data-ctn-hide="#anchor-google-docs-chat-container"><i class="bi bi-dash-lg"></i></a>
    <a class="utility-close-btn ctn-btn ai-btn" data-ctn-hide="#anchor-google-docs-chat-container" data-ai-hide="#google-docs-chat-app-icon"><i class="bi bi-x-lg"></i></a>
  </div>
</nav>
<div class="card-body mdd-card-body p-0">
  <iframe id="google-docs-chat-loader" data-src="https://docs.google.com/document/d/12u_AaJWXmrNzXp8TKbGes0mOFh2NM4ABHJqUp3GzrrQ/edit?usp=sharing" src="" referrerpolicy="no-referrer" frameborder="0" style="height:95%; width:100%"></iframe>
</div>
</div>

<div class="collapse card google-docs-journal-container mdd-container donothighlight popup" id="anchor-standard-note-order-container">
<nav class="navbar navbar-expand-md popup-header">
  <div class="container-fluid">
    <p class="md-container-title">Standard Note Order</p>
    <a class="utility-close-btn ctn-btn" data-ctn-hide="#anchor-standard-note-order-container"><i class="bi bi-x-lg"></i></a>
  </div>
</nav>
<div class="card-body mdd-card-body p-0">
  <div class="loading-overlay" id="standard-note-order-loading-overlay"><div class="spinner-border text-spinner-blue loading-overlay-spinner" role="status"></div></div>
  <iframe id="standard-note-order-loader" data-src="https://docs.google.com/spreadsheets/d/1WyuiQSczZ-K1a0uB9YWAD5WNr7UoPMlXNs-xbTls1GY/edit#gid=0" src="" referrerpolicy="no-referrer" frameborder="0" style="height:95%; width:100%"></iframe>
</div>
</div>

<div class="collapse card user-settings-container mdd-container donothighlight popup" id="anchor-user-settings-container">
<nav class="navbar navbar-expand-md popup-header">
  <div class="container-fluid">
    <p class="md-container-title">Settings</p>
    <a class="utility-close-btn ctn-btn ai-btn" data-ctn-hide="#anchor-user-settings-container" data-ai-hide="#settings-app-icon"><i class="bi bi-x-lg"></i></a>
  </div>
</nav>
<div class="card-body mdd-card-body p-0">
  <input class="md-container-padding-top form-control" id="select-bg-image" type="file" />
  <i class="coming-soon-icon bi bi-gear-fill"></i>
  <p class="coming-soon-label">Coming soon</p>
  <button class="btn btn-danger ms-3 mt-3" onclick="systemLogout();">Log out</button>
  <div class="form-check mt-3 ms-3">
    <input class="form-check-input" id="closing-window-prompt-checkbox" type="checkbox">
    <label class="form-check-label" for="closing-window-prompt-checkbox">Closing Window Prompt Warning</label>
    <p>Requires reload to disable</p>

    <input class="form-check-input ivma" id="disable-bootup-loading-window-checkbox" type="checkbox">
    <label class="form-check-label ivma" for="disable-bootup-loading-window-checkbox">Disable Bootup Loading Window</label>
  </div>
</div>
</div>

<div class="collapse card page-viewer-container mdd-container donothighlight popup" id="anchor-page-viewer-container">
<nav class="navbar navbar-expand-md popup-header">
  <div class="container-fluid">
    <p class="md-container-title">Page Viewer</p>
    <a class="utility-minimize-btn ctn-btn" data-ctn-hide="#anchor-page-viewer-container"><i class="bi bi-dash-lg"></i></a>
    <a class="utility-close-btn ctn-btn ai-btn" data-ctn-hide="#anchor-page-viewer-container" data-ai-hide="#page-viewer-app-icon"><i class="bi bi-x-lg"></i></a>
  </div>
</nav>
<div class="card-body mdd-card-body p-0">
  <input class="page-viewer-input" id="page-viewer-input" type="text" autocomplete="off" value="https://www.google.com/search?igu=1" placeholder="Paste a URL" />
  <iframe id="page-viewer-iframe" src="" referrerpolicy="no-referrer" frameborder="0" style="height:92.5%; width:100%"></iframe>
</div>
</div>

<div class="collapse card chrono-container mdd-container donothighlight popup" id="anchor-chrono-container">
<nav class="navbar navbar-expand-md popup-header">
  <div class="container-fluid">
    <p class="md-container-title">Chrono</p>
    <a class="utility-close-btn ctn-btn" data-ctn-hide="#anchor-chrono-container"><i class="bi bi-x-lg"></i></a>
  </div>
</nav>
<div class="card-body mdd-card-body p-0">
  <iframe id="chrono-loader" data-src="https://rephchrono.legal.regn.net/home" src="" referrerpolicy="no-referrer" frameborder="0" style="height:95%; width:100%"></iframe>
</div>
</div>

<div class="collapse card alarm-clock-container mdd-container donothighlight popup" id="anchor-alarm-clock-container">
<nav class="navbar navbar-expand-md popup-header">
  <div class="container-fluid">
    <p class="md-container-title">Alarm Clock</p>
    <a class="utility-minimize-btn ctn-btn" data-ctn-hide="#anchor-alarm-clock-container"><i class="bi bi-dash-lg"></i></a>
    <a class="utility-close-btn ctn-btn ai-btn" data-ctn-hide="#anchor-alarm-clock-container" data-ai-hide="#alarm-clock-app-icon"><i class="bi bi-x-lg"></i></a>
  </div>
</nav>
<div class="card-body mdd-card-body p-0">
  <iframe id="alarm-clock-loader" data-src="assets/components/system-alarm-clock.html" src="" referrerpolicy="no-referrer" frameborder="0" style="height:95%; width:100%"></iframe>
</div>
</div>

<div class="collapse card crypto-ticker-container mdd-container donothighlight popup" id="anchor-crypto-ticker-container">
<nav class="navbar navbar-expand-md popup-header">
  <div class="container-fluid">
    <p class="md-container-title">Crypto Ticker</p>
    <a class="utility-minimize-btn ctn-btn" data-ctn-hide="#anchor-crypto-ticker-container"><i class="bi bi-dash-lg"></i></a>
    <a class="utility-close-btn ctn-btn ai-btn" data-ctn-hide="#anchor-crypto-ticker-container" data-ai-hide="#crypto-ticker-app-icon"><i class="bi bi-x-lg"></i></a>
  </div>
</nav>
<div class="card-body mdd-card-body p-0">
  <div class="loading-overlay" id="crypto-loading-overlay"><div class="spinner-border text-spinner-blue loading-overlay-spinner" role="status"></div></div>
  <iframe id="crypto-ticker-loader" data-src="assets/components/crypto-windows.html" src="" referrerpolicy="no-referrer" frameborder="0" style="height:95%; width:100%"></iframe>
</div>
</div>

<div class="collapse card assist-user-guide-container mdd-container donothighlight popup" id="assist-user-guide-container">
<nav class="navbar navbar-expand-md popup-header">
  <div class="container-fluid">
    <p class="md-container-title">Amendment Note Builder 2.0 User Guide</p>
    <a class="utility-close-btn ctn-btn" data-ctn-hide="#assist-user-guide-container"><i class="bi bi-x-lg"></i></a>
  </div>
</nav>
<div class="card-body mdd-card-body p-0">
  <div class="loading-overlay" id="assist-user-guide-loading-overlay"><div class="spinner-border text-spinner-blue loading-overlay-spinner" role="status"></div></div>
  <iframe id="assist-user-guide-loader" data-src="eden/user-guides/amendment-note-builder-user-guide.html" src="" referrerpolicy="no-referrer" frameborder="0" style="height:95%; width:100%"></iframe>
</div>
</div>

<div class="collapse card assist-user-guide-container mdd-container donothighlight popup" id="note-tracker-template-container">
<nav class="navbar navbar-expand-md popup-header">
  <div class="container-fluid">
    <p class="md-container-title">Note Tracker Template 2.0 User Guide</p>
    <a class="utility-close-btn ctn-btn" data-ctn-hide="#note-tracker-template-container"><i class="bi bi-x-lg"></i></a>
  </div>
</nav>
<div class="card-body mdd-card-body p-0">
  <div class="loading-overlay" id="note-tracker-template-user-guide-loading-overlay"><div class="spinner-border text-spinner-blue loading-overlay-spinner" role="status"></div></div>
  <iframe id="note-tracker-template-loader" data-src="eden/user-guides/note-tracker-template-user-guide.html" src="" referrerpolicy="no-referrer" frameborder="0" style="height:95%; width:100%"></iframe>
</div>
</div>

<div class="collapse card ebooks-library-container mdd-container donothighlight popup" id="anchor-ebooks-library-container">
<nav class="navbar navbar-expand-md popup-header">
  <div class="container-fluid">
    <p class="md-container-title">Ebooks Library</p>
    <a class="utility-minimize-btn" onclick="closeEbooksLibraryContainer();"><i class="bi bi-dash-lg"></i></a>
    <a class="utility-close-btn" onclick="closeEbooksLibraryContainer();"><i class="bi bi-x-lg"></i></a>
  </div>
</nav>
<div lass="card-body mdd-card-body p-0" id="ebooks-selection">
  <button onclick='openEbooksIframeContainer();closeEbooksSelectionContainer();document.getElementById("ebooks-library-loader").src = "../assets/ebooks/the-richest-man-in-babylon.pdf"'>EDEN</button>
  <button onclick='openEbooksIframeContainer();closeEbooksSelectionContainer();document.getElementById("ebooks-library-loader").src = "https://example.com/"'>Example.com</button>
</div>
<div class="collapse card-body mdd-card-body p-0" id="ebooks-iframe">
  <button onclick="closeEbooksIframeContainer();openEbooksSelectionContainer();">Back</button>
  <iframe id="ebooks-library-loader" src="" referrerpolicy="no-referrer" frameborder="0" style="height:95%; width:100%"></iframe>
</div>
</div>

<div class="collapse show idle-checkbox-card card donothighlight popup admin" id="idle-mode-checkbox-container">
<nav class="navbar navbar-expand-md popup-header">
  <div class="container-fluid">
    <p class="md-container-title">Idle Mode</p>
  </div>
</nav>
<div class="card-body mdd-card-body p-0">
  <div class="form-check mt-2 ms-3">
    <input class="form-check-input" type="checkbox" value="" id="wakeLockCheckbox" onclick="displayStatus();">
    <label class="form-check-label" for="wakeLockCheckbox">Activate</label>
  </div>
  <div class="form-check ms-3">
    <input class="form-check-input" type="checkbox" value="" id="reacquireCheckbox" onclick="displayStatus();">
    <label class="form-check-label" for="reacquireCheckbox">Confirm</label>
  </div>
  <div class="ms-3 mt-2 text-success fw-bold" id="statusDiv"></div>
</div>
</div>

<div class="card collapse notepad-container md-container donothighlight popup" id="anchor-notepad-container">
<div class="card-header md-container-navbar popup-header">
  <p class="md-container-title">Notepad</p>
  <a class="utility-minimize-btn ctn-btn" data-ctn-hide="#anchor-notepad-container"><i class="bi bi-dash-lg"></i></a>
  <a class="utility-close-btn ctn-btn ai-btn" data-ctn-hide="#anchor-notepad-container" data-ai-hide="#notepad-app-icon"><i class="bi bi-x-lg"></i></a>
</div>
<div class="card-body md-container-body p-0">
  <textarea class="menu-textarea" id="menu-notepad" data-store="menu_notepad"></textarea>
</div>
</div>

<div class="card collapse time-management-pad-container md-container donothighlight popup" id="anchor-time-management-pad-container">
<div class="card-header md-container-navbar popup-header">
  <p class="md-container-title">Tasks</p>
  <a class="utility-close-btn ctn-btn ai-btn" data-ctn-hide="#anchor-time-management-pad-container" data-ai-hide="#time-management-pad-app-icon"><i class="bi bi-x-lg"></i></a>
  <a class="utility-minimize-btn ctn-btn" data-ctn-hide="#anchor-time-management-pad-container"><i class="bi bi-dash-lg"></i></a>
</div>
<div class="card-body md-container-body p-0">
  <a class="four-quadrants-header four-quadrants-header-1">URGENT</a>
  <a class="four-quadrants-header four-quadrants-header-2">NOT URGENT</a>
  <br>
  <a class="four-quadrants-header four-quadrants-header-3">IMPORTANT</a>
  <a class="four-quadrants-header four-quadrants-header-4">NOT IMPORTANT</a>

  <div class="four-quadrants quadrant-1 mt-4">
    <textarea class="four-quadrants-textarea text-area-quadrant-1" data-store="quadrant_1"></textarea>
  </div>
  <div class="four-quadrants quadrant-2">
    <textarea class="four-quadrants-textarea text-area-quadrant-2" data-store="quadrant_2"></textarea>
  </div>
  <br />
  <div class="four-quadrants quadrant-3">
    <textarea class="four-quadrants-textarea text-area-quadrant-3" data-store="quadrant_3"></textarea>
  </div>
  <div class="four-quadrants quadrant-4">
    <textarea class="four-quadrants-textarea text-area-quadrant-4" data-store="quadrant_4"></textarea>
  </div>
</div>
</div>

<div class="collapse command-line-container" id="anchor-command-line-interface-container">
<div class="command-line-terminal" id="gorilla-os-terminal">
  <div id="command-output"></div>
  <input id="command-input" type="text" autocomplete="off" spellcheck="false" autofocus>
</div>
</div>

`

document.getElementById('windowed-components').innerHTML = allWindowedComponents;


// <!-- <div class="collapse card mdd-container donothighlight popup" id="">
// <nav class="navbar navbar-expand-md popup-header">
//   <div class="container-fluid">
//     <p class="md-container-title"></p>
//     <a class="utility-minimize-btn" onclick=""><i class="bi bi-dash-lg"></i></a>
//     <a class="utility-close-btn" onclick=""><i class="bi bi-x-lg"></i></a>
//   </div>
// </nav>
// <div class="card-body mdd-card-body p-0">
//   <iframe id="" data-src="" src="" referrerpolicy="no-referrer" frameborder="0" style="height:95%; width:100%"></iframe>
// </div>
// </div> -->

// <!-- <div class="collapse show card mdd-container developer-logs-container popup ivma" id="anchor-developer-logs-container">
// <nav class="navbar navbar-expand-md navbar-light popup-header donothighlight">
//   <div class="container-fluid">
//     <a class="utility-close-btn ctn-btn ai-btn" data-ctn-hide="#anchor-developer-logs-container" data-ai-hide="#developer-logs-app-icon"><i class="bi bi-x-lg"></i></a>
//     <a class="utility-minimize-btn ctn-btn" data-ctn-hide="#anchor-developer-logs-container"><i class="bi bi-dash-lg"></i></a>
//     <p class="md-container-title">Devlogs</p>
//   </div>
// </nav>
// <div class="card-body mdd-card-body">

//   <pre class="mt-5">
// <code class="language-js">
// &lt;script&gt;
// // Bootstrap tooltips
// const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
// const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl, {
//     trigger: 'hover'
//   });
// });
// &lt;/script&gt;

// data-bs-toggle="tooltip" data-bs-placement="top"
// </code>
// </pre>
// </div>
// </div> -->