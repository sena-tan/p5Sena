let control = false;
let i = 60
function setup() {
    createCanvas(800, 500);
    noLoop();
}
function draw() {
    background('#31bc33');
    if (i == 60) {
        control = false;
    }
    ellipse(width / 2, height / 2, i);
}
function mousePressed() {
    if (i < (height - 30) && control == false) {
        i = i + 20;
    }
    else {
        control = true;
        i = i - 20;
    }
    // use redraw to update the position of ellipse
    redraw();
}
