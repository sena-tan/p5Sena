function setup() {
  createCanvas(800, 500);
}
function draw() {
  // set background inside draw so that the ellipse will not leave traces
  background('#D66761');
  fill(241, 213, 145);
  // if the mouse is pressed
  if (mouseIsPressed){
    // an ellipse will be drawn in the position where the mouse is pointing
    ellipse(mouseX, mouseY, 50);
  }
}
