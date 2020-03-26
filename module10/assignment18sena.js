let camVideo;
function setup(){
  createCanvas(600,800);
  // make the connection to the webcam
  camVideo = createCapture('VIDEO');
  //set background color
  background(244,98,44);
  myButton = createButton('take pics');
  // when button is pressed call the PausePlay function
  myButton.mousePressed(ScreenShot);
}
function draw(){
    camVideo.loadPixels();
    image(camVideo,0,0);
    screens.loadPixels();
}

function ScreenShot() {
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          let myPixel = camVideo.get(x, y);
          screens.set(x,y, myPixel);
        }
      }
      screens.updatePixels();
      image(screens, 0, 0);
}