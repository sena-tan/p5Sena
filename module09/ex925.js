let size;
let color;
function setup() {
    createCanvas(800, 600);

}

function draw() {
    background(75);
    let size = random(20, 200);
    noStroke();
    fill(random(1, 255), random(1, 255), random(1, 255));
    ellipse(random(size, (width - size)), random(size, (height - size)), size);
}
