let camVideo;
function setup(){
  createCanvas(600,600);
  camVideo = createCapture('VIDEO');
  background(244,98,44);
  myButton = createButton('take pics');
  myButton.mousePressed(ScreenShot);
}


function draw(){
  image(camVideo,0,0);
}

function ScreenShot() {
  
  for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        pic=camVideo.get()
        screens.set(x,y, pic);
      }
    }
  
    image(screens, 0, 0);
}


