starterDialogue =
  `<h1 class="high-em">Welcome to SáruCity</h1>
<p class="mid-em">On behalf of the proud citizens of <span class="blue-text">Sáru</span>, I, <span class="blue-text">Edward Rush</span>, the newly elected mayor, welcome you to our beautiful city. The place where people from all walks of life find their happiness and where all dreams come true.</p>
<p class="mid-em">Come and be a citizen today!</p>
<button class="mt-5 default-light-btn-lg" id="start-btn" onclick="playBackgroundMusic('click.wav');setProgressLocalStorage('welcome_done', true);gameStoryProgressTicker();updateCitizenLocation('SCBPO');">START NEW GAME</button><br>`;

borderPatrolDialogue1 =
  `<div id="border-patrol-dialogue-1">
  <div class="card border-0">
    <div class="card-body npc-dialogue-card">
      <h6><span class="blue-text">(Officer Saeki)</span></h6>
      <p class="high-em">Hi, my name is <span class="blue-text">Officer Saeki</span> and welcome to <span class="blue-text">SáruCity</span>. Can I see your papers and identification?</p>
      <p class="high-em">Also, here's a form you have to sign.</p>

      <form>
      <div class="mb-3">
        <label class="high-em" for="citizen-username-input" class="form-label">Citizen Name</label>
        <input class="form-control" id="citizen-username-input" type="text" value="Zero" autocomplete="off" spellcheck="false" aria-describedby="citizenUsernameInput">
      </div>
      <div class="mb-3">
      <label class="high-em" for="citizen-pronoun-input" class="form-label">Citizen Identifier</label>
      <select class="form-select" id="citizen-pronoun-input" aria-label="citizenPronounInput">
        <option value="He/Him">He/Him</option>
        <option value="She/Her">She/Her</option>
        <option value="They/Them">They/Them</option>
      </select>
    </div>
    </form>


    </div>
  </div>
  <button class="float-end mt-4 dialogue-response-btn" onclick="playBackgroundMusic('click.wav');setProgressLocalStorage('show_identification', true);saveUserInputValue('citizen_username', '#citizen-username-input');saveUserInputValue('citizen_identifier', '#citizen-pronoun-input');saveUserInputValue('citizen_preferred_address', '#citizen-preferred-address-input');fadeOut('#border-patrol-dialogue-1');refreshPage();">Sure, here it is, officer</button>
</div>`

borderPatrolDialogue2 =
  `<div id="border-patrol-dialogue-1">
<div class="card border-0">
  <div class="card-body npc-dialogue-card">
    <h6><span class="blue-text">(Officer Saeki)</span></h6>
    <p class="mid-em">Alright, <span class="blue-text">${citizenUsername}</span>, your profile looks good to me... Here's your papers. You're good to go. The exit is that way... Have a good day!</p>
  </div>
</div>
<button class="mt-4 dialogue-response-btn" onclick="playBackgroundMusic('click.wav');setProgressLocalStorage('show_identification_2', true);gameStoryProgressTicker();fadeOut('#left-main-frame');">Thank you, officer</button>
<button class="mt-4 dialogue-response-btn me-3" onclick="playBackgroundMusic('click.wav');setProgressLocalStorage('show_identification_2', true);gameStoryProgressTicker();fadeOut('#left-main-frame');">Okay</button>
</div>`

borderPatrolDialogue3 =
  `<div id="border-patrol-dialogue-3">
<div class="card border-0">
  <div class="card-body npc-dialogue-card">
    <h6><span class="blue-text">(${sibling})</span></h6>
    <p class="mid-em">Hey, <span class="blue-text">${citizenUsername}</span>, ${citizenCallsign}, been waiting for you forever... and look at you, you still look ugly as hell!</p>
  </div>
</div>
<button class="float-end mt-4 dialogue-response-btn" onclick="playBackgroundMusic('click.wav');fadeOut('#border-patrol-dialogue-3');fadeInNormalDelay('#border-patrol-dialogue-4');">I missed you too, ${siblingShort}</button>
<button class="float-end mt-4 dialogue-response-btn me-3" onclick="playBackgroundMusic('click.wav');fadeOut('#border-patrol-dialogue-3');fadeInNormalDelay('#border-patrol-dialogue-4');">And you're not?</button>
</div>

<div class="collapse" id="border-patrol-dialogue-4">
<div class="card border-0">
  <div class="card-body npc-dialogue-card">
    <h6><span class="blue-text">(${sibling})</span></h6>
    <p class="mid-em">Nah, I'm just kidding, I missed you, ${citizenCallsign}. It's been really tough here without family... <br><br> You can't trust anyone in this city. Everyone seems to be in a race, like rats...</p>
  </div>
</div>
<button class="float-end mt-4 dialogue-response-btn" onclick="playBackgroundMusic('click.wav');fadeOut('#border-patrol-dialogue-4');fadeInNormalDelay('#border-patrol-dialogue-5');">Is it really that bad?</button>
<button class="float-end mt-4 dialogue-response-btn me-3" onclick="playBackgroundMusic('click.wav');fadeOut('#border-patrol-dialogue-4');fadeInNormalDelay('#border-patrol-dialogue-5');">*sigh*</button>
</div>

<div class="collapse" id="border-patrol-dialogue-5">
<div class="card border-0">
  <div class="card-body npc-dialogue-card">
    <h6><span class="blue-text">(${sibling})</span></h6>
    <p class="mid-em">All I can tell you is that the situation here has spiralled out of control since the new mayor got elected. But enough with the sad talk... you just got here after all. Let's go eat something. I know a decent bar...</p>
    <p class="mid-em">You can sleep in the car while I drive, you must be tired...</p>
  </div>
</div>
<button class="float-end mt-4 dialogue-response-btn" onclick="playBackgroundMusic('click.wav');setProgressLocalStorage('family_reunited', true);gameStoryProgressTicker();fadeOut('#left-main-frame');">Thanks ${citizenCallsign}, really appreciate it.</button>
<button class="float-end mt-4 dialogue-response-btn me-3" onclick="playBackgroundMusic('click.wav');setProgressLocalStorage('family_reunited', true);gameStoryProgressTicker();fadeOut('#left-main-frame');">Okay, let's go.</button>
</div>`

