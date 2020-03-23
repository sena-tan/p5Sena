let xPos;
let yPos;
function setup() {
    createCanvas(800, 500);
    background(255, 255, 204);
    noStroke();
    var r = 0; r <=255; r = r + 90;
    var b = 0; b <= 255; b = b + 60;
    fill(r, 21, b);
        for (xPos = 20; xPos < width; xPos = xPos + 40) {
            for (yPos = 50; yPos < height; yPos = yPos + 100) {
                ellipseMode(RADIUS);
                ellipse(xPos, yPos, 10,10);
            }
        }
}
function draw()  {
    noStroke();
    fill(204, 255, 102)
    for (xPos = 20; xPos < width; xPos = xPos + 40) {
        ellipseMode(CENTER);
        ellipse(xPos, height/2, 10,10);}
}