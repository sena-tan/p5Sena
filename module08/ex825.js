let xPos;
let yPos;
function setup() {
  createCanvas(800,500);
  background('orange');
}
function draw () {
    for (xPos = 1; xPos<width; xPos = xPos +10) {
      point (xPos,5/8*xPos);
    }
  }