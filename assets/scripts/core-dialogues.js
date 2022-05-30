starterDialogue = `<h2 class="high-em">Welcome to SáruCity!</h2>
<p class="mid-em">On behalf of the proud citizens of <a>Sáru</a>, I, <a>Edward Rush</a>, the newly elected mayor, welcome you to our beautiful city. The place where people from all walks of life find their happiness and where all dreams come true.</p>
<p class="mid-em">Come and be a citizen today!</p>
<button onclick="setProgressLocalStorage('welcome_done', true);fadeOut('#center-frame-center-aligned');gameStoryProgressTicker();updateCitizenLocation('SCBPO');fadeInSlow('#center-frame-left-aligned');">START GAME</button>`;

borderPatrolDialogue1 = `<div class="blue-location-card" id="border-patrol-dialogue-1">
<h5 class="high-em text-center"><a>SC Border Patrol Office</a></h5>
<div><a>(Officer Saeki)</a>
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
        <option value="Man">Man</option>
      </select>
    </div>
  </div>
  <br><br>
  <hr>
  <div class="align-right"><button id="confirm-citizen-identity-btn" onclick="setProgressLocalStorage('show_identification', true);saveUserInputValue('citizen_username', '#citizen-username-input');saveUserInputValue('citizen_identifier', '#citizen-pronoun-input');saveUserInputValue('citizen_preferred_callsign', '#citizen-preferred-callsign-input');fadeOut('#border-patrol-dialogue-1');refreshPage();">Sure, here it is, officer</button></div>
</div>
</div>`

borderPatrolDialogue2 = `<div class="blue-location-card">
<h5 class="high-em text-center"><a>SC Border Patrol Office</a></h5>
<div><a>(Officer Saeki)</a>
  <p class="mid-em">Alright, <a>${citizenUsername}</a>, your profile looks good to me... Here's your papers. You can go now, the exit's that way... Have a good day!</p>
  <br><br>
  <hr>
  <div class="align-right"><button onclick="setProgressLocalStorage('show_identification_2', true);gameStoryProgressTicker();fadeOut('#center-frame-left-aligned');">Okay</button><button class="ms-3" onclick="setProgressLocalStorage('show_identification_2', true);gameStoryProgressTicker();fadeOut('#center-frame-left-aligned');">Thank you, officer</button>
    <button class="ms-3" onclick="setProgressLocalStorage('show_identification_2', true);gameStoryProgressTicker();fadeOut('#center-frame-left-aligned');">You too, officer</button>
  </div>
</div>
</div>`

