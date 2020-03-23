// // create a variable to control the direction of the ellipse
// let control = false;
// // make ellipse starting from the left end of the canvas
// let i=30;
// function setup() {
//   // create canvas
//   createCanvas(800,500);
// }
// function draw () {
//       // set background color
//   background(255,255,190);
//   noStroke();
//   if (i==30) {
//     control = false;
//   }
//   if (i<(width-30) && control==false){
//     fill(226,87,67,50);
//     i++
//     ellipse(i,height/2,60);
//   }
//   else {
//     control = true;
//     fill(26,187,97,80);
//     i--;
//     ellipse(i,height/2,60);
//   }
// }

let	x= 300;
let	y= 200;
let	speedx= 4;
let speedy= -3;
let r = 24;
function setup() {
	createCanvas(600,400);
}	
function draw() {
	background(0);
	strokeWeight(4);
	stroke(255);
	fill(255, 0, 0);
	x = x + speedx;
	y = y + speedy;
	if (x > (width-r/2) || x- r/2< 0) {
		speedx = speedx* (-1);
	}
	if (y> (height-r/2)  || y -r/2 < 0) {
		speedy = speedy* (-1);
	}
    ellipse(x, y ,r)
}