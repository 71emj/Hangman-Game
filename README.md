# Hangman-Game
hangman game

the hangman game is gonna be built with three major part of the web_client.js that I need more practice in: 

<em>1</em> using Fetch/XHR to download and parse json
<em>2</em> working with Async using callbacks (and object literals to improve performance) 
<em>3</em> using APIs (in this game, using canvas to animate hanging)
...api is alright, as long as I have the patient to read through documentations. But canvas is fun, so why not :)


<strong><em>core_bug_fix_update</em></strong><br>

-- document.eventListener('keyup', function(e) { ... }) ---> game.js:41
++ document.onkeyup = function(e) { ... } ---> game.js:41

note: cautious in nesting eventListener within eventListener

#git merge working_engine branch to master_Nov_01_2017


