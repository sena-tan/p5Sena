function setup() {
    createCanvas(800, 500);
    background('orange');
}
// function draw() {
//     for (dim = 400; dim > 10; dim = dim - 10) {
//         rectMode(CENTER);
//         rect(width / 2, height / 2, dim, dim);
//     }
// }
function draw() {
    rectMode(CORNER);
    noFill();
    rect(width / 2, height / 2, 100, 100)
    rect(430, 220, 100, 100)
    line(width / 2, height / 2, 430, 220)
    line(width / 2, height / 2 + 100, 430, 320)
    line(width / 2 + 100, height / 2 + 100, 530, 320)
    line(width / 2 + 100, height / 2, 530, 220)
}