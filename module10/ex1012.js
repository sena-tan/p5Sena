let choco1, choco2;
function preload() {
  choco1 = loadImage("images/choco.jpg");
}
function setup() {
  
  createCanvas(110,110);
  choco2 = createImage(110, 110);
  choco2.loadPixels();

  for (let y = 0; y < height; y++) {
    for (let x = width/2; x < width; x++) {
      let myPixel = choco1.get(x, y);
      choco2.set(x,y, myPixel);
    }
  }
  choco2.updatePixels();
  image(choco2, 0, 0);
}