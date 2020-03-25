function setup() {
    createCanvas(800, 500);
    background('#31bc33');
}
function draw() {
    ellipseMode(RADIUS);
    fill(mouseX/4,102,mouseY/2);
    ellipse(width / 2, height / 2, 200);
}