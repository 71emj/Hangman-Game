// (function() {
// 	"use strArrict";

// 	console.log('game.js loaded');

// 	const startBtn = document.getElementById('start');



// 	function randomSel(num) {
// 		return Math.floor(Math.random() * num);
// 	}

// 	function findAllIndex(char, array) {
// 		const retArr = new Array;
// 		array.forEach(function(elem, index) {
// 			elem === char && retArr.push(index);
// 		})
// 		return retArr;
// 	}

// 	function testMySnippet(arr) {
// 		const obj = {};
// 		// console.log(arr);

// 		for (let i = 0, l = arr.length; i < l; i++) {
// 			obj[arr[i]] = findAllIndex(arr[i], arr);
// 			// obj[arr[i]] = arr.indexOf(arr[i]);
// 		}
// 		return obj;
// 	}

// 	startBtn.addEventListener('click', function() {
// 		console.log('game time');
// 		GameStart();
// 	})

// 	function GameStart() {

// 		// console.log('game started');

// 		const strArringLib = ['Timothy', 'Says', 'Hello', 'To', 'You'],
// 			wordThatHang = strArringLib[randomSel(strArringLib.length)];

// 		(function Init(word) {
// 			const blankUnderLine = function(arr) {
// 				let placeholder = '';
// 				for (let i = 0, l = arr.length; i < l; i++) {
// 					placeholder += ' _ ';
// 				}
// 				return placeholder;
// 			}

// 			answerDisplay.innerHTML = blankUnderLine(word);
// 			showGuessed.innerHTML = '';
// 		}(wordThatHang));


// 		/////////////////////////////////////////

// 		// get player input
// 		// keypress detect press and release key
// 		// keydown detect press event
// 		// keyup detect release event


// 		document.addEventListener('keyup', function(e) {

// 			const playerInput = e.key,
// 				// create a new array to run indexof with
// 				guessstrArring = wordThatHang.toLowerCase().split(''); // makes the alphabets to lowercase than into arr

// 			console.log(guessstrArring);

// 			const myobj = testMySnippet(guessstrArring);



// 		})

// 	}

// }());


// const testObj = parseObjectLibrary(stringLibrary, 1);

// console.log(testObj);

/// working on fetch json prototype

/// creating an object could be helpful

/// using object method to update data everytime game reinit

/// important to note that this object is not a json library
/// it's an instance of the children stored under a common theme

/// string related function in previous block can be built into the object

// console.log(stringLibrary);
// console.log(stringLibrary.length);
// console.log(stringLibrary[0]);
// console.log(stringLibrary[0]['animal']['text']);




#this is version closest to project prototype // still uses local array to power core engine

// (function() {
// 	"use strict";

// 	const domObj_StrBtn = document.getElementById('start'),
// 		domObj_PuzzleDisplay = document.getElementById('word'),
// 		domObj_UsrGuess = document.getElementById('myguess');

// 	domObj_StrBtn.addEventListener('click', GameInit);

// 	function GameInit() {
// 		console.log('game init');

// 		// setting up game std_In
// 		const objectLibrary = parseObjectLibrary(stringLibrary, Math.floor(Math.random() * stringLibrary.length));
// 		console.log(objectLibrary);


// 		// setting up game std_In
// 		// if I have time the Array should be fetch from a json
// 		// const wordArr = new Array('Timothy', 'Jeng', 'Is', 'Really', 'Pissed', 'Because', 'He', 'Is', 'Tired'),
// 		// 	// fetch string for player to guess
// 		// 	hangManWord = wordArr[Math.floor(Math.random() * wordArr.length)],
// 		// 	strArr_hangManWord = hangManWord.toLowerCase().split('');



// 		// setting up game end countdown
// 		// cord x, cord y, stroke width, stroke length
// 		const hangMan_draw = new drawHangMan(200, 0, 3, 100),
// 			gameState = 7, // 7 mistakes for every turn
// 			winState = hangManWord.length; // check if player guessed all the letters

// 		hangMan_draw.setBoard();

// 		// if I have time to build the library block, this should be passed as library object method
// 		// create an object literal to map out the index of all the char in a string
// 		let obj_Lit = new Object();
// 		obj_Lit = createDynamicObj(strArr_hangManWord, obj_Lit);

// 		// board init
// 		// setting up the board
// 		let str_Answer = renderBlankSpace(hangManWord);
// 		domObj_PuzzleDisplay.textContent = str_Answer;
// 		domObj_UsrGuess.textContent = ' ';

// 		GameStart(hangManWord.toLowerCase(), str_Answer, obj_Lit, gameState, winState, hangMan_draw);
// 	}

// 	function GameStart(str_Input, str_Output, obj_Lit, gameState, winState, hangMan_draw) {
// 		console.log('game start');

