function setup() {
    createCanvas(windowWidth, windowHeight);
    background('white');
}
function draw() {
    noStroke();
    fill(0, 0, 0, 30);
    if (mouseIsPressed) {
        ellipse(mouseX, mouseY, 30, 30);
    }
}

function keyPressed() {
    clear();
}