borderPatrolDialogue3 = `<div class="blue-location-card">
<h5 class="high-em text-center"><a>Outside the SCBP Office</a></h5>
<div id="border-patrol-dialogue-3"><a>(${sibling})</a>
  <p class="mid-em">Hey, <a>${citizenUsername}</a>, ${citizenCallsign}, been waiting for you forever... and look at you, you still look ugly as hell!</p>
  <br><br>
  <hr>
  <div class="align-right">
    <button onclick="fadeOut('#border-patrol-dialogue-3');fadeInNormalDelay('#border-patrol-dialogue-4');">And you're not?</button><br>
    <button class="ms-3" onclick="fadeOut('#border-patrol-dialogue-3');fadeInNormalDelay('#border-patrol-dialogue-4');">I missed you too, ${siblingShort}</button><br>
    <button class="ms-3" onclick="fadeOut('#border-patrol-dialogue-3');fadeInNormalDelay('#border-patrol-dialogue-4');">Thanks for coming</button>
  </div>
</div>

<div class="collapse" id="border-patrol-dialogue-4"><a>(${sibling})</a>
  <p class="mid-em">Nah, I'm just kidding, I missed you, <a>${citizenUsername}</a>. It's been really tough to not have your family here... You can't trust anyone in this city, ${citizenCallsign}. Everyone seems to be in a race, like rats... well to be honest, I'm part of that list too. But what can we do? We're all just trying to survive... This city... this town will really try to suck you dry... they'll suck your brain, they'll suck your breath... And this new mayor.. *sigh*</p>
  <br><br>
  <hr>
  <div class="align-right">
    <button onclick="fadeOut('#border-patrol-dialogue-4');fadeInNormalDelay('#border-patrol-dialogue-5');">*sigh*</button><br>
    <button class="ms-3" onclick="fadeOut('#border-patrol-dialogue-4');fadeInNormalDelay('#border-patrol-dialogue-5');">I know ${citizenCallsign}</button><br>
    <button class="ms-3" onclick="fadeOut('#border-patrol-dialogue-4');fadeInNormalDelay('#border-patrol-dialogue-5');">Is it really that bad?</button>
  </div>
</div>

<div class="collapse" id="border-patrol-dialogue-5"><a>(${sibling})</a>
  <p class="mid-em">All I can tell you is that the situation here has become way out of control... But enough with the sad talk... you just got here after all. Let's go someplace fun. I know a decent bar... why don't we go there for a bit, huh?</p>
  <p class="mid-em">You can sleep in the car while I drive, you must be tired... and it's gonna be a looong drive.</p>
  <br><br>
  <hr>
  <div class="align-right">
    <button onclick="setProgressLocalStorage('family_reunited', true);gameStoryProgressTicker();fadeOut('#center-frame-left-aligned');">Okay, let's go.</button><br>
    <button class="ms-3" onclick="setProgressLocalStorage('family_reunited', true);gameStoryProgressTicker();fadeOut('#center-frame-left-aligned');">Thanks ${citizenCallsign}, really appreciate it.</button><br>
  </div>
</div>

</div>`

