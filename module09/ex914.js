let color = "white"
function setup() {
    createCanvas(800, 500);
    background('#D66761');
}

function draw() {
    fill("red");
    ellipse(100, height / 2, 50);
    fill("green");
    ellipse(700, height / 2, 50);
    noStroke();
    fill(color);
    if (mouseIsPressed) {
        ellipse(mouseX, mouseY, 20);
    }
}

function mouseClicked() {
    if (mouseX >= 50 & mouseX <= 150 & mouseY >= 200 & mouseY <= 300) {
        color = "red";
    } if (mouseX >= 650 & mouseX <= 750 & mouseY >= 200 & mouseY <= 300) {
        color = "green";
    } 
}