razeBarPrologueTutorial =
  `<div id="raze-prologue-tutorial">
  <div id="raze-bar-prologue-1">
  <div class="card border-0">
    <div class="card-body npc-dialogue-card">
      <h6><span class="blue-text">(${sibling})</span></h6>
      <p class="mid-em">Alright ${citizenCallsign}, we're here. This is the <span class="blue-text">Raze</span>, it's the best bar in town. Let's go inside, I'll show you something.</p>
    </div>
  </div>
  <button class="float-end mt-4 dialogue-response-btn" onclick="playBackgroundMusic('click.wav');fadeOut('#raze-bar-prologue-1');fadeInNormalDelay('#raze-bar-prologue-2');">Follow ${sibling}</button>
</div>

<div class="collapse" id="raze-bar-prologue-2">
<div class="card border-0">
  <div class="card-body npc-dialogue-card">
    <h6><span class="blue-text">(${sibling})</span></h6>
    <p class="mid-em">Look, you see those gaming tables over there?</p>
  </div>
</div>
<button class="float-end mt-4 dialogue-response-btn" onclick="playBackgroundMusic('click.wav');fadeOut('#raze-bar-prologue-2');fadeInNormalDelay('#raze-bar-prologue-3');">What's going on?</button>
<button class="float-end mt-4 dialogue-response-btn me-3" onclick="playBackgroundMusic('click.wav');fadeOut('#raze-bar-prologue-2');fadeInNormalDelay('#raze-bar-prologue-3');">Yeah...</button>
</div>

<div class="collapse" id="raze-bar-prologue-3">
<div class="card border-0">
  <div class="card-body npc-dialogue-card">
    <h6><span class="blue-text">(${sibling})</span></h6>
    <p class="mid-em">That's the craze 'round here. A real money-making machine... that is if you're smart enough to crack it. And that's why you see a lot of people coming and going. <br><br> What d'you think?</p>
  </div>
</div>
<button class="float-end mt-4 dialogue-response-btn" onclick="playBackgroundMusic('click.wav');fadeOut('#raze-bar-prologue-3');fadeInNormalDelay('#raze-bar-prologue-4-a');">How do I play it?</button>
<button class="float-end mt-4 dialogue-response-btn me-3" onclick="playBackgroundMusic('click.wav');fadeOut('#raze-bar-prologue-3');fadeInNormalDelay('#raze-bar-prologue-4-b');">I don't really gamble, ${citizenCallsign}.</button>
</div>

<div class="collapse" id="raze-bar-prologue-4-a">
<div class="card border-0">
  <div class="card-body npc-dialogue-card">
    <h6><span class="blue-text">(${sibling})</span></h6>
    <p class="mid-em">Okay, so the mechanics is simple... you try to guess the <span class="blue-text">secret number</span> from <span class="blue-text">0</span> to <span class="blue-text">100</span> in just <span class="blue-text">5 tries</span>. If you can guess it correctly, you win, cash straight to your pocket.</p>
  </div>
</div>
<button class="float-end mt-4 dialogue-response-btn" onclick="playBackgroundMusic('click.wav');fadeOut('#raze-bar-prologue-4-a');fadeInNormalDelay('#raze-bar-prologue-5');">That sounds easy!</button>
<button class="float-end mt-4 dialogue-response-btn me-3" onclick="playBackgroundMusic('click.wav');fadeOut('#raze-bar-prologue-4-a');fadeInNormalDelay('#raze-bar-prologue-5');">And if I lose?</button>
</div>

<div class="collapse" id="raze-bar-prologue-4-b">
<div class="card border-0">
  <div class="card-body npc-dialogue-card">
    <h6><span class="blue-text">(${sibling})</span></h6>
    <p class="mid-em">Well, I understand you. I was just like you.</p>
    <p class="mid-em">But then I was so broke I decided to give it a try... It did help me pay the bills and some of my student loans...</p>
  </div>
</div>
<button class="float-end mt-4 dialogue-response-btn" onclick="playBackgroundMusic('click.wav');fadeOut('#raze-bar-prologue-4-b');fadeInNormalDelay('#raze-bar-prologue-4-a');">Okay, tell me about it.</button>
</div>

<div class="collapse" id="raze-bar-prologue-5">
<div class="card border-0">
  <div class="card-body npc-dialogue-card">
    <h6><span class="blue-text">(${sibling})</span></h6>
    <p class="mid-em">To play it, you have to pay a dollar. If you lose, dollar's gone, and if you win, you earn one back.</p>
  </div>
</div>
<button class="float-end mt-4 dialogue-response-btn" onclick="playBackgroundMusic('click.wav');fadeOut('#raze-bar-prologue-5');fadeInNormalDelay('#raze-bar-prologue-6');">Doesn't sound easy money.</button>
<button class="float-end mt-4 dialogue-response-btn me-3" onclick="playBackgroundMusic('click.wav');fadeOut('#raze-bar-prologue-5');fadeInNormalDelay('#raze-bar-prologue-6');">Hmm...</button>
</div>

<div class="collapse" id="raze-bar-prologue-6">
<div class="card border-0">
  <div class="card-body npc-dialogue-card">
    <h6><span class="blue-text">(${sibling})</span></h6>
    <p class="mid-em">Okay... so here's the good part. Everytime you win, it's being recorded... and those will add up to your winnings. That means, if you've won 3 times before, and you win again, you'll be getting 4 dollars instead of 1 and so on... and it doesn't have to be a win streak.</p>
  </div>
</div>
<button class="float-end mt-4 dialogue-response-btn" onclick="playBackgroundMusic('click.wav');fadeOut('#raze-bar-prologue-6');fadeInNormalDelay('#raze-bar-prologue-7');">Anything else I should know?</button>
</div>

<div class="collapse" id="raze-bar-prologue-7">
<div class="card border-0">
  <div class="card-body npc-dialogue-card">
    <h6><span class="blue-text">(${sibling})</span></h6>
    <p class="mid-em">Yup, to add to up to that, if you got it right in your first guess, your prize is <span class="blue-text">multiplied by 5</span>. If on second try, it's <span class="blue-text">multiplied by 4</span>, and if it's on the third try, it's <span class="blue-text">multiplied by 3</span>. That's it, no multiplier for the last 2 guesses, but remember, if you've won before, it will still add up to the total prize.</p>
  </div>
</div>
<button class="float-end mt-4 dialogue-response-btn" onclick="playBackgroundMusic('click.wav');fadeOut('#raze-bar-prologue-7');fadeInNormalDelay('#raze-bar-prologue-8');">I think I get it now.</button>
<button class="float-end mt-4 dialogue-response-btn me-3" onclick="playBackgroundMusic('click.wav');fadeOut('#raze-bar-prologue-7');fadeInNormalDelay('#raze-bar-prologue-8');">I'm ready but...</button>
</div>

<div class="collapse" id="raze-bar-prologue-8">
<div class="card border-0">
  <div class="card-body npc-dialogue-card">
    <h6><span class="blue-text">(${sibling})</span></h6>
    <p class="mid-em">Now now... I know that you probably don't have a dollar to your name, right? So here's 20 bucks... you can pay it back to me later if you want.</p>
    <p class="mid-em">Just don't lose it all, alright?</p>
  </div>
</div>
<button class="float-end mt-4 dialogue-response-btn" onclick="playBackgroundMusic('click.wav');setProgressLocalStorage('raze_tutorial_complete', true);gameStoryProgressTicker();icreaseCitizenCash(20);fadeOut('#raze-prologue-tutorial');">I'll do my best.</button>
<button class="float-end mt-4 dialogue-response-btn me-3" onclick="playBackgroundMusic('click.wav');setProgressLocalStorage('raze_tutorial_complete', true);gameStoryProgressTicker();icreaseCitizenCash(20);fadeOut('#raze-prologue-tutorial');">You're the best, ${siblingShort}.</button>
</div>
</div>
`

/**
 * <button onclick="setProgressLocalStorage('show_identification_2', true);gameStoryProgressTicker();fadeOut('#raze-bar-prologue-1);">Continue...</button>
 * I'll go get us something to eat.
 * 
 * 
 * 
 * 
 * 
 */ 