razeBarPrologueTutorial = `<div class="blue-location-card" id="raze-prologue-tutorial">
<h4 class="text-center"><a style="color: var(--bright-pink);">Raze</a></h4>
<div id="raze-bar-prologue-1"><a>(${sibling})</a>
  <p class="mid-em">Come here ${citizenCallsign}, I'll show you something.</p>
  <br><br>
  <hr>
  <div class="align-right">
    <button onclick="fadeOut('#raze-bar-prologue-1');fadeInNormalDelay('#raze-bar-prologue-2');">Continue...</button>
  </div>
</div>

<div class="collapse" id="raze-bar-prologue-2"><a>(${sibling})</a>
  <p class="mid-em">You see that table over there?</p>
  <br><br>
  <hr>
  <div class="align-right">
    <button onclick="fadeOut('#raze-bar-prologue-2');fadeInNormalDelay('#raze-bar-prologue-3');">Yeah..</button>
    <button class="ms-3" onclick="fadeOut('#raze-bar-prologue-2');fadeInNormalDelay('#raze-bar-prologue-3');">What's that?</button>
  </div>
</div>

<div class="collapse" id="raze-bar-prologue-3"><a>(${sibling})</a>
  <p class="mid-em">That's the craze 'round here. A real money-maker... that is if you're smart enough to crack it.</p>
  <br><br>
  <hr>
  <div class="align-right">
    <button onclick="fadeOut('#raze-bar-prologue-3');fadeInNormalDelay('#raze-bar-prologue-4-a');">How do I play it?</button>
    <button class="ms-3" onclick="fadeOut('#raze-bar-prologue-3');fadeInNormalDelay('#raze-bar-prologue-4-b');">I don't know ${citizenCallsign}..I don't like gambling</button>
  </div>
</div>

<div class="collapse" id="raze-bar-prologue-4-a"><a>(${sibling})</a>
  <p class="mid-em">The mechanics are simple... you try to guess the <a>secret number</a> from <a>0</a> to <a>100</a> in just <a>5 tries</a>. If you guess it right, you win, cash straight to your pocket.</p>
  <br><br>
  <hr>
  <div class="align-right">
    <button onclick="fadeOut('#raze-bar-prologue-4-a');fadeInNormalDelay('#raze-bar-prologue-5');">That sounds easy!</button>
    <button class="ms-3" onclick="fadeOut('#raze-bar-prologue-4-a');fadeInNormalDelay('#raze-bar-prologue-5');">And if I lose?</button>
  </div>
</div>

<div class="collapse" id="raze-bar-prologue-4-b"><a>(${sibling})</a>
  <p class="mid-em">Well, I understand you. But tell you what, look around, everyone in here's broke, barely making it. That includes us... But this game gives us hope... it gives us a chance.</p>
  <p class="mid-em">Why don't you give it a try? Maybe if you're good at it you won't have to work anymore in this godforsaken city...</p>
  <br><br>
  <hr>
  <div class="align-right">
    <button onclick="fadeOut('#raze-bar-prologue-4-b');fadeInNormalDelay('#raze-bar-prologue-4-a');">That makes sense</button>
    <button class="ms-3" onclick="fadeOut('#raze-bar-prologue-4-b');fadeInNormalDelay('#raze-bar-prologue-4-a');">Okay, tell me about it.</button>
  </div>
</div>

<div class="collapse" id="raze-bar-prologue-5"><a>(${sibling})</a>
  <p class="mid-em">Right, so to play it, you have to pay a dollar. If you lose, dollar's gone, and if you win, you earn one back.</p>
  <br><br>
  <hr>
  <div class="align-right">
    <button onclick="fadeOut('#raze-bar-prologue-5');fadeInNormalDelay('#raze-bar-prologue-6');">Wait... that doesn't make any sense.</button>
    <button class="ms-3" onclick="fadeOut('#raze-bar-prologue-5');fadeInNormalDelay('#raze-bar-prologue-6');">Doesn't sound easy money.</button>
  </div>
</div>

<div class="collapse" id="raze-bar-prologue-6"><a>(${sibling})</a>
  <p class="mid-em">Okay... so here's the good part. Everytime you win, it's being recorded in their system... and that will add up to your winnings. That means, if you've won 3 times before, and you win again, you'll be getting 4 dollars instead of 1 and so on... and it doesn't have to be a win streak.</p>
  <br><br>
  <hr>
  <div class="align-right">
    <button onclick="fadeOut('#raze-bar-prologue-6');fadeInNormalDelay('#raze-bar-prologue-7');">I understand it now.</button>
  </div>
</div>

<div class="collapse" id="raze-bar-prologue-7"><a>(${sibling})</a>
  <p class="mid-em">And to add to up to that, if you got it right in your first guess, your prize is <a>multiplied by 5</a>. If on second try, it's <a>multiplied by 4</a>, and if it's on the third try, it's <a>multiplied by 3</a>. That's it, no multiplier for the last 2 guesses, but remember, if you've won before, it will still add up to the total prize.</p>
  <br><br>
  <hr>
  <div class="align-right">
    <button onclick="fadeOut('#raze-bar-prologue-7');fadeInNormalDelay('#raze-bar-prologue-8');">I think I get it now.</button>
    <button class="ms-3" onclick="fadeOut('#raze-bar-prologue-7');fadeInNormalDelay('#raze-bar-prologue-8');">I'm ready but...</button>
  </div>
</div>

<div class="collapse" id="raze-bar-prologue-8"><a>(${sibling})</a>
  <p class="mid-em">Now now... I know that you probably don't have a dollar to your name, right? So here's 20 bucks... you can pay it back to me later if you want.</p>
  <p class="mid-em">Just don't lose it all, alright?</p>
  <br><br>
  <hr>
  <div class="align-right">
    <button onclick="setProgressLocalStorage('raze_tutorial_complete', true);gameStoryProgressTicker();icreaseCitizenCash(20);fadeOut('#raze-prologue-tutorial');">I'll do my best.</button>
    <button class="ms-3" onclick="setProgressLocalStorage('raze_tutorial_complete', true);gameStoryProgressTicker();icreaseCitizenCash(20);fadeOut('#raze-prologue-tutorial');">You're the best, ${siblingShort}.</button>
  </div>
</div>
</div>`

/**
 * <button onclick="setProgressLocalStorage('show_identification_2', true);gameStoryProgressTicker();fadeOut('#raze-bar-prologue-1);">Continue...</button>
 * 
 * 
 * 
 * 
 * 
 * 
 */ 