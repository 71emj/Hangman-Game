# Hangman-Game
hangman game

the hangman game is gonna be built with three major part of the web_client.js that I need more practice in: 

using Fetch/XHR to download and parse json <br>	
working with Async using callbacks (and object literals to improve performance) <br>
using APIs (in this game, using canvas to animate hanging)...api is alright, as long as I have the patient to read through documentations. But canvas is fun, so why not :) <br>


<strong><em>core_bug_fix_update</em></strong><br>

-- document.eventListener('keyup', function(e) { ... }) ---> game.js:41 <br>
++ document.onkeyup = function(e) { ... } ---> game.js:41 <br>

note: cautious in nesting eventListener within eventListener

#git merge working_engine branch to master_Nov_01_2017



<strong><em>a_hangman_game_prototype_update</em></strong><br>

++ canvas.js <br>
++ object_library.js <br>

basically build a complete game prototype with three major blocks build in working state (could have bugs, don't really care now. I just want to finish documenting this update and goto bed).

#git merge power_by_json(actually by a local library) to master_Nov_02_2017 
