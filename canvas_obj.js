// ideally each step would be define by mapping out points
// but i'm running out of time, so I hard coded it like an idiot 
// just to keep me reminded what I wanted to do when revisited in the future 
// this is a prototype for rendering hangman on canvas
// setting up canvas
// const CANVAS = document.getElementById('canvas'),
// 	ctx = CANVAS.getContext('2d');

// CANVAS.width = window.innerWidth;
// CANVAS.height = window.innerHeight;

class drawHangMan {

	constructor(x, y, width, length) {
		this.canvasProp = window.document.getElementById('canvas');
		this.ctx = this.canvasProp.getContext('2d');
		this.coX = x;
		this.coY = y;
		this.strLength = length + 15;
		this.strWidth = width;
		this.strtPoint = 0;
	}

	// these are build-in methods to assist rendering image
	setBoard() {
		this.canvasProp.width = window.innerWidth;
		this.canvasProp.height = window.innerHeight;
	}

	clear() {
		this.ctx.clearRect(0, 0, canvasProp.width, canvasProp.height);
	}

	drawLine(strX, strY, endX, endY) {
		this.ctx.beginPath();
		this.ctx.moveTo(strX, strY);
		this.ctx.lineTo(endX, endY);
	}

	render(width) {
		this.ctx.strokeStyle = '#666';
		this.ctx.lineWidth = width;
		this.ctx.stroke();
	}

	// breaking down stroke paths
	// will need a better way than hardcode everthing like an idiot
	// mapping out starting/ending point for each step would be a start
	step_1() {
		this.drawLine(this.coX, this.coY, this.coX, this.strLength);
		this.render(2.5);
		this.strtPoint += (this.coY + this.strLength);
	}

	step_2() {
		const radius = (this.strLength * 2) / 5;
		this.ctx.beginPath();
		this.ctx.arc(this.coX - 5, this.strLength + radius, radius, 0, (Math.PI * 2));
		this.render(4.5);
		this.strtPoint += 2 * radius;
	}

	step_3() {
		console.log(this.strtPoint);
		this.strLength = this.strtPoint + this.strLength * 1.4;
		this.drawLine(this.coX, this.strtPoint, this.coX + 5, this.strLength - 10);
		this.render(4);
		this.strtPoint += 15;
	}

	step_4() {
		console.log(this.strtPoint);
		this.strLength = this.strLength - 12;
		this.drawLine(this.coX + 0.5, this.strtPoint, this.coX - 20, this.strLength);
		this.render(4);
	}

	step_5() {
		console.log(this.strtPoint);
		this.strLength = this.strLength + 3;
		this.drawLine(this.coX + 0.5, this.strtPoint + 5, this.coX + 20, this.strLength);
		this.render(4);
		this.strtPoint += 135;
	}

	step_6() {
		console.log(this.strtPoint);
		this.strLength = this.strtPoint + 120;
		this.drawLine(this.coX + 5, this.strtPoint, this.coX + 15, this.strLength + 24);
		this.render(4);
	}

	step_7() {
		console.log(this.strtPoint);
		this.strLength = this.strtPoint + 120;
		this.drawLine(this.coX + 5, this.strtPoint, this.coX - 15, this.strLength + 18);
		this.render(4);
	}
}




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