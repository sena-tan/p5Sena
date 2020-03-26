let myVideo;

function preload() {
    // similar with images we can also preload a video
    myVideo = createVideo('videos/Star.mp4');
}

function setup() {
    // make canvas same size with video
    let canvas = createCanvas(640, 360);
    //play the video
    myVideo.play();
    // automatically replay the video
    myVideo.loop();
}

function draw() {
    background(255);
    // load the pixels of video so we can do things with them
    myVideo.loadPixels();

    // constrain the value of mouseX between 10 and 50 px
    let stepSize = round(constrain(mouseX,10,50 ));

    for (let y = 0; y < height; y += stepSize) {
        for (let x = 0; x < width; x += stepSize) {
          // go through all pixels
          let i = (y * width + x) * 4;
          // make ellipse radius equal with stepSize which will be changing according to mouseX position
          let radius = stepSize ;
          // set as fill color the rgb values of video
          fill(myVideo.pixels[i], myVideo.pixels[i + 1], myVideo.pixels[i + 2]);
          ellipse(x, y, radius, radius);
        }
    }
}