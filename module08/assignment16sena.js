let xPos;
let yPos;
function setup() {
    createCanvas(800, 500);
    background(255, 255, 204);
    // fill(204, 51, 0);
    
        for (xPos = 20; xPos < width; xPos = xPos + 40) {
            for (yPos = 50; yPos < height; yPos = yPos + 100) {
                ellipseMode(RADIUS);
                ellipse(xPos, yPos, 10,10);
            }
        }
}
function draw()  {
    fill()
    for (xPos = 20; xPos < width; xPos = xPos + 40) {
        ellipseMode(CENTER);
        ellipse(xPos, height/2, 10,10);}
}