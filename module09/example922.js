// create a variable to control the direction of the ellipse
let control = false;
// make ellipse starting from the left end of the canvas
let i=30;
function setup() {
  // create canvas
  createCanvas(800,500);
  noLoop();
}
function draw () {
  // set background color
  background('#31bc33');
  // when ellipse is in the left edge, control would be/become false
  if (i==30) {
    control = false;
  }
  ellipse(i,height/2,60);
}
function mousePressed() {
  if (i<(width-30) && control==false){
    i=i+20;
  }
  else {
    // else control will change to true
    control = true;
    // decrease its x position (ellipse moves in the left direction)
    i=i-20;
  }
  // use redraw to update the position of ellipse
   redraw();
 }
