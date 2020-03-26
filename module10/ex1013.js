let chocos;
function preload() {
  chocos = loadImage("images/chocos.jpg");
}

function setup() {
  createCanvas(800,562);
}

function draw() {
  chocos.loadPixels();
  for (let y = 0; y < height; y++) {
    for(let x = 0; x < width; x++) {
      // go through all pixels of image, R, G, B, and A
      let index = (x + y * width) * 4;
        chocos.pixels[index + 1] = random(1,255) // green
      }
    }
    chocos.updatePixels();
  image(chocos, 0, 0);
}