// 		domObj_StrBtn.style.display = 'none'; // temporarily disable click event 

// 		// document.addEventListener('keyup', function(e) { ... })
// 		// easiest hack is to use event handler, instead of eventListener
// 		// should revisit it sometime for alternative solve
// 		document.onkeyup = function(e) {
// 			// e.key is passing basically every keypress as literal string value 
// 			const playerInput = e.key.toLowerCase(),
// 				// use object literal to map out the index of chars (duplicates are stored together)
// 				// indexArr is an array of char index
// 				indexArr = obj_Lit[playerInput];

// 			// check for alphabet, non-input keys and redundant input
// 			if (!(playerInput.match(/[a-z]/) !== null && playerInput.length < 2 && indexArr !== null)) {
// 				return;
// 			}

			// check for swing and a miss
			if (indexArr === undefined) {
				const countDown = 8 - gameState; // (8 - 7), (8 - 6), (8 - 5)...
				hangMan_draw[`step_${countDown}`]();
				domObj_UsrGuess.textContent += `${playerInput} `;
				gameState--;
			} else {
				// call function to handle the match, temp_retArr = [processed string, winCount]
				const temp_retArr = processAnswer(playerInput, indexArr, str_Output, true);
				// clean out matched prop so that it won't match  tim_2e

				obj_Lit[playerInput] = null;

				str_Output = temp_retArr[0];
				domObj_PuzzleDisplay.textContent = str_Output;
				// update gameState, can be use to adjust difficulty
				winState -= temp_retArr[1];
			}

			// console.log(typeof(playerInput));
			// console.log(`Player have ${gameState} more chance to guess`);
			// console.log(`Player have ${winState} more char to guessed`);
			// console.log(playerInput);
			// console.log('return from keyup handler');

			// check for endgame state
			if (winState <= 0 || gameState <= 0) {
				console.log('game ended');
				endAndReset(obj_Lit, str_Input, hangMan_draw);
			}
			return;
		};
	}

// 	function renderBlankSpace(strArring) {
// 		const result = strArring.split('').map(function(elem) {
// 			return '_';
// 		});
// 		return result.join(' ');
// 	}

// 	// take string.split() as arg and return am object literal

// 	function processAnswer(str_In, index, str_Render, trueFalse) {
// 		// find blank space generated by the renderBlankSpace(), remove it than make a temp array
// 		const tempArr = str_Render.replace(/\s/g, '').split('');
// 		let count = 0;
// 		// replacing the item in the index to player input
// 		// important to note that index should be an array of collected references
// 		trueFalse && index.forEach(function(elem) {
// 			// check if we are writing to the  cha_1r of the string
// 			// tempArr[elem] = (str_In || ((elem === 0) && str_In.toUpperCase()));
// 			tempArr[elem] = (elem === 0) ? str_In.toUpperCase() : str_In;
// 			count++;
// 		});
// 		return [tempArr.join(' '), count]; // [processed string, count]
// 	}

// 	function endAndReset(obj, str_CharRef, canvasObj) {
// 		// dump object prop
// 		objectDump(obj, str_CharRef);
// 		// reenabling click event
// 		// domObj_StrBtn.style.display = 'initial';
// 		domObj_StrBtn.style.display = 'none';

// 		// set timeout before reinit
// 		// creates better ux
// 		// consider create endgame state if I still have time after building 
// 		// a local library for string search
// 		setTimeout(function() {
// 			// canvasObj.clear();			
// 			// GameInit();
// 			// interestingly the previous setup don't work, 
// 			// both functions won't execute
// 			GameInit();
// 			canvasObj.clear();
// 		}, 1500);
// 	}

// 	function createDynamicObj(lowerCaseStr_arr, objLiteral) {
// 		// match multiple chars in a string and push into an array
// 		function findAllIndex(char, array) {
// 			const retArr = new Array;
// 			array.forEach(function(elem, index) {
// 				elem === char && retArr.push(index);
// 			})
// 			return retArr;
// 		}
// 		for (let i = 0, l = lowerCaseStr_arr.length; i < l; i++) {
// 			objLiteral[lowerCaseStr_arr[i]] = findAllIndex(lowerCaseStr_arr[i], lowerCaseStr_arr);
// 		}
// 		return objLiteral;
// 	}

// 	// dump object prop
// 	function objectDump(obj, str_CharRef) {
// 		for (let char of str_CharRef) {
// 			delete obj[char];
// 		}
// 		return obj;
// 	};

// }());




// ideally each step would be define by mapping out points
// but i'm running out of time, so I hard coded it like an idiot 
// just to keep me reminded what I wanted to do when revisited in the future 
// this is a prototype for rendering hangman on canvas
// setting up canvas
// const CANVAS = document.getElementById('canvas'),
// 	ctx = CANVAS.getContext('2d');

