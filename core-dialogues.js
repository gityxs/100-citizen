starterDialogue = `<h2 class="high-em">Welcome to SáruCity!</h2>
<p class="mid-em">On behalf of the proud citizens of <a>Sáru</a>, I, <a>Edward Rush</a>, the newly elected mayor, welcome you to our beautiful city. The place where people from all walks of life find their happiness and where all dreams come true.</p>
<p class="mid-em">Come and be a citizen today!</p>
<button onclick="setProgressLocalStorage('welcome_done', true);fadeOut('#center-frame-center-aligned');gameStoryProgressTicker();fadeInSlow('#center-frame-left-aligned');">START GAME</button>`;

borderPatrolDialogue1 = `<div class="blue-location-card" id="border-patrol-dialogue-1">
<h5 class="high-em text-center"><a>SC Border Patrol Office</a></h5>
<div>
  <p class="mid-em">Hi, my name is <a>Officer Saeki</a> and welcome to <a>SáruCity</a>... if you can please show me your papers and identification?</p>
  <p class="mid-em">Also, here's a form you have to sign...</p>
  <label class="mid-em" for="citizen-username-input">Your name:</label>
  <input class="u-full-width" id="citizen-username-input" type="text" autocomplete="off" spellcheck="false" placeholder="Name">
  <div class="row">
    <div class="six columns">
      <label class="mid-em" for="citizen-pronoun-input">Identifier:</label>
      <select class="u-full-width" id="citizen-pronoun-input">
        <option value="He/Him">He/Him</option>
        <option value="She/Her">She/Her</option>
        <option value="They/Them">They/Them</option>
      </select>
    </div>
    <div class="six columns">
      <label class="mid-em" for="citizen-preferred-callsign-input">How you prefer to be called?</label>
      <select class="u-full-width" id="citizen-preferred-callsign-input">
        <option value="Bro">Bro</option>
        <option value="Bruh">Bruh</option>
        <option value="Boy">Boy</option>
        <option value="Girl">Girl</option>
        <option value="Gurl">Gurl</option>
        <option value="Gal">Gal</option>
        <option value="Lad">Lad</option>
        <option value="Lady">Lady</option>
        <option value="Maam">Maam</option>
        <option value="Madam">Madam</option>
        <option value="Man">Man</option>
        <option value="Men">Men</option>
        <option value="Mister.">Mister</option>
        <option value="Sir">Sir</option>
      </select>
    </div>
  </div>
  <br><br>
  <hr>
  <div class="align-right"><button id="confirm-citizen-identity-btn" onclick="setProgressLocalStorage('show_identification', true);saveUserInputValue('citizen_username', '#citizen-username-input');saveUserInputValue('citizen_identifier', '#citizen-pronoun-input');saveUserInputValue('citizen_preferred_callsign', '#citizen-preferred-callsign-input');fadeOut('#border-patrol-dialogue-1');refreshPage();">Sure, here it is, officer</button></div>
</div>
</div>`

borderPatrolDialogue2 = `<div class="blue-location-card" id="border-patrol-dialogue-2">
<h5 class="high-em text-center"><a>SC Border Patrol Office</a></h5>
<div><p class="mid-em">Alright, <a>${localStorage.getItem('citizen_username')}</a>, your profile came back good. Well, that's all I have for you today. Here are your papers...</p>
<p class="mid-em">Have a good day now!</p>
<br><br>
<hr>
<div class="align-right"><button onclick="setProgressLocalStorage('show_identification_2', true);gameStoryProgressTicker();fadeOut('#center-frame-left-aligned');">Okay</button><button class="ms-3" onclick="setProgressLocalStorage('show_identification_2', true);gameStoryProgressTicker();fadeOut('#center-frame-left-aligned');">Thank you, officer</button>
<button class="ms-3" onclick="setProgressLocalStorage('show_identification_2', true);gameStoryProgressTicker();fadeOut('#center-frame-left-aligned');">You too, officer</button></div>`

borderPatrolDialogue3 = `<p class="mid-em">To be continued...</p>`