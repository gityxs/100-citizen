// Google Docs Windows
const allFullScreenComponents =
    `<div class="collapse fs-container donothighlight" id="anchor-assist-container">
    <div class="fs-container-body">
        <nav class="fs-container-navbar">
            <p class="utility-navbar-title-full-screen">Notes & PDU Assist</p>
            <a class="float-end utility-close-btn-full-screen ctn-btn ai-btn" data-ctn-show="#anchor-assist-select-jx" data-ctn-hide="#anchor-assist-container" data-ai-hide="#notes-and-pdu-assist-app-icon" data-ifr-hide="#assist-iframe-container"><i class="bi bi-x-lg"></i></a>
            <a class="float-end utility-minimize-btn-full-screen ctn-btn" data-ctn-hide="#anchor-assist-container"><i class="bi bi-dash-lg"></i></a>
        </nav>
        <div class="tools-selection-box" id="anchor-assist-select-jx">
            <img class="tools-selection-logo" src="assets/links-favicons/assist.svg" alt="Amnotes Logo SVG">
            <h4 class="tools-selection-title">Notes & PDU Assist</h4>
            <p class="tools-selection-paragraph">Select a Jurisdiction:</p>
            <select class="form-select tools-selection-dropdown" id="assist-select-menu">
                <option value="eden/assist/AK.html">Alaska</option>
                <option value="eden/assist/AL.html">Alabama</option>
                <option value="eden/assist/AZ.html">Arizona</option>
                <option value="eden/assist/CA.html">California</option>
                <option value="eden/assist/CT.html">Connecticut</option>
                <option value="eden/assist/DC.html">District of Columbia</option>
                <option value="eden/assist/DE.html">Delaware</option>
                <option value="eden/assist/FL.html">Florida</option>
                <option value="eden/assist/HI.html">Hawaii</option>
                <option value="eden/assist/IA.html">Iowa</option>
                <option value="eden/assist/IL.html">Illinois</option>
                <option value="eden/assist/IN.html">Indiana</option>
                <option value="eden/assist/KS.html">Kansas</option>
                <option value="eden/assist/LA.html">Louisiana</option>
                <option value="eden/assist/MA.html">Massachusetts</option>
                <option value="eden/assist/ME.html">Maine</option>
                <option value="eden/assist/MI.html">Michigan</option>
                <option value="eden/assist/MN.html">Minnesota</option>
                <option value="eden/assist/MO.html">Missouri</option>
                <option value="eden/assist/MT.html">Montana</option>
                <option value="eden/assist/NE.html">Nebraska</option>
                <option value="eden/assist/NH.html">New Hampshire</option>
                <option value="eden/assist/NJ.html">New Jersey</option>
                <option value="eden/assist/NM.html">New Mexico</option>
                <option value="eden/assist/NV.html">Nevada</option>
                <option value="eden/assist/NY.html">New York</option>
                <option value="eden/assist/OH.html">Ohio</option>
                <option value="eden/assist/OK.html">Oklahoma</option>
                <option value="eden/assist/OR.html">Oregon</option>
                <option value="eden/assist/PA.html">Pennsylvania</option>
                <option value="eden/assist/SC.html">South Carolina</option>
                <option value="eden/assist/SD.html">South Dakota</option>
                <option value="eden/assist/TN.html">Tennessee</option>
                <option value="eden/assist/TX.html">Texas</option>
                <option value="eden/assist/US.html" selected>United States Code Service</option>
                <option value="eden/assist/UT.html">Utah</option>
                <option value="eden/assist/VI.html">Virgin Islands</option>
                <option value="eden/assist/WA.html">Washington</option>
                <option value="eden/assist/WI.html">Wisconsin</option>
                <option value="eden/assist/WV.html">West Virginia</option>
                <option value="eden/assist/WY.html">Wyoming</option>
            </select>
            <button class="tools-selection-confirm-btn ctn-btn spinner-btn" data-ctn-show="#assist-iframe-container" data-ctn-hide="#anchor-assist-select-jx" data-spin="#assist-loading-overlay" onclick="AssistIframeReload();">Launch</button>
            <a class="tools-selection-user-guide-btn ctn-btn loader-btn spinner-btn" id="assist-user-guide-loader-btn" data-ctn-show="#assist-user-guide-container" data-ctn-hide="#anchor-assist-container" data-ifr-src="#assist-user-guide-loader" data-spin="#assist-user-guide-loading-overlay" type="button">Read the User Guide</a>
        </div>
        <div style="margin:0px;padding:0px;" id="assist-iframe-container">
            <div class="loading-overlay" id="assist-loading-overlay"><div class="spinner-border text-spinner-blue loading-overlay-spinner" role="status"></div></div>
            <iframe id="all-assist-iframe" src="" frameborder="0" style="height:98.5vh;width:100vw"></iframe>
        </div>
    </div>
</div>

<div class="collapse fs-container donothighlight" id="anchor-mergely-container">
    <div class="fs-container-body">
        <nav class="fs-container-navbar">
            <p class="utility-navbar-title-full-screen">Mergely</p>
            <a class="float-end utility-close-btn-full-screen ctn-btn ai-btn" data-ctn-hide="#anchor-mergely-container" data-ai-hide="#mergely-app-icon"><i class="bi bi-x-lg"></i></a>
            <a class="float-end utility-minimize-btn-full-screen ctn-btn" data-ctn-hide="#anchor-mergely-container"><i class="bi bi-dash-lg"></i></a>
        </nav>
        <div style="margin:0px;padding:0px;">
            <div class="loading-overlay" id="mergely-loading-overlay"><div class="spinner-border text-spinner-blue loading-overlay-spinner" role="status"></div></div>
            <iframe id="mergely-loader" data-src="https://editor.mergely.com/" src="" referrerpolicy="no-referrer" frameborder="0" style="height:98.5vh; width:100vw"></iframe>
        </div>
    </div>
</div>

<div class="collapse fs-container donothighlight" id="anchor-witkin-container">
    <div class="fs-container-body">
        <nav class="fs-container-navbar">
            <p class="utility-navbar-title-full-screen">Witkin Refrences Updating Tool</p>
            <a class="float-end utility-close-btn-full-screen ctn-btn ai-btn" data-ctn-hide="#anchor-witkin-container" data-ai-hide="#witkin-app-icon"><i class="bi bi-x-lg"></i></a>
            <a class="float-end utility-minimize-btn-full-screen ctn-btn" data-ctn-hide="#anchor-witkin-container"><i class="bi bi-dash-lg"></i></a>
        </nav>
        <div style="margin:0px;padding:0px;">
            <div class="loading-overlay" id="witkin-loading-overlay"><div class="spinner-border text-spinner-blue loading-overlay-spinner" role="status"></div></div>
            <iframe id="witkin-loader" data-src="eden/tools/witkin-references-updating-tool.html" src="" referrerpolicy="no-referrer" frameborder="0" style="height:98.5vh; width:100vw"></iframe>
        </div>
    </div>
</div>

<div class="collapse fs-container donothighlight" id="anchor-dupe-notes-counter-container">
    <div class="fs-container-body">
        <nav class="fs-container-navbar">
            <p class="utility-navbar-title-full-screen">Dupe Notes Counter</p>
            <a class="float-end utility-close-btn-full-screen ctn-btn ai-btn" data-ctn-hide="#anchor-dupe-notes-counter-container" data-ai-hide="#dupe-notes-counter-app-icon"><i class="bi bi-x-lg"></i></a>
            <a class="float-end utility-minimize-btn-full-screen ctn-btn" data-ctn-hide="#anchor-dupe-notes-counter-container"><i class="bi bi-dash-lg"></i></a>
        </nav>
        <div style="margin:0px;padding:0px;">
            <div class="loading-overlay" id="dupe-notes-loading-overlay"><div class="spinner-border text-spinner-blue loading-overlay-spinner" role="status"></div></div>
            <iframe id="dupe-notes-counter-loader" data-src="eden/tools/dupe-notes-counter.html" src="" referrerpolicy="no-referrer" frameborder="0" style="height:98.5vh; width:100vw"></iframe>
        </div>
    </div>
</div>

<div class="collapse fs-container donothighlight" id="anchor-xml-highlighter-container">
    <div class="fs-container-body">
        <nav class="fs-container-navbar">
            <p class="utility-navbar-title-full-screen">XML Highlighter</p>
            <a class="float-end utility-close-btn-full-screen ctn-btn ai-btn" data-ctn-hide="#anchor-xml-highlighter-container" data-ai-hide="#xml-highlighter-app-icon"><i class="bi bi-x-lg"></i></a>
            <a class="float-end utility-minimize-btn-full-screen ctn-btn" data-ctn-hide="#anchor-xml-highlighter-container"><i class="bi bi-dash-lg"></i></a>
        </nav>
        <div style="margin:0px;padding:0px;">
            <div class="loading-overlay" id="xml-higlighter-loading-overlay"><div class="spinner-border text-spinner-blue loading-overlay-spinner" role="status"></div></div>
            <iframe id="xml-highlighter-loader" data-src="eden/highlighters/xml-highlighter.html" src="" referrerpolicy="no-referrer" frameborder="0" style="height:98.5vh; width:100vw"></iframe>
        </div>
    </div>
</div>

<div class="collapse fs-container donothighlight" id="anchor-highlighters-container">
    <div class="fs-container-body">
        <nav class="fs-container-navbar">
            <p class="utility-navbar-title-full-screen">Highlighters</p>
            <a class="float-end utility-close-btn-full-screen ctn-btn ai-btn" data-ctn-show="#anchor-highlighters-select-jx" data-ctn-hide="#anchor-highlighters-container" data-ai-hide="#highlighters-app-icon" data-ifr-hide="#highlighters-iframe-container"><i class="bi bi-x-lg"></i></a>
            <a class="float-end utility-minimize-btn-full-screen ctn-btn" data-ctn-hide="#anchor-highlighters-container"><i class="bi bi-dash-lg"></i></a>
        </nav>
        <div class="tools-selection-box" id="anchor-highlighters-select-jx">
            <img class="tools-selection-logo" src="assets/links-favicons/highlighter.svg" alt="Amnotes Logo SVG">
            <h4 class="highlighters-selection-title">Highlighters</h4>
            <p class="tools-selection-paragraph">Select a highlighter:</p>
            <select class="form-select tools-selection-dropdown" id="highlighters-select-menu">
                <option value="eden/highlighters/bracketed-matter-highlighter.html">Bracketed Matter Highlighter</option>
                <option value="eden/highlighters/common-errors-highlighter.html" selected>Common Errors Highlighter</option>
                <option value="eden/highlighters/noted-under-common-errors-highlighter.html">Noted Under Common Errors Highlighter</option>
            </select>
            <button class="tools-selection-confirm-btn ctn-btn ai-btn spinner-btn" data-ctn-show="#highlighters-iframe-container" data-ctn-hide="#anchor-highlighters-select-jx" data-spin="#highlighters-loading-overlay" onclick="loadHighlightersIframe();">Launch</button>
        </div>
        <div style="margin:0px;padding:0px;" id="highlighters-iframe-container">
            <div class="loading-overlay" id="highlighters-loading-overlay"><div class="spinner-border text-spinner-blue loading-overlay-spinner" role="status"></div></div>
            <iframe id="all-highlighters-iframe" src="" frameborder="0" style="height:98.5vh;width:100vw"></iframe>
        </div>
    </div>
</div>

<div class="collapse fs-container donothighlight" id="anchor-ston-container">
    <div class="fs-container-body">
        <nav class="fs-container-navbar">
            <p class="utility-navbar-title-full-screen">STON Search and Replace Tool</p>
            <a class="float-end utility-close-btn-full-screen ctn-btn ai-btn" data-ctn-hide="#anchor-ston-container" data-ai-hide="#ston-search-and-replace-app-icon"><i class="bi bi-x-lg"></i></a>
            <a class="float-end utility-minimize-btn-full-screen ctn-btn" data-ctn-hide="#anchor-ston-container"><i class="bi bi-dash-lg"></i></a>
        </nav>
        <div style="margin:0px;padding:0px;">
            <div class="loading-overlay" id="ston-loading-overlay"><div class="spinner-border text-spinner-blue loading-overlay-spinner" role="status"></div></div>
            <iframe id="ston-loader" data-src="eden/tools/ston-search-and-replace.html" src="" referrerpolicy="no-referrer" frameborder="0" style="height:98.5vh; width:100vw"></iframe>
        </div>
    </div>
</div>
`

document.getElementById('fs-components').innerHTML = allFullScreenComponents;