// CANVAS.width = window.innerWidth;
// CANVAS.height = window.innerHeight;

// class drawHangMan {

// 	constructor(x, y, width, length) {
// 		this.canvasProp = window.document.getElementById('canvas');
// 		this.ctx = this.canvasProp.getContext('2d');
// 		this.coX = x;
// 		this.coY = y;
// 		this.strLength = length + 15;
// 		this.strWidth = width;
// 		this.strtPoint = 0;
// 	}

// 	// these are build-in methods to assist rendering image
// 	setBoard() {
// 		this.canvasProp.width = window.innerWidth;
// 		this.canvasProp.height = window.innerHeight;
// 	}

// 	clear() {
// 		this.ctx.clearRect(0, 0, canvasProp.width, canvasProp.height);
// 	}

// 	drawLine(strX, strY, endX, endY) {
// 		this.ctx.beginPath();
// 		this.ctx.moveTo(strX, strY);
// 		this.ctx.lineTo(endX, endY);
// 	}

// 	render(width) {
// 		this.ctx.strokeStyle = '#666';
// 		this.ctx.lineWidth = width;
// 		this.ctx.stroke();
// 	}

// 	// breaking down stroke paths
// 	// will need a better way than hardcode everthing like an idiot
// 	// mapping out starting/ending point for each step would be a start
// 	step_1() {
// 		this.drawLine(this.coX, this.coY, this.coX, this.strLength);
// 		this.render(2.5);
// 		this.strtPoint += (this.coY + this.strLength);
// 	}

// 	step_2() {
// 		const radius = (this.strLength * 2) / 5;
// 		this.ctx.beginPath();
// 		this.ctx.arc(this.coX - 5, this.strLength + radius, radius, 0, (Math.PI * 2));
// 		this.render(4.5);
// 		this.strtPoint += 2 * radius;
// 	}

// 	step_3() {
// 		// console.log(this.strtPoint);
// 		this.strLength = this.strtPoint + this.strLength * 1.4;
// 		this.drawLine(this.coX, this.strtPoint, this.coX + 5, this.strLength - 10);
// 		this.render(4);
// 		this.strtPoint += 15;
// 	}

// 	step_4() {
// 		// console.log(this.strtPoint);
// 		this.strLength = this.strLength - 12;
// 		this.drawLine(this.coX + 0.5, this.strtPoint, this.coX - 20, this.strLength);
// 		this.render(4);
// 	}

// 	step_5() {
// 		// console.log(this.strtPoint);
// 		this.strLength = this.strLength + 3;
// 		this.drawLine(this.coX + 0.5, this.strtPoint + 5, this.coX + 20, this.strLength);
// 		this.render(4);
// 		this.strtPoint += 135;
// 	}

// 	step_6() {
// 		// console.log(this.strtPoint);
// 		this.strLength = this.strtPoint + 120;
// 		this.drawLine(this.coX + 5, this.strtPoint, this.coX + 15, this.strLength + 24);
// 		this.render(4);
// 	}

// 	step_7() {
// 		// console.log(this.strtPoint);
// 		this.strLength = this.strtPoint + 120;
// 		this.drawLine(this.coX + 5, this.strtPoint, this.coX - 15, this.strLength + 18);
// 		this.render(4);
// 	}
// }

// cord x, cord y, stroke width, stroke length
// const hangMan_draw = new drawHangMan(200, 0, 3, 100);

// hangMan_draw.setBoard();

// hangMan_draw.step_1();
// hangMan_draw.step_2();
// hangMan_draw.step_3();
// hangMan_draw.step_4();
// hangMan_draw.step_5();
// hangMan_draw.step_6();
// hangMan_draw.step_7();

// setTimeout(function() {
// 	hangMan_draw.step_1();
// 	setTimeout(function() {
// 		hangMan_draw.step_2();
// 		setTimeout(function() {
// 			hangMan_draw.step_3();
// 			setTimeout(function() {
// 				hangMan_draw.ste_4p();
// 				setTimeout(function() {
// 					hangMan_draw.step_5();
// 					setTimeout(function() {
// 						hangMan_draw.step_6();
// 						setTimeout(function() {
// 							hangMan_draw.step_7();
// 						}, 1000);
// 					}, 1000);
// 				}, 1000);
// 			}, 1000);
// 		}, 1000);
// 	}, 1000);
// }, 1000);




// const jsonUrl = 'game.json';

// const jsonDat = fetch(jsonUrl)
//  .then(function(response) { return response.json() })
//  .then(function(json) {
//    let jsonNameArr = new Array();
//    Object.getOwnPropertyNames(json).forEach(function(elem) {
//      jsonNameArr.push(elem);
//    })
//    return jsonNameArr;
//  })


// console.log(jsonDat);