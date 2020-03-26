// initialize the angle
let theta = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
}
function draw() {
  // move the origin to the center of the canvas
  translate(width / 2, height / 2);
  rotate(radians(theta));
  // draw the rect in relation with the origin
  // in this case the x pos will be (width/2-15) and the y position (height/2-85)
  rect(-15, -85, 30, 100);
  // increment the angle by one degree
  theta += 1;
}