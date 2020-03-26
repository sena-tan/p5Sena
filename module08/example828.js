// create a variable to control the direction of the ellipse
let control = false;
// make ellipse starting from the left end of the canvas
let i=30;
function setup() {
  // create canvas
  createCanvas(800,500);
  // set background color
  background('#31bc33');
}
function draw () {
  // when ellipse is in the left edge, control would be/become false
  if (i==30) {
    control = false;
  }
  // if ellipse is inside the canvas width (we substract 30 which is the radius
  // of our ellipse) and control is false
  if (i<(width-30) && control==false){
    i++
    // increase its x position (ellipse moves in the right direction)
    ellipse(i,height/2,60);
  }
  else {
    // else control will change to true
    control = true;
    // decrease its x position (ellipse moves in the left direction)
    i--;
    ellipse(i,height/2,60);
  }
}
