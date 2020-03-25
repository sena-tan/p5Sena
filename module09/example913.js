let xPos, yPos;
function setup() {
  createCanvas(800, 500);
  // set background color
  background('#D66761');
}
function draw() {
  fill(241, 213, 145);
  // an ellipse will be drawn everytime the xPos, yPos are defined
  ellipse(xPos, yPos, 50);
}
// everytime the mouse is clicked
function mouseClicked(){
  // the x position will take the value of the horizontal mouse position
  xPos=mouseX;
  // the y position will take the value of the vertical mouse position
  yPos = mouseY;
}