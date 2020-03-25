let color = "white"
function setup() {
    createCanvas(800, 500);
    background('#31bc33');
}
function draw() {
    fill(color);
    ellipse(width/2, height/2, 50);
}

function mouseClicked() {
    if (mouseX >=350 & mouseX <=450 & mouseY >=200 & mouseY <=300){
      color = "red";
    }
    else {
      color = "white";
    }
  }